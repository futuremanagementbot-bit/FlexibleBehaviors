import React from 'react';
import { HeartHandshake, ShieldCheck, Truck, Users } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: <ShieldCheck />, text: "Therapist Approved" },
    { icon: <HeartHandshake />, text: "Sensory Friendly" },
    { icon: <Truck />, text: "Fast Shipping" },
    { icon: <Users />, text: "Community Built" },
  ];

  return (
    <div className="w-full bg-softWhite border-y border-sand/30 py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3 text-center group">
              <div className="p-3 bg-cream rounded-full text-deepForest shadow-soft-sm group-hover:scale-110 group-hover:bg-deepForest group-hover:text-cream transition-all duration-300">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <span className="font-bold text-deepForest text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
