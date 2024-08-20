import { useRef, useState } from "react";

/* ------------- Ref in setInterval / clearInterval ----------
When the “Stop” button is pressed, you need to cancel the existing interval so that it stops 
updating the now state variable. You can do this by calling clearInterval, but you need to give 
it the interval ID that was previously returned by the setInterval call when the user pressed Start. 
You need to keep the interval ID somewhere. Since the interval ID is not used for rendering, 
you can keep it in a ref
*/
export default function Component1() {
  // store the start time
  let [startTime, setStartTime] = useState(0);
  // store the current time
  let [now, setNow] = useState(0);

  let intervalRef = useRef(null);

  // store the count
  let countRef = useRef(0);

  function updateCount() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

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
      <h2 className="mx-5">Time Passed: {secondsPassed.toFixed(3)}</h2>
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
      <h2 className="m-4">Count Value: {countRef.current}</h2>
      {/* // This doesn't re-render the component! */}
      <button
        className="mx-5 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
        onClick={updateCount}
      >
        Increase Count
      </button>
    </>
  );
}
