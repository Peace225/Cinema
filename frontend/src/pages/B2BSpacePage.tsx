// src/pages/B2BSpacePage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Building2, Handshake, ChevronRight, Star, TrendingUp, Users, ShieldCheck, Quote, PlayCircle, BadgeCheck, X, Lock, Timer, AlertCircle } from 'lucide-react';

// --- DATA: NOTIFICATIONS ROTATIVES (SOCIAL PROOF 1) ---
const liveNotifications = [
  {
    id: 1,
    name: "Kora Films",
    location: "Abidjan",
    action: "Vient de clôturer un co-financement de",
    highlight: "25M FCFA",
    time: "Il y a 2 min",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
  },
  {
    id: 2,
    name: "Studio 225",
    location: "Dakar",
    action: "A sécurisé la location du pack",
    highlight: "RED V-Raptor 8K",
    time: "Il y a 14 min",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80"
  },
  {
    id: 3,
    name: "M. Diabaté",
    location: "Paris",
    action: "A signé un contrat de distribution",
    highlight: "Panafricain",
    time: "Il y a 1 heure",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80"
  }
];

const B2BSpacePage = () => {
  const [notifIndex, setNotifIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Logique d'affichage rotatif des popups
  useEffect(() => {
    const cycleNotifications = async () => {
      // Attend 3s avant la première popup
      await new Promise(r => setTimeout(r, 3000));
      setShowNotification(true);

      // Change de notification toutes les 12 secondes
      const interval = setInterval(() => {
        setShowNotification(false);
        setTimeout(() => {
          setNotifIndex((prev) => (prev + 1) % liveNotifications.length);
          setShowNotification(true);
        }, 1000); // 1s de pause écran vide avant la suivante
      }, 12000);

      return () => clearInterval(interval);
    };
    cycleNotifications();
  }, []);

  const currentNotif = liveNotifications[notifIndex];

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white selection:bg-orange-500 selection:text-white pb-20 relative">
      
      {/* --- POPUP PREUVE SOCIALE ROTATIVE --- */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 left-6 z-[100] max-w-sm w-[calc(100%-3rem)] bg-[#0a0515]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-start gap-4"
          >
            <button onClick={() => setShowNotification(false)} className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors">
              <X size={14} />
            </button>
            <div className="relative shrink-0 mt-1">
              <img src={currentNotif.image} alt="Studio" className="w-12 h-12 rounded-full object-cover border border-green-500/30" />
              <div className="absolute -bottom-1 -right-1 bg-black rounded-full"><BadgeCheck size={16} className="text-green-500 fill-green-500/20" /></div>
            </div>
            <div className="pr-4">
              <p className="text-white text-sm font-bold flex items-center gap-2">
                {currentNotif.name} <span className="text-slate-500 font-normal text-xs">{currentNotif.location}</span>
              </p>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                {currentNotif.action} <span className="text-green-400 font-bold">{currentNotif.highlight}</span>.
              </p>
              <p className="text-orange-500 text-[9px] font-black mt-2 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> {currentNotif.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            
            {/* SOCIAL PROOF 3: Utilisateurs en ligne */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
                <ShieldCheck size={14} className="text-orange-400" /> Réseau Sécurisé
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                42 décideurs en ligne
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight font-serif italic">
              Le Hub B2B du <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 not-italic">Cinéma Africain</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
              Connectez votre maison de production avec les meilleurs prestataires et investisseurs. Le cercle fermé des créateurs de l'industrie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                Demander l'accès VIP <ChevronRight size={20} />
              </button>
            </div>

            {/* SOCIAL PROOF 2: Stacked Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <img className="w-10 h-10 rounded-full border-2 border-[#050110] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Membre" />
                <img className="w-10 h-10 rounded-full border-2 border-[#050110] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Membre" />
                <img className="w-10 h-10 rounded-full border-2 border-[#050110] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Membre" />
                <div className="w-10 h-10 rounded-full border-2 border-[#050110] bg-white/10 flex items-center justify-center text-xs font-bold backdrop-blur-sm">+150</div>
              </div>
              <p className="text-xs text-slate-400 font-medium max-w-[200px] leading-tight">Rejoignez l'élite des producteurs déjà actifs ce mois-ci.</p>
            </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-blue-600 rounded-[2rem] blur-2xl opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1000&q=80" alt="Plateau" className="relative z-10 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover h-[500px] w-full" />
          </motion.div>
        </div>
      </div>

      {/* --- FOMO 2: PROJETS FLOUTÉS (TEASING) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
              <TrendingUp className="text-orange-500" /> Deal Flow <span className="text-slate-500 font-light italic">en direct</span>
            </h2>
            <p className="text-slate-400">Opportunités de coproduction récemment déposées.</p>
          </div>
          <p className="hidden md:flex text-orange-500 text-sm font-bold items-center gap-2">
            <Timer size={16} /> Mis à jour il y a 5 min
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projet 1 - Accessible */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
            <span className="bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Série TV (Thriler)</span>
            <h3 className="text-xl font-bold mb-2">"Les Ombres d'Abidjan"</h3>
            <p className="text-slate-400 text-sm mb-6">Recherche coproducteur minoritaire (20%) pour finalisation post-production.</p>
            <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-4">
              <span className="text-slate-500">Budget: 150M FCFA</span>
              <span className="text-green-500">80% financé</span>
            </div>
          </div>

          {/* Projet 2 & 3 - FLOUTÉS (FOMO) */}
          {[1, 2].map((i) => (
            <div key={i} className="relative bg-white/5 border border-white/10 p-6 rounded-[2rem] overflow-hidden group">
              <div className="blur-md opacity-50 select-none pointer-events-none">
                <span className="bg-orange-500/20 text-orange-400 text-[10px] px-3 py-1 rounded-full mb-4 inline-block">Long-Métrage</span>
                <h3 className="text-xl font-bold mb-2">Projet Confidentiel {i}</h3>
                <p className="text-slate-400 text-sm mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus iste.</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4"><span className="text-transparent bg-slate-500 rounded">Budget: XXX</span></div>
              </div>
              {/* Le Cadenas */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050110]/40 backdrop-blur-[2px]">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/20">
                  <Lock className="text-white" size={24} />
                </div>
                <p className="text-white font-bold text-sm">Accès Réservé VIP</p>
                <p className="text-orange-400 text-xs mt-1 font-medium hover:underline cursor-pointer">Connectez-vous pour voir le Deal</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOMO 1: JAUGE DE SCARCITY & CTA --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-tr from-orange-900/40 to-[#0a0515] border border-orange-500/30 p-12 md:p-20 rounded-[3rem] shadow-[0_0_50px_rgba(234,88,12,0.15)] relative overflow-hidden text-center">
          
          <div className="absolute top-0 right-0 p-6 opacity-20"><AlertCircle size={120} /></div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">Prêt à passer à l'échelle ?</h2>
          <p className="text-lg text-orange-200/60 mb-10 max-w-2xl mx-auto relative z-10">Rejoignez le réseau fermé des décideurs de l'industrie cinématographique ouest-africaine.</p>
          
          {/* Progress Bar FOMO */}
          <div className="max-w-md mx-auto mb-10 relative z-10">
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-slate-300 uppercase tracking-widest">Inscriptions de ce mois</span>
              <span className="text-orange-500">96% Plein</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[96%] relative">
                {/* Petit effet brillant sur la barre */}
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-sm animate-pulse"></div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-medium flex items-center justify-center gap-1.5">
              <Timer size={12} className="text-red-400" /> Il ne reste que <strong className="text-white">2 accréditations</strong> pour le batch actuel.
            </p>
          </div>

          <button className="relative z-10 bg-orange-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:scale-105 duration-300">
            Soumettre mon dossier B2B
          </button>
        </div>
      </div>

    </div>
  );
};

export default B2BSpacePage;