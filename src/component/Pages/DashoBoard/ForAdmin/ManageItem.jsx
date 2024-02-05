import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
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
        axiosSecure
          .delete(`/menu/${item._id}`)

          .then((res) => {
            // console.log("deleted res", res.data);

            if (res.data.deletedCount > 0) {
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
    <div className="p-8">
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Restaurant | Manage Item</title>
      </Helmet>
      <div className="bg-white mb-10 w-[992px] p-10">
        <h2 className="text-3xl font-serif uppercase py-4">
          Total Items : {menu.length}
        </h2>
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
                <th>UPDATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                    <button className="btn btn-ghost bg-yellow-500">
                      <FaEdit className="text-xl text-white"></FaEdit>
                    </button>
                  </td>
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
  );
};

export default ManageItem;
