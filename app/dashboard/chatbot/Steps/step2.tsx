"use client";

import { Paperclip, Settings } from "lucide-react";
import React from "react";

export default function Step2Train({ formData, onChange }: any) {
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("logo", reader.result); // store in parent formData
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex gap-20 mt-8">
      <div className="flex flex-col w-1/2 gap-8">
        {/* Persona */}
        <div>
          <h2 className="text-xl font-semibold">Persona</h2>
          <p className="text-sm text-[#555555]">
            Select your chatbot’s tone and language.
          </p>

          {/* Tone */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-base font-medium min-w-[150px]">Tone</label>
            <select
              name="tone"
              id="tone"
              className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
              value={formData.tone}
              onChange={(e) => onChange("tone", e.target.value)}
            >
              <option value="">Select a Tone</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="innovative">Innovative</option>
            </select>
          </div>

          {/* Language */}
          <div className="flex items-center gap-4 mt-3">
            <label className="text-base font-medium min-w-[150px]">
              Language
            </label>
            <select
              name="language"
              id="language"
              className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
              value={formData.language}
              onChange={(e) => onChange("language", e.target.value)}
            >
              <option value="">Select a Language</option>
              <option value="english">English</option>
              <option value="urdu">Urdu</option>
              <option value="french">French</option>
            </select>
          </div>
        </div>

        {/* Knowledge Source */}
        <div>
          <h2 className="text-xl font-semibold">Knowledge Source</h2>
          <p className="text-sm text-[#555555]">
            Add website links or upload documents to train your chatbot.
          </p>

          {/* Website URL */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-base font-medium min-w-[150px]">
              Website URL
            </label>
            <input
              placeholder="www.99xautomation.com"
              value={formData.website_Url}
              onChange={(e) => onChange("website_Url", e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
            />
          </div>

          {/* Attach Document */}
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold">Documents</h2>
            <p className="text-sm text-[#555555]">
              Attach PDF, DOC, TXT files for chatbot knowledge base.
            </p>
            <div className="w-2/4 mt-3">
              <input
                id="documentUpload"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    onChange("documents", file); // just like formData.logo
                  }
                }}
                className="hidden"
              />
              <label
                htmlFor="documentUpload"
                className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-full bg-[#8D27FF] text-white font-medium hover:bg-[#6f1fcc] transition"
              >
                <Paperclip className="w-8 h-8 p-1 mr-6 ml-2 bg-white rounded-full text-[#8D27FF]" />
                <span>Attach Document</span>
              </label>
            </div>
          </div>
        </div>

        {/* Advanced Details */}
        <div>
          <h2 className="text-xl font-semibold">Advanced Details</h2>
          <p className="text-sm text-[#555555]">
            Control creativity, response length, and AI model with advanced
            settings.
          </p>

          {/* Temperature */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-base font-medium min-w-[150px]">
              Temperature
            </label>
            <div className="flex-1 flex items-center gap-3">
              <input
                type="range"
                min={0.5}
                max={1}
                step={0.1}
                value={formData.temperature}
                onChange={(e) =>
                  onChange("temperature", parseFloat(e.target.value))
                }
                className="flex-1 accent-[#8D27FF]"
              />
              <span className="w-10 text-sm font-medium text-gray-700">
                {formData.temperature}
              </span>
            </div>
          </div>

          {/* Max Token */}
          <div className="flex items-center gap-4 mt-3">
            <label className="text-base font-medium min-w-[150px]">
              Max Token
            </label>
            <input
              placeholder="10,850"
              value={formData.maxToken}
              onChange={(e) => onChange("maxToken", e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
            />
          </div>

          {/* Provider/LLM */}
          <div className="flex items-center gap-4 mt-3">
            <label className="text-base font-medium min-w-[150px]">
              Provider/LLM
            </label>
            <select
              name="LLM"
              id="LLM"
              className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
              value={formData.LLM}
              onChange={(e) => onChange("LLM", e.target.value)}
            >
              <option value="">Select a LLM/Provider</option>
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>

        {/* Integrate App */}
        <div>
          <h2 className="text-xl font-semibold">Integrate App</h2>
          <p className="text-sm text-[#555555]">
            Easily integrate your app and customize settings for a seamless AI
            experience.
          </p>
          <button className="bg-[#8D27FF] text-white text-lg px-6 py-2 rounded-full mt-3 flex items-center gap-3">
            <Settings className="w-6 h-6 bg-white text-[#8D27FF] rounded-full p-1" />
            Configure
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className=" flex flex-col items-end gap-6">
        <div className="flex flex-col ">
          <label className="text-xl font-semibold w-full mb-2">
            First Message
          </label>
          <input
            placeholder="First Message"
            value={formData.firstMessage}
            onChange={(e) => onChange("firstMessage", e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none"
          />

          <div className="flex items-start mt-3">
            <span className="bg-[#555555] text-white rounded-full px-2 py-0.5 text-xs mr-3">
              i
            </span>
            <span className="text-[#555555] text-sm font-semibold">
              The first message that the assistant will say. This can also be a
              URL to a containerized audio file ( mp3, wav, etc )
            </span>
          </div>
        </div>
        <div className="flex flex-col  ">
          <label className="text-xl font-semibold w-full mb-2">
            System Prompts
          </label>
          <textarea
            placeholder="First Message"
            value={formData.systemPrompts}
            onChange={(e) => onChange("systemPrompts", e.target.value)}
            rows={15}
            className="flex-1 border rounded px-3 py-2 focus:ring-2 focus:ring-[#8D27FF] outline-none resize-none"
          />

          <div className="flex items-start mt-3">
            <span className="bg-[#555555] text-white rounded-full px-2 py-0.5 text-xs mr-3">
              i
            </span>
            <span className="text-[#555555] text-sm font-semibold">
              The first message that the assistant will say. This can also be a
              URL to a containerized audio file ( mp3, wav, etc )
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
