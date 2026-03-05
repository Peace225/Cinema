// src/pages/LegalExpertsPage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Scale, CheckCircle, ChevronRight, Lock, FileSignature, AlertTriangle, Star, BadgeCheck, X, Clock, FileText } from 'lucide-react';

// --- DATA: NOTIFICATIONS DE PREUVE SOCIALE ---
const liveNotifications = [
  {
    id: 1,
    title: "Protection Validée",
    client: "Studio K. - Abidjan",
    action: "Cession de droits d'auteur sécurisée pour un long-métrage.",
    time: "Il y a 14 min",
    icon: FileSignature,
    color: "text-green-400"
  },
  {
    id: 2,
    title: "Litige Évité",
    client: "Réalisateur Indépendant",
    action: "Gain de cause sur une utilisation abusive d'image (VOD).",
    time: "Il y a 1 heure",
    icon: Scale,
    color: "text-orange-400"
  }
];

// --- DATA: EXPERTS ENRICHIS ---
const experts = [
  { 
    name: "Me. Fatou Sylla", 
    role: "Avocate Propriété Intellectuelle", 
    firm: "Cabinet Sylla & Co", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    rate: 5.0,
    cases: "140+ Dossiers",
    status: "Très sollicitée",
    slotsLeft: 2,
    specialties: ["Droits d'auteur", "Plagiat", "Distribution OAPI"]
  },
  { 
    name: "Me. Bakary Koné", 
    role: "Expert Contrats de Production", 
    firm: "Koné Legal Hub", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    rate: 4.9,
    cases: "85+ Contrats",
    status: "Disponible",
    slotsLeft: 5,
    specialties: ["Coproduction", "Contrats Acteurs", "Assurances"]
  },
  { 
    name: "Me. Awa Diop", 
    role: "Spécialiste Droits à l'image", 
    firm: "Diop Avocats", 
    image: "https://images.unsplash.com/photo-1508214751196-bfd141133ab4?w=600&q=80",
    rate: 4.9,
    cases: "210+ Interventions",
    status: "En consultation",
    slotsLeft: 1,
    specialties: ["Droit à l'image", "Diffamation", "Contrats TV"]
  }
];

// --- DATA: DOCUMENTS FLOUTÉS (FOMO) ---
const documents = [
  { title: "Contrat de Cession de Droits (Acteur)", type: "PDF / Word" },
  { title: "Accord de Coproduction Internationale", type: "PDF / Word" },
  { title: "NDA (Accord de Confidentialité Pitch)", type: "PDF / Word" },
];

const LegalExpertsPage = () => {
  const [notifIndex, setNotifIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Logique d'affichage rotatif des popups
  useEffect(() => {
    const cycleNotifications = async () => {
      await new Promise(r => setTimeout(r, 4000));
      setShowNotification(true);

      const interval = setInterval(() => {
        setShowNotification(false);
        setTimeout(() => {
          setNotifIndex((prev) => (prev + 1) % liveNotifications.length);
          setShowNotification(true);
        }, 800);
      }, 15000);

      return () => clearInterval(interval);
    };
    cycleNotifications();
  }, []);

  const currentNotif = liveNotifications[notifIndex];

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white selection:bg-orange-500 selection:text-white pb-24 relative">
      
      {/* --- POPUP PREUVE SOCIALE --- */}
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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/10 bg-white/5`}>
              <currentNotif.icon size={20} className={currentNotif.color} />
            </div>
            <div className="pr-4">
              <p className="text-white text-sm font-bold flex items-center gap-2">
                {currentNotif.title} <BadgeCheck size={14} className="text-blue-400" />
              </p>
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1">{currentNotif.client}</p>
              <p className="text-slate-300 text-xs leading-relaxed">
                {currentNotif.action}
              </p>
              <p className="text-slate-500 text-[9px] font-black mt-2 uppercase tracking-widest flex items-center gap-1">
                <Clock size={10} /> {currentNotif.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-md">
              <AlertTriangle size={14} /> 80% des litiges sont évitables
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight font-serif italic">
              Blindez vos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 not-italic">Œuvres & Contrats</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed max-w-2xl">
              Un contrat mal rédigé peut vous coûter votre film. Faites-vous accompagner par l'élite juridique du cinéma ouest-africain. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2">
                Consulter un expert <ChevronRight size={20} />
              </button>
            </div>

            {/* Micro-Stats (Autorité) */}
            <div className="flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black text-white">0</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Faille juridique</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-3xl font-black text-white flex items-center gap-1">100<span className="text-orange-500">%</span></p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Confidentialité absolue</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050110] via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" alt="Legal" className="w-full rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-80" />
            
            {/* Badge Flottant */}
            <div className="absolute top-10 -left-6 bg-[#0a0515]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl z-20 flex items-center gap-4">
               <ShieldCheck size={32} className="text-orange-500" />
               <div>
                 <p className="text-white font-bold text-sm">Contrats Certifiés</p>
                 <p className="text-slate-400 text-xs">Conformes OAPI & BURIDA</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- EXPERTS JURIDIQUES (Cartes Premium + Scarcity) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
          <div>
            <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
              <Scale className="text-orange-500" /> Le Cercle des <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Avocats</span>
            </h2>
            <p className="text-slate-400">Experts certifiés en Droit de l'Audiovisuel et Propriété Intellectuelle.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="group bg-[#0a0515] p-1 rounded-[2.5rem] relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)]"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent group-hover:from-orange-500/50 transition-colors duration-500"></div>
              
              <div className="bg-[#050110] rounded-[2.4rem] h-full p-8 relative z-10 flex flex-col">
                <div className="relative mb-6 mx-auto">
                  <img src={expert.image} alt={expert.name} className="w-28 h-28 object-cover rounded-full ring-4 ring-white/5 group-hover:ring-orange-500/30 transition-all" />
                  
                  {/* Status Badge (FOMO) */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0a0515] border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 shadow-xl">
                    <span className={`w-2 h-2 rounded-full ${expert.slotsLeft <= 2 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{expert.status}</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white flex items-center justify-center gap-2 mb-1">
                    {expert.name} <BadgeCheck size={18} className="text-blue-500" />
                  </h3>
                  <p className="text-orange-500 font-bold text-sm tracking-wide mb-1">{expert.role}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{expert.firm}</p>
                </div>

                {/* Info Bar */}
                <div className="flex justify-between items-center bg-white/5 rounded-xl p-3 mb-6 border border-white/5">
                  <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                    <Star size={14} className="fill-yellow-500" /> {expert.rate}
                  </div>
                  <div className="w-px h-6 bg-white/10"></div>
                  <div className="text-slate-300 font-bold text-sm flex items-center gap-2">
                    <FileSignature size={14} className="text-slate-500"/> {expert.cases}
                  </div>
                </div>

                {/* Tags Compétences */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 mt-auto">
                  {expert.specialties.map(skill => (
                    <span key={skill} className="bg-transparent border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Scarcity Message & CTA */}
                <div className="text-center">
                  <p className="text-[11px] text-slate-400 mb-3 font-medium">
                    <strong className={expert.slotsLeft <= 2 ? 'text-red-400' : 'text-orange-400'}>
                      Seulement {expert.slotsLeft} créneaux
                    </strong> disponibles cette semaine.
                  </p>
                  <button className="w-full bg-white text-black hover:bg-orange-500 hover:text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-colors duration-300">
                    Prendre Rendez-vous
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LE COFFRE-FORT (THE VAULT) - SECTION FOMO 2 --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-tr from-[#0a0515] to-blue-900/10 border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
            <ShieldCheck size={400} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-md">
                <Lock size={14} className="text-slate-400" /> The Vault (Coffre-fort)
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Accédez aux <br /><span className="text-orange-500">Contrats Standards</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                Gagnez du temps et de l'argent. Téléchargez nos modèles de contrats rédigés et validés par nos experts juridiques, prêts à être signés.
              </p>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-xl flex items-center gap-2">
                Déverrouiller l'accès <Lock size={18} />
              </button>
            </div>

            {/* Documents Floutés (Teasing) */}
            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="relative bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group overflow-hidden">
                  
                  {/* Contenu Flouté */}
                  <div className="flex items-center gap-4 blur-[3px] opacity-60 select-none pointer-events-none w-full transition-all group-hover:blur-[4px]">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <FileText className="text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{doc.title}</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{doc.type}</p>
                    </div>
                  </div>

                  {/* Overlay Cadenas */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#050110]/20">
                    <div className="flex items-center gap-2 bg-[#0a0515]/90 border border-white/10 px-4 py-2 rounded-full shadow-2xl transform transition-transform group-hover:scale-105">
                      <Lock size={14} className="text-orange-500" />
                      <span className="text-xs font-bold text-white uppercase tracking-widest">Réservé aux membres</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LegalExpertsPage;