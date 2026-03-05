// src/pages/AuthPage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Briefcase, ArrowRight, ShieldCheck, Star, Film, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  // État pour basculer entre Connexion (true) et Inscription (false)
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white flex">
      
      {/* --- PANNEAU GAUCHE : IMMERSION & PREUVE SOCIALE (Caché sur mobile) --- */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#0a0515]">
        {/* Image de fond avec Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80" 
            alt="Plateau de tournage" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050110] via-[#050110]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050110]"></div>
        </div>

        {/* Contenu du panneau gauche */}
        <div className="relative z-10 p-16 flex flex-col justify-between h-full w-full">
          
          {/* Logo & Retour */}
          <div className="flex justify-between items-start">
            <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <Film className="h-8 w-8 text-orange-600" />
              <span className="font-bold text-2xl tracking-tight">
                EBURNY<span className="text-orange-600">WOOD</span>
              </span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
              <ChevronLeft size={16} /> Retour au site
            </Link>
          </div>

          {/* Témoignage / Social Proof */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Accès Réseau Actif
            </div>
            <h2 className="text-4xl font-black leading-tight mb-6 font-serif italic">
              "L'outil indispensable pour <br /> structurer nos productions."
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl max-w-md">
              <div className="flex gap-1 text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Le niveau de vérification des profils et l'accès direct aux décideurs ont transformé notre manière de recruter des talents et de financer nos projets en Afrique de l'Ouest.
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full border border-white/20" />
                <div>
                  <p className="font-bold text-sm text-white">Franck M.</p>
                  <p className="text-xs text-orange-500 font-medium">Producteur Exécutif</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Footer */}
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> 12K+ Talents</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> 150+ Studios</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue-500" /> Données chiffrées</div>
          </div>
        </div>
      </div>

      {/* --- PANNEAU DROIT : FORMULAIRE --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        
        {/* Lueur de fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-md relative z-10">
          
          {/* Logo Mobile Uniquement */}
          <div className="flex lg:hidden justify-center mb-10">
            <Link to="/" className="flex items-center gap-2">
              <Film className="h-8 w-8 text-orange-600" />
              <span className="font-bold text-2xl tracking-tight text-white">EBURNY<span className="text-orange-600">WOOD</span></span>
            </Link>
          </div>

          {/* Toggle Connexion / Inscription */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl mb-10">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${isLogin ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Connexion
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${!isLogin ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Candidature
            </button>
          </div>

          {/* Zone de Formulaire Animée */}
          <AnimatePresence mode="wait">
            
            {/* --- VUE: CONNEXION --- */}
            {isLogin && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-black text-white mb-2">Bon retour.</h1>
                  <p className="text-slate-400 text-sm">Accédez à votre tableau de bord et reprenez là où vous en étiez.</p>
                </div>

                <form className="space-y-5">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="email" placeholder="Adresse email professionnelle" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="password" placeholder="Mot de passe" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
                  
                  <div className="flex justify-end">
                    <a href="#" className="text-orange-500 text-xs font-bold hover:underline">Mot de passe oublié ?</a>
                  </div>

                  <button className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                    Accéder à mon espace <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* --- VUE: INSCRIPTION (CANDIDATURE) --- */}
            {!isLogin && (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-black text-white mb-2">Rejoindre l'Élite.</h1>
                  <p className="text-slate-400 text-sm">Votre profil sera soumis à validation par nos équipes sous 24h.</p>
                </div>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input type="text" placeholder="Prénom" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 transition-all" />
                    </div>
                    <div className="relative">
                      <input type="text" placeholder="Nom" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 px-4 focus:outline-none focus:border-orange-500 transition-all" />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="email" placeholder="Email professionnel" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 transition-all" />
                  </div>

                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <select className="w-full bg-[#0a0515] border border-white/10 text-slate-300 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected>Sélectionnez votre profil...</option>
                      <option value="talent">Talent (Acteur, Réalisateur, Tech...)</option>
                      <option value="b2b">Entreprise B2B (Production, Loueur...)</option>
                      <option value="legal">Expert Juridique</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="password" placeholder="Créer un mot de passe" className="w-full bg-[#0a0515] border border-white/10 text-white placeholder-slate-500 text-sm rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500 transition-all" />
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all hover:scale-[1.02] mt-4">
                    Soumettre ma candidature
                  </button>
                  
                  <p className="text-center text-[10px] text-slate-500 mt-4 leading-relaxed">
                    En soumettant ce formulaire, vous acceptez nos <a href="#" className="underline hover:text-orange-500">Conditions d'utilisation</a> et notre politique de confidentialité.
                  </p>
                </form>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Social Login (Alternative B2B) */}
          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute border-t border-white/10 w-full"></div>
              <span className="bg-[#050110] px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 relative z-10">
                Ou continuer avec
              </span>
            </div>
            
            <button className="w-full bg-[#0a0515] border border-white/10 hover:border-white/30 text-white py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-3 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;