'use client'

import { Input } from '@/components/ui/input'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FaCar,
  FaCode,
  FaDatabase,
  FaFigma,
  FaGithub, // Car icon for fleet projects
  FaHome,
  FaJs,
  FaLink,
  FaPython,
  FaReact,
} from 'react-icons/fa' // Import additional icons as needed
import { GiClothes } from 'react-icons/gi'
import { GiFarmer } from 'react-icons/gi'
import { ImOffice } from 'react-icons/im'
import { FaPlane } from 'react-icons/fa6'


import {
  SiDotnet,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si' // Import specific icons for tech stacks

// Assuming you have an Odoo logo component or SVG
// import FaCar from '@/components/icons/FaCar' // Example import for Odoo logo

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const projects = [
  {
    name: 'Anteniguss Wear Odoo ERP',
    description:
      'The Anteniguss Wear Odoo ERP project is a tailored ERP solution for Anteniguss Wear. Built on the Odoo platform, it streamlines and integrates key business processes for operational efficiency.',
    logo: <GiClothes className="w-6 h-6 text-purple-500" />, // Use Odoo logo
    link: 'https://www.ante-niguss.site/',
    githubLink: 'https://github.com/odoo/odoo',
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766868/antenigusserp_wz0hbl.mp4',
  },
  {
    name: 'Hetosa Odoo ERP',
    description:
      'The Hetosa Odoo ERP project is an ERP system built on the Odoo platform for Hetosa Farmers Cooperative Union. It integrates key modules like inventory, sales, accounting, and procurement to streamline operations.',
    logo: <GiFarmer className="w-6 h-6 text-purple-500" />, // Use Odoo logo
    link: 'https://hetosa-farmers.site/',
    githubLink: 'https://github.com/odoo/odoo',
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729768260/hetosaodoo_v6vhnp.mp4',
  },
  {
    name: 'Fleet Master',
    description:
      'Fleet Master’s UI is designed for efficiency and simplicity, making fleet management smoother and smarter. It offers an intuitive interface for easy tracking, scheduling, and vehicle maintenance with real-time insights.',
    logo: <FaCar className="w-6 h-6 text-green-500" />, // Car icon for fleet projects
    link: '#',
    githubLink: 'https://github.com/Elias1992gitx/Fleet_Master',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729765816/fleetmaster_aaelgy.mp4',
  },
  {
    name: 'Hetosa HR Management',
    description:
      'The Hetosa HRMS will streamline employee management processes, boost productivity, and provide real-time insights customized to the specific needs of Hetosa Farmers Cooperative Union.',
    logo: <ImOffice className="w-6 h-6 text-yellow-500" />, // Example logo
    link: 'http://209.97.179.191/',
    githubLink: 'https://github.com/Elias1992gitx/Hetosa-Human-Resource',
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766408/hetosahr_afzjmv.mp4',
  },
  {
    name: 'Meshrak Real Estate',
    description:
      'The Meshrak Real Estate project is a comprehensive real estate management solution tailored to streamline property listings, sales, and client interactions. Designed to optimize property management processes.',
    logo: <FaHome className="w-6 h-6 text-blue-500" />, // Home icon for real estate projects
    link: 'https://meshrak-real-state.vercel.app/',
    githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
    techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729718724/meshrak_toz8bz.mp4',
  },
  {
    name: 'Service Desk',
    description:
      "The Service Desk for Ethiopian Airlines is an integrated support system designed to efficiently manage customer inquiries, IT support, and service requests across the airline's operations.",
    logo: <FaPlane className="w-6 h-6 text-purple-500" />, // Example logo
    link: '#',
    githubLink: '#',
    techStack: [
      'React.js',
      'Tailwindcss',
      'ASP.NET Core',
      'SQLServer',
      'Figma',
    ],
    categories: ['design', 'ui', 'opensource'],
    isOpenSource: true,
    isMobileApp: false,
    videoUrl:
      'https://res.cloudinary.com/dw2lxagle/video/upload/v1729778993/servicedesk_jzaxlp.mp4',
  },
]

const techStackIcons: Record<
  string,
  React.ComponentType | (() => JSX.Element)
> = {
  'Next.js': SiNextdotjs,
  Tailwindcss: SiTailwindcss,
  Typescript: SiTypescript,
  'ASP.NET Core': SiDotnet,
  SQLServer: FaDatabase,
  React: FaReact,
  Javascript: FaJs,
  Figma: FaFigma,
  // Add more tech stack icons as needed
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    controls.start('animate')
  }, [controls])

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.categories.some((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
      <style jsx global>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>

      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
        initial="initial"
        animate="animate"
        variants={titleVariants}
      >
        Projects That Strengthened My Skills and Commitment
      </motion.h1>
      <motion.p
        className="text-gray-600 mb-6 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I've worked on numerous projects over the years, many of which are
        open-source. If something catches your eye, feel free to explore the
        code and contribute any ideas for improvement—let's collaborate and make
        it better together.
      </motion.p>

      <Input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 bg-gray-100 text-gray-800 border-gray-300 focus:border-blue-500"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="glass-card rounded-lg overflow-hidden futuristic-lines"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <motion.div
              className="h-1 gold-accent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
            />
            <div className="p-4">
              {/* Project Name and Description */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <motion.span
                    className="text-2xl sm:text-3xl mr-3"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {project.logo}
                  </motion.span>
                  <h2 className="text-lg sm:text-xl font-bold fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                    {project.name}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              {/* Video */}
              <div className="video-container mb-4">
                <iframe
                  src={project.videoUrl}
                  allow="autoplay; encrypted-media"
                  title={project.name}
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              {/* Tech Stack Icons */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-gray-500 mb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap -mx-1">
                    {project.techStack.map((tech, techIndex) => {
                      const Icon = techStackIcons[tech] || FaCode // Use FaCode as fallback
                      return (
                        <motion.div
                          key={tech}
                          className="m-1"
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="tech-icon bg-gray-800 p-1.5 rounded-md flex items-center justify-center w-8 h-8">
                            <div className="w-4 h-4 text-blue-400">
                              <Icon />
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )}
              {/* Links */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 fancy-text text-sm"
                  whileHover={{ x: 5 }}
                >
                  <FaLink className="w-4 h-4 mr-1" />
                  Website
                </motion.a>
                {project.isOpenSource && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <FaGithub className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// 'use client';

// import { motion, useAnimation } from 'framer-motion';
// import {
//   FaGithub,
//   FaLink,
//   FaCode,
//   FaReact,
//   FaJs,
//   FaFigma,
//   FaPython,
//   FaNodeJs,
//   FaDatabase,
//   FaAngular,
// } from 'react-icons/fa'; // Import additional icons as needed
// import { SiNextdotjs, SiTailwindcss, SiTypescript, SiDotnet } from 'react-icons/si'; // Import specific icons for tech stacks
// import { useEffect, useState } from 'react';
// import { Input } from '@/components/ui/input';

// const titleVariants = {
//   initial: { opacity: 0, y: -20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const projects = [
//   {
//     name: 'Anteniguss Wear Odoo ERP',
//     description:
//       'The Anteniguss Wear Odoo ERP project is a tailored ERP solution for Anteniguss Wear. Built on the Odoo platform, it streamlines and integrates key business processes for operational efficiency.',
//     logo: <FaDatabase className="w-6 h-6 text-blue-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766868/antenigusserp_wz0hbl.mp4',
//   },
//   {
//     name: 'Hetosa Odoo ERP',
//     description:
//       'The Hetosa Odoo ERP project is an ERP system built on the Odoo platform for Hetosa Farmers Cooperative Union. It integrates key modules like inventory, sales, accounting, and procurement to streamline operations.',
//     logo: <FaAngular className="w-6 h-6 text-red-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729768260/hetosaodoo_v6vhnp.mp4',
//   },
//   {
//     name: 'Fleet Master',
//     description:
//       'Fleet Master’s UI is designed for efficiency and simplicity, making fleet management smoother and smarter. It offers an intuitive interface for easy tracking, scheduling, and vehicle maintenance with real-time insights.',
//     logo: <FaNodeJs className="w-6 h-6 text-green-500" />, // Example logo
//     link: '#',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729765816/fleetmaster_aaelgy.mp4',
//   },
//   {
//     name: 'Hetosa HR Management',
//     description:
//       'The Hetosa HRMS will streamline employee management processes, boost productivity, and provide real-time insights customized to the specific needs of Hetosa Farmers Cooperative Union.',
//     logo: <FaPython className="w-6 h-6 text-yellow-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766408/hetosahr_afzjmv.mp4',
//   },
//   {
//     name: 'Meshrak Real Estate',
//     description:
//       'The Meshrak Real Estate project is a comprehensive real estate management solution tailored to streamline property listings, sales, and client interactions. Designed to optimize property management processes.',
//     logo: <FaReact className="w-6 h-6 text-blue-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729718724/meshrak_toz8bz.mp4',
//   },
//   {
//     name: 'Service Desk',
//     description:
//       "The Service Desk for Ethiopian Airlines is an integrated support system designed to efficiently manage customer inquiries, IT support, and service requests across the airline's operations.",
//     logo: <SiDotnet className="w-6 h-6 text-purple-500" />, // Example logo
//     link: '#',
//     githubLink: '#',
//     techStack: ['React.js', 'Tailwindcss', 'ASP.NET Core', 'SQLServer', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729778993/servicedesk_jzaxlp.mp4',
//   },
// ];

// const techStackIcons: Record<
//   string,
//   React.ComponentType | (() => JSX.Element)
// > = {
//   'Next.js': SiNextdotjs,
//   Tailwindcss: SiTailwindcss,
//   Typescript: SiTypescript,
//   'ASP.NET Core': SiDotnet,
//   SQLServer: FaDatabase,
//   React: FaReact,
//   Javascript: FaJs,
//   Figma: FaFigma,
//   // Add more tech stack icons as needed
// };

// export default function ProjectsPage() {
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start('animate');
//   }, [controls]);

//   const filteredProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.categories.some((category) =>
//         category.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
//       <style jsx global>{`
//         .video-container {
//           position: relative;
//           padding-bottom: 56.25%;
//           height: 0;
//           overflow: hidden;
//         }

//         .video-container iframe {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: 0;
//         }
//       `}</style>

//       <motion.h1
//         className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
//         initial="initial"
//         animate="animate"
//         variants={titleVariants}
//       >
//         Projects That Strengthened My Skills and Commitment
//       </motion.h1>
//       <motion.p
//         className="text-gray-600 mb-6 text-sm sm:text-base"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         I've worked on numerous projects over the years, many of which are
//         open-source. If something catches your eye, feel free to explore the
//         code and contribute any ideas for improvement—let's collaborate and make
//         it better together.
//       </motion.p>

//       <Input
//         type="text"
//         placeholder="Search projects..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="mb-6 bg-gray-100 text-gray-800 border-gray-300 focus:border-blue-500"
//       />

//       <div className="grid sm:grid-cols-2 gap-6">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={project.name}
//             className="glass-card rounded-lg overflow-hidden futuristic-lines"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//             onMouseEnter={() => setHoveredProject(project.name)}
//             onMouseLeave={() => setHoveredProject(null)}
//           >
//             <motion.div
//               className="h-1 gold-accent"
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
//             />
//             <div className="p-4">
//               {/* Project Name and Description */}
//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <motion.span
//                     className="text-2xl sm:text-3xl mr-3"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: 'linear',
//                     }}
//                   >
//                     {project.logo}
//                   </motion.span>
//                   <h2 className="text-lg sm:text-xl font-bold fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
//                     {project.name}
//                   </h2>
//                 </div>
//                 <p className="text-gray-400 text-sm">{project.description}</p>
//               </div>

//               {/* Video */}
//               <div className="video-container mb-4">
//                 <iframe
//                   src={project.videoUrl}
//                   allow="autoplay; encrypted-media"
//                   title={project.name}
//                   className="rounded-lg shadow-lg"
//                 ></iframe>
//               </div>

//               {/* Tech Stack Icons */}
//               {project.techStack && project.techStack.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-xs font-semibold text-gray-500 mb-2">
//                     Tech Stack
//                   </h3>
//                   <div className="flex flex-wrap -mx-1">
//                     {project.techStack.map((tech, techIndex) => {
//                       const Icon = techStackIcons[tech] || FaCode; // Use FaCode as fallback
//                       return (
//                         <motion.div
//                           key={tech}
//                           className="m-1"
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           <div className="tech-icon bg-gray-800 p-1.5 rounded-md flex items-center justify-center w-8 h-8">
//                             <div className="w-4 h-4 text-blue-400">
//                               <Icon />
//                             </div>
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}
//               {/* Links */}
//               <div className="flex flex-wrap items-center gap-2 mt-4">
//                 <motion.a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 fancy-text text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   <FaLink className="w-4 h-4 mr-1" />
//                   Website
//                 </motion.a>
//                 {project.isOpenSource && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
//                   >
//                     <FaGithub className="w-4 h-4 mr-1" />
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { motion, useAnimation } from 'framer-motion'
// import {
//   FaGithub,
//   FaLink,
//   FaCode,
//   FaReact,
//   FaJs,
//   FaFigma,
//   FaPython,
//   FaNodeJs,
//   FaDatabase,
//   FaAngular,
// } from 'react-icons/fa' // Import additional icons as needed
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiTypescript,
//   SiDotnet,
// } from 'react-icons/si' // Import specific icons for tech stacks
// import { useEffect, useState } from 'react'
// import { Input } from '@/components/ui/input'

// const titleVariants = {
//   initial: { opacity: 0, y: -20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// }

// const projects = [
//   {
//     name: 'Anteniguss Wear Odoo ERP',
//     description:
//       'The Anteniguss Wear Odoo ERP project is a tailored ERP solution for Anteniguss Wear. Built on the Odoo platform, it streamlines and integrates key business processes for operational efficiency.',
//     logo: <FaDatabase className="w-6 h-6 text-blue-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766868/antenigusserp_wz0hbl.mp4',
//   },
//   {
//     name: 'Hetosa Odoo ERP',
//     description:
//       'The Hetosa Odoo ERP project is an ERP system built on the Odoo platform for Hetosa Farmers Cooperative Union. It integrates key modules like inventory, sales, accounting, and procurement to streamline operations.',
//     logo: <FaAngular className="w-6 h-6 text-red-500" />, // Example logo
//     link: 'https://hetosa-farmers.site/',
//     githubLink: 'https://github.com/odoo/odoo',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729768260/hetosaodoo_v6vhnp.mp4',
//   },
//   {
//     name: 'Fleet Master',
//     description:
//       'Fleet Master’s UI is designed for efficiency and simplicity, making fleet management smoother and smarter. It offers an intuitive interface for easy tracking, scheduling, and vehicle maintenance with real-time insights.',
//     logo: <FaNodeJs className="w-6 h-6 text-green-500" />, // Example logo
//     link: '#',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729765816/fleetmaster_aaelgy.mp4',
//   },
//   {
//     name: 'Hetosa HR Management',
//     description:
//       'The Hetosa HRMS will streamline employee management processes, boost productivity, and provide real-time insights customized to the specific needs of Hetosa Farmers Cooperative Union.',
//     logo: <FaPython className="w-6 h-6 text-yellow-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766408/hetosahr_afzjmv.mp4',
//   },
//   {
//     name: 'Meshrak Real Estate',
//     description:
//       'The Meshrak Real Estate project is a comprehensive real estate management solution tailored to streamline property listings, sales, and client interactions. Designed to optimize property management processes.',
//     logo: <FaReact className="w-6 h-6 text-blue-500" />, // Example logo
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729718724/meshrak_toz8bz.mp4',
//   },
//   {
//     name: 'Service Desk',
//     description:
//       "The Service Desk for Ethiopian Airlines is an integrated support system designed to efficiently manage customer inquiries, IT support, and service requests across the airline's operations.",
//     logo: <SiDotnet className="w-6 h-6 text-purple-500" />, // Example logo
//     link: '#',
//     githubLink: '#',
//     techStack: [
//       'React.js',
//       'Tailwindcss',
//       'ASP.NET Core',
//       'SQLServer',
//       'Figma',
//     ],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729778993/servicedesk_jzaxlp.mp4',
//   },
// ]

// const techStackIcons: Record<
//   string,
//   React.ComponentType | (() => JSX.Element)
// > = {
//   'Next.js': SiNextdotjs,
//   Tailwindcss: SiTailwindcss,
//   Typescript: SiTypescript,
//   'ASP.NET Core': SiDotnet,
//   SQLServer: FaDatabase,
//   React: FaReact,
//   Javascript: FaJs,
//   Figma: FaFigma,
//   // Add more tech stack icons as needed
// }

// export default function ProjectsPage() {
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null)
//   const [searchTerm, setSearchTerm] = useState('')
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start('animate')
//   }, [controls])

//   const filteredProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.categories.some((category) =>
//         category.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   )

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
//       <style jsx global>{`
//         .video-container {
//           position: relative;
//           padding-bottom: 56.25%;
//           height: 0;
//           overflow: hidden;
//         }

//         .video-container iframe {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: 0;
//         }
//       `}</style>

//       <motion.h1
//         className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
//         initial="initial"
//         animate="animate"
//         variants={titleVariants}
//       >
//         Projects That Strengthened My Skills and Commitment
//       </motion.h1>
//       <motion.p
//         className="text-gray-600 mb-6 text-sm sm:text-base"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         I've worked on numerous projects over the years, many of which are
//         open-source. If something catches your eye, feel free to explore the
//         code and contribute any ideas for improvement—let's collaborate and make
//         it better together.
//       </motion.p>

//       <Input
//         type="text"
//         placeholder="Search projects..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="mb-6 bg-gray-100 text-gray-800 border-gray-300 focus:border-blue-500"
//       />

//       <div className="grid sm:grid-cols-2 gap-6">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={project.name}
//             className="glass-card rounded-lg overflow-hidden futuristic-lines"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//             onMouseEnter={() => setHoveredProject(project.name)}
//             onMouseLeave={() => setHoveredProject(null)}
//           >
//             <motion.div
//               className="h-1 gold-accent"
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
//             />
//             <div className="p-4">
//               {/* Project Name and Description */}
//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <motion.span
//                     className="text-2xl sm:text-3xl mr-3"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: 'linear',
//                     }}
//                   >
//                     {project.logo}
//                   </motion.span>
//                   <h2 className="text-lg sm:text-xl font-bold fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
//                     {project.name}
//                   </h2>
//                 </div>
//                 <p className="text-gray-400 text-sm">{project.description}</p>
//               </div>

//               {/* Video */}
//               <div className="video-container mb-4">
//                 <iframe
//                   src={project.videoUrl}
//                   allow="autoplay; encrypted-media"
//                   title={project.name}
//                   className="rounded-lg shadow-lg"
//                 ></iframe>
//               </div>

//               {/* Tech Stack Icons */}
//               {project.techStack && project.techStack.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-xs font-semibold text-gray-500 mb-2">
//                     Tech Stack
//                   </h3>
//                   <div className="flex flex-wrap -mx-1">
//                     {project.techStack.map((tech, techIndex) => {
//                       const Icon = techStackIcons[tech] || FaCode // Use FaCode as fallback
//                       return (
//                         <motion.div
//                           key={tech}
//                           className="m-1"
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           <div className="tech-icon bg-gray-800 p-1.5 rounded-md flex items-center justify-center w-8 h-8">
//                             <div className="w-4 h-4 text-blue-400">
//                               <Icon />
//                             </div>
//                           </div>
//                         </motion.div>
//                       )
//                     })}
//                   </div>
//                 </div>
//               )}
//               {/* Links */}
//               <div className="flex flex-wrap items-center gap-2 mt-4">
//                 <motion.a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 fancy-text text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   <FaLink className="w-4 h-4 mr-1" />
//                   Website
//                 </motion.a>
//                 {project.isOpenSource && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
//                   >
//                     <FaGithub className="w-4 h-4 mr-1" />
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { motion, useAnimation } from 'framer-motion'
// import {
//   FaGithub,
//   FaHome,
//   FaLink,
//   FaCode,
//   FaReact,
//   FaJs,
//   FaFigma,
// } from 'react-icons/fa'
// import { useEffect, useState } from 'react'
// import { Input } from '@/components/ui/input'

// const titleVariants = {
//   initial: { opacity: 0, y: -20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// }

// const projects = [
//   {
//     name: 'Anteniguss Wear Odoo ERP',
//     description:
//       'The Anteniguss Wear Odoo ERP project is a tailored ERP solution for Anteniguss Wear. Built on the Odoo platform, it streamlines and integrates key business processes for operational efficiency.',
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     // techStack: [],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766868/antenigusserp_wz0hbl.mp4',
//   },

//   {
//     name: 'Hetosa Odoo ERP',
//     description:
//       'The Hetosa Odoo ERP project is an ERP system built on the Odoo platform for Hetosa Farmers Cooperative Union. It integrates key modules like inventory, sales, accounting, and procurement to streamline operations.',
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: 'https://hetosa-farmers.site/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     // techStack: [],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729768260/hetosaodoo_v6vhnp.mp4',
//   },

//   {
//     name: 'Fleet Master',
//     description:
//       'Fleet Master’s UI is designed for efficiency and simplicity, making fleet management smoother and smarter. It offers an intuitive interface for easy tracking, scheduling, and vehicle maintenance with real-time insights. ',
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: '#',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729765816/fleetmaster_aaelgy.mp4',
//   },

//   {
//     name: 'Hetosa HR Management',
//     description:
//       'The Hetosa HRMS will streamline employee management processes, boost productivity, and provide real-time insights customized to the specific needs of Hetosa Farmers Cooperative Union.',
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     // techStack: ['Next.js', 'Tailwindcss', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729766408/hetosahr_afzjmv.mp4',
//   },

//   {
//     name: 'Meshrak Real Estate',
//     description:
//       'The Meshrak Real Estate project is a comprehensive real estate management solution tailored to streamline property listings, sales, and client interactions. Designed to optimize property management processes.',
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Nexts.js', 'Tailwindcss', 'Typescript', 'Figma'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729718724/meshrak_toz8bz.mp4',
//   },

//   {
//     name: 'Service Desk',
//     description:
//       "The Service Desk for Ethiopian Airlines is an integrated support system designed to efficiently manage customer inquiries, IT support, and service requests across the airline's operations.",
//     logo: <FaHome className="w-6 h-6 text-blue-500" />,
//     link: '#',
//     githubLink: '#',
//     techStack: [
//       'React.js',
//       'Tailwindcss',
//       'ASP.NET Core',
//       'SQLServer',
//       'Figma',
//     ],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//     videoUrl:
//       'https://res.cloudinary.com/dw2lxagle/video/upload/v1729778993/servicedesk_jzaxlp.mp4',
//   },
// ]

// const techStackIcons: Record<
//   string,
//   React.ComponentType | (() => JSX.Element)
// > = {
//   React: FaReact,
//   Tailwindcss: FaCode, // Using FaCode as a placeholder
//   Javascript: FaJs,
//   Figma: FaFigma,
//   // Add more tech stack icons as needed
// }

// export default function ProjectsPage() {
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null)
//   const [searchTerm, setSearchTerm] = useState('')
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start('animate')
//   }, [controls])

//   const filteredProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.categories.some((category) =>
//         category.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   )

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
//       <style jsx global>{`
//         .video-container {
//           position: relative;
//           padding-bottom: 56.25%;
//           height: 0;
//           overflow: hidden;
//         }

//         .video-container iframe {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: 0;
//         }
//       `}</style>

//       <motion.h1
//         className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
//         initial="initial"
//         animate="animate"
//         variants={titleVariants}
//       >
//         Projects That Strengthened My Skills and Commitment
//       </motion.h1>
//       <motion.p
//         className="text-gray-600 mb-6 text-sm sm:text-base"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         I've worked on numerous projects over the years, many of which are
//         open-source. If something catches your eye, feel free to explore the
//         code and contribute any ideas for improvement—let's collaborate and make
//         it better together.
//       </motion.p>

//       <Input
//         type="text"
//         placeholder="Search projects..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="mb-6 bg-gray-100 text-gray-800 border-gray-300 focus:border-blue-500"
//       />

//       <div className="grid sm:grid-cols-2 gap-6">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={project.name}
//             className="glass-card rounded-lg overflow-hidden futuristic-lines"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//             onMouseEnter={() => setHoveredProject(project.name)}
//             onMouseLeave={() => setHoveredProject(null)}
//           >
//             <motion.div
//               className="h-1 gold-accent"
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
//             />
//             <div className="p-4">
//               {/* Project Name and Description */}
//               <div className="mb-4">
//                 <div className="flex items-center mb-2">
//                   <motion.span
//                     className="text-2xl sm:text-3xl mr-3"
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: 'linear',
//                     }}
//                   >
//                     {project.logo}
//                   </motion.span>
//                   <h2 className="text-lg sm:text-xl font-bold fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
//                     {project.name}
//                   </h2>
//                 </div>
//                 <p className="text-gray-400 text-sm">{project.description}</p>
//               </div>

//               {/* Video */}
//               <div className="video-container mb-4">
//                 <iframe
//                   src={project.videoUrl}
//                   allow="autoplay; encrypted-media"
//                   title={project.name}
//                   className="rounded-lg shadow-lg"
//                 ></iframe>
//               </div>

//               {/* Tech Stack Icons */}
//               {project.techStack && project.techStack.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-xs font-semibold text-gray-500 mb-2">
//                     Tech Stack
//                   </h3>
//                   <div className="flex flex-wrap -mx-1">
//                     {project.techStack.map((tech, techIndex) => {
//                       const Icon = techStackIcons[tech] || FaCode // Use FaCode as fallback
//                       return (
//                         <motion.div
//                           key={tech}
//                           className="m-1"
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           <div className="tech-icon bg-gray-800 p-1.5 rounded-md flex items-center justify-center w-8 h-8">
//                             <div className="w-4 h-4 text-blue-400">
//                               <Icon />
//                             </div>
//                           </div>
//                         </motion.div>
//                       )
//                     })}
//                   </div>
//                 </div>
//               )}
//               {/* Links */}
//               <div className="flex flex-wrap items-center gap-2 mt-4">
//                 <motion.a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 fancy-text text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   <FaLink className="w-4 h-4 mr-1" />
//                   Website
//                 </motion.a>
//                 {project.isOpenSource && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
//                   >
//                     <FaGithub className="w-4 h-4 mr-1" />
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { motion, useAnimation } from 'framer-motion'
// import {
//   Apple,
//   Atom,
//   Box,
//   ChevronRight,
//   Code,
//   Droplet,
//   Figma,
//   Framer,
//   Github,
//   Home,
//   // Truck,
//   Layers,
//   PlayCircle,
//   Search,
//   Truck,
// } from 'lucide-react'
// import { useEffect, useState } from 'react'

// const projects = [
//   {
//     name: 'Meshrek Real Estate',
//     description:
//       'Opensource Design system, UI component library and template solution based on NextJS, tailwindcss and shadcn',
//     logo: <Home className="w-6 h-6 text-blue-500" />,
//     link: 'https://meshrak-real-state.vercel.app/',
//     githubLink: 'https://github.com/Elias1992gitx/Meshrak_Real_State',
//     techStack: ['Next.js', 'Tailwindcss', 'framer', 'figma', 'Javascript'],
//     categories: ['design', 'ui', 'opensource'],
//     isOpenSource: true,
//     isMobileApp: false,
//   },
//   {
//     name: 'Fleet Master',
//     description: 'Fleet Management UI design',
//     logo: <Truck className="w-6 h-6 text-green-500" />,
//     link: '#',
//     githubLink: 'https://github.com/Elias1992gitx/Fleet_Master',
//     techStack: ['Next.js', 'Typescript', 'Tailwind css', 'framer'],
//     categories: ['logistics', 'fleet', 'resource'],
//     isOpenSource: true,
//   },
//   {
//     name: 'Hetosa Truck Resource Mgt',
//     description: 'Customized Truck resource management system',
//     logo: <Truck className="w-6 h-6 text-green-300" />,
//     link: 'http://209.97.179.191',
//     githubLink: 'https://github.com/Elias1992gitx/Hetosa-Truck-Resource',
//     techStack: ['Python', 'Django', 'Nginx', 'Gunicorn'],
//     categories: ['employees', 'payroll', 'attendance', 'assets'],
//     isOpenSource: true,
//   },

//   {
//     name: 'Hetosa Farmes Union',
//     description: 'Customized Oodo ERP management system',
//     link: 'http://209.97.179.191',
//     githubLink: 'https://github.com/Elias1992gitx/Hetosa_Farmers_ERP',
//     techStack: ['Python', 'Django', 'Nginx', 'Gunicorn'],
//     categories: ['employees', 'payroll', 'attendance', 'assets'],
//     isOpenSource: true,
//   },
// ]

// const techStackIcons: Record<
//   string,
//   React.ComponentType | (() => JSX.Element)
// > = {
//   droplet: Droplet,
//   atom: Atom,
//   framer: Framer,
//   figma: Figma,
//   box: Box,
//   layers: Layers,
//   typescript: () => <span className="font-bold text-xs">TS</span>,
//   'Next.js': () => <span className="font-bold text-xs">Next</span>,
//   Tailwindcss: () => <span className="font-bold text-xs">TW</span>,
//   Javascript: () => <span className="font-bold text-xs">JS</span>,
//   'Tailwind css': () => <span className="font-bold text-xs">TW</span>,
// }

// const titleVariants = {
//   initial: { opacity: 0, y: -20 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// }

// const letterVariants = {
//   initial: { y: 20, opacity: 0 },
//   animate: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: i * 0.1 },
//   }),
// }

// const techStackVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   }),
// }

// export default function ProjectsPage() {
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null)
//   const [searchTerm, setSearchTerm] = useState('')
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start('animate')
//   }, [controls])

//   const filteredProjects = projects.filter(
//     (project) =>
//       project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.categories.some((category) =>
//         category.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   )

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

//         .fancy-text {
//           font-family: 'Orbitron', sans-serif;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         .gold-accent {
//           background: linear-gradient(90deg, #3b82f6, #10b981);
//         }

//         .futuristic-lines {
//           background-image: linear-gradient(
//               0deg,
//               transparent 24%,
//               rgba(255, 255, 255, 0.05) 25%,
//               rgba(255, 255, 255, 0.05) 26%,
//               transparent 27%,
//               transparent 74%,
//               rgba(255, 255, 255, 0.05) 75%,
//               rgba(255, 255, 255, 0.05) 76%,
//               transparent 77%,
//               transparent
//             ),
//             linear-gradient(
//               90deg,
//               transparent 24%,
//               rgba(255, 255, 255, 0.05) 25%,
//               rgba(255, 255, 255, 0.05) 26%,
//               transparent 27%,
//               transparent 74%,
//               rgba(255, 255, 255, 0.05) 75%,
//               rgba(255, 255, 255, 0.05) 76%,
//               transparent 77%,
//               transparent
//             );
//           background-size: 50px 50px;
//         }

//         .tech-icon {
//           transition: all 0.3s ease;
//         }

//         .tech-icon:hover {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         }

//         .sleek-search {
//           background: rgba(255, 255, 255, 0.1);
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//       <motion.h1
//         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-300"
//         initial="initial"
//         animate="animate"
//         variants={titleVariants}
//       >
//         Projects That Strengthened My Skills and Commitment
//       </motion.h1>
//       <motion.p
//         className="text-gray-400 mb-6 text-sm sm:text-base"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         I’ve worked on numerous projects over the years, many of which are
//         open-source. If something catches your eye, feel free to explore the
//         code and contribute any ideas for improvement—let's collaborate and make
//         it better together.
//       </motion.p>
//       <motion.div
//         className="mb-6 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full sleek-search text-white border-none rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
//           />
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
//         </div>
//       </motion.div>
//       <motion.div
//         className="inline-block bg-gray-900 rounded-full px-3 py-1 text-xs sm:text-sm mb-6 fancy-text"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, duration: 0.3 }}
//       >
//         <motion.span
//           className="font-bold mr-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           {filteredProjects.length.toString().padStart(2, '0')}
//         </motion.span>
//         <span className="text-gray-400">PROJECTS</span>
//       </motion.div>
//       <div className="grid sm:grid-cols-2 gap-6">
//         {filteredProjects.map((project, index) => (
//           <motion.div
//             key={project.name}
//             className="glass-card rounded-lg overflow-hidden futuristic-lines"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//             onMouseEnter={() => setHoveredProject(project.name)}
//             onMouseLeave={() => setHoveredProject(null)}
//           >
//             <motion.div
//               className="h-1 gold-accent"
//               initial={{ width: 0 }}
//               animate={{ width: '100%' }}
//               transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
//             />
//             <div className="p-4">
//               <div className="flex items-center mb-3">
//                 <motion.span
//                   className="text-2xl sm:text-3xl mr-3"
//                   animate={{ rotate: [0, 360] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
//                 >
//                   {project.logo}
//                 </motion.span>
//                 <h2 className="text-lg sm:text-xl font-bold fancy-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
//                   {project.name}
//                 </h2>
//               </div>
//               <p className="text-gray-400 mb-3 text-sm">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap items-center gap-2 mb-3">
//                 <motion.a
//                   href={project.link}
//                   className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 fancy-text text-sm"
//                   whileHover={{ x: 5 }}
//                 >
//                   {project.name}
//                   <ChevronRight className="ml-1 w-3 h-3" />
//                 </motion.a>
//                 {project.isOpenSource && (
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
//                   >
//                     <Github className="w-4 h-4 mr-1" />
//                     GitHub
//                   </a>
//                 )}
//               </div>

//               {project.isMobileApp && (
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   <a
//                     // href={project.playStoreLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors duration-200"
//                   >
//                     <PlayCircle className="w-3 h-3 mr-1" />
//                     Play Store
//                   </a>
//                   <a
//                     // href={project.appStoreLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors duration-200"
//                   >
//                     <Apple className="w-3 h-3 mr-1" />
//                     App Store
//                   </a>
//                 </div>
//               )}
//               <div className="mt-4">
//                 <h3 className="text-xs font-semibold text-gray-500 mb-2">
//                   Tech Stack
//                 </h3>
//                 <div className="flex flex-wrap -mx-1">
//                   {project.techStack.map((tech, techIndex) => {
//                     const Icon = techStackIcons[tech] || Code // Use Code icon as fallback
//                     return (
//                       <motion.div
//                         key={tech}
//                         className="m-1"
//                         variants={techStackVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={techIndex}
//                       >
//                         <div className="tech-icon bg-gray-800 p-1.5 rounded-md flex items-center justify-center w-8 h-8">
//                           <div className="w-4 h-4 text-blue-400">
//                             <Icon />
//                           </div>
//                         </div>
//                       </motion.div>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }
