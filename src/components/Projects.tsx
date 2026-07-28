import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

import salonImage from "../../assets/projects-images/salon-image.jpg"
import miniBlog from "../../assets/projects-images/mini_blog_image.png"

const projectLinks = [
  {
    image: salonImage,
    tags: ['React', 'TypeScript', 'Shadcn', 'Firebase', 'Leaflat', 'Lottie'],
    gradient: 'from-[#4B2E2B] to-[#A9746E]',
    gitHubLink: "https://github.com/Leonard-salles/cila-hair/",
    productionLink: "https://cila-hair.vercel.app/",
  },
  {
    image: miniBlog,
    tags: ['React', 'Tailwind', 'Firebase', 'ReactQuery', 'zustand'],
    gradient: 'from-green-400 to-cyan-500',
    productionLink: "https://mini-blog-steel-pi.vercel.app/",
  },
];

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items.map((item, index) => ({ ...item, ...projectLinks[index] }));

  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef, { targets: '[data-reveal-header]', y: 20, duration: 0.5 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-project]', y: 50, duration: 0.6 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-project-text]', x: 20, y: 0, duration: 0.6, start: 'top 80%' });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div data-reveal-header className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.projects.heading}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.projects.subheading}
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              data-reveal-project
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="lg:w-1/2 relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-xl blur-xl`} />
                <div className="relative overflow-hidden rounded-xl border border-slate-700">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                </div>
              </motion.div>

              <div className="lg:w-1/2 space-y-6">
                <div
                  data-reveal-project-text
                  data-reveal-x={index % 2 === 0 ? -20 : 20}
                >
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.productionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      {t.projects.ctaDemo}
                    </motion.a>
                    {project.gitHubLink && (
                      <motion.a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                      >
                        <Github size={18} aria-hidden="true" />
                        {t.projects.ctaCode}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
