import { useState } from 'react'
import { StrictMode } from 'react';
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

Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that 
makes them impure!
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

// Side Effects: (un)intended consequences 
// React’s rendering process must always be pure. 
// Components should only return their JSX, and not change any objects or variables that existed 
// before rendering—that would make them impure!

// Impure Component
let guest = 5;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

// This component is reading and writing a guest variable declared outside of it. 
// This means that calling this component multiple times will produce different JSX! And what’s more, if other components 
// read guest, they will produce different JSX, too, depending on when they were rendered! That’s not predictable.

// fixing the above using props
// this guest prop does not effect the guest variable present above
function Cup2({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

/*
React Strict Mode
React there are three kinds of inputs that you can read while rendering: props, state, and context. 
You should always treat these inputs as read-only.

When you want to change something in response to user input, you should set state instead of writing to a variable. 
You should never change preexisting variables or objects while your component is rendering.

React offers a “Strict Mode” in which it calls each component’s function twice during development.
By calling the component functions twice, Strict Mode helps find components that break these rules.
*/

/*
Local Mutation

Pure functions do not mutate the variables present outside the function scope. But if they are created in the same
render, then they can be mutated, this is called location mutation

Let's create a variable localMut in App() and change it through the Cup3 function
*/

function Cup3({ guesty }) {
  return <h2>Tea cup for guest #{guesty}</h2>;
}


export default function App() {
  // const [count, setCount] = useState(0)
  // Variables declared under the App can be mutated by functions and they will be pure
  // because, these variables are created in the same render that is App
  let cups=[]

  // modifying the local variable with the Cup3 function - Cup3 is a pure function
  // if cups is preexisted before the App(), then it would be impure
  for(let i=0; i < 3; i++){
    cups.push(<Cup3 guesty={i}/>)
  }

  return (
    <>
      <h1>Henlo</h1>
      {/* Below is a pure component, it will always give the same output JSX */}
      <NumberMulti number={5}/> {/* numbers, objects and arrays are passed in {} */}
      <NumberMulti number={5}/>
      <NumberMulti number={4}/>
      {/* Below is an Impure Component, calling it multiple times will produce different jsx */}
      <Cup />
      <Cup />
      <Cup /> {/* Guest value is 8 */}
      {/* Making the above component pure */}
      <h1>Pure Component</h1>
      <Cup2 guest={1} />
      <Cup2 guest={2} />
      <Cup2 guest={3} />
      <h1>Using Strict Mode will render twice each component to check for bugs</h1>
      <StrictMode>
      <Cup/> {/* Guest becomes 10 as Cup is rendered twice because of StrictMode */}
      <Cup/> {/* Guest becomes 12 as Cup is rendered twice because of StrictMode */}
      <Cup2 guest={3} /> {/* Guest is 3. Because, it's a pure function and returns same jsx always for any num of times*/}
      </StrictMode>
      {/* Local Mutation */}
      <h1>Local Mutation</h1>
      {cups}
    </>
  )
}

/*
------- Why Purity ----------
- Your components could run in a different environment—for example, on the server! 
Since they return the same result for the same inputs, one component can serve many user requests.
- You can improve performance by skipping rendering components whose inputs have not changed. 
This is safe because pure functions always return the same results, so they are safe to cache.
- If some data changes in the middle of rendering a deep component tree, React can restart rendering without 
wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.
*/

/*
---------- Where to use Side Effects ---------------
In React, side effects usually belong inside event handlers. Event handlers are functions that 
React runs when you perform some action—for example, when you click a button. Even though event 
handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

If you’ve exhausted all other options and can’t find the right event handler for your side effect, 
you can still attach it to your returned JSX with a useEffect call in your component. This tells React to 
execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.
*/

// References: https://react.dev/learn/keeping-components-pure