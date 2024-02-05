import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token);

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { foodName, price, category, shortDescription } = data;
          const newItem = {
            foodName,
            price: parseFloat(price),
            category,
            shortDescription,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Item added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  // console.log(errors);
  return (
    <div>
      <SectionTitle
        subHeading={"---What's new?---"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Restaurant | Add Item</title>
      </Helmet>
      <div className="w-[1000px] bg-slate-100 p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl flex">
                Recipe name <p className="text-red-500">*</p>
              </span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("foodName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full"
              required
            />
            <div className="label"></div>
          </label>
          <div className="grid grid-cols-2 gap-5">
            <label className="form-control w-full max-w-xl">
              <div className="label">
                <span className="label-text text-xl flex">
                  Category <p className="text-red-500">*</p>
                </span>
              </div>
              <select
                defaultValue="Pick one category"
                {...register("category", { required: true })}
                className="select select-bordered max-w-xl"
              >
                <option disabled>Pick one category</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>dessert</option>
                <option>popular</option>
                <option>Bengali</option>
              </select>
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl flex">
                  Price<p className="text-red-500">*</p>
                </span>
              </div>
              <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered max-w-xl"
                required
              />
              <div className="label"></div>
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-xl flex">
                Recipe Details<p className="text-red-500">*</p>
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("shortDescription", { required: true })}
              required
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl flex">
                Item Image <p className="text-red-500">*</p>
              </span>
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <input
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-8 cursor-pointer rounded text-white mt-5"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
