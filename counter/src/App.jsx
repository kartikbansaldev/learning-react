import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
   setCounter(counter+1);
  }
  const remValue = () => {
   setCounter(counter-1);
  }
  return (
    <>
      <h1>Coffee with Kartik</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App