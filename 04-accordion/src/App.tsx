import React from 'react';
import logo from './logo.svg';
import './App.scss';
import data from './data'
import  Questionaire  from './Components/Questionaire'
import Question from './Types/Question'

const questions: Question[] = data;

function App() {

  

  return (
    <main>
        <Questionaire questions={questions}></Questionaire>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </main>
  );
}

export default App;
