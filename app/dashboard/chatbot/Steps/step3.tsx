"use client";

import { Copy } from "lucide-react";
import React, { useState } from "react";

export default function Step3Publish({ formData, onChange }: any) {
  const embedCode = `<script src="https://cdn.yourdomain.com/agent/embedjs/your-unique-id/embed.js"></script>`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div className="flex">
      <div>
        <h2 className="text-2xl font-semibold">Embed on Your Site</h2>
        <p className="text-base text-[#555555]">
          Paste the code where you want the chatbot to appear on your site.
        </p>

        {/* Code Box */}
        <div className="bg-[#555555] text-white font-mono text-sm px-5 py-5 rounded-lg mt-3">
          {embedCode}
        </div>

        {/* Copy Button aligned right */}
        <div className="flex justify-end">
          <button
            onClick={handleCopy}
            className={`mt-3 px-4 py-3 rounded-full transition ${
              copied
                ? "bg-[#6c1fcc] text-white"
                : "bg-[#8D27FF] text-white hover:bg-[#6c1fcc]"
            }`}
          >
            <Copy className="inline mr-2" />
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
