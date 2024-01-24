import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const ChefRecomand = () => {
  return (
    <section className="mt-24">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="flex justify-evenly">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/premium-photo/organic-spring-mix-lettuce_158076-440.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Asian Sesame Crunch Salad</h2>
            <p>
              Asian Sesame Crunch Salad: A vibrant blend of crisp vegetables,
              crunchy nuts, and sesame seeds, tossed in a savory Asian-inspired
              dressing for a delightful crunch.
            </p>
            <div className="card-actions">
              <button
                style={{
                  borderBottom: "3px solid #BB8506",
                  background: " var(--Dark-06, #E8E8E8)",
                }}
                className=" rounded-md text-yellow-500 border uppercase py-2 px-4"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/premium-photo/delicious-mixed-salad-plate_1122-9743.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caesar Supreme Salad</h2>
            <p>
              Caesar Supreme Salad: A classic Caesar salad elevated with grilled
              chicken, crisp bacon, shaved Parmesan, and a creamy Caesar
              dressing for a supreme dining experience.
            </p>
            <div className="card-actions">
              <button
                style={{
                  borderBottom: "3px solid #BB8506",
                  background: " #1F2937",
                }}
                className=" rounded-md text-yellow-500 border uppercase py-2 px-4"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.freepik.com/premium-photo/rustic-bowl-fresh-organic-berry-salad-generated-by-ai_756748-84238.jpg?size=626&ext=jpg&ga=GA1.1.1983607497.1702311342&semt=ais"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Berry Bliss Salad</h2>
            <p>
              Berry Bliss Salad: A refreshing medley of mixed berries, crisp
              greens, and a zesty berry vinaigrette for a delightful burst of
              flavor.
            </p>
            <div className="card-actions">
              <button
                style={{
                  borderBottom: "3px solid #BB8506",
                  background: " var(--Dark-06, #E8E8E8)",
                }}
                className=" rounded-md text-yellow-500 border uppercase py-2 px-4"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecomand;
