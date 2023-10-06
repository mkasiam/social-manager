import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "../src/components/layout/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/provider/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
