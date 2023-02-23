import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Booking.css";

const BookingForm = ({ booking }) => {
  const { spotName, cost, tourPlace, taka ,seats } = booking;
  const { user, selectedDate } = useContext(AuthContext);
  // console.log(user);
  // const [date,setDate] =useState()
  // console.log("date",date);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleBooking = (data) => {
    console.log(data);
    data.status = "pending";
    const uri = `${process.env.REACT_APP_API_URL}/booking`;
    fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booking Successful 🎉");
        }
        reset();
      });
  };
  useEffect(() => {
    reset();
  }, [booking, reset]);

  return (
    <div className="confirm-form w-75  mx-auto py-3">
      <h2 className="text-center">Confirm Booking</h2>
      <form onSubmit={handleSubmit(handleBooking)} className="">
        {user?.displayName && (
          <input
            {...register("name")}
            type="text"
            readOnly
            defaultValue={user?.displayName}
          />
        )}
        <input
          {...register("email")}
          type="text"
          readOnly
          defaultValue={user?.email}
        />
        <input
          {...register("spotName")}
          type="text"
          readOnly
          defaultValue={spotName ? spotName : tourPlace}
        />
        <input
          {...register("cost")}
          type="text"
          readOnly
          defaultValue={cost ? cost : taka}
        />
        <input
          {...register("dateData")}
          type="text"
          readOnly
          defaultValue={format(selectedDate, "PP")}
        />
        {errors.dateData && (
          <p className="text-red-500">{errors.dateData.message}</p>
        )}
        
         <select
              {...register("seat", {
                required: true,
              })}
              className="select select-ghost w-4/5"
            >
              {seats?.map((seat) => (
                <option >
                  {seat}
                </option>
              ))}
            </select>
        <input
          {...register("addressData")}
          placeholder="Enter your address"
          required
        />
        {errors.addressData && (
          <p className="text-red-500">{errors.addressData.message}</p>
        )}
        <input
          type="text"
          {...register("phoneNumber")}
          placeholder="Enter your number"
          required
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
        <input type="submit" className="confirmbutton" />
      </form>
    </div>
  );
};
export default BookingForm;
