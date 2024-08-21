import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  //   const timeout = null;
  const timeoutRef = useRef(null);

  function handleSend() {
    setIsSending(true);

    // timeout = setTimeout(() => {
    //     alert("Sent!");
    //     setIsSending(false);
    //   }, 3000);

    timeoutRef.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    // clearTimeout(timeout);
    clearTimeout(timeoutRef.current);
  }

  return (
    <>
      <input
        className="m-2 border-2 border-rose-500"
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded"
        disabled={isSending}
        onClick={handleSend}
      >
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && (
        <button
          className="mx-2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded"
          onClick={handleUndo}
        >
          Undo
        </button>
      )}
    </>
  );
}

/*
------- What if timeout is used instead timeoutRef ---------------
When handleSend is called, it assigns a setTimeout ID to the timeout variable. 
If a re-render happens (e.g., due to a state change like setIsSending(true)), timeout could be 
reset to its initial value, losing the reference to the actual timeout ID. 
Consequently, when handleUndo tries to clear the timeout, it won't be able to do so correctly 
because the reference to the original timeout ID is lost.

useRef creates a persistent reference that doesn't change across renders. 
By storing the timeout ID in timeoutRef.current, the component can reliably access and 
clear the correct timeout, no matter how many times it re-renders.
*/
