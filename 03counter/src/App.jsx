import { useState } from 'react'
import './App.css'

// Hooks can only be called inside of the body of a function component.
// So doing the below gives us an error
// let [count, setCount] = useState(0)


function App() {
  // This won't work
  // let count = 0
  // const updateCount = () => { console.log(count) count+1}
  // <button onClick={updateCount}>Add count {count}</button>

  // Everytime we click the button, value of count gets changed, we can see in the logs, but 
  // it will not get reflected in the UI, i.e. UI is not updated with new value

  // This is because React prevents us to do this and wants to handle it byitself
  // Because, lets say we have this count variable in some 5 HTML tags, so in vanilla
  // js, when we update the count, we need to do 5 times document.getElementbyID and other
  // things to update the counter at all 5 tags

  // But React gives us an easy solution for this using Hooks. The useState() hook is a React
  // Hook, which will store the value of counter and it also provides a function, with which
  // we can update the count value. And when we click the Add Button, the value of count gets 
  // updated in all the HTML elements where we have specified the value

  // So the UI Updation is taken care by React

  // const [count, setCount] = useState(0)

  // To useState(), we pass a default value that a variable will take
  // useState(0) returns two things. One is a variable with value 0, another is a function with
  // which we can update this variable. usually we name this function set + the varaiable name
  // as here our variable name is count, we name the func as set + count -> setCount
  let [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(count+1) // updating count using setCount and it will propagate this change throughout the UI
    console.log(count) 
    // sometimes, the console log will print the old count, this is because
    //state changes are asynchronous that's why the value in console is not being updated immediately
  }
     
  const decreaseCount = () => {
    // so count does not go negative
    if (count > 0) {
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Reactive Counterr</h1>
      <div className='button-div'>
        {/* We see that the useState and setState will update the count value in all these elements */}
        <button onClick={updateCount}>Add Count {count}</button>
        <button onClick={decreaseCount}>Subtract Count {count}</button>
        <p>Count is {count}</p>
      </div>
    </>
  )
}

export default App
