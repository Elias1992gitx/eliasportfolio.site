import { ContactForm } from '@/components/contact-form'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elias',
  description: 'Contact me here!',
  openGraph: {
    images: ['https://proactiv-aceternity.vercel.app/banner.png'],
  },
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-white p-6">
      <ContactForm />
    </div>
  )
}
