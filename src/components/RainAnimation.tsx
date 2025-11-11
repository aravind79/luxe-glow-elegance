import { useEffect, useState } from "react";

interface Raindrop {
  id: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

const RainAnimation = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    // Generate raindrops - more on desktop, fewer on mobile
    const isMobile = window.innerWidth < 768;
    const dropCount = isMobile ? 30 : 60;
    
    const drops: Raindrop[] = Array.from({ length: dropCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 1 + Math.random() * 1.5,
      delay: Math.random() * 2,
      opacity: 0.1 + Math.random() * 0.3,
    }));

    setRaindrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RainAnimation;
