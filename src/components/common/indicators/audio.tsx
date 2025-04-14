import React, { useEffect, useMemo, useRef } from 'react';
import styles from './audio.module.css';

const BAR_COUNT = 31;

export default function Audio({
  props,
}: {
  props: { volumeRef: React.MutableRefObject<number> };
}) {
  const barsRef = useRef<HTMLDivElement[]>([]);

  const noise = useMemo(() => {
    return Array.from({ length: BAR_COUNT }, () => Math.random() * 2 * Math.PI);
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      const volume = props.volumeRef.current;

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
  }, [props.volumeRef]);

  return (
    <div className={styles.waveform}>
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div
          key={i}
          className={styles.line}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}
