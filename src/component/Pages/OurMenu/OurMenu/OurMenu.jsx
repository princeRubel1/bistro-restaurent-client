import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "Offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const Salad = menu.filter((item) => item.category === "Salad");
  const Soup = menu.filter((item) => item.category === "Soup");
  const Pizza = menu.filter((item) => item.category === "Pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Our Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our menu"
        description="Would you like to try a dish?"
      ></Cover>
      <div className=" mt-24">
        {/* main cover  */}
        <SectionTitle
          subHeading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTitle>
        {/* offered menu item  */}
        <MenuCategory items={offered}></MenuCategory>

        {/* dessert menu item  */}
        <MenuCategory
          items={dessert}
          title="Dessert"
          img={dessertImg}
        ></MenuCategory>
        {/* pizza for menu item  */}
        <MenuCategory items={Pizza} title="Pizza" img={pizzaImg}></MenuCategory>
        {/* salad for menu item  */}
        <MenuCategory items={Salad} title="Salad" img={saladImg}></MenuCategory>
        {/* soup for menu item  */}
        <MenuCategory items={Soup} title="Soup" img={soupImg}></MenuCategory>
      </div>
    </div>
  );
};

export default OurMenu;
