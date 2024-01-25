import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 ">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-16">
        <button
          style={{ borderRadius: "8px", borderBottom: " 3px solid black" }}
          className="py-2 px-6 hover:bg-black bg-transparent  text-xl  hover:text-white shadow-lg font-semibold text-black"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
