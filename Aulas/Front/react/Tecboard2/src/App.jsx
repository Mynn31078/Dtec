
import './App.css'
import { Banner } from './assets/componentes/Banner'
import { FormularioDeEvento } from './assets/componentes/FormularioDeEvento'
import { Tema } from './assets/componentes/Tema'
import { CardEvento } from './assets/componentes/CardEvento'
import { useState } from 'react'

//No react, componentes são FUNÇÕES


function App() {

  // Vamos criar um array / //Vamos criar uma lista de objetos
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
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
  /*  O use State cuida do nosso estado, ele retornar para nós um array de duas posições */
  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])

    /* eventos.push(evento)
    console.log('eventos =>', eventos) */
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <Banner />
      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento} />

      <section className="container">

        {/* Vamos criar um map() para percorrer a lista e renderizar cada item da lista e retornar o seu id */}

        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }

          return (
            <section key={tema.id} >
              <Tema tema={tema} />
              <div className="eventos">

                {eventos.filter(function(evento){
                  return evento.tema.id == tema.id
                })
                
                .map(function (evento, index) {
                  return (
                    <CardEvento evento={evento} key={index} />
                  )
                })}
              </div>
            </section>

          )
        })}
      </section>
    </main >
  )
}

export default App


