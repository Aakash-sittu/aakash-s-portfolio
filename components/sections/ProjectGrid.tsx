import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Decentralised DAO Voting Platform",
    description:
      "A decentralized governance platform for on-chain proposal creation and voting using Solidity smart contracts.",
    imageUrl:
      "https://www.horizen.io/academy/assets/images/horizen-dao-97804135190dfd1cae437f6b42097089.jpg",
    tags: ["Solidity", "Ethereum", "Hardhat", "Node.js", "React", "Ethers.js"],
    layout: "2x1",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    description:
      "A full-stack workflow automation system with RBAC, real-time updates using WebSockets, and performance caching with Redis.",
    imageUrl:
      "https://www.computerworld.com/wp-content/uploads/2025/01/1712947-0-68059200-1738185992-Trello.jpg?quality=50&strip=all&w=1024",
    tags: ["Node.js", "React", "MongoDB", "Redis", "Docker", "JWT"],
    layout: "1x1",
  },
  {
    id: 3,
    title: "Compliance Management System",
    description:
      "Engineered from scratch for audits and policy management, featuring secure JWT-based authentication and RBAC.",
    imageUrl:
      "https://www.ezhrconsultants.com/blog/wp-content/uploads/2021/10/compliance-img1.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    layout: "1x1",
  },
];

const getGridClasses = (layout: Project["layout"]) => {
  switch (layout) {
    case "2x2":
      return "md:col-span-2 md:row-span-2";
    case "2x1":
      return "md:col-span-2";
    case "1x2":
      return "md:row-span-2";
    case "1x1":
    default:
      return "md:col-span-1 md:row-span-1";
  }
};

const MotionDiv = motion.div;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <MotionDiv
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-4xl bg-dark-slate/50 p-6 backdrop-blur-sm border border-light-slate/20 ${getGridClasses(
        project.layout
      )}`}
    >
      <motion.img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"></div>
      <div className="relative flex flex-col h-full justify-end">
        <h3 className="text-2xl font-serif font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-muted-slate/90">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-light-slate/50 text-muted-slate"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

const ProjectGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl sm:text-5xl font-serif font-bold text-white mb-12 text-center"
        >
          Featured Work
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[350px]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectGrid;
