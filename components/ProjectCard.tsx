import React from 'react';
import { Project } from '../types';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="group relative block bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 clip-corner overflow-hidden cursor-default"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
        />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 z-20">
          <h3 className="text-xl font-cyber text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;