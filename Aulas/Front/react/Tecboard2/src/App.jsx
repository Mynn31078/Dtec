
import './App.css'
import { Banner } from './assets/Componentes/Banner';
import { FormularioDeEvento } from './assets/Componentes/FormularioDeEvento';
import { Tema } from './assets/Componentes/Tema';
//function no React é Componente

function App() {
  const temas = [
    {
      id: 1,
      nome: 'front end'
    },
    {
      id: 2,
      nome: 'back end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]
  const eventos = [
    {
      capa: 'http://..',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>

      <Banner />
      <FormularioDeEvento> </FormularioDeEvento>

      {temas.map(function (item) {
        return(
        <section key={item.id}>
          <Tema tema={item} />
          <CardEvento evento={eventos[0]}/>
        </section>
        )
      })}


    </main>
  )
}

export default App
