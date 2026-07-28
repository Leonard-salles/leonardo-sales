import type { Translation } from './types';

export const en: Translation = {
  nav: {
    items: [
      { id: 'home', label: 'Home' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    mobileMenuOpen: 'Open menu',
    mobileMenuClose: 'Close menu',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Leonardo Sales',
    phrases: [
      'Full Stack Developer',
      'React & TypeScript Specialist',
      'A product partner, not just code',
    ],
    description:
      'I help companies and founders turn ideas into fast, scalable, well-crafted digital products — from first prototype to production, with a focus on performance and user experience.',
    ctaContact: 'Start a project',
    ctaProjects: 'View projects',
    socialLabels: {
      github: "Leonardo Sales' GitHub",
      linkedin: "Leonardo Sales' LinkedIn",
      mail: 'Send an email to Leonardo Sales',
    },
    profileAlt: 'Profile photo of Leonardo Sales, full stack developer',
  },
  skills: {
    heading: 'What I can build for you',
    subheading: 'A complete toolkit to take your idea from screen to a product in production',
    cards: [
      {
        title: 'React & TypeScript',
        description: 'Robust, scalable web applications with strong typing and the latest React ecosystem patterns.',
      },
      {
        title: 'React Native',
        description: 'Cross-platform mobile apps for iOS and Android from a single codebase.',
      },
      {
        title: 'Figma Prototyping',
        description: 'Interactive prototypes and design systems that bring product, design, and code closer together.',
      },
      {
        title: 'APIs & Backend',
        description: 'Documented REST APIs with Swagger, MongoDB databases, and Firebase/Node.js integrations.',
      },
      {
        title: 'Web Performance',
        description: 'Load-time optimization, Core Web Vitals, and a smooth experience on every device.',
      },
      {
        title: 'Modern Tooling',
        description: 'Vite, Next.js, Tailwind CSS, Docker, and Nginx — the right stack for every project.',
      },
    ],
    techLabel: 'Technologies I work with',
  },
  projects: {
    heading: 'Featured projects',
    subheading: 'A recent selection showing how I turn real requirements into products in production',
    items: [
      {
        title: 'Cila hair | Booking',
        description:
          'Booking system built for a hair salon to reduce no-shows and centralize reservations. React, TypeScript, and Firebase as a serverless backend, with a real-time calendar, dynamic location map, and a polished visual experience.',
      },
      {
        title: 'Mini blog',
        description:
          'Real-time publishing platform designed to eliminate page reloads and deliver an instant reading and writing experience — architected around content as a live data stream.',
      },
    ],
    ctaDemo: 'View demo',
    ctaCode: 'Code',
  },
  testimonials: {
    heading: 'What people say about working with me',
    subheading: 'Feedback from clients and project partners',
    emptyState: 'No testimonials published yet — be the first to leave one!',
    formHeading: 'Leave a testimonial',
    nameLabel: 'Name',
    emailLabel: 'Email',
    emailHelper: "Your email isn't shown publicly — it's only used to prevent duplicate submissions.",
    messageLabel: 'Message',
    websiteLabel: 'Website (optional)',
    ratingLabel: 'Rating',
    rateStarAria: 'Rate {n} out of 5 stars',
    ratingValueAria: 'Rating: {n} out of 5 stars',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'How was your experience working with me?',
    websitePlaceholder: 'https://yourwebsite.com',
    submitIdle: 'Submit testimonial',
    submitLoading: 'Submitting...',
    visitWebsite: "Visit {name}'s website",
    toast: {
      pendingReview: "Thank you! Your testimonial was received and will be published after a brief review.",
      duplicate: 'This email has already submitted a testimonial.',
      invalidWebsite: "The website link you entered doesn't look valid.",
      genericError: 'Something went wrong. Please try again shortly.',
    },
  },
  feedbackWidget: {
    message: 'Worked with me before? Leave your feedback',
    cta: 'Leave feedback',
    dismissAria: 'Dismiss testimonial prompt',
  },
  about: {
    heading: 'About me',
    subheading: 'A technical partner for teams who want to get it right the first time',
    bioParagraphs: [
      "I'm a full stack developer who helps companies and founders turn ideas into real digital products — from first prototype to production.",
      "I work with React and TypeScript on the front end, Node.js and Python on the back end, and use my Figma design skills to make sure what gets designed is exactly what gets shipped.",
      "Outside of code, I study new technologies and keep up with best practices — because shipping a quality product is also about never stopping learning.",
    ],
    stats: [
      { value: '15+', label: 'Projects delivered' },
      { value: '1000+', label: 'Cups of coffee' },
      { value: '100%', label: 'Client satisfaction' },
      { value: '4+', label: 'Years of experience' },
    ],
    processHeading: 'My development process',
    processSteps: [
      { step: '01', title: 'Discovery', desc: 'Understanding your needs and business goals' },
      { step: '02', title: 'Design', desc: 'Creating prototypes and wireframes aligned with the product' },
      { step: '03', title: 'Development', desc: 'Building with best practices and clean code' },
      { step: '04', title: 'Delivery', desc: 'Testing, deployment, and post-launch support' },
    ],
  },
  contact: {
    heading: 'Get in touch',
    subheading: "Have a project in mind? Let's talk about how to bring it to life",
    formHeading: "Let's talk about your project",
    formIntro:
      "I'm always open to hearing about new projects and opportunities. Tell me about your idea, your technical challenge, or an open role — let's see how I can help.",
    infoLabels: { email: 'Email', phone: 'Phone', location: 'Location' },
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Tell me about your project...',
    submitIdle: 'Send message',
    submitLoading: 'Sending...',
    toast: {
      sent: "Got it! I'll review your idea and get back to you soon.",
      service_unavailable: 'Service temporarily unavailable. Please try again shortly.',
      send_error: 'Something went wrong. Please wait a moment and try again.',
    },
  },
  footer: {
    madeWith: 'Built with React, TypeScript, and Motion',
  },
};
