import './App.css';
//import HelloWorld from "./components/HelloWorld_00";
//import Calculadora_01 from './components/Calculadora_01';
import MyProps from './components/MyProps_02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyProps 
          nome="Belmont"
          idade={21}
          curso="Si"
        />
      </header>
    </div>
  );
}

export default App;