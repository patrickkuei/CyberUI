import React from 'react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className="bg-cyberpunk-pink hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded transition"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CyberButton;