import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../../CallUs/CallUs";
import ChefRecomand from "../../ChefRecomand/ChefRecomand";
import Featured from "../../Featured/Featured";
import Testimonial from "../../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <About></About>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecomand></ChefRecomand>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
