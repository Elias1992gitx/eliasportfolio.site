interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Yasin Ehsan",
    quote:
      "Tekletsadik's contributions to our AI projects at Headstarter were remarkable. His innovative approach and technical skills significantly enhanced our development process.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "CEO and Founder, Headstarter AI",
  },
  
  {
    name: "Dr. Abebe Kebede",
    quote:
      "The SSGI NET application developed by Tekletsadik demonstrated a strong understanding of secure communication systems. His work contributed significantly to our institute's needs.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Director, Ethiopian Space Science and Technology Institute",
  },
  {
    name: "Bethlehem Dessie",
    quote:
      "Collaborating with Tekletsadik on various projects has been a pleasure. His full-stack development skills and enthusiasm for learning new technologies are commendable.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Tech Innovator and Educator",
  },
  {
    name: "Getnet Aseffa",
    quote:
      "Tekletsadik's proficiency in Flutter and his adherence to agile methodologies were valuable assets in our mobile application development projects.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "CTO, EagleLion System Technology",
  },
  {
    name: "Prof. Yalemzewd Negash",
    quote:
      "As Tekletsadik's former professor, I was consistently impressed by his dedication to computer software engineering. His academic performance was exemplary.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Dean of Computing, Arbaminch University",
  },
];