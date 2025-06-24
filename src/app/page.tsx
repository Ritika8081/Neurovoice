'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from '@/components/Mainpage';
import { Menu, User } from 'lucide-react';

export default function Home() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black">
      {/* Desktop Sidebar */}
      {isDesktop ? (
        <div className="fixed top-0 left-0 h-screen z-20">
          <Sidebar />
        </div>
      ) : (
        showMobileSidebar && (
          <div className="fixed inset-0 z-40 flex">
            <div className="w-64 bg-white dark:bg-gray-900 h-full overflow-y-auto relative">
              <button
                onClick={() => setShowMobileSidebar(false)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
              >
                ✕
              </button>
              {/* 👇 only pass forceExpanded for mobile */}
              <Sidebar forceExpanded />
            </div>
            <div
              className="flex-1  bg-opacity-30 backdrop-blur-sm"
              onClick={() => setShowMobileSidebar(false)}
            />
          </div>
        )
      )}

      {/* Mobile Topbar */}
      {!isDesktop && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-30">
          <button onClick={() => setShowMobileSidebar(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <User className="w-6 h-6" />
        </div>
      )}

      {/* Main Content */}
      <main className={isDesktop ? 'md:mx-64' : ''}>
        <div className="w-full max-w-6xl px-1 sm:px-2 mx-auto pt-4">
          <MainPage />
        </div>
      </main>
    </div>
  );
}
