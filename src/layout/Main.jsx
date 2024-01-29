import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Pages/Shared/Footer/Footer";
import NavBar from "../component/Pages/Shared/NavBar/NavBar";

const Main = () => {
  const currentLocation = useLocation();
  console.log(currentLocation);
  const noHeaderFooter =
    currentLocation.pathname.includes("login") ||
    currentLocation.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <div>
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
