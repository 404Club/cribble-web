'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const waitlistCount = 0

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add waitlist signup logic
    setIsSubmitted(true)
  }

  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 200px, transparent 300px),
      radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 24px 24px'
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4" style={backgroundStyle}>
        <div className="max-w-lg w-full text-center">
          <h1 className="text-3xl md:text-4xl font-normal text-white mb-4">
            You're on the waitlist! 🎉
          </h1>
          <p className="text-gray-400 text-base">
            We'll let you know when we're ready to launch.
          </p>
        </div>
        
        <div className="fixed bottom-8 text-center">
          <p className="text-gray-600 text-xs mb-2">backed by no one.</p>
          <div className="flex items-center justify-center space-x-4 text-gray-500">
            <a href="https://x.com/birdabo404" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com/404Club/cribble-web" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4" style={backgroundStyle}>
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
          a worldwide leaderboard
          <br />
          for developers.
        </h1>
        
        <div className="text-sm mb-8 max-w-lg mx-auto">
          <p className="text-gray-400 inline">
            Discover your rank among AI-powered developers globally.
          </p>
          <span className="text-white font-bold font-mono ml-2 text-xs">
            COMING SOON
          </span>
        </div>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-4">
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="hello@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-3 font-medium hover:bg-gray-200 transition-colors text-sm"
            >
              Join
            </button>
          </div>
        </form>

        <p className="text-gray-600 text-xs">
          {waitlistCount} developers waiting
        </p>
      </div>
      
      <div className="fixed bottom-8 text-center">
        <p className="text-gray-600 text-xs mb-2">backed by no one.</p>
        <div className="flex items-center justify-center space-x-4 text-gray-500">
          <a href="https://x.com/birdabo404" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://github.com/404Club/cribble-web" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}