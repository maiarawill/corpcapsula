
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h1>Calculadora P.A. / P.G.</h1>

        <h4>O que você quer calcular?</h4>
      </div>

      <div>
        <label for='pa'>
          <input type="radio" id="pa" value="pa" class="checkbox"></input>
          P.A.
        </label>

        <label for='pg'>
          <input type="radio" id="pg" value="pg" class="checkbox"></input>
          P.G.
        </label>
      </div>

      <div>
        <label for='pg'>
          Razão
          <input type="text" id="pg" value="pg"  class="valoresRecebidos"></input>
        </label>
        
        <label for='pg'>
          Primeiro número
          <input type="text" id="pg" value="pg"  class="valoresRecebidos"></input>
        </label>

        <label for='pg'>
          Último número
          <input type="text" id="pg" value="pg"  class="valoresRecebidos"></input>
        </label>

        <label for='pg'>
          Número de termos
          <input type="text" id="pg" value="pg"  class="valoresRecebidos"></input>
        </label>
      </div>

      <div>
        <h3>Razão:{}</h3>

        <h3>Termo geral:{}</h3>

        <h3>Soma Finita:{}</h3>
      </div>
    </div>
  );
}

export default App;
