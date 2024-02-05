import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddReview = () => {
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const suggestion = form.suggestion.value;
    const details = form.detail.value;

    const newReview = { name, suggestion, details };
    console.log(newReview);

    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Review Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <SectionTitle
        subHeading={"---Sharing is Caring!!!---"}
        heading={"GIVE A REVIEW..."}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Restaurant | Add Review</title>
      </Helmet>
      <div className="w-[992px] mx-auto bg-slate-200 space-y-3 p-10">
        {/* <h2 className="text-3xl font-serif text-center">Rate Us</h2> */}
        {/* <div className="rating rating-lg ml-[345px]">
          <input type="radio" name="rating-9" className="rating-hidden" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input
            type="radio"
            name="rating-9"
            className="mask mask-star-2"
            checked
          />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
        </div> */}
        <form onSubmit={handleAddReview} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">What is your name?</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Write your name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">Give me rate us?</span>
              </div>
              <input
                type="number"
                name="rating"
                placeholder="Write your rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-xl">
                Do you have any suggestion for us?
              </span>
            </div>
            <input
              type="text"
              name="suggestion"
              placeholder="Sugggestion"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-xl">
                Kindly express your care in a short way.
              </span>
            </div>
            <textarea
              name="detail"
              className="textarea textarea-bordered"
              placeholder="Review in detail"
            ></textarea>
          </label>
          <button
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-6 text-white rounded text-center w-full  mt-10"
          >
            Send Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
