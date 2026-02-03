import logo from './logo.svg';
import './App.css';

function App() {
  // var name = "Lucas";
  // let lastName = "Correa";
  // const middle_last_name = "Espirito Santo Nunes Jonas";
  //
  // let fatia_texto = middle_last_name.split(" ")
  //
  //
  // console.table(fatia_texto)

  let full_name = "Maria Flor De José Maria"

  let array_string = full_name.split(' ');
  console.log(array_string.length);
  let name = array_string[0];
  let last_name = array_string[array_string.length - 1];
  console.log(last_name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {array_string[0]}
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
