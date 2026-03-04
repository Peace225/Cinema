// src/sections/TrustBar.tsx
import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const partners = ["CANAL+", "RTI", "FONSIC", "ORANGE", "UNESCO", "A+ IVOIRE", "MAGIC 7", "STUDIO 225"];

  // On triple la liste pour assurer que le scroll ne montre jamais de vide, peu importe la taille de l'écran
  const scrollingPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 relative overflow-hidden bg-slate-950 border-y border-white/5 group/trust">
      
      {/* Bordure lumineuse supérieure (Rappel du style Elite) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>

      {/* Conteneur de défilement */}
      <div className="flex relative overflow-hidden px-4">
        <motion.div 
          className="flex flex-nowrap gap-20 items-center"
          animate={{ x: ["0%", "-33.33%"] }} // On défile d'un tiers de la longueur totale
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {scrollingPartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 group/partner cursor-default">
              <span className="text-3xl md:text-5xl font-black text-white/10 group-hover/partner:text-orange-500/40 transition-all duration-700 uppercase tracking-tighter inline-block transform group-hover/partner:scale-110 italic">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Effet de fondu sur les côtés pour "cacher" l'entrée et la sortie */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Bordure lumineuse inférieure */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
    </section>
  );
};

export default TrustBar;