"use client"

import { useState } from "react"
import { Plus, Minus, RotateCcw, Users, Clock } from "lucide-react"

function Hooks() {
  const [increment, setIncrement] = useState<number>(0)
  const [friendsToShow, setFriendsToShow] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const friends: string[] = ["david", "alice", "derick", "kevin", "keilla"]

  function handleToggling() {
    setIsLoading(true)
    setFriendsToShow([])
    friends.forEach((friend, index) => {
      setTimeout(
        () => {
          setFriendsToShow((prev) => [...prev, friend])
          if (index === friends.length - 1) {
            setIsLoading(false)
          }
        },
        (index + 1) * 2000,
      )
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Counter Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Counter Demo</h2>
        </div>

        <div className="p-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4">
              <span className="text-3xl font-bold text-emerald-700">{increment}</span>
            </div>
            <p className="text-gray-600">Current Count</p>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => setIncrement((prev) => prev + 1)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Increment
            </button>
            <button
              onClick={() => setIncrement((prev) => prev - 1)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <Minus className="w-4 h-4" />
              Decrement
            </button>
            <button
              onClick={() => setIncrement(0)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5" />
            My Childhood Friends
          </h2>
        </div>

        <div className="p-8">
          <div className="mb-6">
            {friendsToShow.length > 0 ? (
              <div className="grid gap-3">
                {friendsToShow.map((friend, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-100 animate-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{friend.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-gray-900 font-semibold capitalize">{friend}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No friends shown yet...</p>
                <p className="text-sm text-gray-400 mt-1">Click the button below to reveal them one by one!</p>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={handleToggling}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  Revealing Friends...
                </>
              ) : (
                <>
                  <Users className="w-4 h-4" />
                  View Your Friends
                </>
              )}
            </button>
            {isLoading && <p className="text-sm text-gray-500 mt-2">Friends appear every 2 seconds...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hooks
