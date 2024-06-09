import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {power} from "./operation/power";
import strykerLogo from './stryker.png'

function App() {
  const [count, setCount] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  return (
      <>
        <div>
            <a href="https://react.dev" >
                <img src={logo} className="logo react" alt="React logo"/>
            </a>
            <a href="https://stryker-mutator.io/" >
              <img src={strykerLogo} className="logo" alt="Stryker logo"/>
          </a>
        </div>
        <h1>React + Stryker</h1>
        <h3>Mutation test example with power(a, b) function for integers</h3>
        <div className="card">
          <button onClick={() => setCount((count) => power(count, 1))}>
            Power is {count}
          </button>
        </div>
        <div className="card">
          <input className="number-input" type="number" value={num1} onChange={e => setNum1(+e.target.value)}/>
          <input className="number-input" type="number" value={num2} onChange={e => setNum2(+e.target.value)}/>
          <button onClick={() => setCount(power(num1, num2))}>
            Pow
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Stryker and React logos to learn more
        </p>
      </>
  )
}

export default App;
