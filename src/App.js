import logo from './logo.svg';
import './App.css';
import {Counter} from "./Componentes/Contador"
import {Navegacion} from "./Componentes/Navegacion"
import {Footer} from "./Componentes/Footer"

function App() {
  return (
    <div className="App">
      <nav>
        <Navegacion />
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Componentes
        </a>
      </header>

      <main>
        <p>
          <h1>Me sumo al componente app</h1>
          <Counter />
        </p>
      </main>

      <Footer />

    </div>
  );
}

export default App;
