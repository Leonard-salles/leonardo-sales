import { useRef } from 'react';
import { useThreeScene } from './useThreeScene';

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useThreeScene(canvasRef, containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
