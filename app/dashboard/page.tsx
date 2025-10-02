"use client";

import React from "react";
import { Mail, Users } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-white m-4 rounded-xl h-full p-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-950">Statistics</h1>
        <p className="text-base text-[#555555]">
          Quick insights about your chatbot performance and activity.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 rounded-4xl bg-[#F0F0F0] p-6">
        {/* Total Chatbots Section */}
        <div className="bg-[#FFFFFF]  rounded-2xl px-10 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Total Count */}
            <div className="flex-1">
              <h2 className="text-2xl  font-semibold text-[#000000] mb-4">
                Total Chatbots Created
              </h2>
              <div className="text-7xl font-bold text-[#8D27FF] text-center mb-6">
                250
              </div>
              <div className="space-y-2 text-xl">
                <div className="flex justify-between">
                  <span className="text-gray-600">Only Text</span>
                  <span className="font-semibold">150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Only Voice</span>
                  <span className="font-semibold">60</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Text & Voice (both)</span>
                  <span className="font-semibold">40</span>
                </div>
              </div>
            </div>

            {/* Right: Circular Charts */}
            <div className="flex gap-6 w-8/12 justify-center items-center">
              {/* Only Text */}
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#8D27FF"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(60 / 100) * 314} 314`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-950">
                      60%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Only Text</p>
              </div>

              {/* Only Voice */}
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#8D27FF"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(24 / 100) * 314} 314`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-950">
                      24%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Only Voice</p>
              </div>

              {/* Both */}
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="#8D27FF"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(16 / 100) * 314} 314`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-950">
                      16%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Text & Voice (both)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages and Usage Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Messages */}
          <div className="bg-[#ffffff] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#8D27FF] rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-semibold text-gray-950">Messages</h3>
            </div>
            <div className="text-6xl font-bold text-gray-950 text-right">
              1024
            </div>
          </div>

          {/* Usage */}
          <div className="bg-[#ffffff] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#8D27FF] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-semibold text-gray-950">Usage</h3>
            </div>
            <div className="text-6xl font-bold text-gray-950 text-right">
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
