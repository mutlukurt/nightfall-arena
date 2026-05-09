import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-tighter text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-bronze mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};
