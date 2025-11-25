import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Plataforma de E-commerce',
      description: 'Uma solução full stack construída com React, TypeScript e Node.js. Conta com estoque em tempo real, integração de pagamentos e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1648260296289-ab882814a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2NDAzMTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Aplicativo de Treinos',
      description: 'App mobile em React Native para acompanhar treinos e nutrição. Solução multiplataforma com suporte offline e sincronização de dados.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MDE2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'TypeScript', 'SQLite', 'Redux'],
      gradient: 'from-purple-400 to-pink-500',
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
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
                  <h3 className="mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
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
                      Ver demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <Github size={18} />
                      Código
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
