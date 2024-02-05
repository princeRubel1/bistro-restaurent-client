import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mt-5 mb-24">
      <section>
        <SectionTitle
          subHeading={"---From 11:00 am to 10:00 pm---"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper -mr-0"
        >
          <SwiperSlide>
            <img className="w-80" src={slide1} alt="" />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white font-semibold ">
              Salads
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-80" src={slide2} alt="" />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white font-semibold ">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-80" src={slide3} alt="" />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white font-semibold ">
              Southwest Fiesta Salad
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-80" src={slide4} alt="" />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white  font-semibold ">
              desserts
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-80"
              src="https://img.freepik.com/premium-photo/fresh-vegetarian-vegetable-salad-with-tomato-onion-cucumber-pepper-basil-lettuce-salad-plate-white-table_745171-3570.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white font-semibold ">
              Garden Medley Salad
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-80"
              src="https://img.freepik.com/free-photo/smoked-salmon-meat-salad_1203-9962.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white font-semibold ">
              Citrus Burst Salad
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-80"
              src="https://img.freepik.com/free-photo/vegetable-salad-with-tomato-cucumber-bell-peppers-red-onion-grated-parmesan-parsley_140725-8477.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white  font-semibold ">
              Greek Goddess Salad
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-80"
              src="https://img.freepik.com/free-photo/healthy-food-served-al-fresco_23-2148167597.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt=""
            />
            <h2 className="text-3xl uppercase text-center -mt-20 text-white  font-semibold ">
              Tropical Paradise Salad
            </h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
