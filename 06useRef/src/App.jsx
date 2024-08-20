import Component1 from "./components/RefinTimers";

function App() {
  return (
    <>
      <h1 className="text-blue-400 text-lg mx-auto">Henlo</h1>
      <Component1 />
    </>
  );
}

export default App;

/*
The ref points to a number, but, like state, you could point to anything: a string, an object, or even a function. 
Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.

Note that the component doesn’t re-render with every increment. 
Like state, refs are retained by React between re-renders. 
However, setting state re-renders a component. Changing a ref does not!

------ When to use Ref and When to use State --------
- When a piece of information is used for rendering, keep it in state. 
- When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, 
using a ref may be more efficient.

------ Implementing useRef vis useState --------------
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}

During the first render, useRef returns { current: initialValue }. 
This object is stored by React, so during the next render the same object will be returned. 
Note how the state setter is unused in this example. 
It is unnecessary because useRef always needs to return the same object!
So its like a state variable without setter
*/
