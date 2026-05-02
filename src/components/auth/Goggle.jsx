"use client"

import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";

const Goggle = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn border-[#4066bc] text-[#4066bc] w-full"
    >
      <FaGoogle /> Login With Google
    </button>
  );
};

export default Goggle;
