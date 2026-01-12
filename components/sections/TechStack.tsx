
import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'Java', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'Python', 'Solidity', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Nginx'
];

const TechStack: React.FC = () => {
  const extendedTechs = [...technologies, ...technologies];

  const marqueeVariants = {
    animate: {
      x: [0, -2688], // 14 items * 12rem (192px) = 2688px
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    },
  };
  
  return (
    <section className="py-12">
       <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl sm:text-5xl font-serif font-bold text-white mb-12 text-center"
      >
        Tools of the Trade
      </motion.h2>
      <div className="relative w-full overflow-hidden mask-image [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
        >
          {extendedTechs.map((tech, index) => (
            <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center p-4">
              <span className="text-xl font-semibold text-muted-slate hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
