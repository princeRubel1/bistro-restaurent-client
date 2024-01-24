import { Outlet } from "react-router-dom";
import Footer from "../component/Pages/Shared/Footer/Footer";
import NavBar from "../component/Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
