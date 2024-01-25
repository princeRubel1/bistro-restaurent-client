import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="mt-24 bg-fixed featured-item pt-8">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-8 px-36 space-x-6">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="space-y-2 text-white">
          <p>March 20, 2023</p>
          <h2 className="text-xl font-semibold">WHERE CAN I GET SOME?</h2>
          <p>
            Asian Sesame Crunch Salad: Immerse your palate in a symphony of
            textures and flavors with our Asian Sesame Crunch Salad. Crisp mixed
            greens, vibrant vegetables, crunchy almonds, and sesame seeds are
            perfectly harmonized with a savory sesame dressing, creating a
            delightful and satisfying culinary experience that captures the
            essence of Asian cuisine.
          </p>
          <button
            style={{ borderRadius: "8px", borderBottom: " 3px solid #FFF" }}
            className="py-2 px-6 hover:bg-black bg-transparent  text-xl font-semibold text-white"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
