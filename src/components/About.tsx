import { motion } from 'motion/react';
import { Award, Coffee, Heart, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const statIcons = [Rocket, Coffee, Heart, Award];

export function About() {
  const { t } = useLanguage();
  const stats = t.about.stats.map((stat, index) => ({ ...stat, icon: statIcons[index] }));

  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef, { targets: '[data-reveal-header]', y: 20, duration: 0.5 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-bio]', x: -50, y: 0, duration: 0.6 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-stat]', x: 50, y: 0, stagger: 0.1 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-process]', y: 20, duration: 0.5 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-process-step]', y: 20, stagger: 0.1, start: 'top 80%' });

  return (
    <section id="about" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div data-reveal-header className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.about.heading}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.about.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-reveal-bio className="space-y-6">
            {t.about.bioParagraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-slate-300' : 'text-slate-400'}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} data-reveal-stat className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                  transition={{
                    scale: { type: 'spring', stiffness: 300, damping: 18 },
                    rotate: { duration: 0.5, ease: 'easeInOut' },
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                  <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors text-center">
                    <stat.icon className="mx-auto mb-3 text-cyan-400" size={32} aria-hidden="true" />
                    <div className="text-white mb-1">{stat.value}</div>
                    <p className="text-slate-400">{stat.label}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal-process
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-slate-700"
        >
          <h3 className="text-center mb-6 text-white text-xl pb-5">{t.about.processHeading}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {t.about.processSteps.map((phase, index) => (
              <div key={index} data-reveal-process-step className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  {phase.step}
                </div>
                <h4 className="text-white mb-2">{phase.title}</h4>
                <p className="text-slate-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
