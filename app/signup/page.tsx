"use client";

import React, { useState } from "react";
import { Facebook } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAuthStore } from "@/Store/useAuthStore";
interface SignupData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
export default function SignupPage() {
  const [formData, setFormData] = useState<SignupData>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const router = useRouter();
  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    const {
      email,
      password,
      first_name,
      last_name,
      username,
      confirm_password,
    } = formData;

    if (
      !email ||
      !password ||
      !first_name ||
      !last_name ||
      !username ||
      !confirm_password
    ) {
      return toast.error("Please fill all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format");
    }

    try {
      await signup(formData);
      router.push("/dashboard");
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-300 to-pink-200 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-6xl flex items-center justify-between gap-12">
        {/* ------------------- LEFT SECTION (FORM) ------------------- */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="flex justify-center  mb-2">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={56}
                className="rounded-xl"
                priority
              />
            </div>
            <h2 className="text-white text-xl text-center font-bold">
              Create Your Account <span className="text-purple-600 ">99X</span>
            </h2>
          </div>

          {/* Inputs */}
          <div className="space-y-6 mb-6">
            {/* First + Last Name in one row */}
            <div className="flex gap-3">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-1/2 px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-1/2 px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
            </div>

            {/* Username */}
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className=" w-full  relative overflow-hidden px-12 py-4 rounded-full text-black text-xl font-medium border-2 border-[#8D27FF] bg-white transition-all duration-500 group hover:scale-105"
            >
              {/* Small corner indicator - visible by default */}
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#8D27FF] rounded-tl-full transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:rounded-full"></span>

              {/* Button text */}
              <span className="relative z-10 text-[#8D27FF] font-medium  group-hover:text-white transition-colors duration-500">
                Sign Up
              </span>
            </button>

            {/* Already have account */}
            <div className="text-center">
              <Link
                href={"/login"}
                className="text-[#FFFFFFB2] mb-2 text-center cursor-pointer"
              >
                Already have an account?{" "}
                <span className="text-[#8D27FF] underline">Sign in</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ------------------- RIGHT SECTION (ANIMATED IMAGE) ------------------- */}
        <motion.div
          className=" flex-1 flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/login.png"
            alt="Signup illustration"
            width={400}
            height={400}
            className="w-full max-w-md h-auto object-contain pl-10"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
