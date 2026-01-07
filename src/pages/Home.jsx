import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoadingPizza, setIsLoadingPizza] = useState(true);

  useEffect(() => {
    fetch('https://695e6b052556fd22f678652b.mockapi.io/items')
      .then((res) => res.json())
      .then((pizzas) => {
        setItems(pizzas);
        setIsLoadingPizza(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadingPizza
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizzas) => <PizzaBlock key={pizzas.id} {...pizzas} />)}
      </div>
    </>
  );
};

export default Home;
