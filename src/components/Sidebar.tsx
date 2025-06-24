'use client';
import React, { useEffect, useState } from 'react';
import {
  Home, Mic, MessageSquare, Settings, User,
  Bell, Wrench, Music2, Zap, Rocket
} from 'lucide-react';
import clsx from 'clsx';

const Sidebar = ({ forceExpanded = false }: { forceExpanded?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const expanded = forceExpanded || (isDesktop && isExpanded);

  return (
    <div
      onMouseEnter={() => !forceExpanded && isDesktop && setIsExpanded(true)}
      onMouseLeave={() => !forceExpanded && isDesktop && setIsExpanded(false)}
      className={clsx(
        'h-screen border-r transition-all duration-300 flex flex-col justify-between',
        'bg-white text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700',
        expanded ? 'w-64' : 'w-16'
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        <span
          className={clsx(
            'text-lg font-bold tracking-wide transition-all duration-300 origin-left',
            expanded ? 'opacity-100 ml-2 scale-x-100' : 'opacity-0 ml-0 scale-x-0',
            'whitespace-nowrap'
          )}
          style={{
            width: expanded ? 'auto' : 0,
            display: expanded ? 'inline' : 'inline-block'
          }}
        >
          Neurovoice
        </span>
      </div>

      {/* Scrollable Section */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        <div className="space-y-2">
          <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" isExpanded={expanded} />
          <SidebarItem icon={<Mic className="w-5 h-5" />} label="Voices" isExpanded={expanded} />
        </div>
        <div>
          <SidebarSectionTitle isExpanded={expanded}>Playground</SidebarSectionTitle>
          <div className="space-y-2">
            <SidebarItem icon={<MessageSquare className="w-5 h-5" />} label="Text to Speech" isExpanded={expanded} />
            <SidebarItem icon={<Music2 className="w-5 h-5" />} label="Voice Changer" isExpanded={expanded} />
          </div>
        </div>
        <div>
          <SidebarSectionTitle isExpanded={expanded}>Products</SidebarSectionTitle>
          <div className="space-y-2">
            <SidebarItem icon={<Rocket className="w-5 h-5" />} label="Studio" isExpanded={expanded} />
            <SidebarItem icon={<Settings className="w-5 h-5" />} label="Dubbing" isExpanded={expanded} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-2 py-3 space-y-2">
        <SidebarItem icon={<Wrench className="w-5 h-5" />} label="Audio Tools" isExpanded={expanded} />
        <SidebarItem icon={<Bell className="w-5 h-5" />} label="Notifications" isExpanded={expanded} />
        <SidebarItem icon={<User className="w-5 h-5" />} label="Profile" isExpanded={expanded} />
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon, label, isExpanded
}: { icon: React.ReactNode, label: string, isExpanded: boolean }) => (
  <div className={clsx(
    'flex items-center min-h-[40px] px-3 py-2 rounded-md transition-all duration-200 cursor-pointer',
    'hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
  )}>
    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center leading-none">
      {icon}
    </span>
    <span className={clsx(
      'text-sm whitespace-nowrap transition-all duration-300 origin-left leading-none',
      isExpanded ? 'opacity-100 ml-2 scale-x-100 w-auto' : 'opacity-0 ml-0 scale-x-0 w-0'
    )}
      style={{ overflow: 'hidden', display: 'inline-block' }}>
      {label}
    </span>
  </div>
);

const SidebarSectionTitle = ({ isExpanded, children }: { isExpanded: boolean, children: React.ReactNode }) =>
  isExpanded ? (
    <h3 className="text-sm text-gray-500 dark:text-gray-400 px-2 mb-2 uppercase">{children}</h3>
  ) : <div className="h-6 mb-2" />;

export default Sidebar;
