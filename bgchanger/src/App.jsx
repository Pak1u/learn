import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [color , setColor] = useState("Red")
  function change(type) {
    setColor(type)
    console.log(color);
  }
  return (
    <>
     <Card color={color}/>
     <button onClick={() => change("Red")}>RED</button>
     <button onClick={() => change("Green")}>GREEN</button>
     <button onClick={() => change("Blue")}>BLUE</button>
    </>
  )
}

export default App
