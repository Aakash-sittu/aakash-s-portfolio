import React from "react";
import { motion } from "framer-motion";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import GithubIcon from "../icons/GithubIcon";
import ResumeIcon from "../icons/ResumeIcon";

const Hero: React.FC = () => {
  return (
    <section className="text-center min-h-[60vh] flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
      >
        <span className="bg-gradient-to-r from-electric-indigo via-rose-400 to-amber-400 text-transparent bg-clip-text animate-gradient-text">
          Aakash
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 max-w-2xl text-lg text-muted-slate"
      >
        Software Engineer specializing in building robust backend systems and
        full-stack applications. Passionate about creating efficient, scalable,
        and user-centric digital solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a
          href="mailto:aakashsittu28@gmail.com"
          className="flex items-center gap-2 text-muted-slate hover:text-white transition-colors"
        >
          <MailIcon className="w-5 h-5" />
          <span>aakashsittu28@gmail.com</span>
        </a>
        <span className="text-muted-slate/50">|</span>
        <a
          href="https://linkedin.com/in/aakash-sittu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-slate hover:text-white transition-colors"
        >
          <LinkedinIcon className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <span className="text-muted-slate/50">|</span>
        <a
          href="https://github.com/aakash-sittu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-slate hover:text-white transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          <span>Github</span>
        </a>
        <span className="text-muted-slate/50">|</span>
        <a
          href="https://drive.google.com/uc?export=download&id=1nCsKdzxDJBF9KsHKNBDEWY5mMLv3JxmD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-slate hover:text-white transition-colors"
        >
          <ResumeIcon className="w-5 h-5" />
          <span>Resume</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
