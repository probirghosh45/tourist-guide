import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const AddDivision = () => {
  useTitle("Add Division");
  const IMGBB_KEY = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddDivision = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const image = imageData?.data?.url;
          const division = {
            name: data?.divisionName,
            description : data?.description,
            image,
          };
          console.log("Division: ", division);
        //   fetch(`${process.env.REACT_APP_API_URl}/categories`, {

          fetch(`${process.env.REACT_APP_API_URL}/add-division`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(division),
          })
            .then((res) => res.json())
            // .then((result) => console.log(result));
          .then((result) => {
            if (result.acknowledged) {
              toast.success(
                `${data?.divisionName} added as a division`
              );
              navigate("/dashboard/manage-division");
              reset();
            }
          });
        }
      });
  };
  return (
    <div className="h-[550px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Add Division</h2>
        <form onSubmit={handleSubmit(handleAddDivision)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("divisionName", {
                required: "Name is Required",
              })}
              className="input input-secondary input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs my-3">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Description is Required",
                })}
                className="textarea textarea-secondary textarea-bordered h-30 my-4 w-full"
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            />
            <div>
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>

          </div>
          <input
            className="btn btn-primary w-full mx-auto mt-4 hover:rounded-full"
            value="Add Division"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDivision;
