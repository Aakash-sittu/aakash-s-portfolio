
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import type { ExperienceItem } from '../../types';

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: 'Sept. 2025 - Present',
    title: 'Systems Engineer Trainee',
    company: 'Infosys Limited',
    description: 'Completed intensive training in Java, MySQL, and software engineering fundamentals. Developed production-style REST APIs and deployed applications on AWS EC2 with Nginx.',
    technologies: ['Java', 'MySQL', 'JDBC', 'AWS EC2', 'Nginx'],
  },
  {
    id: 2,
    date: 'Feb. 2025 - Jun. 2025',
    title: 'Backend Developer Intern',
    company: 'BlueBex Software Solutions',
    description: 'Engineered a full Compliance Management System from scratch. Implemented secure authentication and granular RBAC with JWT, and delivered optimized REST APIs.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC'],
  },
  {
    id: 3,
    date: 'Mar. 2025 - June 2025',
    title: 'Fullstack Software Developer Intern',
    company: 'Emendo.ai (Remote)',
    description: 'Built a Jest-based UI testing framework, increasing test coverage by 60%. Developed and optimized AWS Lambda functions and designed a React Native location input flow.',
    technologies: ['React Native', 'Jest', 'AWS Lambda', 'CloudWatch', 'React'],
  },
];

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
    return (
        <motion.div 
            className="mb-12 ml-4 pl-8 border-l-2 border-dark-slate relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-electric-indigo border-2 border-obsidian"></div>
            <p className="text-sm text-muted-slate mb-1">{item.date}</p>
            <h3 className="text-xl font-serif font-bold text-white">{item.title}</h3>
            <p className="text-md text-muted-slate/80 mb-3">{item.company}</p>
            <p className="text-muted-slate mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-light-slate/50 text-muted-slate">{tech}</span>
                ))}
            </div>
        </motion.div>
    )
}

const Experience: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  return (
    <section ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl sm:text-5xl font-serif font-bold text-white mb-12 text-center"
      >
        Career Journey
      </motion.h2>
      <div className="relative max-w-2xl mx-auto">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
