export interface NavTranslation {
  items: { id: string; label: string }[];
  mobileMenuOpen: string;
  mobileMenuClose: string;
}

export interface HeroTranslation {
  greeting: string;
  name: string;
  phrases: string[];
  description: string;
  ctaContact: string;
  ctaProjects: string;
  socialLabels: { github: string; linkedin: string; mail: string };
  profileAlt: string;
}

export interface SkillCardTranslation {
  title: string;
  description: string;
}

export interface SkillsTranslation {
  heading: string;
  subheading: string;
  cards: SkillCardTranslation[];
  techLabel: string;
}

export interface ProjectTranslation {
  title: string;
  description: string;
}

export interface ProjectsTranslation {
  heading: string;
  subheading: string;
  items: ProjectTranslation[];
  ctaDemo: string;
  ctaCode: string;
}

export interface AboutStatTranslation {
  value: string;
  label: string;
}

export interface ProcessStepTranslation {
  step: string;
  title: string;
  desc: string;
}

export interface AboutTranslation {
  heading: string;
  subheading: string;
  bioParagraphs: string[];
  stats: AboutStatTranslation[];
  processHeading: string;
  processSteps: ProcessStepTranslation[];
}

export interface ContactTranslation {
  heading: string;
  subheading: string;
  formHeading: string;
  formIntro: string;
  infoLabels: { email: string; phone: string; location: string };
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitIdle: string;
  submitLoading: string;
  toast: {
    sent: string;
    service_unavailable: string;
    send_error: string;
  };
}

export interface FooterTranslation {
  madeWith: string;
}

export interface TestimonialSeedTranslation {
  name: string;
  message: string;
  rating: number;
  website: string | null;
}

export interface TestimonialsTranslation {
  heading: string;
  subheading: string;
  emptyState: string;
  formHeading: string;
  nameLabel: string;
  emailLabel: string;
  emailHelper: string;
  messageLabel: string;
  websiteLabel: string;
  ratingLabel: string;
  rateStarAria: string;
  ratingValueAria: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  websitePlaceholder: string;
  submitIdle: string;
  submitLoading: string;
  visitWebsite: string;
  seed: TestimonialSeedTranslation[];
  toast: {
    pendingReview: string;
    duplicate: string;
    invalidWebsite: string;
    genericError: string;
  };
}

export interface FeedbackWidgetTranslation {
  message: string;
  cta: string;
  dismissAria: string;
}

export interface Translation {
  nav: NavTranslation;
  hero: HeroTranslation;
  skills: SkillsTranslation;
  projects: ProjectsTranslation;
  testimonials: TestimonialsTranslation;
  feedbackWidget: FeedbackWidgetTranslation;
  about: AboutTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}

export type Language = 'pt' | 'en';
