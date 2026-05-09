"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest font-oswald text-sm transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-bronze text-white hover:bg-bronze-light border border-bronze border-glow",
    secondary: "bg-forest text-white hover:bg-forest-light border border-forest",
    outline: "border border-white/30 text-white hover:border-white hover:bg-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};
