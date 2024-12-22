import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault()


    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            className="bg-[#CB7B04] mt-3 btn font-bold"
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </button>
          {/* Show error message to your customers */}
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    );
};

export default CheckOutForm;