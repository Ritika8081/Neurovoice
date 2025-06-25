// Updated Sidebar.tsx
'use client';
import React, { useEffect, useState } from 'react';
import {
  Home, Mic, MessageSquare, Settings, User,
  Bell, Wrench, Music2, Zap, Rocket
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const Sidebar = ({
  forceExpanded = false,
  symmetricMargin,
  setSymmetricMargin,
  onToggleSymmetricMargin
}: {
  forceExpanded?: boolean,
  symmetricMargin: boolean,
  setSymmetricMargin: React.Dispatch<React.SetStateAction<boolean>>,
  onToggleSymmetricMargin?: () => void
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [manualExpand, setManualExpand] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1020);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const expanded = forceExpanded || (isDesktop && isExpanded);

  return (
    <div
      onMouseEnter={() => {
        if (!forceExpanded && isDesktop && !manualExpand) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (!forceExpanded && isDesktop && !manualExpand) setIsExpanded(false);
      }}
      className={clsx(
        'h-screen border-r transition-all duration-300 flex flex-col justify-between',
        'bg-white text-gray-900 border-gray-200',
        'dark:bg-gray-900 dark:text-white dark:border-gray-700',
        expanded ? 'w-64' : 'w-16'
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className={clsx(
          'text-lg font-bold tracking-wide transition-all duration-300 origin-left',
          expanded ? 'opacity-100 ml-2 scale-x-100' : 'opacity-0 ml-0 scale-x-0',
          'whitespace-nowrap'
        )}>
          Neurovoice
        </span>
        {expanded && setSymmetricMargin && (
          <button
            onClick={() => {
              if (!symmetricMargin) {
                setSymmetricMargin(true);
                setIsExpanded(true);
                setManualExpand(true);
              } else {
                setSymmetricMargin(false);
                setIsExpanded(false);
                setManualExpand(false);
              }
            }}
            className="ml-auto p-1 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            title="Toggle Margin"
            type="button"
          >
            <svg width="1.4rem" height="1.4rem" viewBox="0 0 20 20" fill="none">
              <path
                d="M9.37484 3.95834H4.7915C3.41079 3.95834 2.2915 5.07763 2.2915 6.45834V13.5417C2.2915 14.9224 3.41079 16.0417 4.7915 16.0417H9.37484M9.37484 3.95834H15.2082C16.5889 3.95834 17.7082 5.07763 17.7082 6.45834V13.5417C17.7082 14.9224 16.5889 16.0417 15.2082 16.0417H9.37484M9.37484 3.95834V16.0417"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-1">
          <SidebarSectionTitle isExpanded={expanded}>Main</SidebarSectionTitle>
          <Link href="/" className="block">
            <SidebarItem
              icon={<Home className="w-5 h-5" />}
              label="Dashboard"
              isExpanded={expanded}
              active
            />
          </Link>
          <SidebarItem icon={<Mic className="w-5 h-5" />} label="Voice Library" isExpanded={expanded} />
        </div>

        {/* Tools */}
        <div className="space-y-1">
          <SidebarSectionTitle isExpanded={expanded}>Tools</SidebarSectionTitle>
          <Link href="/texttospeech" className="block">
            <SidebarItem
              icon={<MessageSquare className="w-5 h-5" />}
              label="Text to Speech"
              isExpanded={expanded}
            />
          </Link>
          <SidebarItem icon={<Music2 className="w-5 h-5" />} label="Voice Changer" isExpanded={expanded} />
          <SidebarItem icon={<Rocket className="w-5 h-5" />} label="Voice Studio" isExpanded={expanded} />
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Dubbing Tool" isExpanded={expanded} />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-2 py-3 space-y-1">
        <SidebarItem icon={<Wrench className="w-5 h-5" />} label="Audio Tools" isExpanded={expanded} />
        <SidebarItem icon={<Bell className="w-5 h-5" />} label="Notifications" isExpanded={expanded} />
        <SidebarItem icon={<User className="w-5 h-5" />} label="Profile" isExpanded={expanded} />
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon, label, isExpanded, active = false
}: { icon: React.ReactNode, label: string, isExpanded: boolean, active?: boolean }) => (
  <div className={clsx(
    'flex items-center min-h-[42px] px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group',
    active
      ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
    'gap-3'
  )}>
    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center leading-none">
      {icon}
    </span>
    <span className={clsx(
      'text-sm font-medium whitespace-nowrap transition-all duration-300 origin-left leading-none',
      isExpanded ? 'opacity-100 ml-2 scale-x-100 w-auto' : 'opacity-0 ml-0 scale-x-0 w-0'
    )}
      style={{ overflow: 'hidden', display: 'inline-block' }}>
      {label}
    </span>
  </div>
);

const SidebarSectionTitle = ({ isExpanded, children }: { isExpanded: boolean, children: React.ReactNode }) =>
  isExpanded ? (
    <h3 className="text-xs text-gray-500 dark:text-gray-400 px-3 mb-2 uppercase tracking-wider font-semibold">
      {children}
    </h3>
  ) : <div className="h-4 mb-2" />;

export default Sidebar;