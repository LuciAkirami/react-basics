import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Root from "./routes/Home";
import ErrorPage from "./error-page";
import ProfilePage from "./routes/ProfilePage";
import ProfilesPage from "./routes/ProfilesPage";

// First thing we do is create a Browser Router and configure our first route. 
// This will enable client side routing for our web app.
const route = createBrowserRouter([
  //This first route is what we often call the "root route" since the rest of our routes 
  // will render inside of it. It will serve as the root layout of the UI, we'll have 
  // nested layouts as we get farther along.
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage/>,
    // this children will let us create a root that is child of the /profiles root
    // and the best thing is, all the Components withing the Profiles Page
    // will be available in the children page
    // The Children will be rendered inside the ProfilesPage Component
    children: [
      {
        // the :profileid lets us implement dynamic paths. The :profileid tells react that 
        // it can be changed. Now to access this parameter within the ProfielPage, we can
        // use the "useParams" Hook
        path: '/profiles/:profileid',
        element: <ProfilePage/>
      }
    ]
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
