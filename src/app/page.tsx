'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from '../components/Mainpage';
import { Menu, User, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function Home() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [screenSize, setScreenSize] = useState('lg');
  const [symmetricMargin, setSymmetricMargin] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else if (width < 1280) setScreenSize('xl');
      else setScreenSize('2xl');
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isDesktop = screenSize === 'xl' || screenSize === '2xl';
  const isTablet = screenSize === 'lg';
  const isMobile = screenSize === 'sm' || screenSize === 'md';

  // Close mobile sidebar when screen becomes desktop
  useEffect(() => {
    if (isDesktop && showMobileSidebar) {
      setShowMobileSidebar(false);
    }
  }, [isDesktop, showMobileSidebar]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (showMobileSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileSidebar]);

  const getSidebarWidth = () => {
    if (screenSize === '2xl') return symmetricMargin ? 'w-88' : 'w-64';
    if (screenSize === 'xl') return 'w-64';
    return 'w-64';
  };

  const getMainContentMargin = () => {
    if (!isDesktop) return '';
    if (screenSize === '2xl') {
      return symmetricMargin ? 'ml-68' : 'mx-64'; // Remove mr-16
    }
    if (screenSize === 'xl') {
      return 'mx-34';
    }
    return '';
  };

  const getMainContentPadding = () => {
    if (isMobile) return 'px-2 sm:px-3';
    if (isTablet) return 'px-4';
    return 'px-4 lg:px-6';
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Desktop Sidebar */}
      {isDesktop && (
        <div className="fixed top-0 left-0 h-screen z-20">
          <div className={clsx(getSidebarWidth(), 'h-full')}>
            <Sidebar
              symmetricMargin={symmetricMargin}
              setSymmetricMargin={setSymmetricMargin}
              onToggleSymmetricMargin={() => setSymmetricMargin(prev => !prev)}
            />
          </div>
        </div>
      )}

      {/* Mobile/Tablet Sidebar Overlay */}
      {!isDesktop && showMobileSidebar && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setShowMobileSidebar(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full z-50 flex">
            <div className={clsx(
              'bg-white dark:bg-gray-900 h-full overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out',
              isMobile ? 'w-72 sm:w-80' : 'w-80'
            )}>
              {/* Close button */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              <div className="pb-4">
                <Sidebar
                  symmetricMargin={symmetricMargin}
                  setSymmetricMargin={setSymmetricMargin}
                  onToggleSymmetricMargin={() => setSymmetricMargin(prev => !prev)}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile/Tablet Topbar */}
      {!isDesktop && (
        <div className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
            {/* Menu Button */}
            <button
              onClick={() => setShowMobileSidebar(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* App Title (visible on larger mobile screens) */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Neurovoice</span>
            </div>

            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-cyan-500 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="hidden sm:inline-block text-sm font-medium text-gray-700 dark:text-gray-300">
                Ritika
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="min-h-screen">
        <div
          className={clsx(
            getMainContentMargin(),
            getMainContentPadding(),
            !isDesktop && 'pt-2 sm:pt-4',
            isDesktop && 'pt-4 lg:pt-6',
            // REMOVE 'w-full' from here!
          )}
        >
          <div className={clsx(
            'mx-auto',
            screenSize === '2xl' ? 'max-w-7xl' : 'max-w-6xl'
          )}>
            <MainPage />
          </div>
        </div>
      </main>

      {/* Scroll to top button for mobile */}
      {isMobile && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}