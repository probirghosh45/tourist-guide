import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Loading from "../../shared/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddSpot = () => {
  useTitle("Add Product");
  const IMGBB_KEY = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: options, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/add-spot-division-wise`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handelAddSpot = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`;
    const email = user?.email;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(data);
          const image = imageData?.data?.url;
          const spot = {
            ...data,
            image,
            email,
          };
          fetch(`${process.env.REACT_APP_API_URL}/add-spot`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(spot),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                toast.success(`${data?.spotName} added success as a New Tourist Spot`);
                navigate("/dashboard/manage-spot");
              }
            });
          reset();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="m-10">
      <form onSubmit={handleSubmit(handelAddSpot)}>
        <div>
          <label className="label">
            <span className="label-text">Spot Name</span>
          </label>
          <input
            {...register("spotName", {
              required: "Spot Name is Required",
            })}
            type="text"
            className="input input-ghost w-full my-4  input-bordered"
            required
          />
          {errors.spotName && (
            <p className="text-red-500">{errors.spotName.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Cost</span>
            </label>
            <input
              {...register("cost", {
                required: "Cost is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.cost && (
              <p className="text-red-500">{errors.cost.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">District</span>
            </label>
            <input
              {...register("district", {
                required: "District is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.district && (
              <p className="text-red-500">{errors.district.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input
              {...register("duration", {
                required: "Duration is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.duration && (
              <p className="text-red-500">{errors.duration.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Division</span>
            </label>
            <select
              {...register("division", {
                required: true,
              })}
              className="select select-ghost w-full max-w-xs"
            >
              {options?.map((option) => (
                <option key={option?._id} value={option?._id}>
                  {option?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Distance</span>
            </label>
            <input
              {...register("distance", {
                required: "Distance is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.distance && (
              <p className="text-red-500">{errors.distance.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Cover Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Cover Photo is Required",
              })}
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is Required",
              })}
              className="textarea textarea-bordered h-44 my-3 w-full"
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
        </div>

        <input
          className="btn btn-primary btn-outline w-full hover:rounded-full mx-auto"
          type="submit"
          value="Add Spot"
        />
      </form>
    </section>
  );
};

export default AddSpot;
