'use client'
import { GridLineHorizontal, GridLineVertical } from '@/components/grid-lines'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import { Heading } from './heading'
import { Subheading } from './subheading'

export const Features = () => {
  const features = [
    {
      title: (
        <span className="text-white">
          Diverse Software Engineering Experience
        </span>
      ),
      description: (
        <span className="text-white">
          From Ethiopian Airlines to NexusLabs Software Inc, I've contributed to
          a wide range of projects.
        </span>
      ),
      className: 'col-span-1 md:col-span-3 border-r dark:border-neutral-800',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: <span className="text-white">Strong Academic Background</span>,
      description: (
        <span className="text-white">
          Bachelor of Science in Software Engineering from Arbaminch University
          with a <b>CGPA of 3.71</b> & <b>76% National Exam</b>, demonstrating a
          solid foundation in software dev't.
        </span>
      ),
      className: 'col-span-1 md:col-span-3 border-r dark:border-neutral-800',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: <span className="text-white">Extensive Skill Set</span>,
      description: (
        <span className="text-white">
          Proficient in various technologies including React.js, Next.js,
          Python, Django, Node.js and more. Skilled in problem-solving and agile
          development practices.
        </span>
      ),
      className: 'col-span-1 md:col-span-3 border-r dark:border-neutral-800',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: (
        <span className="text-white">
          Continuous Learning and Certifications
        </span>
      ),
      description: (
        <span className="text-white">
          Multiple certifications from LinkedIn, Udemy, Simplilearn, Alison, and
          in areas such as Full-Stack Dev't, ML, Data Science, and Cloud
          Computing.
        </span>
      ),
      className: 'col-span-1 md:col-span-3',
      color: 'from-orange-500 to-amber-500',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 py-3 md:py-10"
    >
      <Heading
        as="h3"
        className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-700"
      >
        Expertise and Achievements
      </Heading>
      <Subheading className="text-center text-lg  mb-12">
        A combination of hands-on expertise, strong academic background, and a
        commitment to lifelong learning.
      </Subheading>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-6 mt-12 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index} // Use index as a fallback key
              className={feature.className}
              color={feature.color}
              index={index}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </motion.div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: '-10%',
            width: '120%',
          }}
        />
        <GridLineHorizontal
          style={{
            bottom: 0,
            left: '-10%',
            width: '120%',
          }}
        />
        <GridLineVertical
          style={{
            top: '-10%',
            right: 0,
            height: '120%',
          }}
        />
        <GridLineVertical
          style={{
            top: '-10%',
            left: 0,
            height: '120%',
          }}
        />
      </div>
    </motion.div>
  )
}

const FeatureCard = ({
  children,
  className,
  color,
  index,
}: {
  children?: React.ReactNode
  className?: string
  color: string
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={cn(
        `p-6 sm:p-8 relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300`,
        className
      )}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 transition-opacity duration-300`}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10 dark:bg-black/10" />
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.1)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 text-blue-500">{children}</div>
    </motion.div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading
      as="h3"
      size="sm"
      className="text-left font-semibold mb-3 bg-clip-text text-white"
    >
      {children}
    </Heading>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 md:text-sm my-2 font-semibold text-white">
      {children}
    </Subheading>
  )
}
