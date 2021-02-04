import logo from './logo.svg';
import './App.css';
import { default as Home } from './home'
import { default as MeetThePod } from './meetThePod'
import { default as Projects } from './projects'
import { default as Navbar } from './navbar'

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
        <Navbar />
        <Home />
        <MeetThePod />
        <Projects />

      </div>

    </div>
  );
}

export default App;

