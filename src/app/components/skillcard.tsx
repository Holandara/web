// components/skillcard.tsx
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SkillCardProps {
  title: string;
  icon: StaticImageData;
  items: string[];
}

export const SkillCard = ({ title, icon, items }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      className="group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger aspect-auto">
      <div className="relative rounded-xl h-full"> 
        <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10 " />
        <div className="group-hover:bg-black bg-[#1E1E1E] h-full px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent"> 
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none flex flex-col gap-3">
            <Image 
              src={icon} 
              alt={title} 
              width={48}
              height={48}
              className="inline-block object-contain"
            />
            {title}
          </span>
          <ul className=" text-sm text-gray-300 leading-none text-justify mt-2">
            {items.map((item, index) => (
              <li key={index} className="mb-1">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};