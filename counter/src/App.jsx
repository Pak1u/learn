import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  function plus(){
    if(counter > 5)
      return;
    setCounter(counter + 1);
  }
  function minus(){
    if(counter <= 0)
      return;

    setCounter(counter - 1);
  }
  return (
    <>
     <h1>Counter Value : {counter}</h1>
     <button onClick={plus}>Add Value</button>
     <button onClick={minus}>Decrease value</button>
    </>
  )
}

export default App
