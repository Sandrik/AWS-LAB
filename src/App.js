import logo from './logo.svg';
import './App.css';
import NavBar from'./NavBar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1>CS 230L</h1>
        <h2>Section - 003 </h2>
        <p>WVU ID: 800256647</p>
        <p>Hi I am Sandrik Tabidze!</p>
      </header>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;

