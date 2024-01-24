import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../../CallUs/CallUs";
import ChefRecomand from "../../ChefRecomand/ChefRecomand";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <About></About>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecomand></ChefRecomand>
      </div>
    </div>
  );
};

export default Home;
