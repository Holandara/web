import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SkillCardProps {
  title: string;
  icon: StaticImageData;
  items: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  items,
  gradientFrom = 'from-purple-500',
  gradientTo = 'to-danger',
}) => {
  return (
    <div className={`group relative rounded-xl p-px bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
      <div className="relative rounded-xl">
        {/* BORDA DO GRADIENTE */}
        <div className={`absolute -inset-px bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl -z-10`} />

        {/* COR DO CONTAINER */}
        <div className="group-hover:bg-[#000000] bg-[#1E1E1E] px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none flex items-center gap-2">
            <Image src={icon} alt={title} width={70} height={70} />
            {title}
          </span>
          <ul className="text-sm text-gray-300 leading-none text-justify">
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;