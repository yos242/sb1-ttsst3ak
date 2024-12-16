import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  type = 'button', 
  variant = 'primary', 
  children,
  onClick 
}: ButtonProps) {
  const baseStyles = "w-full py-3 px-4 rounded-md transition-colors duration-200 font-medium";
  const variants = {
    primary: "bg-[#0070ba] text-white hover:bg-[#003087]",
    secondary: "border-2 border-[#0070ba] text-[#0070ba] hover:bg-gray-50"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}