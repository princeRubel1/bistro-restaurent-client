import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/payments")
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"---At a Glance!---"}
        heading={"PAYMENT HISTORY"}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Restaurant | Payment History</title>
      </Helmet>
      <div className="bg-white mb-10 w-full p-10">
        <h2 className="text-3xl mb-8 font-serif ">
          Total Payments: {paymentHistory.length}
        </h2>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead
              style={{ background: "#D1A054" }}
              className="text-white text-lg rounded-t-2xl"
            >
              <tr>
                <th>NUMBER</th>
                <th>EMAIL</th>
                <th>QUANTITY</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {/* <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20"></div>
                      </div>
                    </div> */}
                    {item.email}
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
