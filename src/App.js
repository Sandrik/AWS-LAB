import logo from './logo.svg';
import './App.css';
import './NavBar.js';
import './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CS 230L</h1>
        <h2>Section - 003 </h2>
        <p>WVU ID: 800256647</p>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </header>
    </div>
  );
}


export default App;

