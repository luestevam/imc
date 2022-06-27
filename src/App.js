import { useState } from 'react';
import './app.css';

export default function App (){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');


  function calcularIMC(){
    const alt = altura /100;
    const imc = peso /(alt * alt);

    alert(imc.toFixed(2));
  }

  return(
  <div className="app">
    <h1>Calculadora IMC</h1>
    <span>Vamos calcular seu imc</span>


    <div className="area-input">

      <input type="text" 
      placeholder="Peso em (kg) Ex: 90" 
      value={peso} 
      onChange={ (e) => setPeso(e.target.value) }
      />
      <input type="text" 
      placeholder="Altura em (cm) Ex: 1.80" 
      value={altura}
      onChange={ (e) => setAltura(e.target.value) }
      />

      <button onClick={calcularIMC}>
        Calcular
      </button>
      
    </div>

    <h2>Seu imc foi 25, você está baixo do peso</h2>
  </div>  
  )
}