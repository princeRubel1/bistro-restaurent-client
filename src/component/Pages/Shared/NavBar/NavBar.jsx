import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  // cart data load

  return (
    <div className="bg-black bg-opacity-40 w-full fixed z-10">
      <div className="mx-32">
        <div className="navbar  text-slate-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 text-white rounded-box w-52"
              >
                <li>
                  <Link>HOME</Link>
                </li>
                <li>
                  <Link>CONTACT US</Link>
                </li>
                <li>
                  <Link>DASHBOARD</Link>
                </li>
                <li>
                  <Link>OUR MENU</Link>
                </li>
                <li>
                  <Link>OUR SHOP</Link>
                </li>
              </ul>
            </div>
            <a
              style={{ letterSpacing: "4.12px " }}
              className="text-xl  font-semibold"
            >
              BISTRO BOSS
              <br /> <span className="">RESTAURANT</span>
            </a>
          </div>
          <div className="navbar-center hidden items-center lg:flex mr-20">
            <ul className="menu menu-horizontal space-x-6 text-lg px-1">
              <>
                <Link className="hover:text-slate-500 hover:border-b-2" to="/">
                  HOME
                </Link>
              </>
              <>
                <Link
                  to="/contactus"
                  className="hover:text-slate-500 hover:border-b-2"
                >
                  CONTACT US
                </Link>
              </>
              <>
                {isAdmin ? (
                  <>
                    <Link
                      to="/dashboard/adminhome"
                      className="hover:text-slate-500 hover:border-b-2"
                    >
                      DASHBOARD
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/dashboard/userhome"
                      className="hover:text-slate-500 hover:border-b-2"
                    >
                      DASHBOARD
                    </Link>
                  </>
                )}
              </>
              <>
                <Link
                  className="hover:text-slate-500 hover:border-b-2"
                  to="/menu"
                >
                  OUR MENU
                </Link>
              </>
              <>
                <Link
                  className="hover:text-slate-500 hover:border-b-2"
                  to="/order/Salad"
                >
                  OUR SHOP
                </Link>
              </>
              <>
                <Link to="/dashboard/cart">
                  <div className="right-0 flex">
                    <FaShoppingCart className="text-3xl"></FaShoppingCart>
                    <div className="badge-sm badge-secondary rounded-badge">
                      {cart?.length || 0}
                    </div>
                  </div>
                </Link>
              </>
            </ul>
          </div>
          {user?.email ? (
            <>
              <img
                title={user?.displayName}
                className="rounded-full mx-auto lg:mt-0 sm:mt-2 md:mt-2 mr-8 flex items-center w-14 cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
              <Link>
                <button
                  onClick={handleLogOut}
                  className="px-8 py-3 bg-transparent border text-slate-100 border-white rounded
                hover:bg-primary hover:text-white transition-all duration-300"
                >
                  LogOut
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="navbar-end lg:block hidden ">
                <Link to="login">
                  <button
                    className="px-8 py-3 bg-transparent border text-slate-100 border-white rounded
                hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
