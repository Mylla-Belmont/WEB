import './App.css';
//import HelloWorld from "./components/HelloWorld_00";
//import Calculadora_01 from './components/Calculadora_01';
//import MyProps from './components/MyProps_02';
//import MeusDados from './atividade00/MeusDados_01';
import Props from './atividade00/MeusDados_02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MeusDados/> */}
        <Props
          nome="Camila Belmont Mesquita"
          curso="Sistemas de Informação"
          universidade="Universidade Federal do Ceará"
        />
      </header>
    </div>
  );
}

export default App;