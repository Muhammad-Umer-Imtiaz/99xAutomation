"use client";

import React from "react";
import { Search, Bell } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="h-16 shadow-md flex items-center justify-between px-6 py-4">
      {/* Logo / Title */}
      <h2 className="text-4xl font-semibold text-black">99XAutomation</h2>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Icons */}
        <button>
          <Search className="w-5 h-5" />
        </button>
        <button className="pr-4 border-r-2 border-black relative">
          <Bell className="w-5 h-5 " />
          {/* Notification dot (optional) */}
          <span className="absolute top-0 right-4 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Amelia</span>
            <span className="text-xs text-gray-400">CEO of ALB</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
