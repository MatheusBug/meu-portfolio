import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'magenta' | 'orange';
  label: string;
  icon?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ variant = 'cyan', label, icon, className, ...props }) => {
  const colorClasses = {
    cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",
    magenta: "border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10 shadow-[0_0_10px_rgba(217,70,239,0.2)] hover:shadow-[0_0_20px_rgba(217,70,239,0.6)]",
    orange: "border-orange-600 text-orange-600 hover:bg-orange-600/10 shadow-[0_0_10px_rgba(234,88,12,0.2)] hover:shadow-[0_0_20px_rgba(234,88,12,0.6)]"
  };

  return (
    <button
      className={`
        relative px-8 py-3 
        border-2 font-cyber tracking-widest font-bold uppercase
        transition-all duration-300 transform hover:-translate-y-1
        clip-corner-sm group w-full sm:w-auto
        ${colorClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="group-hover:animate-pulse">{icon}</span>}
        <span>{label}</span>
      </div>

      {/* Decorative corners */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 opacity-50 ${variant === 'cyan' ? 'border-cyan-200' : variant === 'magenta' ? 'border-fuchsia-200' : 'border-orange-200'}`}></div>
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 opacity-50 ${variant === 'cyan' ? 'border-cyan-200' : variant === 'magenta' ? 'border-fuchsia-200' : 'border-orange-200'}`}></div>
    </button>
  );
};

export default NeonButton;