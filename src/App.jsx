import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Summary from './components/Layout/Summary'
import MealsList from './components/Meals/MealsList'

function App() {

  return (
    <div className='App'>
      <Header />
      <section className='main-section'>
        <h1 className='just'></h1>
        <Summary />
        <MealsList />
      </section>

      <Cart />
    </div>
  )
}

export default App
