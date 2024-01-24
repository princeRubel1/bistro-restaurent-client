import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import About from "../About/About";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <About></About>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
