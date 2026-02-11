import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  bg?: 'cream' | 'softWhite' | 'deepForest' | 'sand';
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  bg = 'cream', 
  className = '',
  id 
}) => {
  const bgColors = {
    cream: 'bg-cream',
    softWhite: 'bg-softWhite',
    deepForest: 'bg-deepForest text-cream',
    sand: 'bg-sand',
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
