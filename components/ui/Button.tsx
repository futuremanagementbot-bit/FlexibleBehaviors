import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[15px] tracking-wide transition-all duration-300 rounded-button disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-deepForest text-cream hover:bg-warmSage shadow-soft-sm hover:shadow-soft-hover",
    secondary: "border-2 border-deepForest text-deepForest bg-transparent hover:bg-cream hover:shadow-soft-sm",
    cta: "bg-clay text-cream hover:bg-terracotta shadow-soft-md hover:shadow-soft-hover transform hover:-translate-y-0.5",
    ghost: "text-deepForest hover:bg-sand/20 hover:text-deepForest/80 px-4",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="w-4 h-4">{icon}</span>}
    </motion.button>
  );
};

export default Button;
