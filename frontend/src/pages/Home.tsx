// src/pages/Home.tsx
import React, { useState } from 'react';

// Imports
import HeroSection from '../sections/HeroSection';
import SidebarWrapper from '../components/SidebarWrapper';
import ProcessSection from '../sections/ProcessSection';
import FeaturedCastings from '../sections/FeaturedCastings';
import TalentDirectorySection from '../sections/TalentDirectorySection';
import CategoriesSection from '../sections/CategoriesSection';
import LevelsSection from '../sections/LevelsSection';
import LegalExpertsSection from '../sections/LegalExpertsSection';
import Testimonials from '../sections/Testimonials';
import TrustBar from '../sections/TrustBar';

const Home = () => {
  const [activeCat, setActiveCat] = useState('actors');

  return (
    // overflow-x-hidden empêche le scroll horizontal indésirable sur mobile
    <div className="min-h-screen bg-[#050110] font-sans text-white overflow-x-hidden">
      
      {/* 🎬 HAUT DE PAGE (Doit gérer son propre responsive en interne) */}
      <HeroSection />

      {/* 🎯 CONTENEUR FLEX : S'empile sur mobile (flex-col), côte à côte sur desktop (lg:flex-row) */}
      {/* max-w-[1920px] empêche le site de s'étirer à l'infini sur les très grands écrans */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row relative items-start px-0 sm:px-4 lg:px-6 xl:px-10">
        
        {/* --- 1. SIDEBAR IMPORTÉE --- */}
        <SidebarWrapper 
           activeCategory={activeCat} 
           setActiveCategory={setActiveCat} 
        />

        {/* --- 2. CONTENU PRINCIPAL --- */}
        {/* - Mobile : rounded-t-[2.5rem] (arrondi en haut seulement) et mt-8 (marge en haut)
          - Desktop (lg) : rounded-[3rem] (arrondi partout), mt-0, ml-6 (marge à gauche)
          - Grand Desktop (xl) : ml-10 pour respirer 
        */}
        <main className="flex-1 min-w-0 bg-slate-50 text-slate-900 rounded-t-[2.5rem] lg:rounded-[3rem] shadow-[-20px_0_50px_rgba(0,0,0,0.3)] mt-8 lg:mt-0 lg:ml-6 xl:ml-10 relative border border-white/5 min-h-screen z-10 w-full">
          
          {/* Espacement vertical adaptatif : 16 (Mobile) -> 24 (Tablette) -> 32 (Desktop) -> 40 (Widescreen) */}
          <div className="flex flex-col items-center py-10 md:py-16 space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-40 relative z-10 w-full">
            
            {/* Paddings adaptatifs pour chaque section selon la taille de l'écran */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <ProcessSection />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <FeaturedCastings />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <TalentDirectorySection activeCategory={activeCat} />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <CategoriesSection />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <LevelsSection />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <LegalExpertsSection />
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
              <Testimonials />
            </div>

            <div className="w-full">
              <TrustBar />
            </div>

          </div>
        </main>

      </div>

      {/* 🚨 3. LA POPUP : Placée TOUT EN BAS du composant parent */}
      {/* Elle est en position absolute par rapport à la fenêtre (fixed inset-0), 
          donc elle a besoin d'être au plus haut niveau de l'arbre HTML pour éviter les conflits z-index */}
      <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
         {/* Remplace "pointer-events-none" par "pointer-events-auto bg-black/80" quand ta popup est ouverte */}
         {/* C'est ici que tu appelles ta Popup ! */}
      </div>

    </div>
  );
};

export default Home;