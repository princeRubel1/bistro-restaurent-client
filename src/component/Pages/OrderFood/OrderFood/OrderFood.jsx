import React, { useState } from "react";
import oderCover from "../../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";

import OrderFoodTab from "../OrderFoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {
  const categories = ["dessert", "Pizza", "Soup", "Salad", "Offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "Offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "Salad");
  const soup = menu.filter((item) => item.category === "Soup");
  const pizza = menu.filter((item) => item.category === "Pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Our Shop</title>
      </Helmet>
      <Cover
        img={oderCover}
        title="Our Shop"
        description="Craving a culinary adventure? Ordering with us is a breeze! Explore our menu packed with mouthwatering delights and simply indulge your taste buds"
      ></Cover>
      <div className="max-w-screen-xl mx-auto mt-24">
        <Tabs
          className="text-center"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="text-2xl mb-10 space-x-5 uppercase border-b-2 font-bold">
            <Tab>Dessert</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Salad</Tab>
            <Tab>Sale Offer</Tab>
          </TabList>
          <TabPanel>
            <OrderFoodTab items={dessert}></OrderFoodTab>
          </TabPanel>
          <TabPanel>
            <OrderFoodTab items={pizza}></OrderFoodTab>
          </TabPanel>
          <TabPanel>
            <OrderFoodTab items={soup}></OrderFoodTab>
          </TabPanel>
          <TabPanel>
            <OrderFoodTab items={salad}></OrderFoodTab>
          </TabPanel>
          <TabPanel>
            <OrderFoodTab items={offered}></OrderFoodTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
