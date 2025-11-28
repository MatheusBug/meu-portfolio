import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

import Home from './components/Home';
import AllProjectsPage from './pages/AllProjectsPage';

const App: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(1);

  // Simulate random fluctuation in "Online Users"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return newValue > 0 && newValue < 5 ? newValue : prev; // Keep it low and realistic for a portfolio
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">

        {/* Background Elements */}
        <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-pcb-board.png')] opacity-30"></div>
        <div className="scanlines"></div>

        {/* Decorative Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Top HUD Bar */}
        <div className="fixed top-0 left-0 w-full h-12 border-b border-slate-800 bg-black/80 backdrop-blur-md z-40 flex justify-between items-center px-6">
          <div className="flex items-center gap-4">
            <div className="text-cyan-500 animate-pulse">
              <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_#00FFFF]"></div>
            </div>
            <span className="font-mono-tech text-xs tracking-widest text-slate-400">
              STATUS DO SISTEMA: <span className="text-green-500">OTIMIZADO</span>
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono-tech text-xs">
            <div className="flex items-center gap-2 text-slate-400 border border-slate-800 px-3 py-1 rounded-sm bg-slate-900/50">
              <Users size={12} className="text-fuchsia-500" />
              <span>USUÁRIOS_REDE: 00{activeUsers}</span>
            </div>
            <span className="text-slate-600 hidden md:block">v2.0.77</span>
          </div>
        </div>

        {/* Main Content Container */}
        <main className="relative z-10 pt-24 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<AllProjectsPage />} />
          </Routes>

          {/* FOOTER / CONTACT */}
          <footer id="contact" className="border-t border-slate-800 pt-16 pb-12 relative overflow-hidden bg-gradient-to-t from-black via-slate-950 to-transparent mt-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80 shadow-[0_0_15px_#00FFFF]"></div>

            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-4 animate-pulse">INICIAR CONTATO</h2>
                <p className="font-mono-tech text-slate-400 text-sm tracking-widest uppercase">Canais criptografados abertos para orçamento</p>
              </div>

              {/* Social Icons & Contact Info - Centered */}
              <div className="w-full max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {SOCIAL_LINKS.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 relative p-6 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                      >
                        {/* Glowing background blob */}
                        <div className="absolute inset-0 bg-cyan-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                        <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-slate-900 border border-cyan-900/50 shadow-[0_0_10px_rgba(0,255,255,0.1)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 group-hover:-translate-y-1">
                          <Icon size={24} className="text-cyan-500 group-hover:text-white transition-colors duration-300" />
                        </div>

                        <span className="text-xs font-mono-tech uppercase tracking-widest font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                          {link.label || link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Direct Contact Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded text-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono-tech uppercase">Telefone</span>
                      <span className="text-sm text-slate-300 font-mono-tech">71 98614-5025</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded text-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono-tech uppercase">Email</span>
                      <span className="text-xs text-slate-300 font-mono-tech break-all">matheusamorims1710@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-700 text-[10px] font-mono-tech uppercase tracking-[0.2em] mt-12">
              © {new Date().getFullYear()} MATHEUS AMORIM. SISTEMA SEGURO.
            </p>
          </footer>
        </main>

        {/* Fixed CRT vignette overlay effect */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>
    </Router >
  );
};

export default App;