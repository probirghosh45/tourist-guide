import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({data}) => {
    const [cardError,setCardError] = useState("");
    const [success,setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [loading,setLoading] = useState(false);
      const {  cost,  name, email, spotName,_id} = data;
      console.log("data",data)
     const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
     useEffect(() => {
       // Create PaymentIntent as soon as the page loads
       fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ price: cost }),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           setClientSecret(data.clientSecret);
          
         }).catch(err => {
            console.log(err);
         })
     }, [cost]);

    const handleSubmit = async (event) => {

    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        console.log("[error]",error);
        setCardError(error.message)
         if (error.type === "card_error" || error.type === "validation_error") {
           setCardError(error.message);
         
         } else {
           setCardError("An unexpected error occurred.");
          
         }
    } else {
        console.log("[PaymentMethod]",paymentMethod);
        setCardError('');
        }

          setSuccess("");
       const { paymentIntent, error:ConfirmError } = await stripe.confirmCardPayment(
         clientSecret,
         {
           payment_method: {
             card: card,
             billing_details: {
                 name: name,
                 email: email,
                
             },
           },
         }
        );
        if (ConfirmError) {
          setCardError(ConfirmError.message);
         
          return;
        }
        if (paymentIntent.status==='succeeded') {
         
          setSuccess('Congratulations 🎉 ! Your payment completed')
         
          setTransactionId(paymentIntent.id)
           
          const payment = {
            name,
            email,
            spotName,
            transactionId: paymentIntent.id,
            booking_id: _id,
            cost,
          };
           fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(payment),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               setClientSecret(data.clientSecret);
          
              navigate("/my-orders"); 
               toast.success("Payment Successful");
             })
             .catch((err) => {
               console.log(err);
            
             });
        }
    
      // setLoading(false);
  };

  return (
      <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-5">Spot : {spotName}</h2>
          <h2 className="text-lg font-semibold mb-5">Cost : {cost}</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-success mt-10"
      >
        Pay
      </button>
      <p className="text-warning">{cardError}</p>
      <p className="text-success">{success&&success}</p>
      <p className="text-success">{transactionId}</p>
    </form>
  );
};

export default CheckoutForm;
