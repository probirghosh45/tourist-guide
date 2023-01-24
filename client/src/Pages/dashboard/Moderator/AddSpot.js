import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Loading from "../../shared/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


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
          `${process.env.REACT_APP_API_URL}/add-services`,
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { data: fetchedUser, isLoading: loading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URl}/users/?email=${user?.email}`,
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

    const moderatorName = user?.displayName;
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
            moderatorName,
          };
          fetch(`${process.env.REACT_APP_API_URl}/spot`, {
            method: "POST",
            body: JSON.stringify(spot),
          })
            .then((res) => res.json())
            .then((result) => {
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
  if (loading) {
    return <Loading />;
  }
  console.log(fetchedUser);


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
              <span className="label-text">Test Option 1</span>
            </label>
            <input
              {...register("testOption1", {
                required: "Test Option is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.testOption1 && (
              <p className="text-red-500">{errors.testOption1.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Test Option 2</span>
            </label>
            <input
              {...register("testOption2", {
                required: "Test Option 2 is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.testOption2 && (
              <p className="text-red-500">{errors.testOption2.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Test Option 3</span>
            </label>
            <input
              {...register("Test Option 3", {
                required: "Test Option 3  is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.testOption3 && (
              <p className="text-red-500">{errors.testOption3.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Test Option 4</span>
            </label>
            <input
              {...register("testOption4", {
                required: "Test Option 3 is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
              required
            />
            {errors.testOption4 && (
              <p className="text-red-500">{errors.testOption4.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Test Option 5</span>
            </label>
            <input
              {...register("testOption5", {
                required: "Test Option 5 is Required",
              })}
              type="text"
              className="input input-ghost w-full  input-bordered"
            />
            {errors.testOption5 && (
              <p className="text-red-500">{errors.testOption5.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Test Option 6</span>
            </label>
            <select
              {...register("Test Option 6")}
              className="select select-ghost w-full max-w-xs"
            >
              <option value="op1">op-1</option>
              <option value="op1">op - 2</option>
              <option value="op1">op-1</option>
            </select>
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
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Cover Photo</span>
          </label>
          <input
            type="file"
            {...register("coverPhoto", {
              required: "Cover Photo is Required",
            })}
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
          {errors.coverPhoto && (
            <p className="text-red-500">{errors.coverPhoto.message}</p>
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
            className="textarea textarea-bordered h-44 my-4 w-full"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <input
          className="btn btn-primary btn-outline w-full hover:rounded-full"
          type="submit"
          value="Add Spot"
        />
      </form>
    </section>
  );
};

export default AddSpot;





