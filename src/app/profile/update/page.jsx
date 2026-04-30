"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const ProfileUpdatePage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    try {
      const { name, image } = data;
      await authClient.updateUser({
        name: name,
        image: image,
      });

      toast.success("Profile updated!", {
        position: "top-center",
        autoClose: 600,
        transition: Bounce,
      });
      reset();
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEFE0] px-4 pb-20">
      {/* Main Card */}
      <div className="w-full max-w-md bg-[#F4F5E9] rounded-[2rem] shadow-lg p-8 md:p-10 border border-black/5">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1A1D14] tracking-tight">
            Update Profile
          </h1>
          <p className="text-[#4B635B] text-sm mt-2 opacity-80">
            Continue your journey into modern artistry.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formHandaler)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-[12px] ml-2 font-bold uppercase tracking-widest text-[#4B635B]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#E8E9DA] border-none rounded-2xl py-4 px-6 text-[#424845] placeholder:text-[#424845]/40 focus:ring-2 focus:ring-[#4B635B]/20 outline-none transition-all mt-1"
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z\s]{3,25}$/,
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-[12px] ml-2">
                Only letters allowed (min. 3 chars)
              </p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="text-[12px] ml-2 font-bold uppercase tracking-widest text-[#4B635B]">
              Profile Image URL
            </label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              className="w-full bg-[#E8E9DA] border-none rounded-2xl py-4 px-6 text-[#424845] placeholder:text-[#424845]/40 focus:ring-2 focus:ring-[#4B635B]/20 outline-none transition-all mt-1"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-[12px] ml-2">Enter a Photo URL</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 -mt-3">
            <button
              type='button'
              onClick={() => router.back()}
              className="w-full cursor-pointer bg-[#7E968B] hover:bg-[#6D857A] text-white font-semibold text-lg py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] mt-4"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#7E968B] hover:bg-[#6D857A] text-white font-semibold text-lg py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] mt-4"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
