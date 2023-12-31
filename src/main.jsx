import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "../src/components/layout/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/provider/AuthProvider/AuthProvider";
import Home from "./components/Home/Home";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Services from "./components/pages/Services/Services";
import Contact from "./components/pages/Contact/Contact";
import SignIn from "./components/pages/SingIn/SignIn";
import Register from "./components/pages/Register/Register";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/pages/Profile/Profile";
import Booking from "./components/pages/Booking/Booking";
import NotFound from "./components/pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/services.json")
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/serviceDetails/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch("/services.json")
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/booking",
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
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
