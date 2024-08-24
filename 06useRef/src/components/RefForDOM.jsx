import { useRef } from "react";

export default function ScrollBoxes() {
  let scrollRef = useRef(null);

  function scrollToBox3() {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }

  return (
    <>
      <div class="flex flex-col items-center gap-4">
        <button
          className="bg-blue-500 p-2 rounded-md text-white"
          onClick={scrollToBox3}
        >
          Scroll to 3
        </button>
        <div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center">
          Box 1
        </div>

        <div class="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-center">
          Box 2
        </div>

        <div
          ref={scrollRef}
          class="w-32 h-32 border-4 border-red-500 shadow-lg text-red-500 flex items-center justify-center"
        >
          Box 3
        </div>

        <div class="w-32 h-32 bg-yellow-300 rounded-lg border-4 border-dotted border-yellow-500 flex items-center justify-center">
          Box 4
        </div>

        <div class="w-32 h-32 bg-black bg-opacity-50 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
          Box 5
        </div>
      </div>
    </>
  );
}
