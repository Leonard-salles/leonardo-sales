import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useSendEmail } from '../api/send-email';
import { ToastContainer } from 'react-toastify';
import { useToastNotify } from './toast-component';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { sendEmail, state } = useSendEmail()
  const {success, error} = useToastNotify()

  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef, { targets: '[data-reveal-header]', y: 20, duration: 0.5 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-left]', x: -50, y: 0, duration: 0.6 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-contact-item]', x: -20, y: 0, stagger: 0.1 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-form]', x: 50, y: 0, duration: 0.6 });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    await sendEmail(formData)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  };

  useEffect(() => {
    if (state.code) {
      const message = t.contact.toast[state.code];
      state.status === 'success' ? success(message) : error(message);
    }
  }, [state])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: t.contact.infoLabels.email, value: 'leonardo.sales.dev@gmail.com' },
    { icon: Phone, label: t.contact.infoLabels.phone, value: '+55 (11) 94472-1665' },
    { icon: MapPin, label: t.contact.infoLabels.location, value: 'São Paulo, SP' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <ToastContainer
        className="min-w-[200px] w-[calc(100vw-2rem)] sm:w-[500px] lg:w-[900px] max-w-[1800px]"
      />
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div data-reveal-header className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-3xl  font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.contact.heading}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-reveal-left className="h-full flex flex-col justify-center">
            <h3 className="mb-8 text-white text-xl font-semibold">{t.contact.formHeading}</h3>
            <p className="text-slate-400 mb-8 text-lg">
              {t.contact.formIntro}
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} data-reveal-contact-item>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-slate-500">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <form data-reveal-form onSubmit={handleSubmit} className="h-full flex flex-col space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">
                {t.contact.nameLabel}
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">
                {t.contact.emailLabel}
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">
                {t.contact.messageLabel}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder={t.contact.messagePlaceholder}
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
                  {t.contact.submitLoading}
                </>
              ) : (
                <>
                  <Send size={20} aria-hidden="true" />
                  {t.contact.submitIdle}
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
