import { useRef, useState } from "react";

/*
When the “Stop” button is pressed, you need to cancel the existing interval so that it stops 
updating the now state variable. You can do this by calling clearInterval, but you need to give 
it the interval ID that was previously returned by the setInterval call when the user pressed Start. 
You need to keep the interval ID somewhere. Since the interval ID is not used for rendering, 
you can keep it in a ref
*/
export default function Component1() {
  let [startTime, setStartTime] = useState(0);
  let [now, setNow] = useState(0);

  let intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    // clearInterval(intervalRef.current);
    // here we store the interval ID returned by setInterval in the ref.current
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    // when stop is pressed, we are passing the interval id of the setInterval to the
    // clearInterval so it stops
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1 className="mx-5">Time Passed: {secondsPassed.toFixed(3)}</h1>
      <button
        className="mx-4 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
        onClick={handleStart}
      >
        start
      </button>
      <button
        className="mx-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
        onClick={handleStop}
      >
        stop
      </button>
    </>
  );
}
