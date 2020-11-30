import logo from "./logo.svg";
import spotiGif from "./assets/Spotivibes_gif.gif";
import spotiLogo from "./assets/Spotivibes_Logo-v2png.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spotiGif} className="App-spotiGif" alt="logo-gif" />
        <img src={spotiLogo} className="App-spotiLogo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br />
          Spotivibes
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

export default App;
