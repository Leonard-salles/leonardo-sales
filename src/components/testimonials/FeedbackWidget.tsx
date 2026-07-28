import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageSquareHeart, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTestimonialModal } from './TestimonialModalContext';
import { prefersReducedMotion } from '../../utils/deviceCapabilities';

const STORAGE_KEY = 'feedbackWidgetDismissed';

export function FeedbackWidget({ pastHero }: { pastHero: boolean }) {
  const { t } = useLanguage();
  const { openModal } = useTestimonialModal();
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');
  const [reduceMotion] = useState(() => prefersReducedMotion());

  const visible = pastHero && !dismissed;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="feedback-widget"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
          transition={
            reduceMotion
              ? { duration: 0.15 }
              : { type: 'spring', stiffness: 260, damping: 22 }
          }
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-[calc(100vw-3rem)] max-w-xs"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl shadow-xl p-4">
            <button
              onClick={handleDismiss}
              aria-label={t.feedbackWidget.dismissAria}
              className="absolute top-2 right-2 p-2 text-slate-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
            >
              <X size={16} aria-hidden="true" />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <motion.div
                animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0"
              >
                <MessageSquareHeart size={20} className="text-white" aria-hidden="true" />
              </motion.div>
              <p className="text-slate-300 text-sm pt-1.5">{t.feedbackWidget.message}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
              className="mt-3 w-full px-4 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              {t.feedbackWidget.cta}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
