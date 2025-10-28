"use client";

import React, { useEffect, useState } from 'react';

const CHARACTERS = 'Σ=({[<a/>]})=>φ;01';
const FONT_SIZE = 16;
const COLUMN_SPACING_FACTOR = 1.5; // Increased for less clutter
const COLORS = ['text-accent', 'text-secondary']; // Using theme colors

const RainColumn = ({ height, id }: { height: number; id: number }) => {
  const [startDelay] = useState(Math.random() * 20);
  const [animationDuration] = useState(8 + Math.random() * 8); 
  const [characters] = useState(() =>
    Array.from({ length: Math.floor(height / FONT_SIZE) }, () => ({
      char: CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length)),
      color: Math.random() < 0.02 ? COLORS[Math.floor(Math.random() * COLORS.length)] : null,
    }))
  );

  return (
    <div
      className="absolute text-primary/50 writing-mode-vertical-rl text-lg will-change-transform"
      style={{
        left: `${id * FONT_SIZE * COLUMN_SPACING_FACTOR}px`,
        animation: `fall ${animationDuration}s linear ${startDelay}s infinite`,
      }}
    >
      {characters.map(({ char, color }, index) => (
        <span 
          key={index} 
          className={color || ''}
          style={{ opacity: Math.max(0.1, (index / characters.length)) }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export function CodeRainBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.body.scrollHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    const timeoutId = setTimeout(updateDimensions, 500);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeoutId);
    }
  }, []);

  const columnCount = dimensions.width > 0 ? Math.floor(dimensions.width / (FONT_SIZE * COLUMN_SPACING_FACTOR)) : 0;

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background">
      {columnCount > 0 && Array.from({ length: columnCount }).map((_, i) => (
        <RainColumn key={i} id={i} height={dimensions.height} />
      ))}
    </div>
  );
}
