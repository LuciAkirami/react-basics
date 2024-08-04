### React - Virtual DOM, Fibre and Reconcilation

**Must Check**
- Reference: https://github.com/acdlite/react-fiber-architecture
- Browser Repaint: https://developer.mozilla.org/en-US/docs/Glossary/Repaint
- React Render Trees (UI as a Tree): https://react.dev/learn/understanding-your-ui-as-a-tree#the-render-tree
- Preserving and Resetting State: https://react.dev/learn/preserving-and-resetting-state

- (Legacy) Reconcilation: https://legacy.reactjs.org/docs/reconciliation.html

**Precursor**

- The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document

    ![dom](https://www.w3schools.com/js/pic_htmltree.gif)

- The web broswer DOM contains a tree of all the elements of that respective HTML. So whenever an element or a value inside an element is updated, the whole broswer will repaint itself. Repainting is nothing but the browser will redraw the web page from the starting so to show the visual updates resulting from a UI change

- The React's .createRoot() will create a Virtual DOM, where it creates its own tree of elements. It keeps tracks of the elements that are to be updated and will update only those elements in the tree instead of updating the entire tree which usually the browser DOM does

**Reconsilation**
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
