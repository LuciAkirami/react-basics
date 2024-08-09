import { useState, useEffect } from 'react'
import './App.css'

// App to Generate Random number of length L
// function App() {
//   const [length, setLength] = useState(2)

//   function randGenerator(length){
//     let final=0;
//     let num;

//     for(let i=1; i <= length; i++) {
//         num = Math.floor(Math.random() * 9 + 1) // 2 -> 2, 3*10 -> 32, 0*100 -> 32
//         num = num * (10**(i-1))
//         final += num

//     }
    
//     console.log(final)
//     return final

//   }

//   let k = randGenerator(length)


//   return (
//     <>
//       <h1>Henlo</h1>
//       <h2>{k}</h2>
//       <input type="range" min="1" max="10" defaultValue={length} onChange={(event) => setLength(event.target.value)}/>
//       <p>{length}</p>
//     </>
//   )
// }

/*
--------- useEffects -----------
useEffects are used to handle side effects that are caused by rendering itself, rather than by a particular event
Eg: Sending a message in a chat app is an event bc, the user has to click on send. While, setting up a chat
server is an Effect, as it should happen no matter which interaction caused the component to appear

Effects run at the end of a commit(https://react.dev/learn/render-and-commit) after the screen updates.
This is a good time to synchronize the React components with some external system (like network or a third-party library).

Don’t rush to add Effects to your components. Keep in mind that Effects are typically used to “step out” of your React code 
and synchronize with some external system. This includes browser APIs(Fetching API), third-party widgets, network(connecting to DB), 
and so on. If your Effect only adjusts some state based on other state, you might not need an Effect.
*/

export default App
