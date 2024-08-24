import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) {
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      // block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav className="flex gap-4">
        <button
          className="bg-blue-300 rounded-md p-1"
          onClick={() => scrollToCat(catList[0])}
        >
          Tom
        </button>
        <button
          className="bg-blue-300 rounded-md p-1"
          onClick={() => scrollToCat(catList[5])}
        >
          Maru
        </button>
        <button
          className="bg-blue-300 rounded-md p-1"
          onClick={() => scrollToCat(catList[9])}
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

/*
Persistent Data Storage: useRef is used here to store a Map that links each cat image URL to its 
respective DOM element. This reference does not cause re-renders when updated, making it ideal for 
storing DOM-related data that needs to persist across renders.

Efficient DOM Manipulation: By storing the Map of cat URLs to DOM elements, the component can 
quickly locate and scroll to specific elements without having to re-query the DOM.

Example Usage
When the "Tom" button is clicked, the scrollToCat function is called with catList[0], which refers 
to the first cat in the list. The Map is consulted to find the DOM node corresponding to this cat, 
and the page scrolls smoothly to center this image.
*/
