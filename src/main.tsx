import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
