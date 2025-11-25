import { motion } from 'motion/react';
import { Award, Coffee, Heart, Rocket } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Rocket, value: '50+', label: 'Projetos entregues' },
    { icon: Coffee, value: '1000+', label: 'Xícaras de café' },
    { icon: Heart, value: '100%', label: 'Satisfação dos clientes' },
    { icon: Award, value: '3+', label: 'Anos de experiência' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-slate-900/50">
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
              Sobre mim
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Apaixonado por criar experiências digitais excepcionais
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300">
              Olá! Sou um desenvolvedor full stack apaixonado por criar aplicações web.
              Minha jornada no desenvolvimento começou há mais de 3 anos e, desde então, não parei de aprender
              e evoluir.
            </p>
            <p className="text-slate-400">
              Sou especialista em React e TypeScript para construir aplicações robustas, e tenho a mesma
              confiança ao criar apps mobile multiplataforma com React Native. As habilidades de design no Figma
              ajudam a conectar design e desenvolvimento, garantindo implementações fiéis.
            </p>
            <p className="text-slate-400">
              Quando não estou codando, estou explorando novas tecnologias, contribuindo com open source
              ou compartilhando conhecimento com a comunidade. Acredito em código limpo, sustentável e em
              experiências que encantam.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"

            >
              <a href="../../assets/curriculum.pdf" download="Leonaro Sales.pdf">
                Baixar currículo
              </a>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors text-center">
                  <stat.icon className="mx-auto mb-3 text-cyan-400" size={32} />
                  <div className="text-white mb-1">{stat.value}</div>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-slate-700"
        >
          <h3 className="text-center mb-6 text-white text-xl pb-5">Meu processo de desenvolvimento</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Descoberta', desc: 'Entendendo suas necessidades e objetivos' },
              { step: '02', title: 'Design', desc: 'Criando protótipos e wireframes' },
              { step: '03', title: 'Desenvolvimento', desc: 'Construindo seguindo boas práticas' },
              { step: '04', title: 'Entrega', desc: 'Testes e deploy' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  {phase.step}
                </div>
                <h4 className="text-white mb-2">{phase.title}</h4>
                <p className="text-slate-400">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
