// src/pages/SoutenirPage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Star, Crown, Building2, Map, HardHat, 
  TrendingUp, Users, ShieldCheck, ArrowRight, 
  CreditCard, Wallet, Landmark, Construction, 
  Video, CheckCircle2, X, Send, FileText, Briefcase, Phone, Globe, ChevronRight
} from 'lucide-react';

const SoutenirPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white pb-32 relative overflow-hidden">
      
      {/* --- AMBIANCE VISUELLE --- */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-orange-600/10 via-transparent to-transparent opacity-50"></div>
      
      {/* --- HERO : LA VISION INDUSTRIELLE --- */}
      <section className="relative pt-32 pb-20 px-4 text-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
           Appel aux Investisseurs & Consortium
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none">
          Bâtissons <span className="not-italic font-sans">L'Industrie.</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-600 not-italic uppercase font-sans">Cité Éburnywood</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
          Plus qu'un studio, un écosystème. De la **Cité Éburnywood** aux villas privées de **Eburny Hills**, nous érigeons la capitale africaine du cinéma, de la télévision et du divertissement.
        </p>

        {/* --- NOUVEAUX CHIFFRES COLOSSAUX --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20 relative z-10">
          {[
            { label: "Surface Constructible", val: "50 Hectares" },
            { label: "Capacité d'Accueil", val: "3 000 Artistes" },
            { label: "Création d'Emplois", val: "10 000+" },
            { label: "Investissement Requis", val: "50 Milliards" }
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] backdrop-blur-sm hover:border-orange-500/50 transition-colors"
            >
              <p className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.val}</p>
              <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BANNIÈRE INCITATIVE --- */}
      <section className="max-w-5xl mx-auto px-4 mt-10 mb-24 relative z-20">
         <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_30px_60px_rgba(234,88,12,0.3)]">
            <div className="text-left">
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Rejoignez le Tour de Table</h2>
              <p className="text-orange-100 font-medium">Devenez partenaire fondateur de la plus grande infrastructure audiovisuelle d'Afrique francophone.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 bg-white text-orange-600 px-8 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-2"
            >
              Dossier Investisseur <ChevronRight size={18} />
            </button>
         </div>
      </section>

      {/* --- 🏗 STRUCTURE IMMOBILIÈRE --- */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        {/* Cité Eburnywood */}
        <div className="bg-gradient-to-br from-[#0a0515] to-[#050110] border border-white/10 rounded-[3.5rem] p-10 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] transition-all duration-500">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><Video size={200} /></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <Building2 className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Cité Eburnywood</h2>
            <p className="text-slate-400 mb-8 font-medium italic">Le Hub Industriel (Zone Franche Audiovisuelle).</p>
            <ul className="space-y-4 text-slate-300">
              {["Mégastudios de tournage (Normes Hollywood)", "Plateaux de production virtuels (LED Volume)", "Campus de formation aux métiers techniques", "Salles de post-production & Data Centers"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eburny Hills */}
        <div className="bg-gradient-to-br from-[#0a0515] to-[#050110] border border-white/10 rounded-[3.5rem] p-10 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><Map size={200} /></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
              <Construction className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter text-blue-400">Eburny Hills</h2>
            <p className="text-slate-400 mb-8 font-medium italic">Le Beverly Hills Africain.</p>
            <ul className="space-y-4 text-slate-300">
              {["Cité résidentielle ultra-sécurisée (3000 places)", "Villas de grand luxe pour talents internationaux", "Espaces de vie, Restaurants & Boutiques premium", "Palais des Festivals & Avant-premières"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- 💳 TYPES DE SOUTIEN & PARTENARIATS --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-left">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-widest font-sans mb-4">Opportunités <span className="text-orange-500">Stratégiques</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Devenez l'un des piliers de cette transformation historique, selon vos capacités et vos objectifs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* DON / MÉCÉNAT */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all flex flex-col">
            <Heart className="text-red-500 mb-6" size={40} />
            <h3 className="text-2xl font-black mb-4 uppercase">Mécénat Libre</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">Soutenez symboliquement l'initiative. Chaque contribution participe à l'édification de la première pierre.</p>
            <div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
              {["10 000", "25 000", "50 000", "Libre"].map(price => (
                <button key={price} className="bg-white/5 border border-white/10 py-3 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition-all">
                  {price} {price !== "Libre" && "FCFA"}
                </button>
              ))}
            </div>
          </div>

          {/* INVESTISSEUR MAJEUR */}
          <div className="bg-orange-600 p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group flex flex-col">
            <TrendingUp className="absolute -right-4 -top-4 text-white/10 rotate-12" size={120} />
            <h3 className="text-2xl font-black text-white mb-2 uppercase">Investisseur Privé</h3>
            <p className="text-orange-200 text-sm mb-8">Ticket d'entrée à négocier.</p>
            <ul className="space-y-4 mb-10 text-orange-100 font-medium">
              <li className="flex items-start gap-3 text-sm"><CheckCircle2 size={18} className="shrink-0 mt-0.5" /> Prise de participation au capital (Parts sociales)</li>
              <li className="flex items-start gap-3 text-sm"><CheckCircle2 size={18} className="shrink-0 mt-0.5" /> ROI garantis sur les loyers (Studios & Villas)</li>
              <li className="flex items-start gap-3 text-sm"><CheckCircle2 size={18} className="shrink-0 mt-0.5" /> Siège au Conseil d'Administration</li>
            </ul>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-auto w-full bg-white text-orange-600 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
            >
              Demander le Business Plan
            </button>
          </div>

          {/* SPONSOR CORPORATE */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all flex flex-col">
            <Crown className="text-yellow-500 mb-6" size={40} />
            <h3 className="text-2xl font-black mb-2 uppercase">Sponsor B2B</h3>
            <p className="text-slate-400 text-sm mb-8">Pour les entreprises et marques.</p>
            <ul className="space-y-4 mb-10 text-slate-300">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-orange-500" /> Naming exclusif d'un Studio / Bâtiment</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-orange-500" /> Visibilité mondiale sur nos productions</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-orange-500" /> Partenaire technique officiel</li>
            </ul>
            <button className="mt-auto w-full border border-white/20 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
              Contacter les Relations Publiques
            </button>
          </div>

        </div>
      </section>

      {/* --- MODALE BUSINESS PLAN (Capture de Leads Qualifiés) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050110]/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0a0515] border border-orange-500/30 w-full max-w-xl rounded-[3rem] p-8 md:p-12 relative shadow-[0_0_100px_rgba(234,88,12,0.2)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FileText className="text-orange-500" size={32} />
                    </div>
                    <h2 className="text-3xl font-black mb-2 italic">Accès Dossier Confidentiel</h2>
                    <p className="text-slate-400 text-sm">Veuillez renseigner vos informations. Notre cellule financière analysera votre demande avant envoi du mémorandum de 50 Milliards FCFA.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input required type="text" placeholder="Nom de l'Institution / Fonds / Société" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl focus:border-orange-500 outline-none transition-all text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="Nom de l'interlocuteur" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-all text-sm" />
                      <input required type="text" placeholder="Fonction / Titre" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-all text-sm" />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input required type="tel" placeholder="Téléphone Direct (Directeur/Fondateur)" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl focus:border-orange-500 outline-none transition-all text-sm" />
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl">
                      <p className="text-[10px] text-orange-200 leading-relaxed italic">
                        * Ce projet est soumis à un Accord de Confidentialité (NDA). En soumettant ce formulaire, vous acceptez d'être contacté pour un entretien de pré-qualification.
                      </p>
                    </div>
                    <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors">
                      Soumettre la demande de NDA <Send size={16} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h2 className="text-3xl font-black mb-4">Demande en cours d'analyse</h2>
                  <p className="text-slate-400">La Direction de Projet Éburnywood vous contactera sous 24h pour la suite du processus.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 🔐 MOYENS DE PAIEMENT (Pour les dons simples) --- */}
      <section className="max-w-4xl mx-auto px-4 py-20 bg-gradient-to-t from-orange-600/5 to-transparent rounded-[4rem] border border-white/5 text-center mt-20">
        <h3 className="text-xl font-bold mb-10 text-slate-400 uppercase tracking-widest">Dons & Transactions Sécurisées</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <Wallet className="text-orange-500" />
            <span className="text-[10px] font-black tracking-widest">OM / MTN / WAVE</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CreditCard className="text-blue-500" />
            <span className="text-[10px] font-black tracking-widest">STRIPE / CB</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Landmark className="text-green-500" />
            <span className="text-[10px] font-black tracking-widest">VIREMENT</span>
          </div>
        </div>
      </section>

      {/* --- PHASES DU PROJET --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-left">
        <h2 className="text-3xl font-black mb-16 text-center italic uppercase tracking-widest">Roadmap <span className="text-orange-500">2026-2028</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { phase: "PHASE 01", name: "Sécurisation & Foncier", date: "2026", desc: "Levée de fonds d'amorçage. Acquisition définitive des 50 hectares et début du terrassement." },
             { phase: "PHASE 02", name: "Cité Éburnywood", date: "2027", desc: "Construction des mégastudios et de la zone franche audiovisuelle." },
             { phase: "PHASE 03", name: "Eburny Hills", date: "Fin 2027", desc: "Développement des infrastructures résidentielles (Villas, campus, commerces)." },
             { phase: "PHASE 04", name: "Inauguration Mondiale", date: "2028", desc: "Livraison globale et ouverture du premier Festival International Éburnywood." }
           ].map((p, i) => (
             <div key={i} className="p-8 border-t-4 border-orange-500 bg-white/5 rounded-b-2xl hover:bg-white/10 transition-colors">
                <p className="text-orange-500 font-black mb-2 text-xs uppercase tracking-widest">{p.phase}</p>
                <h4 className="font-bold text-xl mb-2">{p.name}</h4>
                <p className="text-[10px] font-black text-slate-500 mb-4 uppercase tracking-tighter bg-black/50 inline-block px-3 py-1 rounded-full">{p.date}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
};

export default SoutenirPage;