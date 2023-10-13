import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import CreateAd from "./CreateAd";
import Project from "./Project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Project />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/adds",
          element: <CreateAd />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
