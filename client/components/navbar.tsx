"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiTiktok,
} from "@icons-pack/react-simple-icons"

const navItems = [
  { name: "Home", href: "/" },
  { name: "RISBA 2026", href: "/risba-2026" },
  { name: "Events", href: "/events" },
  { name: "About Rang", href: "/about-us" },
  { name: "Partner", href: "/become-a-sponsor" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact-us" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full scale-3d animate-in duration-500">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 border-b border-white/10 bg-secondary/60 backdrop-blur-xl" />

      {/* Navbar Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 text-xl font-bold tracking-wider text-white transition-colors hover:text-white/80"
          >
            <img src="/logo.png" alt="Rang Logo" className="w-25" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-xs font-medium text-white uppercase transition-all duration-200 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="https://www.facebook.com/rangproductionofficial"
              target="_blank"
            >
              <SiFacebook className="mx-2 h-6 w-6 cursor-pointer text-white transition-colors hover:text-primary" />
            </Link>
            <Link
              href="https://www.instagram.com/rangproductionofficial"
              target="_blank"
            >
              <SiInstagram className="mx-2 h-6 w-6 cursor-pointer text-white transition-colors hover:text-primary" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCQJKJpJb2tt2E3TaudYVPYQ"
              target="_blank"
            >
              <SiYoutube className="mx-2 h-6 w-6 cursor-pointer text-white transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.tiktok.com/@rangproduction">
              <SiTiktok className="mx-2 h-6 w-6 cursor-pointer text-white transition-colors hover:text-primary" />
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 rounded-lg p-2 text-white transition-colors hover:bg-white/10 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-16 right-0 left-0 overflow-hidden border-b border-white/10 bg-black/90 backdrop-blur-2xl transition-all duration-300 ease-in-out md:hidden dark:bg-secondary/60 dark:backdrop-blur-xl",
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 border-b-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-primary transition-all duration-200 ease-in-out hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-white/10"
          >
            {theme === "dark" ? (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
