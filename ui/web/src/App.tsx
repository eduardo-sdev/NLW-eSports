import logoImg from '../public/Logo.webp'
import { MagnifyingGlassPlus } from 'phosphor-react'

interface Props {
    title: string
}

const App = () => {
    return (
        <>
            <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
                <img className='w-fit' src={logoImg} alt="logo esport" />
                <h1
                    className='text-6xl text-white font-black mt-20'>
                    Seo <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
                </h1>

                <div className="grid grid-cols-6 gap-6 mt-16">
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image1.webp" alt="image2" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>League of legendes</strong><span className='text-zinc-300 text-sm block'>4 anúncios</span></div></a>
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image2.webp" alt="image2" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>Apex Legends</strong><span className='text-zinc-302 text-sm block'>4 anúncios</span></div></a>
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image3.webp" alt="image3" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>Leagueoflegendes</strong><span className='text-zinc-300 text-sm block'>4 anúncios</span></div> </a>
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image4.webp" alt="image4" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>Leagueoflegendes</strong><span className='text-zinc-300 text-sm block'>4 anúncios</span></div> </a>
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image5.webp" alt="image5" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>Leagueoflegendes</strong><span className='text-zinc-300 text-sm block'>4 anúncios</span></div> </a>
                    <a className='relative rounded-lg overflow-hidden' href="#"><img src="/image6.webp" alt="image5" /><div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0"><strong className='font-bold text-white block'>Leagueoflegendes</strong><span className='text-zinc-300 text-sm block'>4 anúncios</span></div> </a>
                </div>

                <div className="pt-1 bg-nlw-gradient self-stretch roudend-lg mt-8 overflow-hidden">

                    <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">

                        <div>
                            <strong className="text-2xl text-white font-black block">Não encontronovos duo!</strong>
                            <span className="text-zinc-400 block">Publique um anúnios para encontrar novos players</span>
                        </div>

                        <button className='py-3 px-4 flex items-center gap-5 bg-violet-500 hover:bg-violet-600 text-white rounded'>
                            <MagnifyingGlassPlus size={24} />
                            Publicar anúnios
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App

