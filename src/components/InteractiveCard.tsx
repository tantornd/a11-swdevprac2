import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        ${isHovered ? 'shadow-2xl bg-neutral-200' : 'shadow-lg bg-white'}
        rounded-lg
        transition-all duration-300
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}