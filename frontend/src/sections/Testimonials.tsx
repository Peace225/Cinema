// src/sections/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { Quote, CheckCircle2, Star, Zap, Activity, TrendingUp, Users } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Awa Sanogo",
    role: "Actrice",
    project: "Série 'Le Trône'",
    content: "Grâce à Eburnywood, j'ai été contactée par une production internationale en moins d'une semaine. Le badge 'Expert' a vraiment fait la différence.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1bfcc5?q=80&w=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Jean-Paul Dibi",
    role: "Réalisateur",
    project: "Studio Horizon",
    content: "Trouver des techniciens certifiés à Abidjan était un casse-tête. La base de données Eburnywood est précise, fluide et fiable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Carine K.",
    role: "Directrice de Casting",
    project: "Agence Spotlight",
    content: "L'interface B2B est révolutionnaire pour notre secteur. On gagne un temps précieux sur la sélection des profils.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    stars: 5
  }
];

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];

const Testimonials = () => {
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
    <section className="bg-black relative rounded-[2.5rem] z-20 overflow-hidden border-b border-slate-900">
      
      {/* 1. ✨ NOTIFICATION SUCCESS STORY */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 20 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 left-5 z-[100] bg-slate-900/95 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-orange-500 p-2 rounded-full">
              <CheckCircle2 className="text-white" size={18} />
            </div>
            <p className="text-sm font-bold text-white">
              <span className="text-orange-400">{notification.prenom}</span> a été recruté via Eburnywood !
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER ÉLITE (SLATE-950) DÉFILANT */}
      <div className="py-6 relative overflow-hidden bg-slate-950 border-b border-white group/header">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-70"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10 px-6">
          <div className="flex items-center gap-4 px-8 shrink-0 border-r border-white/10 bg-gradient-to-l from-white/5 to-transparent">
            <div className="bg-orange-600 p-2.5 rounded-xl shadow-lg">
              <Quote className="text-white fill-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                ÉCHO DES <span className="text-orange-500">PROS</span>
              </h2>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Impact sur l'industrie</p>
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
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-2 px-6 rounded-full border border-white/5 shadow-xl">
                    <p className="text-[12px] font-bold text-white italic">Note moyenne : 4.9/5 par les Directeurs de Studio</p>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      +1,200 Témoignages vérifiés
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                     <Users size={14} />
                     <span className="text-[11px] font-black uppercase tracking-widest">{activeUsersCount} Décideurs connectés</span>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* 3. 🎞️ GRILLE DE TÉMOIGNAGES XXL */}
      <div className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8"
          >
            <Zap size={14} className="fill-orange-400" /> Success Stories
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
            Ils ont choisi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-white">
              l'excellence.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:border-orange-500/30 transition-all duration-700 flex flex-col justify-between shadow-2xl hover:-translate-y-4"
            >
              {/* Bordure intérieure de lumière au survol */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/10 rounded-[3.5rem] transition-all duration-700"></div>
              
              <Quote className="absolute top-10 right-12 text-white/5 group-hover:text-orange-500/20 transition-colors duration-500" size={80} />

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-8">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-slate-200 text-xl leading-relaxed font-medium mb-12 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10">
                <div className="relative">
                  <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-2xl object-cover border border-white/10 group-hover:border-orange-500/50 transition-colors duration-500" />
                  <div className="absolute -bottom-1.5 -right-1.5 bg-blue-600 rounded-full border-2 border-[#050110] p-1 shadow-lg">
                    <CheckCircle2 size={12} className="text-white" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl leading-none mb-2">{review.name}</h4>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-[0.15em]">
                    {review.role} • <span className="text-orange-500/80">{review.project}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;