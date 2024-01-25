import React from "react";
import oderCover from "../../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

const OrderFood = () => {
  return (
    <div>
      <Cover img={oderCover} title="Our Oder"></Cover>
      <div className="">
        <a className="tab tab-lifted">Tab 1</a>
        <a className="tab tab-lifted tab-active">Tab 2</a>
        <a className="tab tab-lifted">Tab 3</a>
      </div>
    </div>
  );
};

export default OrderFood;
