// components/softskills/SkillCard.tsx
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SoftSkillsProps {
  title: string; 
}

export const SoftSkill = ({title, item1, item2, item3 }: SoftSkillProps) => {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      className="group "> 
      <div className="relative rounded-xl shadow-xl "> 
          <span className=" border-1 border-gray-400 group-hover:bg-purple group-hover:border-purple group-hover:text-black delay-20 
          text-gray-200 text-xs font-medium  px-2.5 py-0.5  rounded-xl dark:bg-gray-600"
          >
            {title}
          </span>
        </div>
    </motion.div>
    
  );
};