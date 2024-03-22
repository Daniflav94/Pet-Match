import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/index.tsx";
import { About } from "./pages/about/index.tsx";
import "@radix-ui/themes/styles.css";
import { NextUIProvider } from "@nextui-org/react";
import { Theme } from "@radix-ui/themes";
import { Adopt } from "./pages/adopt/index.tsx";
import { Login } from "./pages/login/index.tsx";
import { ErrorPage } from "./components/errorPage/index.tsx";
import { UserContextProvider } from "./contexts/user/userContext.tsx";

const router = createBrowserRouter([
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
        path: "/login",
        element: <Login />,
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
    <UserContextProvider>
      <Theme>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </Theme>
    </UserContextProvider>
  </React.StrictMode>
);
