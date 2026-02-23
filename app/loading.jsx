import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaSpinner className="text-blue-500 text-6xl animate-spin" />
      <p className="text-gray-500 mt-4 text-xl">Loading...</p>
    </div>
  )
}