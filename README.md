### React - Virtual DOM, Fibre and Reconcilation

**Must Check**
- Reference: https://github.com/acdlite/react-fiber-architecture
- Browser Repaint: https://developer.mozilla.org/en-US/docs/Glossary/Repaint
- React Render Trees (UI as a Tree): https://react.dev/learn/understanding-your-ui-as-a-tree#the-render-tree
- Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state
- (Legacy) Reconcilation: https://legacy.reactjs.org/docs/reconciliation.html
- ReFlow and Repaint: https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg

**Hydration**

- When a web browser loads, first only the static HTML is displayed. Even though the buttons and the forms are displayed, they will not work.
- After the static HTML is displayed, the javascript is then injected into this HTML, which will then add event listeners to the HTML making it dynamic. This is called Hydration
-In web development, hydration or rehydration is a technique in which client-side JavaScript converts a static HTML web page, delivered either through static hosting or server-side rendering, into a dynamic web page by attaching event handlers to the HTML elements.
- Because the HTML is pre-rendered on a server, this allows for a fast "first contentful paint" (when useful data is first displayed to the user), but there is a period of time afterward where the page appears to be fully loaded and interactive, but is not until the client-side JavaScript is executed and event handlers have been attached.

**Precursor**

- The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document

    ![dom](https://www.w3schools.com/js/pic_htmltree.gif)

- The web broswer DOM contains a tree of all the elements of that respective HTML. So whenever an element or a value inside an element is updated, the whole broswer will repaint itself. Repainting is nothing but the browser will redraw the web page from the starting so to show the visual updates resulting from a UI change

- The React's .createRoot() will create a Virtual DOM, where it creates its own tree of elements. It keeps tracks of the elements that are to be updated and will update only those elements in the tree instead of updating the entire tree which usually the browser DOM does

**Issue**

- The issue is, lets say there is an element update. Now while React is in the process of updating that element, lets say there comes another update and again another update. So React has to _react_ 3 times, where it will try to update the element, then display it, then update it for second time, then display it, then update it for third time and then display it

- A better solution would be to perform all the three updates to element at once and then display it instead doing an update and display, agian an update and display, and again an update and display. 

- It had an affect on animations, where when React sends an updated element to the UI and in that process and new update comes in, then sending this update again to to the UI. instead of doing this it can send the final update to the UI

**React Fiber**

- React Fiber is the newest implementation of React.  The goal is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

**Reconsilation - Important**
- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app. (Source: https://github.com/acdlite/react-fiber-architecture)

- Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs(https://legacy.reactjs.org/docs/reconciliation.html) will be largely the same. The key points are:

  - **Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.**
  - **Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."  This is the reason, why we assign a `key` while are iterating through an array in React to create components. Using keys will increase the performance as the React will update those elements created using lists instead of creating them from ground up**

- The key points are:

  - In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
  - Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
  - A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


**What is a fiber?**

We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

Here we go!

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.





**Reconsilation - Medium Blog**
- Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.

- React uses a virtual DOM (Document Object Model) to update the UI. The virtual DOM is a lightweight in-memory representation of the real DOM, which allows React to make changes to the UI without manipulating the actual DOM. This makes updates faster, as changing the virtual DOM is less expensive than changing the real DOM.

- The reconciliation algorithm works by comparing the current virtual DOM tree to the updated virtual DOM tree, and making the minimum number of changes necessary to bring the virtual DOM in line with the updated state.

- The algorithm uses two main techniques to optimize updates:

  - 🚀 Tree diffing: React compares the current virtual DOM tree with the updated virtual DOM tree, and identifies the minimum number of changes necessary to bring the virtual DOM in line with the updated state.

  - 🚀 Batching: React batches multiple changes into a single update, reducing the number of updates to the virtual DOM and, in turn, the real DOM.

![dom gif](https://miro.medium.com/v2/resize:fit:640/format:webp/1*o8X7VFBBUls2PM70Dtj_ig.gif)

Credits: https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40

Additional Resources:

- https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/React/Virtual-DOM-and-Reconciliation-Algorithm.md

### How to Add Tailwind CSS to React Vite
- https://tailwindcss.com/docs/guides/vite

### Place to Find Code Snippets

- https://www.devui.io/components/cards