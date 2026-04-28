import { useMemo } from "react";
import "./FallingStars.css";

const COLORS = ["#f9d575", "#E3EFC4", "#fbafcb", "#b9e5ff", "#e56c8f", "#957DAD", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"];

const STAR_PATH = `M16.926 20.2a1 1 0 0 1-.466-.115l-4.471-2.352-4.471 2.348a1 1 0 0 1-1.451-1.054l.854-4.98L3.3 10.521a1 1 0 0 1 .555-1.706l5-.727 2.237-4.531A1 1 0 0 1 11.989 3a1 1 0 0 1 .9.558l2.236 4.53 5 .727a1 1 0 0 1 .555 1.706l-3.618 3.527.854 4.98a1 1 0 0 1-.99 1.172z`;

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

interface StarProps {
  id: number;
}

function Star({ id }: StarProps) {
  const rand = useMemo(() => {
    const r = seededRand(id * 9301 + 49297);
    return Array.from({ length: 6 }, () => r());
  }, [id]);

  const size = 18 + rand[0] * 36;
  const color = COLORS[Math.floor(rand[1] * COLORS.length)];
  const duration = (4 + rand[2] * 6).toFixed(2);
  const delay = -(rand[3] * 12).toFixed(2);
  const startX = (rand[4] * 110).toFixed(1);
  const startY = -(size + rand[5] * 200);

  const keyframes = `
    @keyframes fall-${id} {
      0%   { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
      10%  { opacity: 0.5; }
      90%  { opacity: 0.5; }
      100% { transform: translate(-440px, 560px) rotate(45deg); opacity: 0; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="falling-star"
        style={{
          top: startY,
          left: `${startX}%`,
          animation: `fall-${id} ${duration}s linear ${delay}s infinite`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d={STAR_PATH} fill={color} opacity={0.5} />
        </svg>
      </div>
    </>
  );
}

export default function FallingStars() {
  const stars = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);

  return (
    <div className="falling-stars-container">
      {stars.map((id) => (
        <Star key={id} id={id} />
      ))}
    </div>
  );
}