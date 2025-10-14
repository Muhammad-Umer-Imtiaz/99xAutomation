"use client";

import React, { useState } from "react";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useChatbotStore } from "@/Store/ChatbotStore";

// --- Interface shared with Zustand store
interface ChatbotData {
  _id?: string;
  chatbotName: string;
  botType: "text" | "voice" | "both";
  primaryColor: string;
  secondaryColor: string;
  position: "left" | "right";
  logo: string;
  tone: string;
  language: string;
  website_Url: string;
  documents: string;
  temperature: string;
  maxToken: string;
  LLM: string;
  firstMessage: string;
  systemPrompts: string;
}

export default function Wizard() {
  const [step, setStep] = useState(0);
  const { createChatbot, isLoading } = useChatbotStore();

  const [formData, setFormData] = useState<ChatbotData>({
    chatbotName: "",
    botType: "both",
    primaryColor: "#8D27FF",
    secondaryColor: "#E9DBFF",
    position: "right",
    logo: "",
    tone: "",
    language: "",
    website_Url: "",
    documents: "",
    temperature: "0.7",
    maxToken: "",
    LLM: "",
    firstMessage: "",
    systemPrompts: "",
  });

  function handleChange(field: string, value: any) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const steps = [
    {
      label: "Step 1 : Build",
      component: <Step1 key={0} formData={formData} onChange={handleChange} />,
    },
    {
      label: "Step 2 : Train",
      component: <Step2 key={1} formData={formData} onChange={handleChange} />,
    },
    {
      label: "Step 3 : Publish",
      component: <Step3 key={2} formData={formData} onChange={handleChange} />,
    },
  ];

  // ✅ Validation functions
  function validateStep1() {
    const required = [
      "chatbotName",
      "botType",
      "primaryColor",
      "secondaryColor",
      "position",
      "logo",
    ];
    for (let field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Please fill in ${field}`);
        return false;
      }
    }
    return true;
  }

  function validateStep2() {
    const required = [
      "tone",
      "language",
      "website_Url",
      "temperature",
      "maxToken",
      "LLM",
    ];
    for (let field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Please fill in ${field}`);
        return false;
      }
    }
    return true;
  }

  // ✅ Handle step 2 submission and chatbot creation
  async function handleStep2Submit() {
    if (!validateStep2()) return;

    await toast.promise(createChatbot(formData), {
      loading: "Creating chatbot...",
      success: "Chatbot created successfully! 🎉",
      error: "Failed to create chatbot ❌",
    });

    setStep(2);
  }

  // ✅ Navigation handlers
  function handleNext() {
    if (step === 0) {
      if (validateStep1()) setStep(1);
    } else if (step === 1) {
      handleStep2Submit();
    }
  }

  function prevStep() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <div className="p-2">
      <Toaster position="top-right" />

      {/* ✅ Step Indicator */}
      <div className="flex gap-3 mb-6">
        {steps.map((s, i) => {
          const isActive = step === i;
          const isCompleted = i < step;
          const isLocked = i > step;

          return (
            <button
              key={i}
              onClick={() => {
                if (!isLocked) setStep(i);
              }}
              disabled={isLocked}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-3
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#8D27FF] to-[#6f1fcc] text-white shadow-lg scale-105"
                    : isCompleted
                    ? "bg-gray-200 text-gray-700"
                    : "bg-gray-100 text-gray-500"
                }
                ${isLocked ? "cursor-not-allowed opacity-80" : "cursor-pointer"}
              `}
            >
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                  isActive
                    ? "bg-white text-[#8D27FF]"
                    : isCompleted
                    ? "bg-white text-gray-700"
                    : "bg-transparent text-gray-400"
                }`}
              >
                {isCompleted ? <Check className="w-3 h-3" /> : i + 1}
              </span>
              <span className="truncate">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* ✅ Step Content */}
      {steps[step].component}

      {/* ✅ Navigation Buttons */}
      <div className="mt-10 flex items-center justify-center gap-4">
        {step > 0 && (
          <button
            onClick={prevStep}
            disabled={isLoading}
            className={`px-10 py-2 text-xl bg-[#8D27FF] text-white rounded-full hover:bg-[#8645cf] ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Back
          </button>
        )}

        {step < steps.length - 1 && (
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`px-10 py-2 text-xl bg-[#8D27FF] text-white rounded-full hover:bg-[#8645cf] flex items-center gap-2 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Processing...
              </>
            ) : (
              <>
                {step === 1 ? "Train" : "Next"} <ArrowRight />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
