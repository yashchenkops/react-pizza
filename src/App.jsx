import { useState, useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://695e6b052556fd22f678652b.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizzas) => (
              <PizzaBlock key={pizzas.id} {...pizzas} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
