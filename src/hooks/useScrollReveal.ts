import { useEffect, useRef, type RefObject } from 'react';
import { gsap } from '../animations/gsapConfig';

interface ScrollRevealOptions {
  /** CSS selector, scoped to the container, for the elements to reveal */
  targets: string;
  /** Stagger delay (seconds) applied between each matched element, in DOM order */
  stagger?: number;
  y?: number;
  x?: number;
  duration?: number;
  start?: string;
}

/**
 * One-shot scroll reveal (fade + slide) via GSAP ScrollTrigger.
 * Individual elements may override the group's x/y via data-reveal-x / data-reveal-y attributes.
 * Always uses toggleActions, never scrub, so it never fights a Motion whileHover/whileTap on the same node.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions
) {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const { targets, stagger = 0, y = 30, x = 0, duration = 0.6, start = 'top 85%' } = optionsRef.current;
        const elements = gsap.utils.toArray<HTMLElement>(targets, container);

        elements.forEach((el, i) => {
          const elX = el.dataset.revealX !== undefined ? Number(el.dataset.revealX) : x;
          const elY = el.dataset.revealY !== undefined ? Number(el.dataset.revealY) : y;

          gsap.fromTo(
            el,
            { opacity: 0, x: elX, y: elY },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration,
              delay: i * stagger,
              ease: 'power2.out',
              clearProps: 'transform',
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const { targets } = optionsRef.current;
        gsap.set(gsap.utils.toArray(targets, container), { opacity: 1, x: 0, y: 0 });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
