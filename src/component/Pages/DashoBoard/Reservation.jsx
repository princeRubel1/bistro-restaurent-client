import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { TbClockHour3, TbPhoneCall } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";

const Reservation = () => {
  const handleReservation = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const time = form.time.value;
    const guest = form.guest.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const newBooking = { date, time, guest, name, phone, email };
    console.log(newBooking);
  };
  return (
    <div className=" ">
      <SectionTitle
        subHeading={"---Reservation---"}
        heading={"BOOK A TABLE"}
      ></SectionTitle>
      <div className=" mx-auto mb-24 ">
        <form
          onSubmit={handleReservation}
          className="w-[1000px] mx-auto grid grid-cols-3 gap-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <input
              type="date"
              name="date"
              placeholder="Type your date"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Time</span>
            </div>
            <input
              type="time"
              name="time"
              placeholder="Type your time"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Guest</span>
            </div>
            <input
              type="number"
              name="guest"
              placeholder="Type your number of person"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          {/* <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Guest</span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <input name="Guest" disabled selected>
                type select person
              </input>
              <option>1 Person</option>
              <option>2 person</option>
            </select>
          </label> */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              name="name"
              type="text"
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <input
              name="phone"
              type="text"
              placeholder="Type your number"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-6 text-white rounded text-center w-[1000px] mt-10"
          >
            Book A Table
          </button>
        </form>
      </div>
      <div className=" grid grid-cols-3 gap-10">
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
              <h4 className="text-xl uppercase font-semibold mb-2 ">ADDRESS</h4>
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
    </div>
  );
};

export default Reservation;
