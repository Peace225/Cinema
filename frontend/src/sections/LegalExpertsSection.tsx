// src/sections/LegalExpertsSection.tsx
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Gavel, FileText, Scale, Zap, 
  Activity, TrendingUp, ChevronRight, CheckCircle, Search
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const experts = [
  {
    id: 1,
    name: "Me. Fatou Sylla",
    role: "Avocate Propriété Intellectuelle",
    specialty: "Droits d'auteur & Contrats Acteurs",
    location: "Abidjan, Cocody",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    verified: true,
    rating: 4.9
  },
  {
    id: 2,
    name: "Cabinet Bamba & Associés",
    role: "Experts en Droit du Cinéma",
    specialty: "Sécurisation de Financements B2B",
    location: "Abidjan, Plateau",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    verified: true,
    rating: 5.0
  },
  {
    id: 3,
    name: "Me. Bakary Koné",
    role: "Conseiller Juridique Prod",
    specialty: "Contrats de Co-production Int.",
    location: "San-Pédro, CI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    verified: true,
    rating: 4.8
  }
];

const prenoms = ["Moussa", "Awa", "Koffi", "Fatou", "Saliou", "Amadou"];

const LegalExpertsSection = () => {
  const [notification, setNotification] = useState<{prenom: string} | null>(null);
  const [activeUsersCount, setActiveUsersCount] = useState(85);

  useEffect(() => {
    const showNotification = () => {
      const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
      setNotification({ prenom });
      setTimeout(() => setNotification(null), 5000);
    };
    const interval = setInterval(showNotification, 18000);
    const countInterval = setInterval(() => {
      setActiveUsersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 8000);
    return () => { clearInterval(interval); clearInterval(countInterval); };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden my-12 relative group/section pb-24"
    >
      
      {/* 1. ✨ TOAST NOTIFICATION SÉCURITÉ */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-10 left-5 z-[100] bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 p-5 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="bg-blue-600 p-2 rounded-full">
              <ShieldCheck className="text-white" size={18} />
            </div>
            <p className="text-sm font-bold text-white">
              <span className="text-blue-400">{notification.prenom}</span> a sécurisé son contrat de tournage.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🔥 HEADER ÉLITE JURIDIQUE */}
      <div className="py-6 relative overflow-hidden bg-[#020617] border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-80"></div>
        <div className="flex flex-col lg:flex-row items-center gap-6 relative z-10 px-10">
          <div className="flex items-center gap-4 px-8 shrink-0 border-r border-white/10">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/30">
              <Scale className="text-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                SÉCURITÉ <span className="text-blue-500">JURIDIQUE</span>
              </h2>
              <p className="text-[9px] text-gray-500 font-black uppercase mt-1">Protection des œuvres</p>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <motion.div 
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-12">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-2.5 px-6 rounded-full border border-white/5">
                    <CheckCircle className="text-green-400" size={14} />
                    <p className="text-[12px] font-bold text-white italic">100% des contrats vérifiés par nos experts</p>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Activity size={16} className="text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {activeUsersCount} Cabinets disponibles pour consultation
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. ⚖️ CONTENU PRINCIPAL XXL */}
      <div className="p-16 md:p-32 relative">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/20 blur-[150px] rounded-full -z-10"></div>

        <div className="text-center max-w-4xl mx-auto mb-32 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-sm">
             Protection & Droits
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.9]">
            Sécurisez votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400">
              Patrimoine Créatif
            </span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto italic">
            "Ne laissez rien au hasard. Travaillez avec des experts qui comprennent les enjeux du 7ème art."
          </p>
        </div>

        {/* Grille des Experts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {experts.map((expert, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15 }}
              className="group relative bg-white rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                <Gavel size={60} />
              </div>

              <div className="relative mb-10">
                <img src={expert.image} className="w-24 h-24 rounded-3xl object-cover border-4 border-slate-50 shadow-xl" alt={expert.name} />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-xl text-white shadow-lg">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 leading-none">{expert.name}</h3>
              <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-6">{expert.role}</p>
              
              <div className="space-y-4 mb-10 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 group-hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <FileText size={18} className="text-slate-400 mt-1" />
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">{expert.specialty}</p>
                </div>
              </div>

              <Link to={`/experts/${expert.id}`} className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4.5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95">
                Demander un conseil <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-32 flex flex-col items-center">
           <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-10">Besoin d'un contrat type ?</p>
           <button className="bg-[#020617] text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.4em] flex items-center gap-6 shadow-2xl hover:bg-blue-700 transition-all">
              Accéder à la bibliothèque juridique
              <ChevronRight size={24} className="text-blue-400" />
           </button>
        </div>
      </div>
    </motion.section>
  );
};

export default LegalExpertsSection;