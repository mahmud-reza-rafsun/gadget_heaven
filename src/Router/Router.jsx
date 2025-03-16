import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import GadgetCards from "../components/GadgetCards/GadgetCards";
import Statistics from "../Page/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch(`../product.json`),
          },
          {
            path: "/category/:category",
            element: <GadgetCards />,
            loader: () => fetch(`../product.json`),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
      },
    ],
  },
]);

export default router;
