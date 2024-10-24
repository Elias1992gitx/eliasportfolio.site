import LinkItem from '@/components/ui/link-item'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <img
        className="absolute top-0 z-0 -translate-y-1/2"
        src={'https://farmui.vercel.app/bg-back.png'}
        width={1000}
        height={1000}
        alt="background"
      />

      <div className="absolute -z-1 inset-0 h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <section className="py-5 z-10">
        <div className="max-w-screen-2xl mx-auto text-black gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <Link href="/projects">
              <h1 className="text-sm text-black group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/50 via-gray-400/40 to-transparent border-[2px] border-white/5 rounded-3xl w-fit cursor-pointer">
                Latest Projects
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
            </Link>
            <h2 className="text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-black">
              Driving innovation at the convergence of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Web Dev't and AI
              </span>
            </h2>
            <p className="font-geist text-black">
              Full stack senior software engineer specializing in Web Dev't.
              Passionate about AI/ML and creating impactful technology
              solutions.
            </p>
            <div className="mr-auto ml-2 flex flex-wrap gap-y-4 items-start justify-start gap-x-3">
              <LinkItem
                href="/contact"
                className="inline-flex rounded-none uppercase font-mono text-center group items-center w-full justify-center bg-gradient-to-tr from-gray-800 to-black text-white border border-transparent hover:bg-gray-700 transition-colors sm:w-auto py-4 px-10 shadow-lg"
              >
                Contact
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>

              <LinkItem
                href="/projects"
                className="inline-flex rounded-none uppercase font-mono text-center group items-center w-full justify-center bg-gradient-to-tr from-gray-800 to-black text-white border border-transparent hover:bg-gray-700 transition-colors sm:w-auto py-4 px-10 shadow-lg"
              >
                View Projects
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>

          
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl w-full flex justify-center md:block">
            <Image
              src="/elias_chane.jpg"
              className="md:rounded-tl-[108px]"
              alt="Elias Chane"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
