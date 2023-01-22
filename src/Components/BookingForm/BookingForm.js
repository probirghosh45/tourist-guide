import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

import "./Booking.css";

const BookingForm = (props) => {
  const { cost } = props.booking;
  const { user } = useContext(AuthContext);
  // console.log(user);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.status = "pending";
    const uri = "http://localhost:5000/booking";
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
          alert("Booking successfully");
        }
        reset();
      });
  };
  useEffect(() => {
    reset();
  }, [props, reset]);

  return (
    <div className="confirm-form w-75  mx-auto py-3">
      <h2 className="text-center">Confirm Booking</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
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
        <input {...register("cost")} type="text" readOnly defaultValue={cost} />

        <input {...register("text")} placeholder="Select Date" />
        <input {...register("text")} placeholder="Enter your address" />
        <input
          type="text"
          {...register("phoneNumber")}
          placeholder="Enter your number"
        />
        <input type="submit" className="confirmbutton" />
      </form>
    </div>
  );
};
export default BookingForm;
