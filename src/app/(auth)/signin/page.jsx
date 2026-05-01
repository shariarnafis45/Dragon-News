"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSignInSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.image,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignIn Successfull");
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[80vh] px-5">
      <div className="bg-white p-15 rounded-md">
        <h2 className="sm:text-3xl font-semibold">Login your account</h2>
        <form onSubmit={handleSubmit(handleSignInSubmit)}>
          <fieldset className="fieldset mt-5 space-y-1 border-t pt-6 border-gray-300/40">
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
              <button
              type="button"
                onClick={() => setIsShow(!isShow)}
                className="text-lg absolute right-3 top-11"
              >
                {isShow ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </fieldset>

            <button className="btn btn-neutral mt-4 ">Login</button>
          </fieldset>
        </form>
        <p className="text-[#929292] font-semibold text-xs mt-4 text-center">
          Don't Have An Account ?{" "}
          <Link href={"/signup"} className="text-[#F75B5F]  ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
