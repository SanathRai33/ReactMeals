import './App.css'
import Navbar from './components/Layout/Header'
import Summary from './components/Layout/Summary'

function App() {

  return (
    <>
    <Navbar />
    <section className='main-section'>
      <h1 className='just'></h1>
      <Summary />
    </section>
    </>
  )
}

export default App
