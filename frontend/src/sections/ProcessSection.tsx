// src/sections/ProcessSection.tsx
import React, { useState, useEffect } from 'react';
import { 
  UserPlus, ShieldCheck, Clapperboard, Sparkles, 
  CheckCircle, Zap, Activity, TrendingUp, ChevronRight,
  Play, Film, Tv
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Le Script",
    subtitle: "Créez votre profil",
    desc: "Inscrivez-vous gratuitement, ajoutez vos photos, votre bande-démo et vos expériences passées.",
    icon: UserPlus,
    accent: "group-hover/card:text-orange-500",
  },
  {
    id: "02",
    title: "Le Casting",
    subtitle: "Obtenez votre certification",
    desc: "Notre équipe valide vos compétences pour vous attribuer le badge Junior, Senior ou Expert.",
    icon: ShieldCheck,
    accent: "group-hover/card:text-blue-500",
  },
  {
    id: "03",
    title: "Le Tournage",
    subtitle: "Décrochez des rôles",
    desc: "Postulez aux castings exclusifs ou soyez directement contacté par les directeurs de production.",
    icon: Clapperboard,
    accent: "group-hover/card:text-purple-500",
  }
];

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];

const ProcessSection = () => {
  const [notification, setNotification] = useState<{prenom: string} | null>(null);
  const [activeUsersCount, setActiveUsersCount] = useState(1240);

  useEffect(() => {
    const showNotification = () => {
      const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
      setNotification({ prenom });
      setTimeout(() => setNotification(null), 5000);
    };
    
    const interval = setInterval(showNotification, 15000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#050110] rounded-[4rem] shadow-2xl border border-white/5 overflow-hidden my-12 relative group/section pb-24"
    >
      
      {/* --- 1. ✨ TOAST NOTIFICATION CINÉMA --- */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 30 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-12 left-5 z-[100] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-orange-600 p-2 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)]">
              <Play size={20} className="text-white fill-white" />
            </div>
            <p className="text-sm font-bold text-white">
              <span className="text-orange-500">{notification.prenom}</span> est en tournage !
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 2. 🔥 HEADER AVEC BANDE DÉFILANTE --- */}
      <div className="py-6 shadow-inner relative overflow-hidden bg-black/40 border-b border-white/5 backdrop-blur-md mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
          <div className="flex items-center gap-3 px-10 shrink-0 border-r border-white/10">
            <div className="bg-orange-600 p-2.5 rounded-xl shadow-lg shadow-orange-600/20">
              <Zap className="text-white fill-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                Eburnywood <span className="text-orange-500">Live</span>
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1 italic">Production Hub</p>
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
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-2.5 px-6 rounded-full border border-white/5">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <img key={i} className="w-8 h-8 rounded-full border-2 border-[#050110] object-cover" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                      ))}
                    </div>
                    <p className="text-[12px] font-bold text-white italic">Rejoignez 12k+ talents actifs</p>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Nouveau Script validé : <span className="text-orange-500">Bibi de Koumassi</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white">
                    <Activity size={16} className="text-blue-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {activeUsersCount} Profils en ligne
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 3. 🎬 CONTENU PRINCIPAL --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Lens Flares */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[100px] bg-blue-500/20 blur-[120px] rotate-12 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[100px] bg-orange-500/10 blur-[120px] -rotate-12 pointer-events-none"></div>

      <div className="text-center max-w-5xl mx-auto mb-32 relative z-10 px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-600/10 border border-orange-500/30 text-orange-500 text-xs font-black uppercase tracking-[0.4em] mb-10"
        >
          <Film size={16} className="animate-pulse" />
          PRODUCTION PIPELINE
        </motion.div>
        
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85]">
          SILENCE, ÇA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500">
            TOURNE !
          </span>
        </h2>
        <p className="text-gray-400 font-medium text-xl md:text-2xl max-w-2xl mx-auto italic">
          "Votre carrière commence maintenant !"
        </p>
      </div>

      {/* Les Étapes Storyboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 md:px-20 relative z-10">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="group/card relative"
          >
            <div className="absolute -top-10 left-0 text-7xl font-black text-white/5 font-mono">
              SCENE_{step.id}
            </div>

            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 h-full transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)]"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(234,88,12,0.4)] group-hover/card:rotate-[360deg] transition-transform duration-1000">
                <step.icon size={32} className="text-white" />
              </div>

              <h3 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4">
                {step.title}
              </h3>
              <h4 className="text-3xl font-black text-white mb-6 leading-tight">
                {step.subtitle}
              </h4>
              <p className="text-gray-400 font-medium leading-relaxed">
                {step.desc}
              </p>

              <div className="mt-10 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: idx * 0.3 }}
                  className="h-full bg-orange-600"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bouton "Première" */}
      <div className="mt-32 flex justify-center px-6">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(234,88,12,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-orange-600 text-white px-20 py-8 rounded-full font-black text-sm uppercase tracking-[0.5em] flex items-center gap-4 transition-all"
        >
          <Tv size={24} className="group-hover:animate-bounce" />
          ENTRER EN SCÈNE
          <ChevronRight size={24} />
          <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-20 animate-pulse -z-10"></div>
        </motion.button>
      </div>

    </motion.section>
  );
};

export default ProcessSection;