
import React from 'react';

interface LogoProps {
  className?: string;
  white?: boolean;
  compact?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', white = false, compact = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {compact ? (
        <img 
          src="/lovable-uploads/5a827baf-9063-4279-a2fb-72886fe7f7bb.png" 
          alt="ЛОГАЗ SV"
          className="h-8" 
        />
      ) : (
        <img 
          src="/lovable-uploads/a4a27171-8693-427f-a3b3-5d7a2c76698c.png" 
          alt="ЛОГАЗ SV" 
          className="h-10" 
        />
      )}
    </div>
  );
};

export default Logo;
