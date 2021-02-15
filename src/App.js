import logo from './logo.svg';
import './App.css';

// fancy import syntax
// will be explained later
/**
 * use state is called a "HOOKS" more will come later
 * a "HOOK" is fancy tool used inside of react components
 * means you tracking something across multiple calls to do something
 * this is the same as saying import React from 'react'
 * const useSate = React.useState;
 */
import { useState } from 'react';

// if node
// const HelloCullen = require('./HelloCullen');
//in react
//mport HelloCullen from './HelloCullen';
// let drinkCount = 1;

function App() {
  // this useState has the value of 1
  //["statevariable", how you change your state, using a function]
  /**
   * this is called "array destructuring"
   */
  //const returnValOfUseState = useState(1);
  // the value of our current state
  //const currentState = returnValOfUseState[0];
  //
  //const setDrinkCount = returnValOfUseState[1];
  // USE THIS "USESTATE" SYNTAX
  const [drinkCount, setDrinkCount] = useState(1);

  // embed variables in the HTML
  let name = 'Edan';

  let myH1 = <h1>go home, {name}, youre drunk!!!!</h1>;
  return (
    <div>
      <h1>Cullen Happy Hour!</h1>
      <p>
        {name} had {drinkCount} drink
      </p>

      <button onClick={() => setDrinkCount(drinkCount + 1)}>Drink Up</button>

      <button onClick={() => setDrinkCount(0)}>Sober Up</button>
    </div>
  );
}
export default App;
