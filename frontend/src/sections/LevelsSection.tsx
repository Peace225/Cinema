// src/sections/LevelsSection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlayCircle, ShieldCheck, Star, Award, Zap, 
  Activity, TrendingUp, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { 
    level: 'AMATEUR', 
    desc: 'Profils émergents avec moins de 2 projets validés.', 
    icon: Star, 
    bgImg: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop',
    border: 'border-white/10', 
    textColor: 'text-slate-400',
    accent: 'group-hover:border-slate-400'
  },
  { 
    level: 'JUNIOR', 
    desc: 'Professionnels actifs avec 2 à 10 projets certifiés.', 
    icon: Award, 
    bgImg: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop',
    border: 'border-orange-500/20', 
    textColor: 'text-orange-400',
    accent: 'group-hover:border-orange-500'
  },
  { 
    level: 'SENIOR', 
    desc: 'Experts confirmés avec plus de 10 ans d\'expérience.', 
    icon: ShieldCheck, 
    bgImg: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop',
    border: 'border-blue-500/20', 
    textColor: 'text-blue-400',
    accent: 'group-hover:border-blue-500'
  }
];

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];

const LevelsSection = () => {
  const [activeUsersCount, setActiveUsersCount] = useState(1240);
  const [notification, setNotification] = useState<{prenom: string} | null>(null);

  useEffect(() => {
    const showNotification = () => {
      const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
      setNotification({ prenom });
      setTimeout(() => setNotification(null), 5000);
    };
    const interval = setInterval(showNotification, 14000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 8000);
    return () => { clearInterval(interval); clearInterval(countInterval); };
  }, []);

  return (
    <section className="relative z-20 bg-black rounded-[2.5rem] overflow-hidden border-b border-slate-900">
      
      {/* 1. ✨ NOTIFICATION SOCIAL PROOF */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 20 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 left-5 z-[100] bg-slate-900/95 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-blue-500 p-2 rounded-full">
              <CheckCircle2 className="text-white" size={18} />
            </div>
            <p className="text-sm font-bold text-white">
              <span className="text-blue-400">{notification.prenom}</span> a rejoint le niveau <span className="text-orange-500">Junior</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER ÉLITE (SLATE-950) DÉFILANT */}
      <div className="py-6 relative overflow-hidden bg-slate-950 border-b border-blue-600 group/header">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-70"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10 px-6">
          <div className="flex items-center gap-4 px-8 shrink-0 border-r border-white/10">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg">
              <ShieldCheck className="text-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                LABELS <span className="text-blue-500">QUALITÉ</span>
              </h2>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Standard de certification</p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{ width: "fit-content" }}
            >
              {[1, 2].map((group) => (
                <div key={group} className="flex items-center gap-12">
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-2 px-6 rounded-full border border-white/5">
                    <p className="text-[12px] font-bold text-white italic">Système de notation certifié ISO-PRO</p>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Activity size={16} className="text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {activeUsersCount} Talents en cours d'évaluation
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* 3. 🎞️ CONTENU PRINCIPAL */}
      <div className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* Grille de fond Cinéma */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

        {/* GAUCHE: Editorial */}
        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 text-orange-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8"
          >
            <Zap size={14} className="fill-orange-400" /> Excellence Garantie
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-10 text-white leading-[0.9] tracking-tighter">
            Des talents <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-white">
              hiérarchisés.
            </span>
          </h2>
          
          <div className="space-y-6">
            {levels.map((badge, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className={`group relative flex items-center gap-6 p-8 bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] border ${badge.border} ${badge.accent} transition-all duration-500 overflow-hidden shadow-2xl`}
              >
                {/* Image de fond au hover */}
                <img src={badge.bgImg} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-all duration-700 scale-110 group-hover:scale-100 grayscale" alt="" />
                
                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-black/60 flex items-center justify-center border border-white/10 ${badge.textColor} group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl`}>
                   <badge.icon size={28} />
                </div>

                <div className="relative z-10">
                  <h4 className={`${badge.textColor} font-black tracking-[0.2em] text-[10px] mb-2 uppercase`}>{badge.level}</h4>
                  <p className="text-slate-200 font-bold text-lg leading-tight group-hover:text-white transition-colors">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DROITE: CTA Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:w-1/2 w-full relative group"
        >
           <div className="relative aspect-square bg-slate-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/10">
              <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-[2000ms]" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-12 md:p-16 flex flex-col items-center text-center lg:items-start lg:text-left justify-end">
                <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center mb-10 text-white shadow-2xl group-hover:rotate-12 transition-all duration-700">
                  <PlayCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-5xl font-black mb-8 text-white tracking-tighter leading-[0.9]">
                  Recrutez <br/> <span className="text-blue-500">l'Élite.</span>
                </h3>
                <Link to="/inscription" className="group/btn relative overflow-hidden inline-flex w-full items-center justify-center bg-white text-black px-8 py-6 rounded-[2rem] font-black text-xl transition-all shadow-2xl hover:text-white">
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 uppercase tracking-tighter">Créer mon compte Pro</span>
                </Link>
              </div>
           </div>
        </motion.div>
      </div>

    </section>
  );
};

export default LevelsSection;