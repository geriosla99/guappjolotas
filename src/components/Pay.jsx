import React, { useEffect } from 'react'
import env from "react-dotenv";
import { loadStripe } from "@stripe/stripe-js";

const Pay = () => {
   const addPayment = async () => {
      const stripePromise = loadStripe(env.PUBLIC_KEY);
      const cart = await JSON.parse(localStorage.getItem('cart'))
      const products = cart.items;
      const productsObject = { products }
      const stripe = await stripePromise;
      const response = await fetch(`${env.URL_SERVER}/create-checkout-session`, {
         body: JSON.stringify(productsObject),
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
      });
      const session = await response.json();
      await stripe.redirectToCheckout({
         sessionId: session.id,
     });
   }

   useEffect(() => {
      addPayment()
   }, [])

   return (
      <div>
         
      </div>
   )
}

export default Pay
