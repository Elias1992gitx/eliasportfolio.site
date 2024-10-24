'use client'
import { useState, useRef, useEffect } from 'react'
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface StackCardProps {
  item: any
  index: number
}

const stackItems = [
  {
    name: 'React.js',
    description: 'A JavaScript library for building user interfaces.',
    category: 'Development',
    link: 'https://reactjs.org/',
    icon: '⚛️',
  },
  // Additional technology stacks
  {
    name: 'Next.js',
    description: 'A React framework for production.',
    category: 'Development',
    link: 'https://nextjs.org/',
    icon: '⚛️',
  },
  {
    name: 'Visual Studio Code',
    description: 'My go-to code editor for all development work.',
    category: 'Development',
    link: 'https://code.visualstudio.com/',
    icon: '💻',
  },
  {
    name: 'GitHub',
    description: 'Platform for version control and collaboration.',
    category: 'Development',
    link: 'https://github.com/',
    icon: '🐙',
  },
  {
    name: 'Figma',
    description: 'For all my design needs and collaborating with designers.',
    category: 'Design',
    link: 'https://www.figma.com/',
    icon: '🎨',
  },
  {
    name: 'Notion',
    description: 'Where I keep all my notes, docs, and project management.',
    category: 'Productivity',
    link: 'https://www.notion.so/',
    icon: '📝',
  },
  {
    name: 'Vercel',
    description: 'My preferred platform for deploying web applications.',
    category: 'Hosting',
    link: 'https://vercel.com/',
    icon: '🚀',
  },
  // {
  //   name: 'Spotify',
  //   description: 'For music while I work and discovering new tunes.',
  //   category: 'Entertainment',
  //   link: 'https://www.spotify.com/',
  //   icon: '🎵',
  // },

  // Additional technology stacks

  {
    name: 'Slack',
    description: 'Communication and collaboration tool for teams.',
    category: 'Productivity',
    link: 'https://slack.com/',
    icon: '💬',
  },
  {
    name: 'Adobe Photoshop',
    description: 'Software for photo editing and graphic design.',
    category: 'Design',
    link: 'https://www.adobe.com/products/photoshop.html',
    icon: '🖌️',
  },
  {
    name: 'AWS',
    description: 'Cloud computing services for hosting and more.',
    category: 'Hosting',
    link: 'https://aws.amazon.com/',
    icon: '☁️',
  },
 
  // Additional technology stacks
 

  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.',
    category: 'Design',
    link: 'https://tailwindcss.com/',
    icon: '🎨',
  },
  {
    name: 'TypeScript',
    description:
      'A typed superset of JavaScript that compiles to plain JavaScript.',
    category: 'Development',
    link: 'https://www.typescriptlang.org/',
    icon: '📝',
  },
  {
    name: 'ASP.NET Core',
    description:
      'A cross-platform, high-performance framework for building modern, cloud-based, Internet-connected applications.',
    category: 'Development',
    link: 'https://dotnet.microsoft.com/apps/aspnet',
    icon: '🌐',
  },
  {
    name: 'SQL Server',
    description:
      'A relational database management system developed by Microsoft.',
    category: 'Database',
    link: 'https://www.microsoft.com/en-us/sql-server',
    icon: '💾',
  },

  {
    name: 'MongoDB',
    description:
      'A document-oriented NoSQL database used for high volume data storage.',
    category: 'Database',
    link: 'https://www.mongodb.com/',
    icon: '🍃',
  },
  {
    name: 'PostgreSQL',
    description: 'A powerful, open source object-relational database system.',
    category: 'Database',
    link: 'https://www.postgresql.org/',
    icon: '🐘',
  },
  {
    name: 'Python',
    description:
      'A versatile programming language known for its ease of use and readability.',
    category: 'Development',
    link: 'https://www.python.org/',
    icon: '🐍',
  },
  {
    name: 'Django',
    description:
      'A high-level Python web framework that encourages rapid development.',
    category: 'Development',
    link: 'https://www.djangoproject.com/',
    icon: '🌐',
  },
  {
    name: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    category: 'Development',
    link: 'https://nodejs.org/',
    icon: '🟢',
  },
  {
    name: 'NestJS',
    description:
      'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
    category: 'Development',
    link: 'https://nestjs.com/',
    icon: '🚀',
  },
  {
    name: 'Odoo',
    description: 'An open-source suite of business applications.',
    category: 'ERP',
    link: 'https://www.odoo.com/',
    icon: '🧩',
  },
  {
    name: 'ERPNext',
    description: 'An open-source ERP solution for businesses of all sizes.',
    category: 'ERP',
    link: 'https://erpnext.com/',
    icon: '📊',
  },

  {
    name: 'Express.js',
    description: 'A minimal and flexible Node.js web application framework.',
    category: 'Development',
    link: 'https://expressjs.com/',
    icon: '🚂',
  },
  {
    name: 'Docker',
    description:
      'A platform for developing, shipping, and running applications in containers.',
    category: 'DevOps',
    link: 'https://www.docker.com/',
    icon: '🐳',
  },
  {
    name: 'Digital Ocean',
    description:
      'A cloud infrastructure provider offering cloud services to help deploy and scale applications.',
    category: 'Hosting',
    link: 'https://www.digitalocean.com/',
    icon: '☁️',
  },
  {
    name: 'Hostinger',
    description:
      'A web hosting provider offering a variety of hosting services.',
    category: 'Hosting',
    link: 'https://www.hostinger.com/',
    icon: '🌐',
  },
  {
    name: 'Heroku',
    description:
      'A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
    category: 'Hosting',
    link: 'https://www.heroku.com/',
    icon: '🚀',
  },
]

const categories = Array.from(new Set(stackItems.map((item) => item.category)))

const StackCard: React.FC<StackCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    // Smooth out the movement
    x.set(mouseX * 0.1)
    y.set(mouseY * 0.1)
  }

  const handleMouseLeave = () => {
    // Smooth return to original position
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        z: 100,
        transition: 'all 0.15s ease', // Smooth transition for all properties
      }}
    >
      <Card className="bg-transparent backdrop-blur-sm rounded-lg overflow-hidden relative group h-full border border-gray-800 hover:border-blue-500 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-20"></div>
        <motion.div
          className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        />
        <CardContent className="p-6 relative z-10 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 fancy-text">
              {item.name}
            </h2>
          </div>
          <p className="text-gray-300 mb-4 flex-grow fancy-text-description">
            {item.description}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 group fancy-text-link"
              whileHover={{ x: 5 }}
            >
              Learn More
              <motion.span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </motion.a>
            <Badge
              variant="outline"
              className="bg-gray-800/50 text-gray-300 border-blue-500/50 fancy-text-badge"
            >
              {item.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function StackPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const searchInputRef = useRef(null)
  const searchAnimation = useAnimation()

  useEffect(() => {
    searchAnimation.start({
      boxShadow: [
        '0 0 0 0 rgba(59, 130, 246, 0)',
        '0 0 0 10px rgba(59, 130, 246, 0.1)',
        '0 0 0 20px rgba(59, 130, 246, 0)',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    })
  }, [searchAnimation])

  const filteredItems = stackItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  )

  return (
    <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzIiBjeT0iNCIgcj0iMC43IiBmaWxsPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjQiIGN5PSIyNSIgcj0iMC43IiBmaWxsPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjI1IiBjeT0iOSIgcj0iMC43IiBmaWxsPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjQ4IiBjeT0iMzAiIHI9IjAuNyIgZmlsbD0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSI0MyIgY3k9IjQ4IiByPSIwLjciIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMTgiIGN5PSI0NiIgcj0iMC43IiBmaWxsPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-5 animate-pulse"></div>
      <motion.h1
        className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-purple-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Technology Ecosystem
      </motion.h1>
      <motion.p
        className="text-gray-400 mb-6 text-sm sm:text-base text-center max-w-2xl mx-auto fancy-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Here's a comprehensive list of the software and services I use in my
        daily life. These tools help me stay productive, creative, and
        connected.
      </motion.p>
      <motion.div
        className="mb-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <motion.div
            animate={searchAnimation}
            className="absolute inset-0 rounded-md pointer-events-none"
          />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search my stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 bg-gray-800/50 backdrop-blur-sm border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-2 ${
            selectedCategory === 'All'
              ? 'border-blue-500 text-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
              : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5'
          } fancy-text-button`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border-2 ${
              selectedCategory === category
                ? 'border-blue-500 text-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5'
            } fancy-text-button`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {filteredItems.map((item, index) => (
          <StackCard key={item.name} item={item} index={index} />
        ))}
      </motion.div>
    </div>
  )
}
