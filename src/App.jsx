import './App.css'
import Navbar from './components/Layout/Header'
import Summary from './components/Layout/Summary'
import MealsList from './components/Meals/MealsList'

function App() {

  return (
    <div className='App'>
    <Navbar />
    <section className='main-section'>
      <h1 className='just'></h1>
      <Summary />
      <MealsList />
    </section>
    </div>
  )
}

export default App
