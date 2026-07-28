import { useState, useEffect, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { TestimonialModalProvider } from './components/testimonials/TestimonialModalContext';
import { TestimonialFormModal } from './components/testimonials/TestimonialFormModal';
import { FeedbackWidget } from './components/testimonials/FeedbackWidget';

const Testimonials = lazy(() => import('./components/testimonials/Testimonials'));

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'testimonials', 'about', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pastHero = activeSection !== 'home';

  return (
    <TestimonialModalProvider>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navigation activeSection={activeSection} />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>
          <About />
          <Contact />
        </main>
        <Footer />
        <FeedbackWidget pastHero={pastHero} />
        <TestimonialFormModal />
      </div>
    </TestimonialModalProvider>
  );
}
