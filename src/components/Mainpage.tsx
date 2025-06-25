// Updated MainPage.tsx
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
            description: 'Advanced voice editing',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Text to Speech',
            icon: '📢',
            description: 'Convert text to natural voice',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Voice Changer',
            icon: '🎪',
            description: 'Transform your voice',
            gradient: 'from-green-500 to-teal-500'
        },
        {
            title: 'Dubbing Tool',
            icon: '🎬',
            description: 'Professional dubbing',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'Voice Library',
            icon: '📚',
            description: 'Manage voice collections',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Audio Editor',
            icon: '🎵',
            description: 'Edit and enhance audio',
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
        <div className="min-h-screen transition-colors duration-300 ">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {appName}
                                </h1>

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* <button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:scale-105"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button> */}
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{username}</span>
                        </div>
                    </div>
                </div>

                {/* Greeting */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        Good Morning, {username} 👋
                    </h2>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:scale-105"
                            onMouseEnter={() => setIsExpanded(true)}
                            onMouseLeave={() => setIsExpanded(false)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className="p-6 text-center relative z-10">
                                <div className="text-3xl mb-3">{card.icon}</div>
                                <div className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                                    {card.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {card.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Latest From Library */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Library className="w-5 h-5 text-purple-500" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Latest from Library</h3>
                        </div>
                        <div className="space-y-3">
                            {latestLibrary.map((item, idx) => (
                                <div key={idx} className="group flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 cursor-pointer">
                                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <Play className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 dark:text-white truncate">{item.title}</p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{item.type}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.duration}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Create a Voice */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Mic className="w-5 h-5 text-blue-500" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create a Voice</h3>
                        </div>
                        <div className="space-y-3">
                            {createVoiceOptions.map((option, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                                >
                                    <div className={`w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center mr-3 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors`}>
                                        <option.icon className={`w-5 h-5 ${option.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-900 dark:text-white text-sm">{option.title}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{option.description}</div>
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