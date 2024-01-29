import React from "react";
import OrderFoodCart from "./OrderFood/OrderFoodCart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OrderFoodTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3  gap-10">
          {items.map((item) => (
            <OrderFoodCart key={item._id} item={item}></OrderFoodCart>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderFoodTab;
