import { useEffect, useMemo, useRef } from 'react';

const BAR_COUNT = 31;

export const useVisualizer = (params: {
  bars?: number;
  volumeRef: React.MutableRefObject<number>;
}) => {
  const barsRef = useRef<HTMLDivElement[]>([]);

  const noise = useMemo(() => {
    return Array.from(
      { length: params.bars || BAR_COUNT },
      () => Math.random() * 2 * Math.PI
    );
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const volume = params.volumeRef.current;

      barsRef.current.forEach((bar, i) => {
        const scale =
          0.3 + volume * 1.5 + Math.sin(volume * 10 + noise[i]) * 0.5;

        const height = `${Math.max(20, scale * 100)}%`;
        bar.style.height = height;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate(); // start loop

    return () => cancelAnimationFrame(animationId);
  }, [params.volumeRef]);

  return { barcount: params.bars || BAR_COUNT, barsRef };
};
