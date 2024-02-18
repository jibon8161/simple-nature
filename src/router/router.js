import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import Details from "../details/Details";
import Login from "../login/Login";
import Register from "../register/Register";
import Checkout from "../checkout/Checkout";
import Error from "../Error";
import Thank from "../thank/Thank";
import Contact from "../contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
      {
        path: "/check",
        element: <Checkout></Checkout>,
      },
      {
        path: "/thnk",
        element: <Thank></Thank>,
      },
      {
        path: "/cnt",
        element: <Contact></Contact>,
      },
    ],
  },
]);
