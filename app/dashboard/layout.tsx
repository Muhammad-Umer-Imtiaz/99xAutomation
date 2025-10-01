"use client";

import Navbar from "@/Components/Layout/Navbar";
import { Sidebar } from "@/Components/Layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* Sidebar (full height) */}
      <Sidebar />

      {/* Right section (Navbar + Main) */}
      <div className="flex flex-col flex-1">
        {/* Navbar (takes width of right section only) */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 bg-[#f0f0f0]">
          {children}
        </main>
      </div>
    </div>
  );
}
