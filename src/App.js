import logo from './logo.svg';
import './App.css';
import useWeatherData from './useWeatherData';

function App() {

  const weather = useWeatherData();

  


  console.log(weather);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AAAA
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
