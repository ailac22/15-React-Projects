import React, { useState }  from 'react';
import './App.scss';
import { PersonList } from './Types/PersonListType';
import List from './Components/List'
import data from './data.js'

function App() {

  const [people, setPeople] = useState<PersonList>(() => {
    return data;
  })
  
  return (
  <main>
    <List people={people} onClick={() => {setPeople([])}}></List> 
  </main>)
}

export default App;


