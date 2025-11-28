import React from 'react';
import { Layout, Search, MapPin, Palette } from 'lucide-react';

interface ServiceCardProps {
    service: {
        id: string;
        title: string;
        description: string;
        icon: string;
    };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Layout': return <Layout size={32} />;
            case 'Search': return <Search size={32} />;
            case 'MapPin': return <MapPin size={32} />;
            case 'Palette': return <Palette size={32} />;
            default: return <Layout size={32} />;
        }
    };

    return (
        <div className="group relative bg-slate-900/50 border border-slate-800 p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300 rounded-lg overflow-hidden hover:-translate-y-2">
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="relative mb-6 text-cyan-500 group-hover:text-white transition-colors duration-300">
                <div className="absolute -inset-2 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                {getIcon(service.icon)}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-cyber font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors">
                    {service.description}
                </p>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
};

export default ServiceCard;
