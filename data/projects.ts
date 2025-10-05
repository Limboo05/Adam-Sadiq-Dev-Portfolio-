export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Face Recognition Web App',
    description:
      'A Flask-based web app that detects and recognizes faces in real-time using OpenCV and deep learning.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/Limboo05/Face-Recognition-Web-App',
    slug: 'face-recognition-web-app',
  },
  {
    title: 'E-Ride Booking System',
    description:
      'A WhatsApp-integrated ride-booking system with automated driver assignment, pricing, and Paystack payments.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/Limboo05/E-Ride-Booking-System',
    slug: 'e-ride-booking-system',
  },
  {
    title: 'Interactive Coding Platform',
    description:
      'A web-based learning environment that teaches students to code through real-time lessons and exercises.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Limboo05/Interactive-Coding-Platform',
    slug: 'interactive-coding-platform',
  },
  {
    title: 'Full-Stack Portfolio Site',
    description:
      'My personal portfolio built with Next.js and Node.js — showcasing my projects, skills, and experience.',
    logo: '/logos/portfolio.svg',
    link: 'https://github.com/Limboo05',
    slug: 'fullstack-portfolio',
  },
  {
    title: 'CGPA Calculator',
    description:
      'A simple, responsive CGPA calculator built with React and deployed on Vercel, with PWA and offline support.',
    logo: '/logos/coolify.svg',
    link: 'https://cgpa-calculator-delta-ten.vercel.app/',
    slug: 'cgpa-calculator',
  },
];
