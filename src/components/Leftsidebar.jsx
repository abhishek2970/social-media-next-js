import Link from "next/link";
import React from "react";
import { CiRainbow } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { SignedIn, SignInButton, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function Leftsidebar() {
  return (
    <div className="flex flex-col items-center bg-white text-black h-full relative p-4">
      {/* Rainbow Icon - top corner */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-4xl hover:text-pink-400 transition-colors"
      >
        <CiRainbow />
      </Link>

      {/* Icons stack in the upper part */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors"
        >
          <IoMdHome className="text-2xl" />
          <span>Home</span>
        </Link>
      </div>

      {/* Auth Button - centered vertically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignedIn>
          <SignOutButton className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform">
            Sign Out
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform">
            Sign In
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
