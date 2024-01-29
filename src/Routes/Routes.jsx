import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import OurMenu from "../component/Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../component/Pages/OrderFood/OrderFood/OrderFood";
import LogIn from "../component/Authentication/LogIn/LogIn";
import SignUp from "../component/Authentication/SignUp/SignUp";
import ContactUs from "../component/Pages/ContactUs/ContactUs";
import SecretRoute from "../component/Pages/Shared/SecretRoute/SecretRoute";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashBoard from "../layout/DashBoard";
import MyCart from "../component/Pages/DashoBoard/MyCart";
import UserHome from "../component/Pages/DashoBoard/UserHome";

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
        element: (
          <PrivateRoutes>
            <OurMenu></OurMenu>
          </PrivateRoutes>
        ),
      },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contactus",
        element: (
          <PrivateRoutes>
            <ContactUs></ContactUs>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
    ],
  },
]);
