import { useEffect, useState } from 'react'
import logoImg from '/Logo.webp'

import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { Input } from './components/Form/Input'

import { CreaterAdBanner } from './components/CreaterAdBanner'
import { GameController } from 'phosphor-react'

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
        fetch('http://localhost:3333/games')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGames(data)
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

                    <Dialog.Portal>
                        <Dialog.Overlay className='bg-black/80 inset-0 fixed' />

                        <Dialog.Content
                            className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'
                        >
                            <Dialog.Title
                                className='text-3xl font-black'
                            >Publique um anucio
                            </Dialog.Title>
                            <form className='mt-8 flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        htmlFor="game">
                                        Qual o game?
                                    </label>
                                    <Input
                                        id='game'
                                        type="text"
                                        placeholder="Selecione o game que deseja jogar"
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label
                                        htmlFor="name"
                                    >
                                        Seu nome (ou nickname)
                                    </label>
                                    <Input
                                        id='name'
                                        type="text"
                                        placeholder="Como te chaman dentro do game?"
                                    />
                                </div>

                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <label
                                            htmlFor="yearsPlaying">
                                            Joga há quantos anos?
                                        </label>
                                        <Input
                                            id='yearsPlaying'
                                            type="number"
                                            placeholder="Tudo bem ser ZERO"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label
                                            htmlFor="discord">
                                            Qual seu Discord?
                                        </label>
                                        <Input
                                            id='discord'
                                            type="text"
                                            placeholder="Usúario#0000"
                                        />
                                    </div>
                                </div>

                                <div className='flex gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <label
                                            htmlFor="weekDays">
                                            Quando costuma jogar?
                                        </label>
                                        <div className='grid grid-cols-4 gap-2'>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Domingo'>D</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Segunda'>S</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Terça'>T</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Quarta'>Q</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Quinta'>Q</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Sexta'>S</button>
                                            <button className='w-8 h08 rounded bg-zinc-900' title='Sábado'>S</button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 flex-1'>
                                        <label
                                            htmlFor="hourStart">
                                            Qual horário do dia?
                                        </label>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <Input
                                                id='hourstart'
                                                type="time"
                                                placeholder="de"
                                            />
                                            <Input
                                                id='hourEnd'
                                                type="time"
                                                placeholder="Até"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-3 flex gap-2 text-sm'>
                                    <input type="checkbox" />
                                    Costumo me conectar ao chat de voz
                                </div>

                                <footer className='mt-4 flex justify-end gap-4'>
                                    <Dialog.Close>
                                        <button
                                            type="button"
                                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                                        >Cancelar</button>
                                    </Dialog.Close>
                                    <button
                                        className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                                        type="submit">
                                        <GameController className="w-6 h-6" />
                                        Encontrar duo
                                    </button>
                                </footer>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </>
    )
}

export default App

