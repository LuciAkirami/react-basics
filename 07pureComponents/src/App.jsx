import { useState } from 'react'
import './App.css'

/*
Keeping Components Pure

Pure functions in js are the ones that only perform calculations and nothing more.
By strictly writing components as pure functions, we can avoid entire class of
baffling bugs and unpredictable behaviour as codebase grows

A pure function is the one that has the following characteristics
- Minding its own business: The function should not change any objects / variables 
that existed before it was cakked
- Same Inputs, Same Outputs: Given the same inputs, the function should always return same output

Eg:
function double(number) {
  return 2 * number;
}

Given a number, it always returns 2x the number and doesnt change any pre existing variables
*/

/*
Pure Component in React

React is designed around this concept. React assumes that every component you write is a pure function. 
This means that React components you write must always return the same JSX given the same inputs:
*/

// This is a pure Component
function NumberMulti({ number }) {
  return (
    <ol>    
      <li>I have a number {number}</li>
      <li>Multiplying it with 2 will become {2*number}</li>
      <li>Dividing this number by two will become {0.5 * number}</li>
    </ol>
  );
}

// When you pass number={2} to NumberMulti, it will return JSX containing 5, 10, 2.5. Always.
// If you pass number={4}, it will return JSX containing 4, 8, 2. Always.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Henlo</h1>
      {/* Below is a pure component, it will always give the same output JSX */}
      <NumberMulti number={5}/> {/* numbers, objects and arrays are passed in {} */}
      <NumberMulti number={5}/>
      <NumberMulti number={4}/>
    </>
  )
}

export default App
