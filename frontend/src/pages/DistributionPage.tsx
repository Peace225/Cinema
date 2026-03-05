// src/pages/DistributionPage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MonitorPlay, Upload, Globe, ShieldCheck, CheckCircle2, 
  Tv, Film, ArrowRight, Lock, X, Play, Zap, Handshake, 
  TrendingUp, Plus, Info, Globe2, ChevronRight 
} from 'lucide-react';

const partners = ["NETFLIX", "CANAL+", "A+ IVOIRE", "AMAZON PRIME", "TV5MONDE", "DStv"];

const steps = [
  { id: 1, title: "Dépôt Master", desc: "Téléchargement sécurisé de votre œuvre en haute résolution.", icon: Upload },
  { id: 2, title: "Audit Élite", desc: "Vérification juridique et technique (DRM, Droits, Contrats).", icon: ShieldCheck },
  { id: 3, title: "Mise en Marché", desc: "Exposition directe aux acheteurs internationaux via le catalogue.", icon: Globe },
  { id: 4, title: "Licensing", desc: "Signature du contrat de diffusion et perception des revenus.", icon: Handshake }
];

const DistributionPage = () => {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // --- SOCIAL PROOF: NOTIFICATION D'ACQUISITION LIVE ---
  const [notif, setNotif] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setNotif(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleFakeUpload = () => {
    setIsUploading(true);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setUploadProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white selection:bg-orange-500 selection:text-white pb-24 relative overflow-hidden">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* --- NOTIFICATION SOCIAL PROOF --- */}
      <AnimatePresence>
        {notif && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#0a0515]/90 backdrop-blur-2xl border border-blue-500/30 p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 max-w-sm"
          >
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center shrink-0 border border-blue-500/20">
              <Tv className="text-blue-400" size={24} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Acquisition Récente</p>
              <p className="text-sm font-bold text-white leading-tight">"Sœurs de Sang" <span className="text-slate-500 font-normal">vendu à</span> CANAL+ Afrique</p>
              <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">Il y a 3 heures</p>
            </div>
            <button onClick={() => setNotif(false)} className="text-slate-600 hover:text-white"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
            <Globe2 size={14} className="animate-pulse" /> Réseau de Distribution Mondial
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none">
            Diffusez votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-500 to-orange-600 not-italic uppercase">Vision</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Éburnywood est le pont entre la création africaine et les diffuseurs mondiaux. Bénéficiez d'un audit complet et d'une force de vente dédiée.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale mb-20">
            {partners.map(p => <span key={p} className="text-xl font-black tracking-tighter">{p}</span>)}
          </div>
        </div>
      </div>

      {/* --- PROCESSUS 01-04 --- */}
      <section className="max-w-7xl mx-auto px-4 py-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={s.id} 
              className="relative group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all"
            >
              <div className="text-orange-600 font-black text-4xl mb-6 opacity-20">0{s.id}</div>
              <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6">
                <s.icon className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PORTAIL DE DÉPÔT --- */}
      <div className="max-w-4xl mx-auto px-4 relative z-20 mb-32">
        <div className="bg-[#0a0515] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="bg-white/5 p-8 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Upload className="text-white" size={24} />
              </div>
              <h3 className="font-black text-xl">Portail Studio Master</h3>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 h-1 rounded-full ${step >= i ? 'bg-orange-600' : 'bg-white/10'}`}></div>
              ))}
            </div>
          </div>

          <div className="p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Titre de l'œuvre" className="w-full bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-orange-500 transition-all" />
                    <select className="w-full bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-orange-500 text-slate-400">
                      <option>Long-métrage</option>
                      <option>Série TV</option>
                      <option>Documentaire</option>
                    </select>
                  </div>
                  <textarea rows={3} placeholder="Pitch court (Logline)..." className="w-full bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-orange-500"></textarea>
                  <button onClick={() => setStep(2)} className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-sm hover:bg-orange-600 hover:text-white transition-all">Continuer</button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div 
                    onClick={!isUploading && uploadProgress === 0 ? handleFakeUpload : undefined} 
                    className="border-2 border-dashed border-white/10 rounded-[2.5rem] p-16 text-center hover:border-orange-500/50 cursor-pointer group transition-all"
                  >
                    {!isUploading && uploadProgress === 0 ? (
                      <>
                        <Film className="mx-auto text-slate-500 mb-4 group-hover:text-orange-500 transition-colors" size={48} />
                        <h4 className="font-bold text-xl">Cliquez pour uploader le Master</h4>
                        <p className="text-slate-500 text-sm mt-2 font-medium">Format ProRes 422 recommandé</p>
                      </>
                    ) : (
                      <div className="w-full max-w-sm mx-auto">
                        <div className="flex justify-between mb-4 font-black">
                          <span className="text-sm">Cryptage en cours...</span>
                          <span className="text-orange-500 text-sm">{uploadProgress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div animate={{ width: `${uploadProgress}%` }} className="h-full bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.8)]"></motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 border border-white/10 py-4 rounded-xl text-slate-400 font-bold">Retour</button>
                    <button onClick={() => setStep(3)} disabled={uploadProgress < 100} className={`flex-1 py-4 rounded-xl font-black transition-all ${uploadProgress === 100 ? 'bg-orange-600' : 'bg-white/5 text-slate-600'}`}>Étape finale</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center space-y-8">
                  <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl">
                    <ShieldCheck className="mx-auto text-blue-400 mb-6" size={60} />
                    <h3 className="text-2xl font-bold mb-2 uppercase">Protection Blockchain</h3>
                    <p className="text-slate-400 text-sm">Votre film est horodaté et sécurisé. Aucun visionnage n'est possible sans notre NDA automatique.</p>
                  </div>
                  <button onClick={() => setShowSuccess(true)} className="w-full bg-gradient-to-r from-blue-600 to-orange-600 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl">Envoyer au comité de distribution</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- LIVE MARKET ANALYTICS --- */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} fill="currentColor" /> Market Demand
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Analysez la demande <br /> <span className="text-slate-500 italic">en temps réel.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center shrink-0"><TrendingUp className="text-orange-500" /></div>
                <div>
                  <h4 className="font-bold text-lg">Focus : Action Ivoirienne</h4>
                  <p className="text-slate-400 text-sm">Les plateformes VOD recherchent +45% de contenus locaux produits en Côte d'Ivoire.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0"><Globe className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Marchés Européens</h4>
                  <p className="text-slate-400 text-sm">Accédez aux catalogues sous-titrés pour multiplier vos revenus par 3.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget d'activité Live */}
          <div className="flex-1 w-full bg-gradient-to-br from-[#0a0515] to-[#050110] border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10"><MonitorPlay size={120} /></div>
             <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Flux des acheteurs live
             </h3>
             <div className="space-y-6">
               {[
                 { platform: "Netflix Nordics", action: "Visionne un trailer", time: "Maintenant" },
                 { platform: "Amazon UK", action: "Demande un NDA", time: "Il y a 4 min" },
                 { platform: "Canal+ International", action: "Télécharge un dossier", time: "Il y a 12 min" },
                 { platform: "Showmax", action: "Offre soumise", time: "Il y a 1h" },
               ].map((log, i) => (
                 <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                   <div>
                     <p className="text-sm font-bold">{log.platform}</p>
                     <p className="text-[10px] text-slate-500 uppercase font-black">{log.action}</p>
                   </div>
                   <span className="text-[10px] font-bold text-slate-600">{log.time}</span>
                 </div>
               ))}
             </div>
             <p className="text-center text-[10px] text-orange-500 font-bold mt-8 uppercase tracking-[0.2em]">12 acheteurs explorent le catalogue</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-black text-center mb-12">Questions de <span className="text-orange-500 italic">Producteurs</span></h2>
        <div className="space-y-4">
          {[
            { q: "Est-ce que je perds mes droits ?", a: "Non. Éburnywood est votre agent mandataire. Vous restez propriétaire à 100% jusqu'à la signature finale." },
            { q: "Combien de temps prend la mise en marché ?", a: "Après l'audit (48h), votre œuvre est live. Les retours acheteurs surviennent sous 15 à 30 jours." },
            { q: "Quels sont vos frais ?", a: "Nous fonctionnons au succès (Success Fee). Nous ne gagnons de l'argent que si vous vendez votre film." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg group-hover:text-orange-500 transition-colors">{item.q}</h4>
                <Plus size={20} className="text-slate-500" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-orange-600 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-[0_30px_60px_rgba(234,88,12,0.3)]">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Votre film mérite le monde entier.</h2>
            <button className="bg-white text-orange-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform flex items-center gap-2 mx-auto">
              Lancer ma soumission <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </section>

      {/* --- MODALE DE SUCCÈS --- */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#050110]/98 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-[#0a0515] border border-orange-500/30 p-12 rounded-[3.5rem] text-center max-w-xl">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-black mb-4">Master Reçu.</h2>
              <p className="text-slate-400 text-lg mb-10">Votre œuvre est entrée en phase d'audit. Nos agents vous contacteront sous 48h.</p>
              <button onClick={() => setShowSuccess(false)} className="w-full bg-orange-600 py-5 rounded-full font-black uppercase tracking-widest">Suivre mon dépôt</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DistributionPage;