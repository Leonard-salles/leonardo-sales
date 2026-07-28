import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  interactive?: boolean;
  size?: number;
  rateLabel?: (n: number) => string;
  ratingLabel?: (n: number) => string;
}

export function StarRating({
  value,
  onChange,
  interactive = false,
  size = 24,
  rateLabel = (n) => `Rate ${n} out of 5`,
  ratingLabel = (n) => `Rating: ${n} out of 5`,
}: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  if (!interactive) {
    return (
      <div role="img" aria-label={ratingLabel(value)} className="flex items-center gap-1">
        {stars.map((n) => (
          <Star
            key={n}
            size={size}
            aria-hidden="true"
            className={n <= value ? 'text-cyan-400 fill-cyan-400' : 'text-slate-600'}
          />
        ))}
      </div>
    );
  }

  return (
    <div role="radiogroup" aria-label={ratingLabel(value)} className="flex items-center gap-1">
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={n === value}
          aria-label={rateLabel(n)}
          onClick={() => onChange?.(n)}
          className="p-1 -m-1"
        >
          <Star
            size={size}
            aria-hidden="true"
            className={`transition-colors ${n <= value ? 'text-cyan-400 fill-cyan-400' : 'text-slate-600 hover:text-cyan-400/60'}`}
          />
        </button>
      ))}
    </div>
  );
}
