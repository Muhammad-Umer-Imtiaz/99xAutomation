"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { Home, Bot, Settings, LogOut } from "lucide-react";

type TabEntry = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const tabs: TabEntry[] = useMemo(
    () => [
      {
        label: "Overview",
        href: "/dashboard",
        icon: <Home className="w-5 h-5" />,
      },
      {
        label: "Chatbot",
        href: "/dashboard/chatbot",
        icon: <Bot className="w-5 h-5" />, // robot icon
      },
      {
        label: "Setting",
        href: "/dashboard/settings",
        icon: <Settings className="w-5 h-5" />, // gear/settings icon
      },
    ],
    []
  );

  return (
    <aside className="w-72 h-screen flex flex-col border-r-2 bg-[#ffffff]">
      {/* Header */}
      <div className="py-5 mx-auto cursor-pointer">
        <div
          className="mx-auto my-1"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={56}
            className="rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-16 overflow-y-auto">
        <div className="space-y-1.5">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 w-full px-3.5 py-3 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#8D27FF] text-[#FFFFFF] font-semibold shadow-lg"
                      : "text-[#555555] hover:text-white hover:bg-[#9c4bed]"
                  }`}
              >
                <span
                  className={`${isActive ? "text-white" : "text-[#555555]"}`}
                >
                  {tab.icon}
                </span>
                <span className="font-medium tracking-wide truncate">
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-5 ">
        <button
          onClick={() => console.log("Logout clicked")}
          className="w-full px-4 py-2 rounded-xl hover:text-[#FFF]   hover:bg-[#8D27FF] transition flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};
