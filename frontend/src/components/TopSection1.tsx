'use client'

import Image from 'next/image'
import Sidebar from './Sidebar'

export default function TopSection1() {
  return (
    <section className="flex min-h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-between px-10 md:px-20 bg-gradient-to-l from-[#121212] via-[#1A1A1A] to-[#232323]">
        <div>
          <h1 className="text-3xl md:text-5xl font-light">
            BUILD <span className="font-bold">DNA</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Build a DNA on Soundverse and earn passive income as your DNA is used by other creators.&nbsp;
            <a href="#" className="underline hover:text-gray-200 transition">Learn more</a>.
          </p>
        </div>

        {/* Avatar - always visible */}
        <div>
          <Image
            src="/avatar.png"
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}
