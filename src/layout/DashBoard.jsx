import React from "react";
import {
  FaCalendarAlt,
  FaHome,
  FaShopify,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../component/Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex bg-base-200 flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul
            style={{ backgroundColor: "#D1A054" }}
            className="menu p-4 w-80 min-h-full  text-base-content"
          >
            <div className="py-10 pl-5">
              <a className="text-4xl   font-bold text-center">BISTRO BOSS</a>
              <br />{" "}
              <span
                style={{ letterSpacing: "4.12px " }}
                className="text-3xl   text-center"
              >
                RESTAURANT
              </span>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/dashboard/userhome"
                className="text-xl mb-2 uppercase hover:text-white"
              >
                <FaHome className="text-2xl"></FaHome>User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/paymenthistory"
                className="text-xl mb-2 uppercase hover:text-white"
              >
                <FaWallet className="text-2xl"></FaWallet> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/reservation"
                className="text-xl mb-2 uppercase hover:text-white"
              >
                <FaCalendarAlt className="text-2xl"></FaCalendarAlt>reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl  uppercase hover:text-white"
                to="/dashboard/cart"
              >
                <FaShoppingCart className="text-2xl"></FaShoppingCart> My Cart
                <div className="badge-sm badge-secondary rounded-badge">
                  {cart?.length || 0}
                </div>
              </NavLink>
            </li>
            <hr className="my-5" />
            <li>
              <NavLink className="text-xl uppercase hover:text-white" to="/">
                <FaHome className="text-2xl"></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl  uppercase hover:text-white"
                to="/menu"
              >
                <GiHamburgerMenu className="text-2xl"></GiHamburgerMenu> OUR
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-xl  uppercase hover:text-white"
                to="/order/Salad"
              >
                <FaShopify className="text-2xl"></FaShopify> OUR SHOP
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
