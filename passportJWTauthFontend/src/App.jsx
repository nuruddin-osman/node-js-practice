import React from "react";
import Home from "./pages/home/Index";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./pages/register/Index";
import Login from "./pages/login/Index";
import RootLayout from "./layouts/RootLayout";
import Profile from "./pages/profile/Index";
import Errors from "./pages/error/Index";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "*",
      element: <Errors />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
