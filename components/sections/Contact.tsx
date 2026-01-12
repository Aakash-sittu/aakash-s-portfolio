import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../../hooks/useToast";
import CopyIcon from "../icons/CopyIcon";
import CheckIcon from "../icons/CheckIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon"; // Make sure to import this

const Contact: React.FC = () => {
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "aakashsittu28@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    addToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto text-center" // Changed max-w-xl to max-w-3xl to give buttons more room
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
        Let's Connect
      </h2>
      <p className="mt-4 text-lg text-muted-slate">
        Have a project in mind or just want to say hello? My inbox is always
        open. I'll get back to you as soon as possible.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${email}`}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-electric-indigo rounded-full hover:bg-electric-indigo/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-electric-indigo"
        >
          Send an Email
        </a>

        <a
          href="https://linkedin.com/in/aakash-sittu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-muted-slate bg-dark-slate rounded-full hover:bg-light-slate/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-light-slate"
        >
          <LinkedinIcon className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/aakash-sittu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-muted-slate bg-dark-slate rounded-full hover:bg-light-slate/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-light-slate"
        >
          <GithubIcon className="w-5 h-5 mr-2" />
          GitHub
        </a>

        <button
          onClick={handleCopyEmail}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-semibold text-muted-slate bg-dark-slate rounded-full hover:bg-light-slate/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian focus:ring-light-slate"
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 mr-2 text-green-400" />
          ) : (
            <CopyIcon className="w-5 h-5 mr-2" />
          )}
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;
