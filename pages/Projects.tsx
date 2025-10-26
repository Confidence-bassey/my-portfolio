"use client";


import { motion } from "framer-motion";
import ProjectCard, { Project } from "../components/ProjectCard";


const projects: Project[] = [
 
 {
   title: "Desiree Events",
   description: "An event planning and management web application that allows users to reach out to event planners",
   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
   liveUrl: "https://desire-events.vercel.app/",
 },
 {
   title: "POS-Padi",
   description:
     "POS-Padi platform is fast, secure, and designed for growth. Manage transfers, withdrawals, bill payments, and more, all from one device.",
   tech: ["React", "Chakra UI", "Redux Toolkit", "React Router", "MUI"],
   liveUrl: "https://pospadi.com.ng",
   githubUrl: "https://github.com/yourusername/task-manager",
 },
 {
   title: "BankDash",
   description:
     "BankDash is a modern, responsive, and intuitive banking dashboard built with React, Vite, and Tailwind CSS. It provides users with an interactive and seamless experience for managing accounts, transactions, investments, credit cards, and other financial services.",
   tech: ["React", "React Icons", "Vite", "Tailwind CSS", "React Router"],
   liveUrl: "https://bankdash-team-2025.netlify.app/",
   githubUrl: "https://github.com/InternPulse-Frontend-March-2025/bankdash",
 },
 {
   title: "FarmStedi",
   description:
     "Farmstedi is a web app that help farmers and plant lovers determine the right crops to grow, track plant health, monitor weather conditions, and optimise watering habit. It blends AI-based recommendations, weather integration and personal dashboard for modern responsive plant care.",
   tech: ["React", "Material UI", "Javascript"],
   liveUrl: "https://farmstedi.netlify.app/",
   githubUrl: "https://github.com/yourusername/task-manager",
 },
 {
   title: "Amala-Atlas",
   description:
     "A web app for identifying amala restaurants and also add any restaurant you discovered to help other find it too.",
   tech: ["Next JS", "Node.js", "Tailwind CSS","Firebase"],
   liveUrl: "https://amala-atlas-20bbf.web.app/",
 },
 {
   title: "Eve",
   description:
     "Eve is an AI-powered mobile app focused on women&apos;s health. It provides telemedicine services for fast, accurate diagnoses in rural areas. Features include symptom tracking, reproductive health education, and pregnancy support. Users can schedule virtual appointments or find nearby hospitals via GPS.",
   tech: ["Java", "Gemini API", "Firebase", "XML", "Python"],
   githubUrl: "https://github.com/Confidence-bassey/Eve-",
 },
];


const Projects = () => {
 return (
   <section id="projects" className="py-20 bg-white">
     <div className="max-w-6xl mx-auto px-4 text-center">
       <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-4xl font-bold text-gray-900 mb-12"
       >
         Projects
       </motion.h2>


       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
         {projects.map((project, index) => (
           <ProjectCard key={index} project={project} index={index} />
         ))}
       </div>
     </div>
   </section>
 );
};


export default Projects;