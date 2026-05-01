"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSignUpSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.image,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
      return;
    }
    if (res) {
      alert("Signup Successfull");
    }
    redirect("/");
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[80vh] px-5 py-10">
      <div className="bg-white p-15 rounded-md">
        <h2 className="sm:text-3xl font-semibold">Register your account</h2>
        <form onSubmit={handleSubmit(handleSignUpSubmit)}>
          <fieldset className="fieldset mt-5 space-y-1 border-t pt-6 border-gray-300/40">
            <label className="label font-semibold text-black">Name</label>
            <input
              {...register("name", { required: "Name Is Required" })}
              type="text"
              className="input bg-[#F3F3F3] border-none text-xs"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
            <label className="label font-semibold text-black">Photo URL</label>
            <input
              {...register("photo", { required: "Photo URL Is Required" })}
              type="text"
              className="input bg-[#F3F3F3] border-none text-xs"
              placeholder="Enter your Photo URL"
            />
            {errors.photo && (
              <span className="text-red-600">{errors.photo.message}</span>
            )}
            <label className="label font-semibold text-black">
              Email Address
            </label>
            <input
              {...register("email", { required: "Email Is Required" })}
              type="email"
              className="input bg-[#F3F3F3] border-none text-xs"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            <fieldset className="fieldset space-y-1 relative">
              <label className="label font-semibold text-black">Password</label>
              <input
                {...register("password", { required: "Password is Required" })}
                type={isShow ? "text" : "password"}
                className="input bg-[#F3F3F3] border-none text-xs "
                placeholder="Enter your password"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
              <button
              type="button"
                onClick={() => setIsShow(!isShow)}
                className="text-lg absolute right-7 top-11"
              >
                {isShow ? <FaEyeSlash /> : <FaEye />}
              </button>
            </fieldset>
            <label className="label mt-1 font-semibold">
              <input
                required
                type="checkbox"
                defaultChecked
                className="checkbox font-semibold"
              />
              Accept Term & Conditions
            </label>

            <button className="btn btn-neutral mt-4 ">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
