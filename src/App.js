import logo from './logo.svg';
import './App.css';
import { default as Home } from './home'
import { default as MeetThePod } from './meetThePod'
import { default as Projects } from './projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Home />
      <MeetThePod />
      <Projects />
    </div>
  );
}

export default App;

