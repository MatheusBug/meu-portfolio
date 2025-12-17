import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectPreviewModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-cyber text-white tracking-wide">
                            {project.title}
                        </h3>
                        <p className="text-xs font-mono-tech text-cyan-500 uppercase tracking-wider mt-1">
                            {project.client}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-900/50">
                    <div className="flex flex-col gap-6">

                        {/* Image Preview - Assuming imageUrl is a screenshot */}
                        <div className="w-full rounded-lg overflow-hidden border border-slate-800 shadow-xl group relative">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="text-lg font-bold text-white font-cyber border-l-2 border-cyan-500 pl-3">
                                    SOBRE O PROJETO
                                </h4>
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div className="md:col-span-1 space-y-4">
                                <h4 className="text-lg font-bold text-white font-cyber border-l-2 border-fuchsia-500 pl-3">
                                    TECNOLOGIAS
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-2 py-1 text-xs font-mono-tech bg-slate-800 text-cyan-400 border border-slate-700 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-wider uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_25px_rgba(8,145,178,0.6)]"
                                    >
                                        <span>Ver Ao Vivo</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Status Line */}
                <div className="px-4 py-2 bg-black border-t border-slate-800 flex justify-between items-center text-[10px] uppercase font-mono-tech text-slate-600">
                    <span>ID: {project.id}</span>
                    <span>STATUS: ONLINE</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreviewModal;
