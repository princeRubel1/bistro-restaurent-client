import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contactImg from "../../../assets/contact/contact.avif";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { TbPhoneCall } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Contact Us</title>
      </Helmet>
      <Cover
        img={contactImg}
        title="CONTACT US"
        description="Whether you're planning a reservation, catering for an event, or simply want to say hello, our team is here to make your experience as delightful as our dishes"
      ></Cover>
      <div className="mt-24 max-w-screen-xl mx-auto">
        <SectionTitle
          subHeading={"---Visit Us---"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
        <div className=" grid grid-cols-3">
          <div>
            <div className="bg-white shadow-xl p-10 w-[400px] text-center h-[200px]">
              <div className="bg-slate-100 mx-auto w-[300px] py-5  h-[140px]">
                <h4 className="text-xl uppercase font-semibold mb-2 ">Phone</h4>
                <span>+38 (012) 34 56 789</span>
              </div>
            </div>
            <p className="bg-yellow-600 py-3 w-[400px]">
              <TbPhoneCall className="text-4xl mx-auto text-white"></TbPhoneCall>
            </p>
          </div>
          <div>
            <div className="bg-white shadow-xl p-10 w-[400px] text-center h-[200px]">
              <div className="bg-slate-100 mx-auto w-[300px] py-5  h-[140px]">
                <h4 className="text-xl uppercase font-semibold mb-2 ">
                  ADDRESS
                </h4>
                <span>123 ABS Street, Uni 21, Bangladesh</span>
              </div>
            </div>
            <p className="bg-yellow-600 py-3 w-[400px]">
              <IoLocation className="text-4xl mx-auto text-white"></IoLocation>
            </p>
          </div>
          <div>
            <div className="bg-white shadow-xl p-10 w-[400px] text-center h-[200px]">
              <div className="bg-slate-100 mx-auto w-[300px] py-5  h-[140px]">
                <h4 className="text-xl uppercase font-semibold mb-2 ">
                  WORKING HOURS
                </h4>
                <span>Mon - Fri : 08:00 - 22:00 </span>
                <br />
                <span>Sat - Sun : 10:00 - 23:00</span>
              </div>
            </div>
            <p className="bg-yellow-600 py-3 w-[400px]">
              <TbClockHour3 className="text-4xl mx-auto text-white"></TbClockHour3>
            </p>
          </div>
        </div>
        <div className="mt-24">
          <SectionTitle
            subHeading={"---Send Us a Message---"}
            heading={"CONTACT FORM"}
          ></SectionTitle>
          <div className="bg-slate-100  p-8 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-2xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-2xl">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-2xl">Phone</span>
              </label>
              <input
                type="text"
                placeholder="number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-2xl">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Write your message here"
                className="input input-bordered w-full h-40 mb-10"
                required
              />
            </div>
            <button
              style={{
                background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
              }}
              className="py-2 px-6 text-white font-semibold rounded w-full"
            >
              Send Message{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
