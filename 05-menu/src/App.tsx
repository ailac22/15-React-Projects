import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import DishCmp from './Component/DishCmp'
import {Dish,Category} from './Types/Types'
import data from './data'
import _ from 'lodash';
import CategoriesCmp from './Component/CategoriesCmp';

const dishData: Dish[] = data;
const allCategories: Category[] = ['all',..._.uniq(dishData.map((dish) => dish.category))]

function App() {

  const [dishes, setDishes] = useState<Dish[]>(dishData);
  //const [category, setCategory] = useState<Category>(allCategories[0])


  function filterByCategory(category: Category){
      if (category === 'all'){
        setDishes(dishData)
        return;
      }

      setDishes(dishData.filter((dish) => { return dish.category === category}))
  }

  return (
    <main className='bg-blue-300'>
      <div className='container mx-auto text-center'>
        <h1 className='underline text-3xl'>Our menu</h1>
        <CategoriesCmp categories={allCategories} filterByCategory={filterByCategory}></CategoriesCmp>
        { dishes.map((dish) => {
          return <DishCmp dish={dish}></DishCmp>
        }) }
      </div>

    </main>
  );
}

export default App;
