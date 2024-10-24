'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const pages = ['About', 'Projects', 'Stack','Insights', 'Contact']
const memberPages = ['Login', 'SignUp']

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [memberMenuOpen, setMemberMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={120} height={50} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {pages.map((page) => (
              <NavItem
                key={page}
                href={`/${page.toLowerCase()}`}
                label={page}
                className="text-gray-800 hover:text-gray-600"
              />
            ))}
            <div className="relative">
              {/* <button
                onClick={() => setMemberMenuOpen(!memberMenuOpen)}
                className="flex items-center text-sm font-medium text-gray-800 transition-colors duration-200 hover:text-gray-600"
              >
                Member Zone
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${memberMenuOpen ? 'rotate-180' : ''}`}
                />
              </button> */}
              <AnimatePresence>
                {memberMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-300 ring-opacity-10 backdrop-blur-lg"
                  >
                    {memberPages.map((page) => (
                      <NavItem
                        key={page}
                        href={`/${page.toLowerCase()}`}
                        label={page}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-600 transition-colors duration-200"
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {pages.map((page) => (
                <NavItem
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  label={page}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-600"
                />
              ))}
              {/* <div className="space-y-1 border-t border-gray-300 pt-4">
                <p className="px-3 text-xs font-semibold uppercase text-gray-600">
                  Member Zone
                </p>
                {memberPages.map((page) => (
                  <NavItem
                    key={page}
                    href={`/${page.toLowerCase()}`}
                    label={page}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 hover:text-gray-600"
                  />
                ))}
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({
  href,
  label,
  className = '',
}: {
  href: string
  label: string
  className?: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`relative ${className} ${isActive ? 'text-gray-800' : 'text-gray-600'} transition-colors duration-200 hover:text-gray-800`}
    >
      {label}
      {isActive && (
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-800"
          layoutId="underline"
          initial={false}
        />
      )}
    </Link>
  )
}
