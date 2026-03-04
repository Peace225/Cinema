// src/sections/CategoriesSection.tsx
import React, { useState, useEffect } from 'react';
import { 
  Users, Film, ShieldCheck, TrendingUp, ArrowUpRight, 
  Sparkles, Zap, Activity, Star 
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const categories = [
  { 
    id: 'talents',
    label: 'Professionnels', 
    icon: Users, 
    desc: 'Acteurs, réalisateurs et techniciens certifiés pour vos tournages.',
    stat: '+2,500 Profils',
    link: '/repertoire',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'producteurs',
    label: 'Producteurs', 
    icon: Film, 
    desc: 'Sociétés de production et studios équipés pour réaliser vos projets.',
    stat: '150+ Studios',
    link: '/b2b',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'diffuseurs',
    label: 'Diffuseurs', 
    icon: TrendingUp, 
    desc: 'Chaînes TV, salles de cinéma et plateformes VOD partenaires.',
    stat: 'Réseau B2B',
    link: '/b2b',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'experts',
    label: 'Experts Juridiques', 
    icon: ShieldCheck, 
    desc: 'Avocats spécialisés pour sécuriser vos contrats et droits d\'auteur.',
    stat: 'Protection 100%',
    link: '/experts',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop'
  }
];

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];

const CategoriesSection = () => {
  const [activeUsersCount, setActiveUsersCount] = useState(1240);
  const [notification, setNotification] = useState<{prenom: string} | null>(null);

  useEffect(() => {
    const showNotification = () => {
      const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
      setNotification({ prenom });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(showNotification, 12000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section className="bg-black rounded-[2.5rem] relative z-20 overflow-hidden border-t border-slate-900 ">
      
      {/* 1. ✨ TOAST NOTIFICATION PREMIUM */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 20 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-10 left-5 z-[100] bg-slate-900/95 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 min-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-orange-600 p-2 rounded-full relative">
              <span className="animate-ping absolute inset-0 rounded-full bg-orange-400 opacity-75"></span>
              <Star className="text-white fill-white relative z-10" size={18} />
            </div>
            <div>
              <p className="text-[10px] text-orange-400 font-black uppercase tracking-widest leading-none mb-1">Partenariat B2B</p>
              <p className="text-sm font-bold text-white leading-tight">
                <span className="text-orange-500">{notification.prenom}</span> vient de rejoindre le réseau.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER ÉLITE (SLATE-950) AVEC BANDE DÉFILANTE */}
      <div className="py-6 relative overflow-hidden bg-slate-950 border-b border-orange-400 group/header">
        
        {/* Bordure néon orange supérieure */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-80"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
          <div className="flex items-center gap-4 px-10 shrink-0 border-r border-white/10 bg-gradient-to-l from-white/5 to-transparent">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-orange-600 p-3 rounded-2xl shadow-xl">
                <Zap className="text-white fill-white" size={22} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                ÉCOSYSTÈME <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">BUSINESS</span>
              </h2>
              <p className="text-[10px] text-blue-400/80 font-black uppercase tracking-[0.2em] mt-1.5 italic">Networking Élite</p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              style={{ width: "fit-content" }}
            >
              {[1, 2].map((group) => (
                <div key={group} className="flex items-center gap-12 py-1">
                  
                  {/* Social Proof : Avatars */}
                  <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-md p-2.5 px-6 rounded-2xl border border-white/10 shadow-lg">
                    <div className="flex -space-x-2.5">
                      {[1, 2, 3, 4].map((i) => (
                        <img key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 object-cover" src={`https://i.pravatar.cc/100?img=${i+40}`} alt="user" />
                      ))}
                    </div>
                    <p className="text-[12px] font-bold text-white italic">150+ Sociétés de production actives</p>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <Activity size={16} className="text-green-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest leading-none">
                      Volume d'échange : <span className="text-orange-500">+12M FCFA</span> ce mois
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-white/60">
                     <Users size={14} />
                     <span className="text-[11px] font-black uppercase tracking-widest">{activeUsersCount} Décideurs en ligne</span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Masquage des bords pour le défilement infini */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* 3. 🎞️ CONTENU PRINCIPAL XXL AVEC BORDURES D'ACCENT */}
      <div className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* Bordure de séparation de section élégante */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-orange-500/50 to-transparent opacity-40"></div>

        {/* Lueur d'ambiance de fond */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* En-tête Editorial */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 shadow-sm text-orange-500 text-[10px] font-black tracking-[0.2em] mb-6 uppercase">
              <Sparkles size={14} /> L'Industrie Redéfinie
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
              Développez vos <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">opportunités.</span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-lg font-medium max-w-md lg:text-right leading-relaxed border-l lg:border-l-0 lg:border-r border-orange-500/30 pl-6 lg:pl-0 lg:pr-6 pb-2 italic">
            "Accédez à un réseau exclusif de studios, diffuseurs et experts juridiques certifiés."
          </p>
        </div>

        {/* Grille de Portraits Cinéma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, idx) => (
            <Link 
              to={item.link} 
              key={idx} 
              className="group relative block rounded-[2.5rem] overflow-hidden bg-slate-900 aspect-[4/5] border border-slate-800 hover:border-orange-500/50 transition-all duration-700 hover:-translate-y-3 shadow-2xl"
            >
              {/* Image Fond Ken Burns */}
              <img 
                src={item.image} 
                alt={item.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale-[40%] group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
              />

              {/* Gradient Noir Fumé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header Carte : Icon & Badge */}
              <div className="absolute top-8 inset-x-8 flex justify-between items-start z-20">
                <div className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white group-hover:bg-orange-600 group-hover:border-orange-400 transition-all duration-500">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="bg-black/60 backdrop-blur-xl text-orange-400 border border-white/10 text-[9px] font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-2xl group-hover:border-orange-500/50 transition-colors duration-300">
                  {item.stat}
                </span>
              </div>

              {/* Footer Carte Slide-up */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-orange-400 transition-colors duration-300 leading-none">
                  {item.label}
                </h3>
                
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>

                <div className="flex items-center text-xs font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  Explorer la section <ArrowUpRight size={16} className="ml-2 text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;