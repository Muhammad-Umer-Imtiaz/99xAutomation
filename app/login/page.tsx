"use client";

import React, { useState } from "react";
import { Facebook } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuthStore } from "@/Store/useAuthStore";
import toast from "react-hot-toast";
interface login {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<login>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { login, isLoggingIn } = useAuthStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format");
    }

    try {
      await login(formData);
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
            <div className="flex justify-center mb-2">
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
              Welcome To Login <span className="text-purple-600 ">99X</span>
            </h2>
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500 mb-3"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-3 pl-8 bg-white backdrop-blur-sm rounded-full border-2 border-white/50 focus:outline-none transition-all shadow-md shadow-black placeholder-gray-500 "
              />
            </div>

            <p
              className="text-[#FFFFFFB2] underline  hover:decoration-[#8D27FF] mb-2 text-right cursor-pointer"
              onClick={() => router.push("/forget-password")}
            >
              Forget Password?
            </p>
            <button
              onClick={handleSubmit}
              className=" w-full  relative overflow-hidden px-12 py-4 rounded-full text-black text-xl font-medium border-2 border-[#8D27FF] bg-white transition-all duration-500 group hover:scale-105"
            >
              {/* Small corner indicator - visible by default */}
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-[#8D27FF] rounded-tl-full transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:rounded-full"></span>

              {/* Button text */}
              <span className="relative z-10 text-[#8D27FF] font-medium  group-hover:text-white transition-colors duration-500">
                Log In
              </span>
            </button>

            <div className="text-center">
              <Link
                href={"/signup"}
                className="text-[#FFFFFFB2] mb-2 text-center cursor-pointer"
              >
                Don’t have an account?{" "}
                <span className="text-[#8D27FF] underline">Create Account</span>
              </Link>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex items-center gap-3 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-md transition-all">
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-medium text-gray-700">
                Continue with Facebook
              </span>
            </button>

            <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-md transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-lg font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          </div>
        </motion.div>

        {/* ------------------- RIGHT SECTION (ANIMATED IMAGE) ------------------- */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/login.png"
            alt="Login illustration"
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
