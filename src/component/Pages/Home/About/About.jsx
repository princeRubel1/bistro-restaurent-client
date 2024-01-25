import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className=" pt-8  about-item  mb-20">
      <div className=" ">
        <div className="  text-center my-32 mx-48 bg-white p-12 space-y-2">
          <h2 className="uppercase text-4xl text-black font-semibold">
            Bistro Boss restaurant
          </h2>
          <p className="text-slate-500">
            We passionately curate culinary experiences that delight the senses.
            Our chef-driven menu features a fusion of flavors, crafted with
            locally sourced ingredients to ensure freshness and quality. Whether
            you're seeking a casual meal with friends or a special occasion
            celebration, our inviting ambiance and exceptional service create
            the perfect backdrop for memorable dining moments.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
