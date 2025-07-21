'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { Play, Pause, Settings, History, Plus, Waves, Mic, Eye, Laugh, MessageSquare, RotateCcw, Layers, Search } from 'lucide-react';


const SignalVisualizationPage: React.FC = () => {
   
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState<'settings' | 'history'>('history');
    const [signalData, setSignalData] = useState<number[]>([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
    
     const [symmetricMargin, setSymmetricMargin] = useState(false);

    // Generate random signal data for visualization
    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setSignalData(prev => {
                    const newData = [...prev, Math.random() * 100];
                    return newData.slice(-60); // Keep only last 60 points
                });
            }
        }, 80);

        return () => clearInterval(interval);
    }, [isPlaying]);


    const togglePlayback = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            setSignalData([]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-hidden">
              <Sidebar
                symmetricMargin={symmetricMargin}
                setSymmetricMargin={setSymmetricMargin}
            />
            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed top-6 left-6 z-50 md:hidden bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-200/50"
            >
                <div className="w-4 h-4 flex flex-col justify-between">
                    <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-full h-0.5 bg-gray-600 rounded-full"></div>
                </div>
            </button>

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="md:hidden w-8"></div>
                        <div>
                            <h1 className="text-xl font-medium text-gray-900">Signal Visualization</h1>
                            <p className="text-sm text-gray-500 mt-0.5">Real-time audio analysis</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                            className="lg:hidden bg-gray-100/80 hover:bg-gray-200/80 p-2.5 rounded-lg transition-colors"
                        >
                            <History size={18} />
                        </button>
                        <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-emerald-700">Live</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Content Area */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        {/* Signal Visualization */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900 mb-1">Audio Signal</h2>
                                    <p className="text-sm text-gray-500">Real-time waveform visualization</p>
                                </div>
                                <button
                                    onClick={togglePlayback}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                                        isPlaying
                                            ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/25'
                                            : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25'
                                    }`}
                                >
                                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                                    <span>{isPlaying ? 'Stop' : 'Start'}</span>
                                </button>
                            </div>

                            <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/30 flex items-end justify-center px-6 overflow-hidden relative">
                                {signalData.length === 0 ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                           
                                            <p className="text-gray-400 text-sm">Click "Start" to begin visualization</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-end justify-center space-x-1 h-full py-4">
                                      
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80 bg-white/80 backdrop-blur-sm border-l border-gray-200/50 flex flex-col">
                        {/* Tab Headers */}
                        <div className="flex p-2 bg-gray-50/50">
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    activeTab === 'settings'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                }`}
                            >
                                <Settings size={16} className="inline mr-2" />
                                Settings
                            </button>
                            <button
                                onClick={() => setActiveTab('history')}
                                className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                                    activeTab === 'history'
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                }`}
                            >
                                <History size={16} className="inline mr-2" />
                                History
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="flex-1 p-6">
                            {activeTab === 'history' && (
                                <div className="space-y-6">
                                    <div className="relative">
                                        <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search sessions..."
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200/50 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 focus:bg-white transition-all"
                                        />
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">June 2025</p>
                                        <div className="space-y-3">
                                           
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Voice Model
                                        </label>
                                        
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Signal Quality
                                        </label>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>Standard</span>
                                                <span>High</span>
                                            </div>
                                          
                                        </div>
                                    </div>

                                    <div>
                                       
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignalVisualizationPage;