import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(2)

  function randGenerator(length){
    let final=0;
    let num;

    for(let i=1; i <= length; i++) {
        num = Math.floor(Math.random() * 9 + 1) // 2 -> 2, 3*10 -> 32, 0*100 -> 32
        num = num * (10**(i-1))
        final += num

    }
    
    console.log(final)
    return final

  }

  let k = randGenerator(length)


  return (
    <>
      <h1>Henlo</h1>
      <h2>{k}</h2>
      <input type="range" min="1" max="10" defaultValue={length} onChange={(event) => setLength(event.target.value)}/>
      <p>{length}</p>
    </>
  )
}

export default App
