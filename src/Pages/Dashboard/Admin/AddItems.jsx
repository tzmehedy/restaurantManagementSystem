import React from "react";
import TileForHome from "../../../Components/TileForHome";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const imgUploadKey = import.meta.env.VITE_imgbb_apiKey
  const url = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`;
  const onSubmit = async(data) => {
    
    const imgFile = { image: data.image[0] }
    const res = await axiosPublic.post(url, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    
    if(res.data){
        const item = {
            name: data.name,
            category: data.category,
            recipe:data.recipe,
            price: parseFloat(data.price),
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post("/menus", item)
        if(menuRes.data.insertedId){
            reset()
            toast.success("The Item successfully added")
        }
    }
  }
  return (
    <div>
      <TileForHome subHeading="What's New" heading="Add an item"></TileForHome>

      <div className="bg-slate-300 shadow-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className=" space-y-2">
            <label className="font-bold">Recipe Name*</label> <br />
            <input
              defaultValue=""
              className="w-full px-3 py-2 "
              placeholder="Recipe Name"
              {...register("name")}
            />
          </div>

          <div className="flex gap-3">
            <div className="md:w-1/2">
              <label className="font-bold">Category*</label> <br />
              <select
                defaultValue={"default"}
                {...register("category")}
                className="w-full px-3 py-2"
              >
                <option disabled value={"default"}>
                  Select Category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>

            <div className="md:w-1/2">
              <label className="font-bold">Price*</label> <br />
              <input
                defaultValue=""
                className="w-full px-3 py-2 "
                placeholder="Price"
                {...register("price")}
              />
            </div>
          </div>

          <div className="">
            <label className="font-bold">Recipe Details*</label> <br />
            <textarea
              className=" textarea bg-white w-full"
              placeholder="Details"
              {...register("recipe")}
            ></textarea>
          </div>
          <div>
            <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
          </div>
          <input className="btn" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
