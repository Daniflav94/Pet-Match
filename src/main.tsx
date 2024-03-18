import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/index.tsx";
import { About } from "./pages/about/index.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Adopt } from "./pages/adopt/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adotar",
        element: <Adopt />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
