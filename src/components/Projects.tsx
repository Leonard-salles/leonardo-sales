import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import salonImage from "../../assets/projects-images/salon-image.jpg"
import saturnix from "../../assets/projects-images/saturnix-pomodoro.png"

export function Projects() {
  const projects = [
    {
      title: 'Cila hair | Agendamentos',
      description: 'Uma aplicação web completa desenvolvida com React, TypeScript e Vite, utilizando Firebase como backend serverless. Conta com calendário de reservas em tempo real, mapas dinâmicos integrados e uma experiência visual refinada com animações e componentes Shadcn/ui.',
      image: salonImage,
      tags: ['React', 'TypeScript', 'Shadcn', 'Firebase', 'leaflat', 'lottie'],
      gradient: 'from-[#4B2E2B] to-[#A9746E]',
      gitHubLink: "https://github.com/Leonard-salles/cila-hair/",
      productionLink: "https://cila-hair.vercel.app/",
    },
    {
      title: 'Saturnix pomodoro 🪐',
      description: 'Uma aplicação web moderna desenvolvida com React 19 e TypeScript, focada em eficiência. Conta com processamento em segundo plano via Web Workers para garantir a exatidão do timer, transições fluídas e arquitetura otimizada.',
      image: saturnix,
      tags: ['React', 'React Native', 'TypeScript', 'Tailwind', 'Web Worker'],
      gradient: 'from-[#065f46] to-[#363d56]',
      gitHubLink: "https://github.com/Leonard-salles/saturnix-pomodoro",
      productionLink: "https://saturnix-pomodoro.vercel.app/",
    },
    {
      title: 'Dashboard de Visualização de Dados',
      description: 'Dashboard analítico interativo com processamento em tempo real usando backend em Python e frontend em React. Inclui gráficos customizados e exportações.',
      image: 'https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzOTc4ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Python', 'D3.js', 'FastAPI'],
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      title: 'Dashboard de Visualização de Dados',
      description: 'Dashboard analítico interativo com processamento em tempo real usando backend em Python e frontend em React. Inclui gráficos customizados e exportações.',
      image: 'https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzOTc4ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Python', 'D3.js', 'FastAPI'],
      gradient: 'from-green-400 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Uma seleção recente que mostra minhas habilidades em diferentes tecnologias
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                </div>
              </motion.div>

              <div className="lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    >
                      <ExternalLink size={18} />
                      <motion.a
                        href={project.productionLink}
                        target='_blank'
                      >
                        Ver demo
                      </motion.a> 
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <Github size={18} />
                      <motion.a 
                        href={project.gitHubLink}
                        target='_blank'
                      >
                        Código
                      </motion.a>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
