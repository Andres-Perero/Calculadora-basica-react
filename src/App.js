import React, { useState } from 'react';

const App = () => {
  // Usamos el hook useState para almacenar el resultado de la calculadora en el estado
  const [result, setResult] = useState('');

  // Esta función se ejecuta cuando se hace clic en un botón numérico o de operación
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  // Esta función se ejecuta cuando se hace clic en el botón "Clear" para borrar el resultado
  const clear = () => {
    setResult('');
  }

  // Esta función se ejecuta cuando se hace clic en el botón "C" para borrar el último carácter ingresado
  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  // Esta función se ejecuta cuando se hace clic en el botón "=" para calcular el resultado
  const calculate = () => {
    try {
      setResult(eval(result).toString()); // Utilizamos la función eval() para evaluar la expresión matemática ingresada
    } catch (error) {
      setResult('Error'); // Si ocurre un error en la evaluación, mostramos "Error"
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={result} />

      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button className="highlight" onClick={backspace} id="backspace">C</button>
        <button name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={calculate} id="result">=</button>
      </div>
    </div>
  );
}

export default App;
