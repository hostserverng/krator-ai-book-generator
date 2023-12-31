"use client";
import {
    InputLabel,
    TextField,
    Select,
    MenuItem,
    FormControl,
    Slider,
    Typography,
  } from "@mui/material";
  import React, { useContext, useState } from "react";
  import { multiStepContext } from "../StepContext";
  import ImageCard from "../components/ImageCard";
import { checkout } from "../components/checkout";
import { loadStripe } from '@stripe/stripe-js';
  
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  export default function ThirdPage() {

    const handleClick = async () => {
      const stripe = await stripePromise;
  
      if (stripe) {
        const paymentRequest = stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Total',
            amount: 1000, // Amount in cents
          },
        });
  
        const canMakePayment = await paymentRequest.canMakePayment();
  
        if (canMakePayment) {
          const result = await paymentRequest.show();
  
          if (result.paymentMethod) {
            // Send the payment method to your server for further processing
            console.log(result.paymentMethod);
          } else {
            // Payment was canceled
            console.log('Payment canceled');
          }
        } else {
          console.log('Payment Request API is not available.');
        }
      }
    };
  
    
    const { setCurrentIllustrationStep,submitData, userData, setUserData } =
      useContext(multiStepContext);
    return (
      <div>
        <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
          <div className="flex justify-center">
            <div className="w-[45%]">
              <InputLabel className="text-black font-bold mb-1">
                Illustration Preview
              </InputLabel>
              <img
                src="/images/building.jpg"
                alt="image"
                className=" object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
          <button className="btn self-center row lg:w-1/6 md:w-1/2 bg-btn text-primary p-3 mt-6 rounded-lg"
           onClick={()=>submitData}>Save</button>
          <button className="btn self-center lg:w-1/6 md:w-1/2 bg-btn text-primary p-3 mt-6 ml-4 rounded-lg"
          onClick={handleClick}
           >Buy</button>
           </div>
        </div>
      </div>
    );
  }
  