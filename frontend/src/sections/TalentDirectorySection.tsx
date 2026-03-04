// src/sections/TalentDirectorySection.tsx
import React, { useState, useEffect } from 'react';
import { 
  MapPin, Star, PlayCircle, ShieldCheck, ChevronRight, 
  Search, Users, Activity, TrendingUp, Zap, StarHalf 
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

// --- BASE DE DONNÉES DES TALENTS ---
const talents = [
  {
    id: 1,
    name: "Kader N'Dao",
    role: "Acteur Senior",
    category: "actors",
    location: "Abidjan, CI",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop",
    tags: ["Cinéma", "Série TV", "Voix-off"],
    verified: true
  },
  {
    id: 5,
    name: "Bintou Touré",
    role: "Actrice Principale",
    category: "actors",
    location: "Abidjan, CI",
    rating: 5.0,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfcc5?q=80&w=800&auto=format&fit=crop",
    tags: ["Drame", "Comédie", "Théâtre"],
    verified: true
  },
  {
    id: 11,
    name: "Evelyne Ily",
    role: "Actrice Principale",
    category: "actors",
    location: "Abidjan, CI",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    tags: ["Cinéma", "Drame"],
    verified: true
  },
  {
    id: 12,
    name: "Guy Kalou",
    role: "Acteur Senior",
    category: "actors",
    location: "Abidjan, CI",
    rating: 5.0,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop",
    tags: ["Long-métrage", "Série TV"],
    verified: true
  },
  {
    id: 2,
    name: "Sarah Koné",
    role: "Réalisatrice",
    category: "real",
    location: "Dakar, SN",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    tags: ["Court-métrage", "Documentaire"],
    verified: true
  },
  {
    id: 3,
    name: "Michel Bamba",
    role: "Directeur Photo",
    category: "dop",
    location: "Abidjan, CI",
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    tags: ["Publicité", "Étalonnage"],
    verified: false
  }
];

const categoryTitles: Record<string, string> = {
  actors: "Acteurs & Comédiens",
  real: "Réalisateurs",
  dop: "Directeurs de la Photographie",
  sound: "Ingénieurs du Son",
  makeup: "Maquilleurs FX",
  edit: "Monteurs Vidéo",
  stunt: "Cascadeurs professionnels"
};

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];

const TalentDirectorySection = ({ activeCategory = 'actors' }: { activeCategory?: string }) => {
  const [notification, setNotification] = useState<{prenom: string} | null>(null);
  const [activeUsersCount, setActiveUsersCount] = useState(1240);
  
  const filteredTalents = talents.filter(talent => talent.category === activeCategory);

  useEffect(() => {
    const showNotification = () => {
      const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
      setNotification({ prenom });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(showNotification, 20000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden my-8 relative">
      
      {/* 1. ✨ TOAST NOTIFICATION */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 20, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="fixed bottom-10 left-5 z-[100] bg-white/90 backdrop-blur-xl border-2 border-blue-200 shadow-2xl p-4 rounded-2xl flex items-center gap-4 min-w-[300px]"
          >
            <div className="bg-blue-100 p-2 rounded-full relative">
              <span className="animate-ping absolute inset-0 rounded-full bg-blue-300 opacity-75"></span>
              <ShieldCheck className="text-blue-600 relative z-10" size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Recrutement Live</p>
              <p className="text-sm font-bold text-gray-900 leading-snug">
                Le profil de <span className="text-blue-700 font-extrabold">{notification.prenom}</span> vient d'être consulté.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER DARK BANDE DÉFILANTE */}
      <div className="py-5 shadow-inner relative overflow-hidden bg-[#050110]">
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
          <div className="flex items-center gap-3 px-8 shrink-0 border-r border-white/10">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
              <StarHalf className="text-white fill-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                Talents <span className="text-blue-500">Certifiés</span>
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Annuaire Officiel</p>
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
                <div key={group} className="flex items-center gap-12 py-1">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-2.5 px-5 rounded-full border border-white/5 shadow-inner">
                    <p className="text-[13px] font-extrabold text-white italic">Directeurs de Casting en ligne</p>
                  </div>
                  <div className="flex items-center gap-2.5 text-white bg-white/5 backdrop-blur-sm p-2.5 px-5 rounded-full border border-white/5">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Disponibilité : <span className="text-green-500">Immédiate</span>
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. 🟢 BARRE LIVE USERS */}
      <div className="bg-gray-50/50 border-b border-gray-100 py-3 px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <Activity size={18} className="text-green-500 animate-pulse" />
          <span className="text-xs font-black text-gray-900 uppercase tracking-widest">
            {activeUsersCount} <span className="text-green-600">Profils en consultation</span>
          </span>
        </div>
      </div>

      {/* 4. 🎞️ RÉPERTOIRE XXL */}
      <div className="p-8 md:p-12 bg-gray-50/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">
              {categoryTitles[activeCategory] || "Talents"}
            </h2>
            <p className="text-slate-500 font-medium">Les meilleurs profils vérifiés prêts pour le tournage.</p>
          </div>
          <div className="bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-200 text-sm font-black text-slate-700">
             <span className="text-blue-600">{filteredTalents.length}</span> Profils trouvés
          </div>
        </div>

        {filteredTalents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredTalents.map((talent) => (
              <motion.div 
                key={talent.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(30,58,138,0.12)] border border-slate-100 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={talent.image} alt={talent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <button className="bg-blue-600 text-white rounded-full p-5 shadow-2xl shadow-blue-600/40">
                      <PlayCircle size={32} />
                    </button>
                  </div>
                  {talent.verified && (
                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white">
                      <ShieldCheck size={14} className="text-blue-500" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Vérifié</span>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{talent.name}</h3>
                      <p className="text-blue-600 font-black text-xs uppercase tracking-widest">{talent.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-xl border border-orange-100/50">
                      <Star size={14} className="fill-orange-500 text-orange-500" />
                      <span className="text-sm font-black">{talent.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-8">
                    <MapPin size={16} className="text-slate-400" />
                    {talent.location}
                  </div>

                  <Link to={`/talents/${talent.id}`} className="mt-auto w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl">
                    Consulter le portfolio <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] border-2 border-slate-100 border-dashed p-20 text-center flex flex-col items-center justify-center">
            <Search size={48} className="text-slate-200 mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Expansion en cours...</h3>
            <p className="text-slate-500 font-medium max-w-sm">De nouveaux talents arrivent très prochainement.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalentDirectorySection;