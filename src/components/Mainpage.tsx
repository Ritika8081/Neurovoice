'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const MainPage = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const username = 'Ritika'
  const appName = 'Neurovoice'
  const version = 'v1.0.0'

  const cards = [
    { title: 'Voice Studio', img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=' },
    { title: 'Text to Speech', img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=' },
    { title: 'Voice Changer',  img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=' },
    { title: 'Dubbing Tool',  img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY='},
    { title: 'Library',  img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY=' },
    { title: 'Audio Editor',  img: 'https://media.istockphoto.com/id/506040816/photo/modern-desktop-pc-with-curved-screen.jpg?s=612x612&w=0&k=20&c=0ZjhDRbcyZnKfOOHNBw5U_H5pqyg13LHLRb0B5iDgUY='},
  ]

  const latestLibrary = [
    { title: 'Dance app', img: '/library/', type: 'Voice Clone' },
    { title: 'Music app', img: '/library/', type: 'TTS Output' },
    { title: 'Podcast app', img: '/library/', type: 'Recording' },
  ]

  const createVoiceOptions = [
    { title: 'Clone Voice', icon: '🎭' },
    { title: 'Record Voice', icon: '🎙️' },
    { title: 'Upload Sample', icon: '📤' },
  ]

  return (
    <div className="container mx-auto max-w-full px-2 sm:px-4 md:px-8 pt-12 pb-6 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-baseline mb-4 gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {appName} <span className="text-sm text-gray-500 dark:text-gray-400">{version}</span>
        </h1>
      </div>
      {/* Greeting */}
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Good Morning, {username} 👋</h2>
      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer flex flex-col"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <Image src={card.img} alt={card.title} width={300} height={200} className="w-full h-32 sm:h-24 object-cover" />
            <div className="p-2 text-center text-sm font-medium">{card.title}</div>
          </div>
        ))}
      </div>
      {/* Bottom Section: Library & Create Voice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest From Library */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-3">📚 Latest from Library</h3>
          <div className="space-y-4">
            {latestLibrary.map((item, idx) => (
              <div key={idx} className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md">
                <Image src={item.img} alt={item.title} width={48} height={48} className="rounded-md mr-3" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Create a Voice */}
        <div>
          <h3 className="text-lg font-semibold mb-3">🎤 Create a Voice</h3>
          <div className="space-y-3">
            {createVoiceOptions.map((option, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm hover:shadow-md cursor-pointer"
              >
                <span className="text-xl mr-3">{option.icon}</span>
                <span className="font-medium">{option.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
