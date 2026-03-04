// src/sections/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Star, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2000&auto=format&fit=crop"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    // AGRANDISSEMENT : min-h-[80vh] | py-24 | pt-32 pour bien respirer sous le header
    <section className="relative bg-[#050110] text-white py-24 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center pt-32 border-b border-white/5">
      
      {/* Fond : Opacité remontée à 25% pour mieux voir les images sur ce grand format */}
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-25' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050110]/80 via-transparent to-[#050110]"></div>
        </div>
      ))}

      {/* Lueur d'ambiance en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-orange-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Conteneur principal élargi (max-w-5xl) */}
      <div className="relative max-w-5xl mx-auto text-center z-10 w-full">
        
        {/* Badge plus lisible */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 text-xs font-black tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-xl">
          <Star size={14} className="fill-current" />
          <span>Ivory Coast Cinema</span>
        </div>

        {/* Titre XXL */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
          L'Écosystème du Cinéma <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-white italic">
            Africain Connecté
          </span>
        </h1>
        
        {/* Paragraphe plus large et plus grand */}
        <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
          La plateforme d'élite pour le recrutement, le financement et la gestion de vos productions cinématographiques en Côte d'Ivoire.
        </p>
        
        {/* Boutons redimensionnés pour un meilleur impact */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/repertoire" className="group bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-600/20 hover:-translate-y-1 hover:shadow-orange-600/40">
            <Search size={18} /> 
            <span>Explorer les Talents</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/b2b" className="group bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all backdrop-blur-md hover:-translate-y-1">
            <Briefcase size={18} className="text-orange-500" /> 
            <span>Espace B2B</span>
          </Link>
        </div>

        {/* Indicateurs de slide repositionnés plus bas */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-orange-500 w-6' : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;