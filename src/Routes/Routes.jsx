import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import OurMenu from "../component/Pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../component/Pages/OrderFood/OrderFood/OrderFood";
import LogIn from "../component/Authentication/LogIn/LogIn";
import SignUp from "../component/Authentication/SignUp/SignUp";
import ContactUs from "../component/Pages/ContactUs/ContactUs";

import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashBoard from "../layout/DashBoard";
import MyCart from "../component/Pages/DashoBoard/MyCart";
import UserHome from "../component/Pages/DashoBoard/UserHome";
import Reservation from "../component/Pages/DashoBoard/Reservation";
import AddReview from "../component/Pages/DashoBoard/AddReview";
import AllUsers from "../component/Pages/DashoBoard/ForAdmin/AllUsers";
import AddItem from "../component/Pages/DashoBoard/ForAdmin/AddItem";
import AdminRoutes from "./PrivateRoutes/AdminRoutes";
import ManageItem from "../component/Pages/DashoBoard/ForAdmin/ManageItem";
import Payment from "../component/Pages/DashoBoard/Payment/Payment";
import AdminHome from "../component/Pages/DashoBoard/ForAdmin/AdminHome";
import PaymentHistory from "../component/Pages/DashoBoard/PaymentHistory";

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
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>,
      },

      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoutes>
            <AddItem></AddItem>
          </AdminRoutes>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoutes>
            <ManageItem></ManageItem>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
