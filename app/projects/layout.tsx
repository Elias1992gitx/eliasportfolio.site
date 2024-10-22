import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tekletsadik",
  description: "Showcase of my projects and contributions",
};

export default function ProjectsLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-white">
      {children}
    </div>
  );
}