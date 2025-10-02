"use client";

import React, { useState } from "react";
import { Camera, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

const Page = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    caption: "",
    website_URL: "",
    bio: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white m-4 rounded-xl h-full overflow-y-auto">
      {/* Header Section */}
      <div className="pt-6 px-8 text-gray-950 border-b-2 border-[#55555580]">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-base text-[#555555] mb-8">
          Update your profile details and keep your account secure.
        </p>
      </div>

      {/* Centered Form Section */}
      <div className="flex justify-center px-8 pb-8 pt-8">
        <div className="max-w-2xl w-full">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/user1.png"
                    alt="Profile"
                    className="w-full h-full "
                  />
                )}
              </div>
              <label
                htmlFor="profileUpload"
                className="absolute bottom-0 right-0 bg-[#8D27FF] p-2 rounded-full cursor-pointer hover:bg-[#6f1fcc] transition"
              >
                <Camera className="w-5 h-5 text-white" />
              </label>
              <input
                id="profileUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Click the camera icon to upload photo
            </p>
          </div>

          {/* Profile Information Form */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>
            {/* caption */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Briefcase  className="w-4 h-4" />
                Caption
              </label>
              <input
                type="text"
                name="name"
                value={formData.caption}
                onChange={handleChange}
                placeholder="CEO at ALB"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="New York, USA"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>

            {/* Website URL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="w-4 h-4" />
                Website URL
              </label>
              <input
                type="text"
                name="website_URL"
                value={formData.website_URL}
                onChange={handleChange}
                placeholder="https://example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8D27FF] focus:border-transparent outline-none resize-none"
              />
            </div>

            {/* Save Button */}
            <button className="w-full bg-[#8D27FF] text-white py-3 rounded-lg font-medium hover:bg-[#6f1fcc] transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
