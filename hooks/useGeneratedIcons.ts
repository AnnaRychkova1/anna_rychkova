import { useEffect, useState, JSX } from 'react';

type IconData = {
  icon: JSX.Element;
  top: number;
  left: number;
  size: string;
};

export function useGeneratedIcons(
  backgroundIcons: { icon: JSX.Element }[],
  minDistance = 8,
  maxAttempts = 50
): IconData[] {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    const generated: IconData[] = [];

    backgroundIcons.forEach(({ icon }) => {
      let top = 0;
      let left = 0;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < maxAttempts) {
        top = Math.random() * 100;
        left = Math.random() * 100;

        valid = generated.every(({ top: t, left: l }) => {
          const dx = t - top;
          const dy = l - left;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance >= minDistance;
        });

        attempts++;
      }

      const size = `clamp(40px, ${Math.random() * (8 - 4) + 4}vw, 100px)`;
      generated.push({ icon, top, left, size });
    });

    setIcons(generated);
  }, [backgroundIcons, minDistance, maxAttempts]);

  return icons;
}
