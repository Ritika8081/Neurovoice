'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from '../components/Mainpage';
import { Menu, User } from 'lucide-react';
import { clsx } from 'clsx';

export default function Home() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [symmetricMargin, setSymmetricMargin] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="relative min-h-screen  dark:bg-gray-900 transition-colors duration-300">
      {/* Desktop Sidebar */}
      {isDesktop ? (
        <div className="fixed top-0 left-0 h-screen z-20">
          <Sidebar
            symmetricMargin={symmetricMargin}
            setSymmetricMargin={setSymmetricMargin}
            onToggleSymmetricMargin={() => setSymmetricMargin(prev => !prev)}
          />
        </div>
      ) : (
        showMobileSidebar && (
          <div className="fixed inset-0 z-40 flex">
            <div className="w-64 bg-white dark:bg-gray-900 h-full overflow-y-auto relative shadow-xl">
              <button
                onClick={() => setShowMobileSidebar(false)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-50"
              >
                ✕
              </button>
              <Sidebar
                symmetricMargin={symmetricMargin}
                setSymmetricMargin={setSymmetricMargin}
                onToggleSymmetricMargin={() => setSymmetricMargin(prev => !prev)}
              />
            </div>
            <div
              className="flex-1  bg-opacity-50 backdrop-blur-sm"
              onClick={() => setShowMobileSidebar(false)}
            />
          </div>
        )
      )}

      {/* Mobile Topbar */}
      {!isDesktop && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-30 transition-colors duration-300">
          <button
            onClick={() => setShowMobileSidebar(true)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        <div
          className={clsx(
            isDesktop ? (symmetricMargin ? 'ml-88 mr-16' : 'ml-64 mr-4') : 'mt-20',
            'mt-16 w-full max-w-5xl px-2 sm:px-3 transition-all duration-300'
          )}
        >
          <MainPage />
        </div>
      </main>
    </div>
  );
}