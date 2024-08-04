import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// The reactDOM render method expects a ReactElement
// The App returns a reactElement

// React expects the functions to have Capital letters at beginning else it throws an error
// its a convention to start with capital letter
function App2() {
  return (
    // This syntax is called JSX, using html in js, but react doesnt understand this
    // hence react converts this into a ReactElement object
    <h1>This is another Element</h1>
  )
}

/*
The below is a react element looks like. The JSX will be converted/parsed into a similar object like this
but passing this to the render will not work as the render expects a specific object with specific key values
This does not work because, we are hard coding the props, like an input tag may have different props
and sometimes the children maybe present inside the props object
*/

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"

// We can even create a React Element like this. The compulsory arguments to be passed are
// "type", "props", "children"
// Babel injects these elements
const reactElement = React.createElement(
  'a', // type - this is the html tag
  {href: 'https://google.com',target: '_blank' }, // props - these are attributes of html
  'click me to visit google', // children
  anotherElement // variable injection, i.e. we can inject js variables (evaluated expression)
)

// This another element is converted to the above like object. Behind th scenes this will be converted
// to a ReactElement by taking the below and creating an object out of it. This will produce the same 
// result as reactElement. But we use this convention because writing HTML is easy instead writing
// React.createElement and giving it the values
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// console.log(reactElement)
// console.log(anotherElement)

/*
Object { "$$typeof": Symbol("react.element"), type: "a", key: null, ref: null, props: {…}, _owner: null, _store: {…}, … }
"$$typeof": Symbol("react.element")
key: null
props: Object { href: "https://google.com", target: "_blank", children: (2) […] }
children: Array [ "click me to visit google", {…} ]
href: "https://google.com"
target: "_blank"
ref: null
type: "a"
*/

// Here we create a root by getting the div tag of id "root"
// it need be a div element and the class name need not be called "root", its just a conventio to use these
// after creating the root, call the render method which will take the JSX elements
ReactDOM.createRoot(document.getElementById('root')).render(
  <> {/* <> are called fragments */}
  <App /> {/* This executes the App function */}
  {/* // App() this is also correct but not a best practice to use like this
  // ReactElement does not work */}
  reactElement
  {/* <reactElement /> This does not work because reactElement variable is already a React Element type, its not a
  function than can be executed to return a react element like App and App2. Hence we pass it directly
  as reactElement instead wrapping it with <> */}
  <App2/>
  </>
)

// React expects a single component. So if we are passing multiple components to the render like above
// where we are passing App and reactElement, then we need to wrap them in a <div><div/> or other element
// one way often developers do is to wrap the elements in fragments, that is in <> </>

// The .render() expects either function which return ReactElements or directly ReactElements. If a function
// is provided, then we wrap it in <FunctionName /> so it gets executed and gives a ReactElement
// and if its a ReactElement, we pass it directly without any <>

/* ---- Babel ------
Babel is a very famous transpiler that basically allows us to use future JavaScript in today’s browsers. 
In simple words, it can convert the latest version of JavaScript code into the one that the browser understands

We use Babel with React to transpile the JSX code into simple React functions that can be understood by browsers. 
Using this way we can assure that our JSX code can work in almost any browser.
*/