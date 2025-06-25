'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Play, Pause, Volume2, Settings, History, Plus, X, Mic, Star, Brain, Laugh, MessageSquare, RotateCcw, Layers } from 'lucide-react';

const TextToSpeechPage = () => {
    const [text, setText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState('Settings');
    const [symmetricMargin, setSymmetricMargin] = useState(false);

    const speakers = [
        { name: 'Ritika', color: 'bg-green-500', active: true }
    ];

    const historyItems = [
        {
            text: "hey, Ritika! Have you tried this",

        },
        {
            text: "hey, Ritikas! Have you tried ",

        }
    ];

    const quickActions = [
        { icon: Brain, text: "Examine AI tech" },
        { icon: Mic, text: "Discover your voice" },
        { icon: Laugh, text: "Laugh uncontrollably" },
        { icon: MessageSquare, text: "Construct a dialogue" },
        { icon: RotateCcw, text: "Recall a haunting memory" },
        { icon: Layers, text: "Overlap speech" }
    ];

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <Sidebar
                symmetricMargin={symmetricMargin}
                setSymmetricMargin={setSymmetricMargin}
            />

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* Text Input Area */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-gray-900">Text to Speech</h1>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-gray-900">
                                <span className="text-sm">💬 Feedback</span>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                                <span className="text-sm">📖 Documentation</span>
                            </button>

                        </div>
                    </div>

                    {/* Speaker Section */}
                    <div className="bg-white px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            {speakers.map((speaker, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <div className={`w-3 h-3 ${speaker.color} rounded-full`}></div>
                                    <span className="text-sm font-medium text-gray-900">{speaker.name}</span>
                                </div>
                            ))}
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 ml-4">
                                <Plus className="w-4 h-4" />
                                <span className="text-sm">Add speaker</span>
                            </button>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="flex-1 bg-white p-6">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Start typing here or paste any text you want to turn into lifelike speech..."
                            className="w-full h-40 resize-none border-0 outline-none text-gray-700 placeholder-gray-400 text-base leading-relaxed"
                        />
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white px-6 py-4 border-t border-gray-200">
                        <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Get started with</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        <action.icon className="w-4 h-4 text-gray-600" />
                                        <span className="text-sm text-gray-700">{action.text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Language Selection */}
                    <div className="bg-white px-6 py-3 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div>
                                <span>English (India)</span>
                                <br />
                                <span>English (India)</span>
                            </div>
                            <div className="text-right">
                                <span>To switch input methods, press Windows key + space.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-80 bg-white border-l border-gray-200">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200">
                        {['Settings', 'History'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 px-4 py-3 text-sm font-medium ${activeTab === tab
                                        ? 'text-gray-900 border-b-2 border-gray-900'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4">
                        {activeTab === 'History' && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        placeholder="Search history..."
                                        className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm"
                                    />
                                    <button className="ml-2 p-2 hover:bg-gray-100 rounded">
                                        <Settings className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {historyItems.map((item, index) => (
                                        <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                            <p className="text-sm text-gray-900 mb-2">{item.text}</p>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Settings' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Voice Model
                                    </label>
                                    <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm">
                                        <option>option 1</option>
                                        <option>option 2</option>
                                    </select>
                                </div>


                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextToSpeechPage;