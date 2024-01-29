import React, { useContext } from "react";
import {
  FaCalendar,
  FaFileContract,
  FaShopify,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdOutlineAddIcCall } from "react-icons/md";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../Hooks/useCart";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  return (
    <div className="max-w-screen-xl max-auto">
      <Helmet>
        <title>Bistro Restaurant | User Home</title>
      </Helmet>
      <div className="w-full">
        <h2 className="text-4xl font-sans py-6">Hi, Welcome Back!</h2>
        <div className="grid grid-cols-3 gap-10 mb-10">
          <div
            className="w-[390px] h-[150px]  rounded-lg"
            style={{
              background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
            }}
          >
            <div className="flex items-center  ml-32 py-8 mx-auto">
              <GiWallet className="text-6xl text-white"></GiWallet>
              <div className="ml-2">
                <p className="text-3xl font-semibold text-white">205</p>
                <h2 className="text-2xl font-semibold text-center text-white">
                  Menu
                </h2>
              </div>
            </div>
          </div>
          <div
            className="w-[390px] h-[150px]  rounded-lg"
            style={{
              background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
            }}
          >
            <div className="flex items-center  ml-32 py-8 mx-auto">
              <FaShopify className="text-6xl text-white"></FaShopify>
              <div className="ml-2">
                <p className="text-3xl font-semibold text-white">103</p>
                <h2 className="text-2xl font-semibold text-center text-white">
                  Shop
                </h2>
              </div>
            </div>
          </div>
          <div
            className="w-[390px] h-[150px]  rounded-lg"
            style={{
              background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
            }}
          >
            <div className="flex items-center  ml-32 py-8 mx-auto">
              <MdOutlineAddIcCall className="text-6xl text-white"></MdOutlineAddIcCall>
              <div className="ml-2">
                <p className="text-3xl font-semibold text-white">3</p>
                <h2 className="text-2xl font-semibold text-center text-white">
                  Contact
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div
            style={{ background: "#FFEDD5" }}
            className="w-[600px] h-[469px] rounded-t-md"
          >
            <div className=" pt-36 pl-60">
              {user?.email ? (
                <>
                  <img
                    title={user?.displayName}
                    className="rounded-full items-center w-40 cursor-pointer"
                    src={user?.photoURL}
                  />
                  <h2 className="text-2xl uppercase font-semibold ml-4 mt-5">
                    {user?.displayName}
                  </h2>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            style={{ background: "#FEF9C3" }}
            className="w-[600px] h-[469px] rounded-t-md "
          >
            <div className=" pt-36 pl-60 space-y-4">
              <h2 className="text-4xl font-serif">Your Activities</h2>
              <p className="text-xl uppercase flex items-center text-blue-500 ">
                <FaShoppingCart className="text-2xl mr-2"></FaShoppingCart>{" "}
                orders : {cart.length}
              </p>
              <p className="text-xl uppercase flex items-center text-green-400 ">
                <FaStar className="text-2xl mr-2"></FaStar> Reviews : 0
              </p>
              <p className="text-xl uppercase flex items-center text-orange-300 ">
                <FaCalendar className="text-2xl mr-2"></FaCalendar> Bookings : 0
              </p>
              <p className="text-xl uppercase flex items-center text-orange-600 ">
                <FaWallet className="text-2xl mr-2"></FaWallet> Payment : 0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
