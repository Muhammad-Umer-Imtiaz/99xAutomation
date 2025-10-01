"use client";

import {
  AudioLines,
  MessageCircle,
  MessageSquareMore,
  Paperclip,
  Send,
  X,
} from "lucide-react";
import { Mic } from "lucide-react";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function Step2Train({ formData, onChange }: any) {
  const [activePicker, setActivePicker] = useState<"primary" | "secondary">(
    "primary"
  );
  const [position, setPosition] = useState(formData.position || "right");
  const [open, setOpen] = useState(true);
   const [voiceActive, setVoiceActive] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("logo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelect = (value: string) => {
    setPosition(value);
    onChange("position", value);
  };

  const handleColorChange = (color: string) => {
    if (activePicker === "primary") {
      onChange("primaryColor", color);
    } else {
      onChange("secondaryColor", color);
    }
  };

  return (
    <div className="flex gap-8 mt-8">
      {/* ------- Left Side: Form ------- */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Chatbot Name */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3">Chatbot Name</label>
          <input
            placeholder="Buddy Bot"
            value={formData.chatbotName}
            onChange={(e) => onChange("chatbotName", e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
          />
        </div>

        {/* Bot Type */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3">Bot Type</label>
          <select
            name="botType"
            id="botType"
            className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
            value={formData.botType}
            onChange={(e) => onChange("botType", e.target.value)}
          >
            <option value="">Select a bot type</option>
            <option value="chatbot">Chatbot</option>
            <option value="voicebot">Voice Bot</option>
            <option value="both">Voice & Text (Both)</option>
          </select>
        </div>

        {/* Color Scheme */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Color Scheme</h2>
          <p className="text-sm text-[#555555]">
            Select your chatbot’s primary and secondary colors.
          </p>

          <div className="mb-4">
            <HexColorPicker
              color={
                activePicker === "primary"
                  ? formData.primaryColor || "#8D27FF"
                  : formData.secondaryColor || "#E9DBFF"
              }
              onChange={handleColorChange}
              className="w-full"
            />

            <p className="text-sm mt-2">
              🎨 Currently editing:{" "}
              <span className="font-semibold capitalize">
                {activePicker} color
              </span>
            </p>
          </div>

          {/* Primary Color */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-lg font-medium">Primary Color</label>
            <div className="flex items-center gap-3 w-2/3">
              <button
                onClick={() => setActivePicker("primary")}
                className={`w-10 h-10 rounded border ${
                  activePicker === "primary" ? "ring-2 ring-purple-500" : ""
                }`}
                style={{ backgroundColor: formData.primaryColor || "#8D27FF" }}
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => onChange("primaryColor", e.target.value)}
                className="flex-1 border rounded px-3 py-2 font-mono uppercase"
                placeholder="#8D27FF"
              />
            </div>
          </div>

          {/* Secondary Color */}
          <div className="flex items-center justify-between gap-4">
            <label className="text-lg font-medium">Secondary Color</label>
            <div className="flex items-center gap-3 w-2/3">
              <button
                onClick={() => setActivePicker("secondary")}
                className={`w-10 h-10 rounded border ${
                  activePicker === "secondary" ? "ring-2 ring-purple-500" : ""
                }`}
                style={{
                  backgroundColor: formData.secondaryColor || "#E9DBFF",
                }}
              />
              <input
                type="text"
                value={formData.secondaryColor}
                onChange={(e) => onChange("secondaryColor", e.target.value)}
                className="flex-1 border rounded px-3 py-2 font-mono uppercase"
                placeholder="#E9DBFF"
              />
            </div>
          </div>
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Position</h2>
          <p className="text-sm text-[#555555]">
            Choose chatbot placement on the left or right side of the screen.
          </p>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => handleSelect("left")}
              className={`flex-1 py-2 rounded border font-medium transition ${
                position === "left"
                  ? "bg-[#8D27FF] text-white border-[#8D27FF]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Left
            </button>
            <button
              type="button"
              onClick={() => handleSelect("right")}
              className={`flex-1 py-2 rounded border font-medium transition ${
                position === "right"
                  ? "bg-[#8D27FF] text-white border-[#8D27FF]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Right
            </button>
          </div>
        </div>

        {/* Logo Upload */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Logo</h2>
          <p className="text-sm text-[#555555]">
            Upload or attach your own logo for chatbot branding.
          </p>
          <div className="w-2/4 mt-3">
            <input
              id="logoUpload"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
            <label
              htmlFor="logoUpload"
              className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-full bg-[#8D27FF] text-white font-medium hover:bg-[#6f1fcc] transition"
            >
              <Paperclip className="w-8 h-8 p-1 mr-6 ml-2 bg-white rounded-full text-[#8D27FF]" />
              <span>Upload Your Logo</span>
            </label>
          </div>
        </div>
      </div>

      {/* ------- Right Side: Chatbot Preview ------- */}
      <div
        className={`fixed bottom-5 flex flex-col ${
          position === "right" ? "items-end right-10" : "items-start left-10"
        }`}
      >
        {/* Chat Window with animation */}
        {open && (
          <div
            className={`mb-3 h-100 rounded-3xl shadow-lg border flex flex-col transform transition-all duration-300 ease-in-out ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-5"
            }`}
            style={{
              backgroundColor: formData.secondaryColor || "#E9DBFF",
              [position === "left" ? "marginRight" : "marginLeft"]: "auto",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-t-3xl"
              style={{ backgroundColor: formData.primaryColor || "#8D27FF" }}
            >
              {formData.logo ? (
                <img
                  src={formData.logo}
                  alt="logo"
                  className="w-12 h-12 object-cover rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-white" />
              )}
              <div>
                <span className="text-white text-base font-semibold">
                  {formData.chatbotName || "Chat with bot"}
                </span>
                <span className="block text-xs text-white">
                  Powered By 99xAutomation
                </span>
              </div>
            </div>
            {/* Messages */}
            {formData.botType === "voicebot" && (
              <div className="flex-1 p-3 text-sm flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-[#8D27FF] flex items-center justify-center shadow-lg hover:bg-[#6f1fcc] transition">
                  <AudioLines className="w-8 h-8 text-white" />
                </button>
              </div>
            )}
            {formData.botType === "chatbot" && (
              <div className="flex-1 p-3 text-sm overflow-y-auto">
                <div className="mb-2">
                  <p className="bg-white p-2 rounded shadow inline-block">
                    Hi 👋
                  </p>
                </div>
                <div className="mb-2 text-right">
                  <p
                    className="p-2 rounded shadow inline-block text-white"
                    style={{
                      backgroundColor: formData.primaryColor || "#8D27FF",
                    }}
                  >
                    Hello, Sure! How can I assist you today?
                  </p>
                </div>
              </div>
            )}
            {formData.botType === "both" && (
              <div className="flex-1 p-3 text-sm overflow-y-auto">
                {/* User text */}
                <div className="mb-2">
                  <p className="bg-white p-2 rounded shadow inline-block">
                    Hi, I’d like to ask something.
                  </p>
                </div>

                {/* Bot response */}
                <div className="mb-2 text-right">
                  <p
                    className="p-2 rounded shadow inline-block text-white"
                    style={{
                      backgroundColor: formData.primaryColor || "#8D27FF",
                    }}
                  >
                    I can answer your text queries or listen via voice 🎤
                  </p>
                </div>

                {/* Mic button in the middle */}
                <div className="flex justify-center mt-4">
                  <button className="w-14 h-14 rounded-full bg-[#8D27FF] flex items-center justify-center shadow-md hover:bg-[#6f1fcc] transition">
                    <Mic className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start mt-4 gap-1">
                  <span className="w-2 h-2 bg-[#8D27FF] rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-[#8D27FF] rounded-full animate-bounce [animation-delay:-.2s]"></span>
                  <span className="w-2 h-2 bg-[#8D27FF] rounded-full animate-bounce [animation-delay:-.4s]"></span>
                </div>
              </div>
            )}
            {/* Input box */}
           {/* Input box */}
            <div
              className="px-3 py-2 flex items-center justify-center gap-4  rounded-b-3xl"
              style={{ backgroundColor: formData.primaryColor || "#8D27FF" }}
            >
              {formData.botType === "voicebot" ? (
                <button
                  className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <AudioLines
                    className="w-7 h-7"
                    style={{ color: formData.primaryColor || "#8D27FF" }}
                  />
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 w-full max-w-lg">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 min-w-0 px-2 py-1 rounded-full outline-none"
                  />

                  {formData.botType === "chatbot" && (
                    <button
                      className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full "
                      style={{
                        backgroundColor: formData.primaryColor || "#8D27FF",
                      }}
                    >
                      <Send className="w-5 h-5 text-white" />
                    </button>
                  )}

                  {formData.botType === "both" && (
                    <>
                      <button
                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full "
                        style={{
                          backgroundColor: formData.primaryColor || "#8D27FF",
                        }}
                      >
                        <Send className="w-5 h-5 text-white" />
                      </button>
                      <button
                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full "
                        style={{
                          backgroundColor: formData.primaryColor || "#8D27FF",
                        }}
                      >
                        <AudioLines className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: formData.primaryColor || "#8D27FF" }}
        >
          {open ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <MessageCircle className="text-white w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
