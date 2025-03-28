import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { SoftSkill } from '@/app/components/softskills';

interface ProjetosProps {
  title: string;
  icon: StaticImageData;
  items?: string[]; 
  habilidades: string[];
}

export const Projetos = ({ title, icon, items = [], habilidades }: ProjetosProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      className="group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger aspect-auto">
      <div className="relative rounded-xl h-full"> 
        <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" />
        <div className="group-hover:bg-black bg-[#1E1E1E] h-full px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent"> 
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none flex flex-col gap-3">
            <Image 
              src={icon} 
              alt={title} 
              width={265}
              height={265}
              className="inline-block object-contain rounded-2xl"
            />
            {title}
          </span>
          <ul className="text-sm text-gray-300 leading-none text-justify mt-2">
            {items.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
            <div className="pt-4 flex flex-wrap gap-2">
              {habilidades.map((habilidade, index) => (
                <SoftSkill key={index} title={habilidade} />
              ))}
            </div>
          </ul>
        </div>
      </div> 
    </motion.div>
  );
};