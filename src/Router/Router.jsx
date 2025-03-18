import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import GadgetCards from "../components/GadgetCards/GadgetCards";
import Statistics from "../Page/Statistics";
import Dashboard from "../Page/Dashboard";
import GadgetDetails from "../components/GadgetDetails/GadgetDetails";

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
        path: "/gadgetDetails/:category",
        element: <GadgetDetails />,
        loader: () => fetch(`../product.json`),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch(`../product.json`),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch(`../product.json`),
      },
    ],
  },
]);

export default router;
