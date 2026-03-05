// src/pages/TalentDirectoryPage.tsx
import React, { useState } from 'react';
import { Search, Star, MapPin, Award, CheckCircle2, PlayCircle, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORTATION DES DONNÉES DEPUIS NOTRE NOUVEAU FICHIER ---
import { talents, categories } from '../data/talentsData';

const TalentDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Tous');

  // --- LOGIQUE DE FILTRAGE ---
  const filteredTalents = talents.filter(talent => {
    // 1. Filtre par Onglet (Catégorie)
    const matchesCategory = activeTab === "Tous" || talent.category === activeTab;
    
    // 2. Filtre par Barre de recherche (Nom, Rôle ou Compétences)
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      talent.name.toLowerCase().includes(searchLower) ||
      talent.role.toLowerCase().includes(searchLower) ||
      talent.skills.some(skill => skill.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white selection:bg-orange-500 selection:text-white pb-24">
      
      {/* --- HERO SECTION CINÉMATIQUE --- */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Star size={14} className="fill-orange-400" /> Accès Exclusif
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 font-serif italic"
          >
            Le Répertoire de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">l'Élite</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
          >
            Dénichez les talents qui donneront vie à votre prochaine superproduction. Profils vérifiés, portfolios vidéos et disponibilité en temps réel.
          </motion.p>
        </div>
      </div>

      {/* --- BARRE DE RECHERCHE --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-8 mb-16">
        <div className="bg-white/5 backdrop-blur-2xl p-2 rounded-2xl md:rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-2">
          
          <div className="flex-1 flex items-center px-6 py-3 md:py-0">
            <Search className="text-slate-400 mr-4 shrink-0" size={22} />
            <input 
              type="text" 
              placeholder="Rechercher un talent, un rôle, une compétence..." 
              className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 outline-none text-lg font-light"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10 my-auto"></div>

          <div className="flex items-center px-4 py-3 md:py-0 cursor-pointer group">
            <MapPin className="text-slate-400 mr-3 group-hover:text-orange-500 transition-colors shrink-0" size={20} />
            <span className="text-slate-300 font-medium whitespace-nowrap">Toute la Côte d'Ivoire</span>
            <ChevronDown className="text-slate-500 ml-2 shrink-0" size={16} />
          </div>

          <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-4 rounded-xl md:rounded-full font-black text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
            Trouver
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- FILTRES RAPIDES --- */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-2 overflow-x-auto pb-4 hide-scroll w-full md:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === cat 
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm bg-white/5 px-6 py-2.5 rounded-full border border-white/5 transition-all">
            <SlidersHorizontal size={16} /> Filtres Avancés
          </button>
        </div>

        {/* --- GRILLE DES TALENTS --- */}
        {filteredTalents.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredTalents.map((talent, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  key={talent.id} 
                  className="group relative bg-[#0a0515] rounded-[2rem] overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                >
                  {/* IMAGE & OVERLAY */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={talent.image} 
                      alt={talent.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] via-[#0a0515]/50 to-transparent opacity-90"></div>
                    
                    {/* Pastille Disponibilité */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <span className={`w-2 h-2 rounded-full ${talent.available ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                        {talent.available ? 'Disponible' : 'En Tournage'}
                      </span>
                    </div>

                    {/* Bouton Play Vidéo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-orange-600/90 text-white p-4 rounded-full backdrop-blur-sm hover:scale-110 transition-transform shadow-xl">
                        <PlayCircle size={32} />
                      </button>
                    </div>
                  </div>

                  {/* CONTENU CARTE */}
                  <div className="relative p-6 -mt-16">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <h3 className="text-2xl font-black text-white flex items-center gap-2">
                          {talent.name} <CheckCircle2 size={18} className="text-blue-500" />
                        </h3>
                        <p className="text-orange-500 font-bold text-sm tracking-wide">{talent.role}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-yellow-500 font-black text-lg">
                          <Star size={16} className="fill-yellow-500" /> {talent.rate}
                        </div>
                      </div>
                    </div>
                    
                    {/* Ligne Infos */}
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-medium mb-5 whitespace-nowrap overflow-hidden text-ellipsis">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {talent.location}</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full shrink-0"></span>
                      <span className="flex items-center gap-1"><Award size={14} /> {talent.level}</span>
                    </div>
                    
                    {/* Tags Compétences */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {talent.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                      {talent.skills.length > 3 && (
                        <span className="text-slate-500 text-[10px] font-bold py-1.5">+{talent.skills.length - 3}</span>
                      )}
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full bg-white text-black hover:bg-orange-500 hover:text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-colors duration-300">
                      Voir le Book
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* MESSAGE SI AUCUN RÉSULTAT */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 bg-white/5 border border-white/10 rounded-[2rem]"
          >
            <Search size={48} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Aucun talent trouvé</h3>
            <p className="text-slate-400">Essayez de modifier votre recherche ou de changer de catégorie.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveTab('Tous');}}
              className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default TalentDirectoryPage;