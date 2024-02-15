import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import Details from "../details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);
