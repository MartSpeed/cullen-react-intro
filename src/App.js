import logo from './logo.svg';
import './App.css';

// if node
// const HelloCullen = require('./HelloCullen');
//in react
import HelloCullen from './HelloCullen';

// app is what we call a component
// react is made of components
// components are functions that return JSX = HTML
function App() {
  // embed variables in the HTML
  let name = 'Edan';

  let myH1 = <h1>go home, {name}, youre drunk!!!!</h1>;
  return (
    <div className="App">
      {myH1}
      {/* HelloCullen is a React Compoennt */}
      <header className="App-header">
        <HelloCullen /> {/** self closing tag */}
        <HelloCullen />
        <HelloCullen />
        <HelloCullen />
        <HelloCullen />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and save to win
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function HelloCullen() {
//   return <h1>Hello Cullen</h1>;
// }

export default App;
