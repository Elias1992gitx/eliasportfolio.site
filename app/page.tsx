import { Features } from '@/components/features'
import { GridFeatures } from '@/components/grid-features'

import Hero from '@/components/hero'
import { Testimonials } from '@/components/testimonial'

export default async function Index() {
  return (
    <>
      <Hero />
      <div className="px-4 md:px-8">
        <Features />
        <GridFeatures />
      </div>
      {/* <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main> */}
      {/* <ScheduleCallCard /> */}
    </>
  )
}
