import './App.css';
import Cidades from './atividade03/Questao01/Cidades';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Cidades 
          cidade1={"Fortaleza"}
          cidade2={"Quixadá"}
          cidade3={"Iguatu"}
          cidade4={"Sobral"} />
      </header>
    </div>
  );
}

export default App