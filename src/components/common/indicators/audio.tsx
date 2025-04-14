import React from 'react';
import styles from './audio.module.css';
import { useVisualizer } from '@/hooks/visualizer';

export default function Audio({
  props,
}: {
  props: { volumeRef: React.MutableRefObject<number> };
}) {
  const { barcount, barsRef } = useVisualizer({ volumeRef: props.volumeRef });

  return (
    <div className={styles.waveform}>
      {Array.from({ length: barcount }).map((_, i) => (
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
