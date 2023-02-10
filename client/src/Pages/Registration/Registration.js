import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../API/auth";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

export default function Register() {
  //info from authcontext
  const { user, loading, createUser, setProfileInfo, updateUserProfile } =
    useContext(AuthContext);
  // react useForm hook
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      photoUrl: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // getting destination pathname from login page
  const location = useLocation();
  const from2 = location?.state?.from2 || "/";

  // functions
  const onSubmit = (data) => {
    console.log(data.email);
    setError("");
    if (data.password !== data.confirmPassword) {
      setError("Password did not match!");
      return;
    }

    // image upload
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json)
      .then((imageData) => {
        // Create a new user
        createUser(data.email, data.password)
          .then((res) => {
            // const user = res.usr;
            // console.log(user);
            setAuthToken(res.user);
            // set display name and photo url
            //   setProfileInfo(data.fullName, data.photoUrl);
            updateUserProfile(data.fullName, imageData.data.display_url);

            navigate(from2);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (user?.uid) return <Navigate to="/"></Navigate>;
  if (!loading)
    return (
      <div className=" text-3xl text-center font-bold mt-16 flex justify-center animate-spin">
        {" "}
        <FaSpinner></FaSpinner>{" "}
      </div>
    );
  return (
    <div>
      <div className=" mt-16 flex justify-center ">
        <div className=" inline-block border md:w-3/5 lg:w-1/3 p-8 mx-4 bg-slate-50 rounded-lg shadow-sm shadow-green-400 drop-shadow">
          <h2 className="font-bold text-2xl text-green-500">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            {/* full name input */}
            <label htmlFor="fullname" className="flex">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", {
                required: "This is required",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3",
                },
              })}
              className="border rounded p-3 flex w-full mb-2"
            />
            {/* error message */}
            <p className=" text-red-400 mb-2">{errors.fullName?.message}</p>

            {/* photo upload i*/}
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                {...register("image", {
                  required: "Profile Photo is Required",
                })}
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>

            {/* email  input */}
            <label htmlFor="email" className="flex">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="border rounded p-3 flex w-full mb-2"
            />
            {/* error message */}
            <p className=" text-red-400 mb-2">{errors.email?.message}</p>
            
            {/* password input */}
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Minimum length should be 6",
                },
              })}
              className="border rounded p-3 flex w-full mb-2"
            />
            {/* error message */}
            <p className=" text-red-400 mb-2">{errors.password?.message}</p>

            {/* confirm password input */}
            <label htmlFor="confirmPassword" className="flex">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Minimum length should be 6",
                },
              })}
              className="border rounded p-3 flex w-full mb-2"
            />

            {/* error message */}
            {errors.confirmPassword?.message ? (
              <p className=" text-red-400 mb-2">
                {errors.confirmPassword?.message}
              </p>
            ) : (
              <p className=" text-red-400 mb-2">{error}</p>
            )}

            <input
              type="submit"
              className="border w-full bg-green-500 p-2 rounded mt-8 drop-shadow font-bold text-slate-700 hover:bg-green-600 cursor-pointer"
            />
          </form>
          <div>
            <small className="mt-2">
              Already have an account?{" "}
              <span className="text-red-400 hover:drop-shadow-lg hover:text-red-500">
                {" "}
                <Link to="/login" style={{ textDecoration: 'none' }} state={{ from: from2 }}>
                  {" "}
                  Log In Here{" "}
                </Link>{" "}
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
