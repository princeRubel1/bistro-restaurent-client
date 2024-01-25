import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import OurMenu from "../component/Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../component/Pages/OrderFood/OrderFood/OrderFood";

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
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order",
        element: <OrderFood></OrderFood>,
      },
    ],
  },
]);
