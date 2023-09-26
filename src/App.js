/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { DotsThree, Play, UsersThree, House, MagnifyingGlass,Books, ArrowRight, Plus, CaretDown, CaretLeft, CaretRight} from "@phosphor-icons/react";


export default function App() {
  return (
    <div className="bg-gradient-to-b from-red-700 from-10% via-zinc-900 via-30% to-zinc-900 to-100% text-zinc-50 h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-96 bg-zinc-950 p-6">
          <a href=""> <DotsThree size={28}/></a>
          <nav className="bg-zinc-900 rounded-lg mb-2 space-y-4 p-4">
            <a href="" className="flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-50">
              <House size={28}/>
              Início
            </a>
            <a href="" className="flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-50">
              <MagnifyingGlass size={28}/>
              Buscar
            </a>
          </nav>
          <nav className="bg-zinc-900 rounded-lg">
            <div className="shadow-xl">
              <div className="flex space-y-4  pb-2 pl-4 pr-4 justify-between">
                <div className="flex items-center">
                  <a href="" className="flex gap-2 font-semibold items-center text-zinc-400 hover:text-zinc-50">
                    <Books size={(28)}/>
                    Sua Biblioteca
                  </a>
                </div>
                <div>
                  <div className="flex item-center  pb-4">
                    <a href="" className=" text-zinc-400 hover:text-zinc-50  hover:bg-white/5 bg-zinc-900 rounded-full p-2 ">
                      <Plus size={24}/>
                    </a>
                    <a href="" className=" text-zinc-400 hover:text-zinc-50  hover:bg-white/5 bg-zinc-900 rounded-full p-2 ">
                      <ArrowRight size={24}/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-2 pr-4 pl-4 pb-2 gap-2">
              <a href="" className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"> Playlist</a>
              <a href="" className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"> Podcasts e programas</a>
              <a href="" className="text-sm font-semibold rounded-3xl bg-zinc-800 pl-2 pr-2 pt-1 pb-1 hover:bg-white/10"> Álbuns</a>
              </div>
            </div>
            <div className="overflow-y-auto" style={{height:660}}>
              <div className="flex items-center justify-between pl-4 pb-4 pr-4">
                <a href="" className="text-zinc-400 hover:text-zinc-50 hover:bg-white/5 bg-zinc-900 rounded-full p-2">
                  <MagnifyingGlass/>
                </a>
                <a href="" className="flex gap-2 text-zinc-400 hover:text-zinc-50">
                  Recentes <CaretDown weight="fill" className="mt-2" />
                </a>
              </div>
              <div className="p-4 space-y-2">
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
                <a href="" className="flex item-center rounded-lg hover:bg-white/5">
                  <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Album Trap" width={50} height={50} className="rounded-lg"/>
                  <div>
                    <p className="pl-2 font-semibold line-clamp-1 text-green-500">Trap List </p>
                    <p className="pl-2 text-sm text-zinc-400 line-clamp-1">Álbum • A Mais tocadas 2023</p>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-black/40 p-3">
                <CaretLeft weight="bold"/>
              </button>
              <button className="rounded-full bg-black/40 p-3 opacity-80">
                <CaretRight weight="bold"/>
              </button>
            </div>
            <div className="flex gap-2">
              <a href="" className=" rounded-full bg-black/40 p-3">
                <UsersThree/>
              </a>
              <a href="" className="rounded-full bg-black/40 p-1">
                <img src="https://64.media.tumblr.com/41f76fdd09545f7cdbfafff17fccb5b9/45e4b45717d9be0a-e8/s400x600/03486a256dc65a9c13988611568cea4b55be2020.jpg" alt="foto" width={30} height={25} className="rounded-full"/>
              </a>
            </div>
          </div>
          <h1 className="font-semibold text-3xl mt-10 mb-4">Boa Noite</h1>
          <div className="grid grid-cols-3  gap-4">
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center hover:bg-white/20 transition-colors">
              <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Trap List" width={104} height={104} />
              <strong className="pl-3 line-clamp-1"> Trap Lit</strong>
              <button className="p-3 rounded-full bg-green-400 text-black ml-auto mr-8 flex item-center shadow-sm invisible group-hover:visible">
                <Play weight="fill"/>
              </button>
            </a>
            
          </div>
          <h1 className="font-semibold text-3xl mt-10 mb-4">Mais tocados</h1>
            <div>
            <div className="flex flex-wrap -mx-4">
  {Array(12)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 px-4 my-4">
        <a href="" className="bg-zinc-800/80 group rounded-lg overflow-hidden flex flex-col items-center justify-center hover:bg-zinc-700 transition-colors">
          <div className="w-40 h-40 relative">
            <img
              src="https://i.scdn.co/image/ab67706c0000da84ed6706343b03d8c6c29fa0ff"
              alt="cuphead"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-3 rounded-full bg-green-400 text-black flex items-center">
                <Play weight="fill" />
              </button>
            </div>
            <div className="absolute top-2 right-2 p-2 bg-zinc-900/80 rounded-full cursor-pointer hover:bg-zinc-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-zinc-400 hover:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 5.86V18.14l-4-4V9.86l4-4zM14 5v14h4V5h-4z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2 text-center">
            <strong className="text-lg font-semibold line-clamp-1">Loved Tracks</strong>
            <p className="text-sm text-zinc-400 line-clamp-1">Playlist • Trap</p>
          </div>
        </a>
      </div>
    ))}
</div>

            </div>
        
        </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 flex p-6 items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://i.scdn.co/image/ab67706c0000da84d4dc17f3f12ae474627d138f" alt="Nome da Faixa" className="w-16 h-16 rounded-lg" />
          <div>
            <p className="text-lg font-semibold">Nome da Faixa</p>
            <p className="text-sm text-zinc-400">Artista</p>
          </div>
        </div>
          <div>
          <audio controls>
            <source src="TCHELO - PALPITE.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          </div>
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-400 hover:text-green-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 5.86V18.14l-4-4V9.86l4-4zM14 5v14h4V5h-4z"
            />
          </svg>
          </div>
        </footer>
      
    </div>
  )
}