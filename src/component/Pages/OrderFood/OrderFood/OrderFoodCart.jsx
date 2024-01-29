import React, { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const OrderFoodCart = ({ item }) => {
  const { _id, foodName, shortDescription, image, price } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        foodName,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:4000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the number of cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-80" alt="Shoes" />
        </figure>
        <p className="bg-red-600 absolute right-0 px-4 py-2 text-white">
          ${price}
        </p>
        <div className="card-body h-[200px] text-center">
          <h2 className="text-2xl font-bold text-center">{foodName}</h2>
          <p className="text-center font-semibold">{shortDescription}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              style={{ borderRadius: "8px", borderBottom: " 3px solid orange" }}
              className="py-2 px-6 hover:bg-black bg-slate-300  text-xl  hover:text-white shadow-lg font-semibold text-black"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCart;
