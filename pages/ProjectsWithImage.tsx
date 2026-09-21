"use client";


import { motion } from "framer-motion";
import ProjectCardWithImage, { Project } from "../components/ProjectCardWithImage";
// import Desire_events from "../public/Desire_events.png"

const projectsWithImage: Project[] = [
 
 {
   title: "Desiree Events",
   description: "An event planning and management web application that allows users to reach out to event planners",
   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
   image: "/Desire_events.png",
   liveUrl: "https://desire-events.vercel.app/",
 },
 {
   title: "Spam Message Detector",
   description: "Spam message detector is an ML powered web app for detecting spam messages.",
   tech: ["Next JS", "Tailwind CSS", "Typescript", "Python", "Fast API", "Tensorflow"],
   image: "/spammessagedetectordark.png",
   liveUrl: "https://spam-message-detector-app.vercel.app/",
  //  githubUrl: "https://github.com/yourusername/task-manager",
 },
 {
   title: "BankDash",
   description: "BankDash is a modern, responsive, and intuitive banking dashboard built with React, Vite, and Tailwind CSS.",
   tech: ["React", "React Icons", "Vite", "Tailwind CSS", "React Router"],
   image: "/bankDash.png",
   liveUrl: "https://bankdash-team-2025.netlify.app/",
   githubUrl: "https://github.com/InternPulse-Frontend-March-2025/bankdash",
 },
 {
   title: "FarmStedi",
   description: "Farmstedi is a web app that help farmers and plant lovers determine the right crops to grow, track plant health, monitor weather conditions, and optimise watering habit.",
   tech: ["React", "Material UI", "Javascript"],
   image: "/farmstedi.png",
   liveUrl: "https://farmstedi.netlify.app/",
   githubUrl: "https://github.com/yourusername/task-manager",
 },
 {
   title: "Amala-Atlas",
   description: "A web app for identifying amala restaurants and also add any restaurant you discovered to help other find it too.",
   tech: ["Next JS", "Node.js", "Tailwind CSS","Firebase"],
   image: "/amalaatlast.png",
   liveUrl: "https://amala-atlas-20bbf.web.app/",
 },
 {
   title: "Mobile App Download & Retention Analytics",
   description: "Analyzed mobile app acquisition, user retention, and engagement to uncover why users drop off after downloading.",
   tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
   image: "/mobileanalytics.png",
   githubUrl: "https://colab.research.google.com/drive/1JxmhwGtkXcrMvQ76l8Fg5DvkuUWVq7Wv?usp=sharing",
 },
];


const ProjectsWithImage = () => {
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
         {projectsWithImage.map((project, index) => (
           <ProjectCardWithImage key={index} project={project} index={index} />
         ))}
       </div>
     </div>
   </section>
 );
};


export default ProjectsWithImage;