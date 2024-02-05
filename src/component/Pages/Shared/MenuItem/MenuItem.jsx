import React from "react";

const MenuItem = ({ item }) => {
  const { _id, foodName, shortDescription, image, price } = item;
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[120px] h-[110px]"
          src={image}
          alt=""
        />

        <div>
          <h2 className="uppercase tex-2xl font-semibold">{foodName}</h2>
          <p>{shortDescription}</p>
        </div>
        <p className="text-xl text-red-400">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
