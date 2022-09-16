import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassPlus } from 'phosphor-react'

export const CreaterAdBanner = () => (
    <div className="pt-1 bg-nlw-gradient self-stretch roudend-lg mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
            <div>
                <strong className="text-2xl text-white font-black block">
                    Não encontronovos duo!
                </strong>
                <span className="text-zinc-400 block">
                    Publique um anúnios para encontrar novos players
                </span>
            </div>
            <Dialog.Trigger className="py-3 px-4 flex items-center gap-5 bg-violet-500 hover:bg-violet-600 text-white rounded">
                <MagnifyingGlassPlus size={24} />
                Publicar anúnios
            </Dialog.Trigger>
        </div>
    </div>
)

