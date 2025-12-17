import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, ArrowDown, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_DATA, PROJECTS_DATA, SERVICES_DATA } from '../constants';
import NeonButton from './NeonButton';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ServiceCard from './ServiceCard';

const Home: React.FC = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly trigger glitch effect on logo state
            if (Math.random() > 0.9) {
                setGlitchActive(true);
                setTimeout(() => setGlitchActive(false), 200);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 mb-12 lg:mb-20">

                {/* Text Content */}
                <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 font-mono-tech text-xs tracking-[0.2em] rounded-sm">
                        DISPONÍVEL PARA PROJETOS
                    </div>

                    <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black mb-4 leading-tight tracking-tighter text-white glitch-wrapper ${glitchActive ? 'glitch-text' : ''}`} data-text={HERO_DATA.name.split(' ')[0]}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            {HERO_DATA.name.split(' ')[0]}
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                            {HERO_DATA.name.split(' ')[1]}
                        </span>
                    </h1>

                    <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent my-6 mx-auto lg:mx-0"></div>

                    <h2 className="text-xl md:text-2xl font-cyber text-slate-300 tracking-wide mb-8">
                        {HERO_DATA.role} <span className="text-fuchsia-500">_</span>
                    </h2>

                    <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 text-lg leading-relaxed">
                        {HERO_DATA.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full sm:w-auto">
                        <NeonButton
                            label={HERO_DATA.ctaText}
                            variant="cyan"
                            onClick={() => window.open(HERO_DATA.ctaLink, '_blank')}
                        />
                        <NeonButton
                            label="VER PROJETOS"
                            variant="magenta"
                            className="opacity-70 hover:opacity-100"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                    </div>
                </div>

                {/* Visual/Avatar */}
                <div className="flex-1 order-1 lg:order-2 flex justify-center relative">
                    {/* Decorative circles behind */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-dashed border-fuchsia-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-[0_0_30px_rgba(0,255,255,0.15)] group">
                        <img
                            src={HERO_DATA.avatarUrl}
                            alt="Avatar"
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                        {/* Overlay Glitch Lines */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center mb-20 animate-bounce opacity-50">
                <ArrowDown className="text-cyan-400" />
            </div>

            {/* ABOUT SECTION */}
            <section id="about" className="mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 md:col-start-3">
                    <div className="bg-black/50 border border-slate-800 p-1 rounded-sm shadow-2xl backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-slate-900/80 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                            <Terminal size={14} className="text-slate-500" />
                            <span className="text-xs font-mono-tech text-slate-400">usuario@matheus-amorim:~/bio</span>
                            <div className="ml-auto flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>
                        {/* Terminal Body */}
                        <div className="p-6 md:p-8 text-base md:text-lg leading-loose text-slate-100">
                            <p className="mb-6">
                                <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> cat sobre_mim.txt
                            </p>
                            <div className="mb-6 pl-6 border-l-2 border-cyan-500/30 space-y-4">
                                <p>
                                    <strong className="text-white">Atenção é a nova moeda.</strong> No vasto oceano de dados da internet, sua marca não pode ser apenas mais um ruído estático. Ela precisa ser um sinal claro, forte e inesquecível.
                                </p>
                                <p>
                                    Eu não apenas escrevo código; eu <span className="text-cyan-400">arquiteto soluções digitais</span> que dominam a atenção do usuário. Combinando estética cyberpunk de alto impacto com performance de elite, transformo visitantes casuais em aliados engajados.
                                </p>
                                <p>
                                    Sua visão merece uma execução impecável. Vamos construir o futuro da sua presença digital, <span className="text-fuchsia-400">hoje</span>.
                                </p>
                            </div>
                            <p>
                                <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="animate-pulse">_</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-16 md:mb-32">
                <SectionHeader title="PROJETOS" subtitle="ACESSO_ARQUIVO" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.slice(0, 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/projetos">
                        <button className="text-xs font-mono-tech uppercase tracking-[0.3em] text-slate-500 hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400 pb-1">
                            VER TODOS OS PROJETOS [+]
                        </button>
                    </Link>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="mb-16 md:mb-32">
                <SectionHeader title="SERVIÇOS" subtitle="SOLUCOES_DIGITAIS" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES_DATA.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
