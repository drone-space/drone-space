import React, { useEffect, useState } from 'react';

export default function AI({ props }: { props?: { size?: number } }) {
  const [angle, setAngle] = useState(0);
  const [colors, setColors] = useState<{ h: number; s: number; l: number }[]>(
    []
  );

  useEffect(() => {
    const safeColors = generateSafeColors({ count: 3 });
    setColors([...safeColors, safeColors[0]]); // loop for gradient
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setAngle((prev) => (prev + 0.1) % 360);

      // animate hue for slow morphing
      setColors((prev) =>
        prev.map((color) => ({
          ...color,
          h: (color.h + 0.15) % 360,
        }))
      );

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const gradient = `conic-gradient(from ${angle}deg, ${colors
    .map((c) => hsl(c.h, c.s, c.l))
    .join(', ')})`;

  return (
    <div
      style={{
        width: props?.size || 200,
        height: props?.size || 200,
        borderRadius: '50%',
        background: gradient,
        transition: 'background 0.3s linear',
      }}
    />
  );
}

function hslToRgb(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return [f(0), f(8), f(4)].map((x) => Math.round(x * 255));
}

function getLuminance(r: number, g: number, b: number) {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const [R, G, B] = [r, g, b].map(toLinear);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function hsl(h: number, s: number, l: number) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generateSafeColors({
  count,
  saturation = 200,
  lightnessMin = 40,
  lightnessMax = 70,
  luminanceMin = 0.2,
  luminanceMax = 0.8,
}: {
  count: number;
  saturation?: number;
  lightnessMin?: number;
  lightnessMax?: number;
  luminanceMin?: number;
  luminanceMax?: number;
}) {
  const colors: { h: number; s: number; l: number }[] = [];
  let hue = 0;
  let tries = 0;

  while (colors.length < count && tries < 1000) {
    const lightness =
      lightnessMin + Math.random() * (lightnessMax - lightnessMin);
    const [r, g, b] = hslToRgb(hue, saturation, lightness);
    const lum = getLuminance(r, g, b);

    if (lum >= luminanceMin && lum <= luminanceMax) {
      colors.push({ h: hue, s: saturation, l: lightness });
    }

    hue = (hue + 37) % 360; // golden angle for better distribution
    tries++;
  }

  return colors;
}
