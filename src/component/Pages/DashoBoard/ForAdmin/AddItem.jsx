import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"---What's new?---"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <div className="w-[1000px] bg-slate-100 p-10">
        <form>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl flex">
                Recipe name <p className="text-red-500">*</p>
              </span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
              required
            />
            <div className="label"></div>
          </label>
          <div className="grid grid-cols-2 gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl flex">
                  Category<p className="text-red-500">*</p>
                </span>
              </div>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered max-w-xl"
                required
              />
              <div className="label"></div>
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
              required
            ></textarea>
          </label>
          <input
            type="file"
            className="file-input block w-full max-w-xs mt-5"
          />
          <button
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-8 rounded text-white mt-5"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
