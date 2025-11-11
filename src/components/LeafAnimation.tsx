import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
}

const LeafAnimation = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const leafCount = isMobile ? 8 : 15;
    
    const leafElements: Leaf[] = Array.from({ length: leafCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));

    setLeaves(leafElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-fall"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path 
              d="M12 2C12 2 5 7 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 7 12 2 12 2Z" 
              fill="rgba(34, 139, 34, 0.4)" 
              stroke="rgba(34, 139, 34, 0.6)" 
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default LeafAnimation;
