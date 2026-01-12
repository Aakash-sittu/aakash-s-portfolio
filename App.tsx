import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import ProjectGrid from "./components/sections/ProjectGrid";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { ToastProvider } from "./contexts/ToastContext";
import ToastContainer from "./components/ui/ToastContainer";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="bg-obsidian min-h-screen antialiased">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            <Hero />
            <ProjectGrid />
            <Experience />
            <TechStack />
            <Contact />
          </div>
        </motion.main>
        <footer className="text-center py-8 text-muted-slate/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Aakash. Crafted with ❤️</p>
        </footer>
      </div>
      <ToastContainer />
    </ToastProvider>
  );
};

export default App;
