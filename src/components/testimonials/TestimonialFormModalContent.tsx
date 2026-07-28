import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { useLanguage } from '../../i18n/LanguageContext';
import { useToastNotify } from '../toast-component';
import { useSubmitTestimonial } from '../../api/testimonials';
import { StarRating } from './StarRating';
import { useTestimonialModal } from './TestimonialModalContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

function TestimonialFormModalContent() {
  const { t } = useLanguage();
  const { isOpen, closeModal } = useTestimonialModal();
  const { submit, state } = useSubmitTestimonial();
  const { success, error } = useToastNotify();

  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (state.code) {
      const message = t.testimonials.toast[state.code];
      if (state.status === 'success') {
        success(message);
        setFormData({ name: '', email: '', message: '', website: '' });
        setRating(5);
        closeModal();
      } else {
        error(message);
      }
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ ...formData, rating });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer className="min-w-[200px] w-[calc(100vw-2rem)] sm:w-[500px] lg:w-[900px] max-w-[1800px]" />
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white sm:max-w-lg rounded-xl p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-semibold text-center">
              {t.testimonials.formHeading}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="testimonial-name" className="block text-slate-300 mb-2">
                  {t.testimonials.nameLabel}
                </label>
                <input
                  type="text"
                  id="testimonial-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t.testimonials.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="testimonial-email" className="block text-slate-300 mb-2">
                  {t.testimonials.emailLabel}
                </label>
                <input
                  type="email"
                  id="testimonial-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t.testimonials.emailPlaceholder}
                />
                <p className="text-slate-500 text-sm mt-1">{t.testimonials.emailHelper}</p>
              </div>
            </div>

            <div>
              <label htmlFor="testimonial-message" className="block text-slate-300 mb-2">
                {t.testimonials.messageLabel}
              </label>
              <textarea
                id="testimonial-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder={t.testimonials.messagePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="testimonial-website" className="block text-slate-300 mb-2">
                {t.testimonials.websiteLabel}
              </label>
              <input
                type="url"
                id="testimonial-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder={t.testimonials.websitePlaceholder}
              />
            </div>

            <div>
              <p className="block text-slate-300 mb-2">{t.testimonials.ratingLabel}</p>
              <StarRating
                value={rating}
                onChange={setRating}
                interactive
                size={28}
                rateLabel={(n) => t.testimonials.rateStarAria.replace('{n}', String(n))}
                ratingLabel={(n) => t.testimonials.ratingValueAria.replace('{n}', String(n))}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={state.loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  {t.testimonials.submitLoading}
                </>
              ) : (
                <>
                  <Send size={20} aria-hidden="true" />
                  {t.testimonials.submitIdle}
                </>
              )}
            </motion.button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TestimonialFormModalContent;
