import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Line } from "recharts";
import { Link } from "react-router-dom";

const PopularMenu = ({ title }) => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link to={`/order/${title}`}>
          <button
            style={{ borderRadius: "8px", borderBottom: " 3px solid black" }}
            className="py-2 px-6 hover:bg-black bg-transparent  text-xl  hover:text-white shadow-lg font-semibold text-black"
          >
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
