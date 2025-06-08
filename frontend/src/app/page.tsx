export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Cribble.dev
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Track your AI dependency. Compare with developers worldwide.
          </p>
          
          {/* Test Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">STATUS</span>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-semibold">
                AI Minimalist
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              The ultimate leaderboard for AI-powered developers
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}