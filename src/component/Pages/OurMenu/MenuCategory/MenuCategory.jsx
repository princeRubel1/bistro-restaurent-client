import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <div className="">
      <div className="my-24 max-w-screen-2xl mx-auto">
        {title && (
          <Cover
            img={img}
            title={title}
            description="Would you like to try a dish?"
          ></Cover>
        )}
      </div>
      <div className="grid max-w-screen-xl mx-auto md:grid-cols-2 sm:grid-cols-1 gap-10 ">
        {items.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/order/${title}`}>
          <button
            style={{ borderRadius: "8px", borderBottom: " 3px solid black" }}
            className="py-2 px-6 hover:bg-black bg-transparent  text-xl  hover:text-white shadow-lg font-semibold text-black"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
