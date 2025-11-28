import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left' }) => {
  const alignClass = align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left';

  return (
    <div className={`flex flex-col mb-8 md:mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-5xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-wider mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cyan-400"></span>
      </h2>
      <p className="font-mono-tech text-slate-400 uppercase tracking-widest text-sm mt-4">
        {`// ${subtitle}`}
      </p>
    </div>
  );
};

export default SectionHeader;