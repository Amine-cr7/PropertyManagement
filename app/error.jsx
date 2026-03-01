"use client";
import React from 'react'
import Link from 'next/link'
import { FaExclamationCircle } from 'react-icons/fa'

export default function ErrorPage({error}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaExclamationCircle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">Something Went Error</h1>
      <p className="text-gray-500 mb-6">{error.toString() }</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
        Go Home
      </Link>
    </div>
  )
}