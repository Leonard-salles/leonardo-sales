import { useLanguage } from '../i18n/LanguageContext';
import { FlagBR } from './icons/FlagBR';
import { FlagGB } from './icons/FlagGB';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const isPt = language === 'pt';

  return (
    <button
      onClick={() => setLanguage(isPt ? 'en' : 'pt')}
      aria-label={isPt ? 'Switch to English' : 'Mudar para português'}
      aria-pressed={!isPt}
      title={isPt ? 'English' : 'Português'}
      className={`w-11 h-11 flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800 hover:border-cyan-500/50 transition-colors ${className}`}
    >
      <span className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-slate-600">
        {isPt ? <FlagGB /> : <FlagBR />}
      </span>
    </button>
  );
}
