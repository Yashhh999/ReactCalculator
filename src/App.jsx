import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState('');

  const numHandler = (number) => {
    setNum((prevNum) => prevNum + number)
  }

  const operatorHandler = (op) => {
    if (num !== '') {
      setResult(parseFloat(num));
    }
    setOperator(op);
    setNum('');
  }
  
  const calculate = () => {
    if (num !== '') {
      switch (operator) {
        case '+':
          setResult((prevResult) => prevResult + parseFloat(num));
          break;
        case '-':
          setResult((prevResult) => prevResult - parseFloat(num));
          break;
        case '*':
          setResult((prevResult) => prevResult * parseFloat(num));
          break;
        case '/':
          setResult((prevResult) => prevResult / parseFloat(num));
          break;
        default:
          break;
      }
    }
    setNum('');
  }

  const clearHandler = () => {
    setNum('');
    setResult(0);
    setOperator('');
  }

  const changeSign = () => {
    setNum((prevNum) => (prevNum.charAt(0) === '-' ? prevNum.substr(1) : '-' + prevNum));
  };

  const calculatePercentage = () => {
    setNum((prevNum) => String(parseFloat(prevNum) / 100));
  }

  const addDecimal = () => {
    if (!num.includes('.')) {
      setNum((prevNum) => prevNum + '.')
    }
  }

  return (
    <React.Fragment>
      <div>
      <h1 className="text-4xl justify-content text-center mt-5 font-bold ">Calculator</h1>
      </div>
      
      <div className="border-4 w-50 h-100 justify-content text-center mt-10 bg-white ">
        <input type="number" value={num||result} readOnly placeholder='Enter Number' className="rounded text-2xl border-2 border-black w-80 h-9 mt-5"></input>
        <div className="space-y-10 ">
          <button className="border-2 px-8 py-3 text-xl" onClick={clearHandler}>AC</button>
          <button className="border-2 px-8 py-3 text-xl" onClick={changeSign}>+/-</button>
          <button className="border-2 px-8 py-3 text-xl" onClick={calculatePercentage}>%</button>
          <button className="border-2 px-8 py-3 text-xl bg-orange-500" onClick={() => operatorHandler('/')}>/</button>
        </div>
        <div>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('7')}>7</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('8')}>8</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('9')}>9</button>
          <button className="border-2 px-9 py-3 text-xl bg-orange-500" onClick={() => operatorHandler('*')}>*</button>
        </div>
        <div>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('4')}>4</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('5')}>5</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('6')}>6</button>
          <button className="border-2 px-9 py-3 text-xl bg-orange-500" onClick={() => operatorHandler('-')}>-</button>
        </div>
        <div>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('1')}>1</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={() => numHandler('2')}>2</button>
          <button className="border-2 px-8 py-3 text-xl" onClick={() => numHandler('3')}>3</button>
          <button className="border-2 px-9 py-3 text-xl bg-orange-500" onClick={() => operatorHandler('+')}>+</button>
        </div>
        <div>
          <button className="border-2 px-20 py-3 text-xl" onClick={() => numHandler('0')}>0</button>
          <button className="border-2 px-9 py-3 text-xl" onClick={addDecimal}>.</button>
          <button className="border-2 px-9 py-3 text-xl bg-orange-500" onClick={calculate}>=</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App