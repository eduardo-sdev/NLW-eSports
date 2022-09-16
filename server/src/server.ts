import express from "express"

import cors from "cors"

import { PrismaClient } from '@prisma/client'

import { convertMinutesToHoursString } 
from './utils/convert-minutes-to-hour-string'
          
import { convertHourStringMinutes } 
from './utils/convert-hour-strig-to-minutes'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
})

app.post('/games/:id/ads', async(req, res) => {
    const gameId = req.params.id
    const body:any = req.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            discord: body.discord,
            yearsPlaying: body.yearsPlaying,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringMinutes(body.hourStart),
            hourEnd: convertHourStringMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return res.status(201).json(body)
})

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.json(games)
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            yearsPlaying: true,
            useVoiceChannel: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {gameId},
        orderBy: {
            createAd: 'desc',
        }
    })

    return res.json(ads.map(ad=>{
        return {
            ...ad,
            weekDays: ad.weekDays.split(","),
            hourStart: convertMinutesToHoursString(ad.hourStart),
            hourEnd: convertMinutesToHoursString(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (req, res) => {
    const adId= req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select:{
            discord:true,
        },
        where:{
            id:adId,
        },
    })

    return res.json({
        discord: ad.discord
    })
})

app.listen(3333)

