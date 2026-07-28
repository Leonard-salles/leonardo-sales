import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6 py-8 text-center text-slate-500 border-t border-slate-800"
    >
      <p>© {new Date().getFullYear()} Leonardo Sales. {t.footer.madeWith}</p>
    </motion.footer>
  );
}
