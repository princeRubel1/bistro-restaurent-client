import { Link } from "react-router-dom";

const NavBar = () => {
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
              className="text-xl font-semibold"
            >
              BISTRO BOSS
              <br /> <span className="">RESTAURANT</span>
            </a>
          </div>
          <div className="navbar-center hidden items-center lg:flex">
            <ul className="menu menu-horizontal px-1">
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
          <div className="navbar-end">
            <Link to="login">
              <button
                className="px-8 py-3 bg-transparent border text-slate-100 border-white rounded
                hover:bg-primary hover:text-white transition-all duration-300"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
