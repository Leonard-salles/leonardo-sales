import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { canUseHeroCanvas, prefersReducedMotion } from '../utils/deviceCapabilities';

const profileImg = new URL('../../assets/profile_img.jpg', import.meta.url).href;
const HeroCanvas = lazy(() => import('./hero/HeroCanvas'));

export function Hero() {
  const { t, language } = useLanguage();
  const phrases = t.hero.phrases;
  const [useCanvas] = useState(() => canUseHeroCanvas());
  const [reduceMotion] = useState(() => prefersReducedMotion());

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
    setCurrentPhraseIndex(0);
  }, [language]);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex % phrases.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socials = [
    { icon: Github, href: 'https://github.com/Leonard-salles/', label: t.hero.socialLabels.github },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/leonardo-sales-franca/', label: t.hero.socialLabels.linkedin },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=leonardo.sales.dev@gmail.com', label: t.hero.socialLabels.mail },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Animated background: Three.js particle canvas on capable devices, CSS blur blobs otherwise */}
      {useCanvas ? (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      ) : (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>
      )}
      <motion.div
        className='flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto relative z-10'
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <motion.h1 variants={itemVariants} className="mb-4 text-2xl md:text-4xl">
            <span className="text-slate-400">{t.hero.greeting} </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-bold">
              {t.hero.name}
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl mb-4 text-cyan-400 font-semibold min-h-[3rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-400 mb-6 max-w-2xl sm:text-lg  md:text-xl">
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                target='_blank'
                rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <social.icon size={24} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow text-lg"
            >
              {t.hero.ctaContact}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 text-lg"
            >
              {t.hero.ctaProjects}
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 relative group max-w-xs mx-auto sm:max-w-sm md:max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10 scale-150" />
          <motion.img
            src={profileImg}
            alt={t.hero.profileAlt}
            className="hidden md:block md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 z-10"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 40px -10px rgba(6, 182, 212, 0.5)'
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ArrowDown className="text-slate-500" size={32} />
      </motion.div>
    </section>
  );
}
