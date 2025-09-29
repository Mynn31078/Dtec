
import './App.css'

//function no React é Componente
function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um Evento</h2>
      <fieldset>
        
        <label htmlFor="">Qual é o nome do evento?</label>

        <input type="text" id='nome' placeholder='Sumer dev hits' />
      </fieldset>
    </form>
  )
}
function App() {


  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>

      <section>
        <img src="/banner.png" alt="Banner principal" />
      </section>
      <FormularioDeEvento></FormularioDeEvento>
    </main>
  )
}

export default App
