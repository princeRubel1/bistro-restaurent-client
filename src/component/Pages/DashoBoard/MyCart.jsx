import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = parseFloat(total.toFixed(2));

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete food from the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | My Cart</title>
      </Helmet>
      <div className="p-8">
        <div className="text-center  mx-auto space-y-2 mb-20">
          <p
            style={{ fontStyle: "italic" }}
            className=" text-yellow-600 text-xl"
          >
            ---My Cart---
          </p>
          <h2 className=" text-3xl font-semibold border-y-4 py-2">
            WANNA ADD MORE?
          </h2>
        </div>
        <div className="bg-white mb-10 w-[992px] p-10">
          <div className=" grid grid-cols-3 text-xl font-serif text-center uppercase py-4">
            <h3 className="text-xl uppercase ">Total Order : {cart.length}</h3>
            <h3 className="text-xl uppercase  ">
              Total Price : ${totalPrice}{" "}
            </h3>
            <Link to="/dashboard/payment">
              <button className="text-xl py-1 px-8 rounded bg-yellow-600 text-white">
                PAY
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead
                style={{ background: "#D1A054" }}
                className="text-white text-lg rounded-t-2xl"
              >
                <tr>
                  <th>NUMBER</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-20 h-20">
                            <img src={item.image} alt="item.foodName" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.foodName}</td>
                    <td>${item.price}</td>

                    <td>
                      <button
                        className="btn btn-ghost bg-red-500"
                        onClick={() => handleDelete(item)}
                      >
                        <MdDeleteForever className="text-xl text-white"></MdDeleteForever>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
