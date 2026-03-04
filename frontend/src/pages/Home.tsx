// src/pages/Home.tsx
import React, { useState } from 'react';

import HeroSection from '../sections/HeroSection';
import TrustBar from '../sections/TrustBar';
import CategorySidebar from '../components/CategorySidebar';
import CategoriesSection from '../sections/CategoriesSection';
import TalentDirectorySection from '../sections/TalentDirectorySection';
import LevelsSection from '../sections/LevelsSection';
import Testimonials from '../sections/Testimonials';
import ProcessSection from '../sections/ProcessSection';
import FeaturedCastings from '../sections/FeaturedCastings';
import LegalExpertsSection from '../sections/LegalExpertsSection';
// import Footer from '../sections/Footer'; // Import du Footer Elite

const Home = () => {
  const [activeCat, setActiveCat] = useState('actors');

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white">
      
      {/* 🎬 Section d'entrée impactante */}
      <HeroSection />

      <div className="flex flex-col lg:flex-row w-full relative items-start">
        
        {/* --- 1. SIDEBAR : NAVIGATION PAR MÉTIERS --- */}
        <aside className="hidden lg:block lg:sticky lg:top-24 w-85 h-fit flex-shrink-0 lg:ml-12 py-10 z-30">
          <CategorySidebar activeCategory={activeCat} setCategory={setActiveCat} />
        </aside>

        {/* --- 2. CONTENU PRINCIPAL --- */}
        <main className="flex-grow w-full bg-slate-50 text-slate-900 lg:rounded-tl-[3rem] shadow-[-20px_0_50px_rgba(0,0,0,0.3)] lg:ml-4 overflow-hidden relative border-l border-white/5">
          
          {/* Lueur d'ambiance pour adoucir la transition haut de page */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#050110]/10 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center py-12 space-y-32 relative z-10">
            
            {/* 🪜 Le parcours utilisateur */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <ProcessSection />
            </div>

            {/* 📣 Opportunités de castings (Urgent) */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <FeaturedCastings />
            </div>

            {/* 👥 L'annuaire filtrable par la Sidebar */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <TalentDirectorySection activeCategory={activeCat} />
            </div>

            {/* 🏢 Écosystème B2B & Métiers */}
            <div className="w-full">
              <CategoriesSection />
            </div>

            {/* 🏆 Certification des compétences */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <LevelsSection />
            </div>

            {/* ⚖️ Sécurisation Juridique (Section Elite) */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <LegalExpertsSection />
            </div>

            {/* 💬 Témoignages & Preuve Sociale */}
            <div className="w-full max-w-6xl px-4 lg:px-12">
              <Testimonials />
            </div>

            {/* 🤝 Partenaires Institutionnels */}
            <div className="w-full">
              <TrustBar />
            </div>

          </div>

          {/* 🎬 Clap de fin : Le Footer Pro
          <Footer /> */}
          
        </main>
      </div>
    </div>
  );
};

export default Home;