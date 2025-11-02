import './App.css'
import logoFuts from "./assets/FuutLogo.png"
import {Statistica, Homer, Perfil , AoVivo} from './icon/icones.tsx'
import lampada from "./assets/Group.svg"


function App() {

  return (
    <>
    <div id="conteiner geral " className="bg-[#404040] w-screen h-screen flex justify-between items-center">
      
      <header className=" w-max h-max  "> 
        <img src={logoFuts} alt="logo" className="w-15 h-15"/>  
        <Homer/>
        <AoVivo/>
        <Statistica/>
        <img src={lampada} alt="logo" className="w-15 h-15"/>  
        <Perfil/>


      </header>
      <main className="flex flex-col justify-between items-center w-full h-full">
        <nav className="border border-[#000000] w-full h-18">buscador e filtros</nav>
        <section className="border border-[#000000] w-full h-[98vh] ">
          area dos jogos
        </section>
        <footer className="border border-[#000000] w-full h-8 ">
          rodape
        </footer>
      </main>
      <aside className="border border-[#000000] w-47 h-full ">
        barra lateral 
      </aside>

    </div>

    </>
  )
}

export default App
