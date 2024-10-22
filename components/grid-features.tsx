import { cn } from '@/lib/utils'

import {
  IconBrandDjango,
  IconBrandFlutter,
  IconBrandIntercom,
  IconBrandMongodb,
  IconBrandReact,
  IconCloud,
  IconCode,
  IconDeviceAnalytics,
} from '@tabler/icons-react'

export const GridFeatures = () => {
  const features = [
    {
      title: 'Full-Stack Web Development',
      description:
        'Capable of handling both frontend and backend development, creating comprehensive web solutions.',
      icon: <IconCode />,
      color: 'text-blue-700', // Updated color
    },

    {
      title: 'React.js & Next.js',
      description:
        'Skilled in creating dynamic and responsive user interfaces using React.js and Next.js frameworks.',
      icon: <IconBrandReact />,
      color: 'text-cyan-700', // Updated color
    },
    {
      title: 'Node.js & NestJS',
      description:
        'Experienced in building efficient, scalable server-side apps using Node.js and the NestJS frameworks.',
      icon: <IconBrandReact />,
      color: 'text-rose-700', // Updated color
    },
    {
      title: 'Python & Django',
      description:
        'Proficient in backend development using Django, creating robust and scalable web applications.',
      icon: <IconBrandDjango />,
      color: 'text-purple-700', // Updated color
    },
    {
      title: 'MongoDB & PostgreSQL',
      description:
        'Experiance in designing and implementing scalable DB solutions using MongoDB for NoSQL and PostgreSQL for relational data mgt.',
      icon: <IconBrandMongodb />,
      color: 'text-green-700', // Updated color
    },
   {
  title: 'Software Customization',
  description: 'Experienced in customizing enterprise resource planning (ERP) systems such as Odoo ERP and ERPNext to meet business needs.',
  icon: <IconBrandIntercom />,
  color: 'text-indigo-700',// Appropriate color for software customization
},
    {
      title: 'Cloud Computing',
      description:
        'Knowledgeable in cloud technologies, with experience in deploying and managing applications on cloud platforms.',
      icon: <IconCloud />,
      color: 'text-purple-700', // Updated color
    },
    {
      title: 'AI, ML & Data Science',
      description: 'Basic Skills in AI, machine learning, and data science techniques, leveraging them to analyze data, extract insights, and develop predictive models.',
      icon: <IconDeviceAnalytics />,
      color: 'text-cyan-700',// Suitable for AI/ML and data science themes
    },
    
  
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 bg-white">
      {' '}
      {/* Updated background color */}
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
  color,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
  color: string
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group',
        (index === 0 || index === 4) && 'lg:border-l',
        index < 4 && 'lg:border-b',
        'border-gray-300' // Updated border color
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm bg-white/20" />{' '}
        {/* Updated backdrop color */}
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.2)" // Updated fill color
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={`mb-4 relative z-10 px-10 ${color}`}>{icon}</div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={`absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 transition duration-200`}
        />
        <span
          className={`group-hover:translate-x-2 transition duration-200 inline-block ${color}`}
        >
          {title}
        </span>
      </div>

      <p className="text-sm text-gray-800 max-w-xs mx-auto relative z-10 px-10">
        {' '}
        {/* Updated text color */}
        {description}
      </p>
    </div>
  )
}
