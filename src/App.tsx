import './App.css'

function App() {

  return (
    <>
    <div id="conteiner geral " className="bg-[#404040] w-screen h-screen flex justify-between items-center">
      
      <header className=" w-18 h-full border "> menus e logo  </header>
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
