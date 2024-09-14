/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */

import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 z-40">
      {/**
       * w-full: Sets the element's width to 100% of its parent container's width.
       * max-w-screen-2xl: Sets a maximum width for the element. It defines the largest width the element can be, based on the 2xl screen size breakpoint.
       * w-full makes the element flexible and responsive to its parent’s width, while max-w-screen-2xl provides a cap on how wide the element can be, ensuring it doesn't become too large on larger screens.
       */}
      <div className="max-w-screen-2xl w-full mx-auto px-2 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img src="/images/logo.svg" height={40} width={40} alt="Logo" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden text-white"
            onClick={() => setNavOpen(!navOpen)}
          >
            {/* if nav is not opened, display "menu" svg and if nav is opneed, then display "close" svg*/}
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/*
        max-md
            - max-md targets screen sizes that are at most md (medium), which typically means screen widths of 768px or less.
        md
            - md: targets screens that are md (medium) or larger, which typically means screen widths of 768px and above.

        max-md:hidden
            - This class hides the element on screens that are 768px or smaller (max-width: 768px).
        
        md:justify-self-end
            - This class aligns the element to the end of its container on screens that are 768px or larger (min-width: 768px).

        Overall Meaning
            - The element will be hidden on smaller screens (768px or less) and will be aligned to the end on larger screens (768px and above).
        */}

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end text-white"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
