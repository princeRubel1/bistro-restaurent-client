import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="">
      <SectionTitle
        subHeading="---please provide---"
        heading="Payment"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
