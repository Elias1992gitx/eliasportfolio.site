'use client'
import { motion, useAnimation } from 'framer-motion'
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/elias-chane-232804248/',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Elias1992gitx',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/eliaschane3/',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/elias.hailu.52493',
  },
  {
    name: 'Email',
    icon: Mail, // Updated icon
    url: 'mailto:eliashailu492@gmail.com', // Updated URL
  },
]

export default function Footer() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <footer className="relative w-full bg-white text-gray-800 py-12 shadow-lg">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 bg-center bg-cover mix-blend-overlay"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={0}
          >
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={100} height={70} />
            </Link>
            <p className="text-gray-600">
              Crafting digital experiences with passion and precision.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={1}
          >
            <h4 className="text-lg font-semibold text-gray-800">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={2}
          >
            <h4 className="text-lg font-semibold text-gray-800">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          custom={3}
        >
          <p className="text-gray-600 text-sm">
            © 2024 | Powered by{' '}
            <Link
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:text-purple-600 transition-colors duration-300"
              rel="noreferrer"
            >
              Elias Chane
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
