// Updated Responsive MainPage.tsx
'use client'
import React, { useState } from 'react'
import { Moon, Sun, Mic, Upload, Copy, Play, Library, Settings, User } from 'lucide-react'
import { useTheme } from './ThemeContex'

const MainPage = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { darkMode, toggleDarkMode } = useTheme()
    const username = 'Ritika'
    const appName = 'Neurovoice'
    const version = 'v1.0.0'

    const cards = [
        {
            title: 'Voice Studio',
            icon: '🎭',
            description: 'Voice editing',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Text to Speech',
            icon: '📢',
            description: 'Convert text',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Voice Changer',
            icon: '🎪',
            description: 'Voice',
            gradient: 'from-green-500 to-teal-500'
        },
        {
            title: 'Dubbing Tool',
            icon: '🎬',
            description: 'Dubbing',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Voice Library',
            icon: '📚',
            description: 'Manage voice',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Audio Editor',
            icon: '🎵',
            description: 'enhance audio',
            gradient: 'from-pink-500 to-rose-500'
        },
    ]

    const latestLibrary = [
        { title: 'Dance Advertisement', type: 'Voice Clone', duration: '2:34', date: '2 hours ago' },
        { title: 'Music Podcast Intro', type: 'TTS Output', duration: '0:45', date: '1 day ago' },
        { title: 'Educational Content', type: 'Recording', duration: '15:22', date: '3 days ago' },
    ]

    const createVoiceOptions = [
        {
            title: 'Clone Voice',
            icon: Copy,
            description: 'Create AI voice from samples',
            color: 'text-purple-500'
        },
        {
            title: 'Record Voice',
            icon: Mic,
            description: 'Record new voice samples',
            color: 'text-blue-500'
        },
        {
            title: 'Upload Sample',
            icon: Upload,
            description: 'Import audio files',
            color: 'text-green-500'
        },
    ]

    return (
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900">
            <div className="container mx-auto max-w-full 2xl:max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12">
                {/* Header - Responsive: App name and user in one row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-4">
                    {/* App Name */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm sm:text-lg">N</span>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white truncate">
                            {appName}
                        </h1>
                    </div>
                    {/* User Info */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-gray-200 dark:border-gray-700 min-w-0 flex-shrink-0">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-20 sm:max-w-none">{username}</span>
                        </div>
                    </div>
                </div>

                {/* Greeting - Responsive text */}
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        Good Morning, {username} 👋
                    </h2>
                </div>

                {/* Feature Cards - Improved responsive grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:scale-105 min-h-[120px] sm:min-h-[140px]"
                            onMouseEnter={() => setIsExpanded(true)}
                            onMouseLeave={() => setIsExpanded(false)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className="p-3 sm:p-4 md:p-6 text-center relative z-10 h-full flex flex-col justify-center">
                                <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">{card.icon}</div>
                                <div className="font-semibold text-gray-900 dark:text-white mb-1 text-xs sm:text-sm leading-tight">
                                    {card.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight hidden sm:block">
                                    {card.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section - Improved responsive layout */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
                    {/* Latest From Library */}
                    <div className="xl:col-span-2 order-1 xl:order-1">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <Library className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Latest from Library</h3>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            {latestLibrary.map((item, idx) => (
                                <div key={idx} className="group flex items-center bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 cursor-pointer">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">{item.title}</p>
                                        <div className="flex items-center gap-2 sm:gap-3 mt-1 flex-wrap">
                                            <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">{item.type}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.duration}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Create a Voice */}
                    <div className="order-2 xl:order-2">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Create a Voice</h3>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            {createVoiceOptions.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-center bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                                >
                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center mr-3 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors flex-shrink-0`}>
                                        <option.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${option.color}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{option.title}</div>
                                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-0">{option.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage