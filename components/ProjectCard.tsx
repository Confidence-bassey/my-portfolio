"use client";


import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


export type Project = {
 title: string;
 description: string;
 tech: string[];
 liveUrl?: string;
 githubUrl?: string;
};

type ProjectCardProps = {
 project: Project;
 index: number;
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
 return (
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5, delay: index * 0.1 }}
     className="bg-gray-50 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
   >
     <h3 className="text-2xl font-semibold text-gray-800 mb-2">
       {project.title}
     </h3>
     <p className="text-gray-600 mb-4">{project.description}</p>
     <div className="flex flex-wrap gap-2 mb-4">
       {project.tech.map((tech, i) => (
         <span
           key={i}
           className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
         >
           {tech}
         </span>
       ))}
     </div>
     <div className="flex space-x-4">
       {project.liveUrl && (
         <a
           href={project.liveUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-600 hover:underline flex items-center gap-1"
         >
           Live <FaExternalLinkAlt size={14} />
         </a>
       )}

       {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline flex items-center gap-1"
          >
            Code <FaGithub size={16} />
          </a>
        )}
     </div>
   </motion.div>
 );
};


export default ProjectCard;
