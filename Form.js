import React, { useState } from 'react';

const IMCCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');


  const calculateIMC = (e) => {
    e.preventDefault();
    
    const heightInMeters = height / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    let classification = '';

    if (imc < 18.5) {
      classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classification = 'Peso normal';
    } else if (imc < 29.9) {
      classification = 'Sobrepeso';
    } else if (imc < 34.9) {
      classification = 'Obesidade Grau I';
    } else if (imc < 39.9) {
      classification = 'Obesidade Grau II';
    } else {
      classification = 'Obesidade Grau III';
    }

    setResult(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classification}`);
  };

  return (
    <div>
      <form onSubmit={calculateIMC}>
        <div className='peso'>
          <label htmlFor="weight"></label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Em Kg'
          />
        </div>
        <div className='altura'>
          <label htmlFor="height"></label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Em centímetros'
          />
        </div>
        <div className='calcular'>
        <button type="submit">CALCULAR</button>
        </div>
      </form>
      <div className='resultado'>
      {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default IMCCalculator;
