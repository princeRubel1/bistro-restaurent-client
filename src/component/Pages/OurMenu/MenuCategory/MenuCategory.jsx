import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

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
    </div>
  );
};

export default MenuCategory;
