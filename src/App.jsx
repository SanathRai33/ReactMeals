import { useState } from "react";

import "./App.css";

import { CartProvider } from "./store/CartContext";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsList from "./components/Meals/MealsList";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartProvider>
      <div className="App">

        <Header setIsOpen={setIsOpen} />

        <section className="main-section">
          <Summary />
          <MealsList />
        </section>

        <Cart
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

      </div>
    </CartProvider>
  );
}

export default App;