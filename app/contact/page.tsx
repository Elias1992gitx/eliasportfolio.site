import { AmbientColor } from "@/components/ambient-color";
import { ContactForm } from "@/components/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tekletsadik",
  description:
    "Contact me here!",
  openGraph: {
    images: ["https://proactiv-aceternity.vercel.app/banner.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">

      <ContactForm />
    </div>
  );
}
