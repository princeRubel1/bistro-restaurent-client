import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = total.toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
      <div className="p-10">
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
        <div className="bg-white  w-[992px] ">
          <div className="flex justify-evenly items-center py-8">
            <h3 className="text-3xl uppercase ">Total Order : {cart.length}</h3>
            <h3 className="text-3xl uppercase  ">
              Total Price : ${totalPrice}{" "}
            </h3>
            <button className="text-xl py-1 px-8 rounded bg-yellow-600 text-white">
              PAY
            </button>
          </div>
          <div className="mx-20">
            <div className="bg-yellow-600 rounded-t-2xl p-5 grid grid-cols-5 gap-5">
              <h2 className="text-xl text-white uppercase">Number</h2>
              <h2 className="text-xl text-white uppercase">ITEM IMAGE</h2>
              <h2 className="text-xl text-white uppercase">ITEM NAME</h2>
              <h2 className="text-xl text-white uppercase">PRICE</h2>
              <h2 className="text-xl text-white uppercase">ACTION</h2>
            </div>
            <div>
              {cart.map((item, index) => (
                <div
                  className="grid grid-cols-5 gap-5 items-center py-5"
                  key={item._id}
                >
                  <p className="ml-10">{index + 1}</p>
                  <img
                    className="h-20 w-20 rounded-full"
                    src={item.image}
                    alt=""
                  />
                  <h2 className="w-1/6 text-xl">{item.foodName}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => handleDelete(item)}>
                    <MdDeleteForever className="text-4xl text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
