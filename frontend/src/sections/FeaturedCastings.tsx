// src/sections/FeaturedCastings.tsx
import React, { useState, useEffect } from 'react';
import { 
  Share2, TrendingUp, Zap, Users, CheckCircle, 
  ShieldCheck, Activity, MapPin, Clock, ChevronRight, 
  Megaphone, Briefcase, PlayCircle, Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

// 🎬 Données des castings (Featured)
const featuredCastings = [
  {
    id: 1,
    title: "Acteur Principal (H/F)",
    production: "Studio Éburnie Films",
    projectType: "Long-métrage dramatique",
    location: "Abidjan, CI",
    deadline: "Dans 3 jours",
    type: "Rémunéré",
    status: "Urgent",
    tags: ["30-45 ans", "Expérience exigée"],
    views: 842,
    applicants: 45
  },
  {
    id: 2,
    title: "Chef Opérateur (DOP)",
    production: "Vision d'Afrique Prod",
    projectType: "Série TV (12 épisodes)",
    location: "Dakar, SN",
    deadline: "Dans 1 semaine",
    type: "Contrat CDD",
    status: "Nouveau",
    tags: ["Maîtrise RED", "Lumière naturelle"],
    views: 520,
    applicants: 12
  },
  {
    id: 3,
    title: "Maquilleur(se) FX",
    production: "CinéMagic CI",
    projectType: "Court-métrage Fantastique",
    location: "Grand-Bassam, CI",
    deadline: "Dans 2 semaines",
    type: "Cachet",
    status: "En cours",
    tags: ["Prothèses", "Effets Spéciaux"],
    views: 310,
    applicants: 8
  }
];

// 👥 Données de Preuve Sociale
const prenomNotifications = ["Moussa", "Awa", "Koffi", "Fatou", "Bakary", "Saliou", "Amadou", "Khady"];
const actions = ["vient de postuler", "a validé son profil Expert", "a été retenu pour un rôle", "vient de s'inscrire"];

const connectedUsers = [
  { id: 1, name: "Kevin", img: "https://i.pravatar.cc/100?img=11", role: "Acteur Pro" },
  { id: 2, name: "Awa", img: "https://i.pravatar.cc/100?img=5", role: "Réalisatrice" },
  { id: 3, name: "Moussa", img: "https://i.pravatar.cc/100?img=12", role: "Nouveau Talent" },
  { id: 4, name: "Fatou", img: "https://i.pravatar.cc/100?img=9", role: "Maquilleuse FX" },
  { id: 5, name: "Koffi", img: "https://i.pravatar.cc/100?img=15", role: "Producteur" },
];

const FeaturedCastings = () => {
  const [notification, setNotification] = useState(null);
  const [activeUsersCount, setActiveUsersCount] = useState(124);

  // Système de notification Flash & Compteur
  useEffect(() => {
    const showNotification = () => {
      const prenom = prenomNotifications[Math.floor(Math.random() * prenomNotifications.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      setNotification({ prenom, action });
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(showNotification, 15000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden my-8 relative">
      
      {/* 1. ✨ TOAST NOTIFICATION (Social Proof) */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 20, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-10 left-5 z-[100] bg-white/90 backdrop-blur-xl border-2 border-orange-200 shadow-2xl p-4 rounded-2xl flex items-center gap-4 min-w-[280px]"
          >
            <div className="bg-orange-100 p-2 rounded-full relative">
              <span className="animate-ping absolute inset-0 rounded-full bg-orange-300 opacity-75"></span>
              <CheckCircle className="text-orange-600 relative z-10" size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Activité Live</p>
              <p className="text-sm font-bold text-gray-900">
                <span className="text-orange-600">{notification.prenom}</span> {notification.action}
              </p>
              <p className="text-[9px] text-gray-400 italic">Il y a quelques secondes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER AVEC BANDE DÉFILANTE (Mode Premium) */}
      <div className="py-5 shadow-inner relative overflow-hidden bg-[#0a061a]">
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10">
          <div className="flex items-center gap-3 px-8 shrink-0 border-r border-white/10">
            <div className="bg-orange-600 p-2.5 rounded-xl shadow-lg shadow-orange-600/20">
              <Zap className="text-white fill-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                Casting <span className="text-orange-500">Live</span>
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Eburnywood Élite</p>
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
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-2 px-5 rounded-full border border-white/5">
                    <div className="flex -space-x-2.5">
                      {[1, 2, 3, 4].map((i) => (
                        <img key={i} className="w-8 h-8 rounded-full border-2 border-[#0a061a] object-cover shadow-lg" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                      ))}
                    </div>
                    <p className="text-[12px] font-bold text-white italic">450 talents consultent les offres</p>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Dernière sélection : <span className="text-orange-500">Kader N'Dao</span> (Acteur)
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. 🟢 BARRE DES TALENTS CONNECTÉS */}
      <div className="bg-gray-50/50 border-b border-gray-100 py-3 px-8 flex items-center overflow-hidden">
        <div className="flex items-center gap-2 shrink-0 border-r border-gray-200 pr-6 mr-6">
          <Activity size={18} className="text-green-500 animate-pulse" />
          <span className="text-xs font-black text-gray-900 uppercase tracking-widest">
            {activeUsersCount} <span className="text-green-600">En Ligne</span>
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden">
            <motion.div 
              className="flex items-center gap-6"
              animate={{ x: ["0%", "-20%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {connectedUsers.map((u) => (
                <div key={u.id} className="flex items-center gap-2 bg-white py-1.5 px-3 rounded-full shadow-sm border border-gray-100">
                  <div className="relative">
                    <img src={u.img} alt={u.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-900 leading-tight">{u.name}</span>
                    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">{u.role}</span>
                  </div>
                </div>
              ))}
            </motion.div>
        </div>
      </div>

      {/* 4. 🎞️ GRILLE DES CASTINGS (Design Pro) */}
      <div className="p-8 bg-gray-50/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCastings.map((casting) => (
            <div
              key={casting.id}
              className="group bg-white rounded-[2.5rem] border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden relative"
            >
              {/* Badge Status */}
              <div className="absolute top-5 right-5 z-10">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  casting.status === 'Urgent' ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'
                }`}>
                  {casting.status}
                </span>
              </div>

              <div className="p-8">
                {/* Icône & Titre */}
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Megaphone size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                  {casting.title}
                </h3>
                <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">{casting.production}</p>
                <p className="text-sm font-medium text-gray-400 italic mb-6">{casting.projectType}</p>

                {/* Détails */}
                <div className="space-y-4 mb-8 bg-gray-50 p-5 rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <MapPin size={18} className="text-orange-500" /> {casting.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Clock size={18} className="text-red-500" /> {casting.deadline}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <Briefcase size={18} className="text-blue-500" /> {casting.type}
                  </div>
                </div>

                {/* Social Proof Interne */}
                <div className="flex items-center justify-between py-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-xs font-black text-gray-900">{casting.applicants} candidats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-green-500" />
                    <span className="text-xs font-bold text-gray-500">{casting.views} vues</span>
                  </div>
                </div>

                {/* Bouton CTA */}
                <Link
                  to={`/castings/${casting.id}`}
                  className="w-full bg-gray-900 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-1"
                >
                  <PlayCircle size={18} />
                  Postuler au casting
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCastings;