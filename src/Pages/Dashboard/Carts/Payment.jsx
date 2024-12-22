import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import {loadStripe} from "@stripe/stripe-js"
import {
  Elements,
} from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
    const options = {
      mode: "payment",
      amount: 1099,
      currency: "usd",
      appearance: {
      },
    };
    return (
        <div>
            <TileForHome subHeading="Please pay!!!" heading="Payment"></TileForHome>

            <Elements stripe={stripePromise} options={options}>
                <CheckOutForm></CheckOutForm>
            </Elements>




        </div>
    );
};

export default Payment;