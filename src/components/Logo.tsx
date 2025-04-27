
import React from 'react';

interface LogoProps {
  className?: string;
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', white = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/a4a27171-8693-427f-a3b3-5d7a2c76698c.png" 
        alt="ЛОГАЗ SV" 
        className="h-10" 
      />
    </div>
  );
};

export default Logo;
