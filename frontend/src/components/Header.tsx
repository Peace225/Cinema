// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Film, Search, Briefcase, Gavel, ShoppingBag, MonitorPlay, LogIn, UserPlus, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#050110]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* --- 1. LOGO (Zone Gauche) --- */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="w-11 h-11 bg-orange-600/10 rounded-xl flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-600/20 transition-all">
                <Film className="h-6 w-6 text-orange-500" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                EBURNY<span className="text-orange-500">WOOD</span>
              </span>
            </Link>
          </div>

          {/* --- 2. NAVIGATION (Zone Centre/Droite poussée) --- */}
          <div className="hidden lg:flex items-center ml-auto gap-2 xl:gap-4">
            
            {/* Groupe des liens principaux avec un grand espace à droite */}
            <div className="flex items-center gap-1 xl:gap-2 mr-6 xl:mr-10">
              <Link to="/repertoire" className="text-slate-300 hover:text-white flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all">
                <Search size={15} className="text-slate-500" /> Répertoire
              </Link>
              <Link to="/b2b" className="text-slate-300 hover:text-white flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all">
                <Briefcase size={15} className="text-slate-500" /> B2B
              </Link>
              <Link to="/experts" className="text-slate-300 hover:text-white flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all">
                <Gavel size={15} className="text-slate-500" /> Juridique
              </Link>
              <Link to="/distribution" className="text-slate-300 hover:text-white flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all">
                <MonitorPlay size={15} className="text-slate-500" /> Distribution
              </Link>
              <Link to="/boutique" className="text-slate-300 hover:text-white flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all">
                <ShoppingBag size={15} className="text-slate-500" /> Boutique
              </Link>
            </div>

            {/* --- 3. ACTIONS (Zone Droite Finale) --- */}
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              {/* Bouton Soutenir avec marge */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/soutenir" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-white/10 hover:border-orange-500/50 transition-all">
                  <Heart size={14} className="text-orange-500 fill-orange-500 animate-pulse" />
                  Soutenir
                </Link>
              </motion.div>

              <Link to="/connexion" className="text-slate-300 hover:text-white text-[13px] font-bold transition-colors px-2">
                Connexion
              </Link>
              
              <Link to="/inscription" className="bg-orange-600 text-white px-6 py-3 rounded-xl text-[12px] font-black uppercase tracking-[0.1em] hover:bg-orange-500 shadow-[0_10px_20px_rgba(234,88,12,0.2)] hover:shadow-[0_10px_25px_rgba(234,88,12,0.4)] transition-all">
                S'inscrire
              </Link>
            </div>
          </div>

          {/* --- MOBILE (Icones rapides) --- */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/soutenir" className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
              <Heart size={20} className="text-orange-500 fill-orange-500" />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white bg-white/5 p-2.5 rounded-xl border border-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE (Tiroir) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#0a0515] border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 py-8 space-y-3">
              {[
                { to: "/repertoire", icon: Search, label: "Répertoire des Talents" },
                { to: "/b2b", icon: Briefcase, label: "Espace B2B" },
                { to: "/experts", icon: Gavel, label: "Experts Juridiques" },
                { to: "/distribution", icon: MonitorPlay, label: "Distribution" },
                { to: "/boutique", icon: ShoppingBag, label: "Boutique" },
                { to: "/soutenir", icon: Heart, label: "Soutenir le projet", color: "text-red-500" },
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="flex items-center gap-4 text-slate-300 font-bold p-4 rounded-2xl bg-white/5 border border-white/5 transition-all active:scale-95" 
                  onClick={closeMenu}
                >
                  <link.icon size={22} className={link.color || "text-orange-500"} />
                  {link.label}
                </Link>
              ))}
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Link to="/connexion" className="flex items-center justify-center bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl" onClick={closeMenu}>
                  Connexion
                </Link>
                <Link to="/inscription" className="flex items-center justify-center bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-orange-600/20" onClick={closeMenu}>
                  S'inscrire
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;