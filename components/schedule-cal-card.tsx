'use client'

import Cal from '@calcom/embed-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ShinyButton from './magicui/shiny-button'

export function ScheduleCallCard() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`fixed bottom-6 right-6 z-50 ${
        isExpanded
          ? 'w-[90vw] h-[90vh] max-w-[1280px] max-h-[1280px]'
          : 'w-[320px]'
      }`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="bg-black/50 backdrop-blur-md p-6 overflow-hidden relative shadow-lg h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 to-blue-500/20 opacity-40"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
        <div className="relative z-10 flex flex-col h-full overflow-y-auto">
          <button
            onClick={() => {
              setShowCalendar(false)
              setIsExpanded(false)
            }}
            className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="text-sm font-semibold mb-2 text-white text-center">
            ✨ Schedule a call ✨
          </h3>
          <p className="text-xs mb-3 text-white/80 text-center">
            Feel free to reach out to me for innovative projects or strategic
            partnerships.
          </p>
          {!showCalendar ? (
            <ShinyButton
              text="Schedule"
              className="w-full text-xs py-2"
              onClick={() => {
                setShowCalendar(true)
                setIsExpanded(true)
              }}
            />
          ) : (
            <div className="flex-grow">
              <Cal
                calLink="eliasportfolio.site/30min"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: isExpanded ? '670px' : '350px',
                }}
                config={{ layout: 'month_view' }}
              />
            </div>
          )}
          {showCalendar && (
            <button
              className="mt-4 w-full text-xs py-2 text-white/80 hover:text-white transition-colors"
              onClick={() => {
                setShowCalendar(false)
                setIsExpanded(false)
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
