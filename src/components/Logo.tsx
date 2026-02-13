import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'full',
  light = false 
}) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-3xl' },
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;
  const textColor = light ? 'text-white' : 'text-gray-900';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* SVG Logo Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background shape - rounded square */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="12"
          fill="url(#habitek-gradient)"
        />
        
        {/* House roof outline */}
        <path
          d="M32 12L12 28V52H52V28L32 12Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        
        {/* Stylized H with architectural elements */}
        <g>
          {/* Left pillar of H */}
          <rect
            x="18"
            y="20"
            width="6"
            height="28"
            rx="1"
            fill="white"
          />
          
          {/* Right pillar of H */}
          <rect
            x="40"
            y="20"
            width="6"
            height="28"
            rx="1"
            fill="white"
          />
          
          {/* Middle bar of H - styled as a beam */}
          <rect
            x="18"
            y="31"
            width="28"
            height="5"
            rx="1"
            fill="white"
          />
          
          {/* Roof peak accent above H */}
          <path
            d="M32 14L42 22H22L32 14Z"
            fill="white"
            opacity="0.9"
          />
          
          {/* Small window detail in left pillar */}
          <rect
            x="19.5"
            y="40"
            width="3"
            height="4"
            rx="0.5"
            fill="url(#habitek-gradient)"
            opacity="0.6"
          />
          
          {/* Small window detail in right pillar */}
          <rect
            x="41.5"
            y="40"
            width="3"
            height="4"
            rx="0.5"
            fill="url(#habitek-gradient)"
            opacity="0.6"
          />
          
          {/* Door detail at bottom center */}
          <rect
            x="28"
            y="42"
            width="8"
            height="10"
            rx="1"
            fill="white"
            opacity="0.4"
          />
          <rect
            x="29"
            y="43"
            width="6"
            height="9"
            rx="0.5"
            fill="url(#habitek-gradient)"
            opacity="0.3"
          />
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="habitek-gradient"
            x1="2"
            y1="2"
            x2="62"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Logo */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSize} ${textColor} tracking-tight leading-none`}>
            Habitek
          </span>
          <span className={`text-xs ${light ? 'text-white/70' : 'text-amber-600'} font-medium tracking-widest uppercase`}>
            Interiors & Realty
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
