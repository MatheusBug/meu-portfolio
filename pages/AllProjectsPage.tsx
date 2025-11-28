import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const AllProjectsPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-12 pb-20">
            <div className="mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-mono-tech text-sm uppercase tracking-widest mb-8 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para Home
                </Link>

                <SectionHeader title="TODOS OS PROJETOS" subtitle="ARQUIVO_COMPLETO" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default AllProjectsPage;
