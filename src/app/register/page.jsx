'use client'

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // npm install react-icons
import { Bounce, toast } from "react-toastify";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Google singnUp
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    console.log(data);
    const { name, image, email, password } = data;

    const { data: dets, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log("data is = ", dets);
    console.log("error is = ", error);

    // Success
    if (dets) {
      toast.success("Register Successful", {
        position: "top-center",
        autoClose: 600,
        transition: Bounce,
      });
      reset();

      setTimeout(() => {
        router.push("/login");
      }, 600);
    }

    // Error
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEEFE0] px-4 pb-20">
      {/* Main Card */}
      <div className="w-full max-w-md bg-[#F4F5E9] rounded-[2rem] shadow-lg p-8 md:p-10 border border-black/5">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1A1D14] tracking-tight">
            Create Account
          </h1>
          <p className="text-[#4B635B] text-sm mt-2 opacity-80">
            Begin your journey into modern craftsmanship.
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
              placeholder="Johnathan Doe"
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
              placeholder="Enter Image URL"
              className="w-full bg-[#E8E9DA] border-none rounded-2xl py-4 px-6 text-[#424845] placeholder:text-[#424845]/40 focus:ring-2 focus:ring-[#4B635B]/20 outline-none transition-all mt-1"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-[12px] ml-2">Enter a Image URL</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-[12px] ml-2 font-bold uppercase tracking-widest text-[#4B635B]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#E8E9DA] border-none rounded-2xl py-4 px-6 text-[#424845] placeholder:text-[#424845]/40 focus:ring-2 focus:ring-[#4B635B]/20 outline-none transition-all mt-1"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] ml-2">Enter a valid email address</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-[12px] ml-2 font-bold uppercase tracking-widest text-[#4B635B]">
              Password
            </label>
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-[#E8E9DA] border-none rounded-2xl py-4 px-6 text-[#424845] placeholder:text-[#424845]/40 focus:ring-2 focus:ring-[#4B635B]/20 outline-none transition-all mt-1"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-[12px] ml-2">
                Min. 8 chars, must include A-z and 0-9
              </p>
            )}
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-10 hover:bg-[#EFF1E4]"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <FaEye className=" size-5" />
              ) : (
                <FaEyeSlash className="size-5" />
              )}
            </Button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#7E968B] hover:bg-[#6D857A] text-white font-semibold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] mt-4"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8 mx-6">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-[#4B635B]/40"></div>
            <span className="flex-shrink text-[10px] mx-2 text-xs font-bold uppercase tracking-widest text-[#4B635B]/60">
              Or continue with
            </span>
            <div className="flex-grow border-t border-[#4B635B]/40"></div>
          </div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={() => googleSignUp()}
          className="w-full cursor-pointer bg-[#F1F3E9] hover:bg-[#EFF1E4]  border-2 border-[#E8E9DA] py-4 rounded-2xl font-medium text-[#424845] flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-[#4B635B] mt-4 opacity-80">
          Already have an account?{" "}
          <button className="font-bold text-[#1A1D14] hover:underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
