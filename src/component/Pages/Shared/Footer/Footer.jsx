import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-24">
      <div className=" lg:flex  text-neutral-content">
        <div
          style={{ backgroundColor: "#1F2937" }}
          className="p-10 md:w-[400px]  lg:w-[960px]"
        >
          <div className="text-center space-y-2 mx-auto">
            <h2 className="text-2xl font-semibold">CONTACT US</h2>
            <h6 className="text-xl">123 ABS Street, Uni 21, Bangladesh</h6>
            <span className="text-xl">+88 123456789</span>
            <p className="text-xl">Mon - Fri : 08:00 - 6 : 00</p>
            <p className="text-xl">Sat - Sun : 10:00 - 6 : 00</p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#101827" }}
          className="p-10 md:w-[400px] lg:w-[960px] "
        >
          <div className="text-center space-y-2 mx-auto">
            <h2 className="text-2xl font-semibold">FOLLOW US</h2>
            <h4 className="text-xl">Join us on social media</h4>
            <div className=" lg:flex  lg:ml-96 md:ml-40 space-x-4 mx-auto text-center text-4xl">
              <span>
                <Link to="https://www.facebook.com/">
                  <FaFacebook></FaFacebook>
                </Link>
              </span>
              <span>
                <FaInstagram></FaInstagram>
              </span>
              <span>
                <FaTwitter></FaTwitter>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#151515" }}
        className="footer footer-center text-slate-100 p-4  "
      >
        <aside>
          <p>
            Copyright © 2024 - All right reserved by Restaurant Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
