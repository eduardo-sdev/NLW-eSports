import { useEffect, useState, FormEvent } from 'react'
import axios from 'axios'

import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Check, GameController } from 'phosphor-react'
import { Input } from './Form/Input'


interface Game {
    bannerUrl: string
    id: string
    title: string
}

export const CreaterAdModal = () => {
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios('http://localhost:3333/games')
            .then(res => {
                setGames(res.data)
            })
    }, [])

    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if(!data.name) return

        try{
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
               name: data.name,
               yearsPlaying: Number(data.yearsPlaying),
               discord: data.discord,
               weekDays: weekDays.map(Number),
               hourStart: data.hourStart,
               hourEnd: data.hourEnd,
               useVoiceChannel: useVoiceChannel,
            })
        } catch (err){
            console.log(err)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/80 inset-0 fixed' />

            <Dialog.Content
                className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'
            >
                <Dialog.Title
                    className='text-3xl font-black'
                >Publique um anucio
                </Dialog.Title>
                <form
                    onSubmit={handleSubmit}
                    className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="game">
                            Qual o game?
                        </label>
                        <select
                            id='game'
                            name='game'
                            defaultValue=''
                            className="bg-zinc-900 py-4 px-4 rounded text-sm placeholdee:text-zync-500"
                        >
                            <option
                                disabled
                                value=''
                            >Selecione o gamer que deseja jogar</option>
                            {games.map(game =>
                                <option
                                    key={game.id}
                                    value={game.id}
                                >
                                    {game.title}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="name"
                        >
                            Seu nome (ou nickname)
                        </label>
                        <Input
                            id='name'
                            name='name'
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
                                name='yearsPlaying'
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
                                name='discord'
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
                            <ToggleGroup.Root
                                onValueChange={setWeekDays}
                                value={weekDays}
                                type='multiple'
                                className='grid grid-cols-4 gap-2'
                            >
                                <ToggleGroup.Item
                                    value='0'
                                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Domingo'>D</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='1'
                                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Segunda'>S</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='2'
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Terça'>T</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='3'
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Quarta'>Q</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='4'
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Quinta'>Q</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='5'
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Sexta'>S</ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value='6'
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title='Sábado'>S</ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label
                                htmlFor="hourStart">
                                Qual horário do dia?
                            </label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input
                                    id='hourstart'
                                    name='hourstart'
                                    type="time"
                                    placeholder="de"
                                />
                                <Input
                                    id='hourEnd'
                                    name='hourEnd'
                                    type="time"
                                    placeholder="Até"
                                />
                            </div>
                        </div>
                    </div>

                    <label className='mt-3 flex items-center gap-2 text-sm'>
                        <Checkbox.Root
                            onCheckedChange={checked => {
                                if (checked == true) {
                                    setUseUseVoiceChannel(true)
                                } else {
                                    setUseUseVoiceChannel(false)
                                }
                            }}
                            className='w-6 h-6 p-1 rounded bg-zinc-900'
                        >
                            <Checkbox.Indicator>
                                <Check className='w-4 h-4 text-emerald-400' />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

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
        </Dialog.Portal >
    )

}
