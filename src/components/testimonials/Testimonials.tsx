import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTestimonials, type Testimonial } from '../../api/testimonials';
import { StarRating } from './StarRating';

const avatarGradients = [
  'from-cyan-400 to-blue-500',
  'from-blue-400 to-purple-500',
  'from-purple-400 to-pink-500',
  'from-green-400 to-cyan-500',
  'from-orange-400 to-red-500',
  'from-yellow-400 to-orange-500',
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '');
  return initials.join('') || '?';
}

function getAvatarGradient(id: string): string {
  const sum = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarGradients[sum % avatarGradients.length];
}

function TestimonialCard({
  testimonial,
  visitWebsiteLabel,
  ratingValueLabel,
}: {
  testimonial: Testimonial;
  visitWebsiteLabel: string;
  ratingValueLabel: (n: number) => string;
}) {
  return (
    <div data-reveal-testimonial-card className="relative group h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl from-cyan-500/20 to-blue-500/20" />
      <div className="relative h-full flex flex-col flex-1 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-r ${getAvatarGradient(testimonial.id)} flex items-center justify-center text-white font-semibold flex-shrink-0`}
            aria-hidden="true"
          >
            {getInitials(testimonial.name)}
          </div>
          <div>
            <p className="text-white font-medium">{testimonial.name}</p>
            <StarRating value={testimonial.rating} size={16} ratingLabel={ratingValueLabel} />
          </div>
        </div>
        <p className="text-slate-400 flex-1">{testimonial.message}</p>
        {testimonial.website && (
          <a
            href={testimonial.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={visitWebsiteLabel.replace('{name}', testimonial.name)}
            className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            {testimonial.website.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const { items } = useTestimonials();

  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef, { targets: '[data-reveal-header]', y: 20, duration: 0.5 });
  useScrollReveal(sectionRef, { targets: '[data-reveal-testimonial-card]', y: 50, stagger: 0.1 });

  return (
    <section id="testimonials" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div data-reveal-header className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.testimonials.heading}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.testimonials.subheading}</p>
        </div>

        {items.length > 3 ? (
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 -mx-6 px-6 [scrollbar-width:thin]">
            {items.map((testimonial) => (
              <div key={testimonial.id} className="w-80 sm:w-96 flex-shrink-0 snap-start">
                <TestimonialCard
                  testimonial={testimonial}
                  visitWebsiteLabel={t.testimonials.visitWebsite}
                  ratingValueLabel={(n) => t.testimonials.ratingValueAria.replace('{n}', String(n))}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                visitWebsiteLabel={t.testimonials.visitWebsite}
                ratingValueLabel={(n) => t.testimonials.ratingValueAria.replace('{n}', String(n))}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
