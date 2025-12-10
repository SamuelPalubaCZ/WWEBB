import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", dark = false }) => {
  return (
    <Image
      src="https://i.imgur.com/4qbt6w4.png"
      alt="ThinkHome"
      width={150}
      height={50}
      className={`${className} object-contain ${dark ? 'invert' : ''}`} // Invert for dark backgrounds if necessary, though the original logo is black/red
      style={{ width: 'auto', height: '100%' }}
    />
  );
};

export default Logo;