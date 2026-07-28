export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isLowPowerDevice(): boolean {
  const cores = navigator.hardwareConcurrency ?? 4;
  const narrowViewport = window.innerWidth < 768;
  return cores <= 4 && narrowViewport;
}

export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export function canUseHeroCanvas(): boolean {
  return !prefersReducedMotion() && !isLowPowerDevice() && supportsWebGL();
}
