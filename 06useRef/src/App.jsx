import Component1 from "./components/RefinTimers";

function App() {
  return (
    <>
      <h1 className="text-blue-400 text-lg">Henlo</h1>
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

ref
*/
