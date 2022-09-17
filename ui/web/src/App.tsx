import { useEffect, useState } from 'react'

import axios from 'axios'

import logoImg from '/Logo.webp'

import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreaterAdBanner } from './components/CreaterAdBanner'
import { CreaterAdModal } from './components/CreaterAdModal'

interface Game {
    bannerUrl: string
    id: string
    title: string
    _count: {
        ads: number
    }
}

const App = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(res => {
                setGames(res.data)
            })
    }, [])

    return (
        <>
            <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
                <img className='w-fit' src={logoImg} alt="logo esport" />
                <h1
                    className='text-6xl text-white font-black mt-20'>
                    Seo <span
                        className="text-transparent bg-nlw-gradient bg-clip-text">
                        duo
                    </span> está aqui.
                </h1>

                <div className="grid grid-cols-6 gap-6 mt-16">
                    {games.slice(0, 6).map(game => (
                        <GameBanner
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            title={game.title}
                            adsCount={game._count.ads}
                        />
                    ))}
                </div>

                <Dialog.Root>
                    <CreaterAdBanner />
                    <CreaterAdModal />
                </Dialog.Root>
            </div>
        </>
    )
}

export default App

