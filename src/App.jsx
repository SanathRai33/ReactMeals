import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Summary from './components/Layout/Summary'
import MealsList from './components/Meals/MealsList'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='App'>
      <Header setIsOpen={setIsOpen} />
      <section className='main-section'>
        <h1 className='just'></h1>
        <Summary />
        <MealsList />
      </section>

      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
