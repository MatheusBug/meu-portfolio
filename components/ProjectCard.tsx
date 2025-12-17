import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Eye } from 'lucide-react';
import ProjectPreviewModal from './ProjectPreviewModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative block bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 clip-corner overflow-hidden cursor-default"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300 z-10"></div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          />

          {/* HOVER ACTIONS OVERLAY */}
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">

            <CardButton
              onClick={() => setShowModal(true)}
              icon={<Eye size={16} />}
              label="Preview"
              variant="magenta"
            />

            <CardButton
              href={project.link}
              icon={<ExternalLink size={16} />}
              label="Ao Vivo"
              variant="cyan"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 z-20 group-hover:opacity-10 transition-opacity duration-300">
            <h3 className="text-xl font-cyber text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 mt-2"></div>
          </div>
        </div>
      </div>

      <ProjectPreviewModal
        project={project}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

// Internal Helper Component to match NeonButton style
interface CardButtonProps {
  onClick?: () => void;
  href?: string;
  icon: React.ReactNode;
  label: string;
  variant: 'cyan' | 'magenta';
}

const CardButton: React.FC<CardButtonProps> = ({ onClick, href, icon, label, variant }) => {
  const colorClasses = {
    cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",
    magenta: "border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10 shadow-[0_0_10px_rgba(217,70,239,0.2)] hover:shadow-[0_0_20px_rgba(217,70,239,0.6)]"
  };

  const borderColor = variant === 'cyan' ? 'border-cyan-200' : 'border-fuchsia-200';

  const content = (
    <div className="flex items-center gap-2 relative z-10">
      <span className="group-hover/btn:animate-pulse">{icon}</span>
      <span>{label}</span>
    </div>
  );

  const baseClasses = `
        relative px-6 py-2 
        border font-cyber tracking-widest font-bold uppercase text-xs
        transition-all duration-300 transform hover:-translate-y-1
        clip-corner-sm group/btn w-40 flex justify-center items-center
        backdrop-blur-sm bg-black/40
        ${colorClasses[variant]}
    `;

  // Decorative corners
  const corners = (
    <>
      <div className={`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l opacity-50 ${borderColor}`}></div>
      <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r opacity-50 ${borderColor}`}></div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={baseClasses}
      >
        {content}
        {corners}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
      {corners}
    </button>
  );
};

export default ProjectCard;