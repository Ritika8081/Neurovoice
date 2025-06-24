"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import MainPage from "@/components/Mainpage";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar: hidden on small screens, fixed on md+ */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-[240px] z-20">
        <Sidebar />
      </div>
      {/* Main Content: margin-left on md+, no margin on mobile */}
      <main className="md:mx-[240px] flex justify-center">
        <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl px-2 sm:px-2 mt-">
          <MainPage />
        </div>
      </main>
    </div>
  );
}