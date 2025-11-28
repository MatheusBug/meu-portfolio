import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-end mb-2">
        <span className="font-cyber text-sm tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
          {skill.name}
        </span>
        <span className="font-mono-tech text-xs text-slate-500">
          {skill.level}% CAPACIDADE
        </span>
      </div>
      
      {/* Bar Container */}
      <div className="h-2 w-full bg-slate-900 border border-slate-800 relative overflow-hidden">
        {/* Fill */}
        <div 
          className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 relative"
          style={{ width: `${skill.level}%` }}
        >
          {/* Glitch/Scanline on bar */}
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;