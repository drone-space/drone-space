import React from 'react';
import styles from './audio.module.css';
import { useVisualizer } from '@/hooks/visualizer';

export default function Audio({
  props,
}: {
  props: {
    volumeRef: React.MutableRefObject<number>;
    size?: { height?: number; width?: number };
  };
}) {
  const { barcount, barsRef } = useVisualizer({
    volumeRef: props.volumeRef,
    bars: 40,
  });

  return (
    <div
      className={styles.waveform}
      style={{
        height: props.size?.height || 16,
      }}
    >
      {Array.from({ length: barcount }).map((_, i) => (
        <div
          key={i}
          className={styles.line}
          style={{
            width: props.size?.width || 3,
          }}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}
