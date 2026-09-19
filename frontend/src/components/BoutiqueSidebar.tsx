// src/components/BoutiqueSidebar.tsx
import React from 'react';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  subs: string[];
}

interface BoutiqueSidebarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

const BoutiqueSidebar: React.FC<BoutiqueSidebarProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <>
      {/* MOBILE NAV */}
      <div className="lg:hidden flex gap-2 overflow-x-auto hide-scroll pb-4 -mx-4 px-4 mb-6">
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => setActiveCategory(cat.id)} 
            className={`whitespace-nowrap px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeCategory === cat.id ? 'bg-orange-600 text-white' : 'bg-[#0a0515] border border-white/10 text-slate-400'
            }`}
          >
            <cat.icon size={16} /> {cat.name}
          </button>
        ))}
      </div>

      {/* --- DESKTOP SIDEBAR --- */}
      {/* 1. Le Wrapper (Colonne invisible qui garde la largeur) */}
      <div className="hidden lg:block w-72 shrink-0">
        
        {/* 2. L'élément réellement collant (À l'intérieur du wrapper) */}
        <div className="sticky top-28 max-h-[80vh] overflow-y-auto hide-scroll pb-10">
          
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2">
            <SlidersHorizontal size={14} /> Rayons Équipement
          </h3>
          
          <div className="space-y-1">
            {categories.map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)} 
                className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-bold flex items-center justify-between group transition-all ${
                  activeCategory === cat.id 
                  ? 'bg-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.2)]' 
                  : 'hover:bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon size={18} className={activeCategory === cat.id ? "text-white" : "text-slate-500 group-hover:text-orange-500 transition-colors"} /> 
                  {cat.name}
                </div>
                {activeCategory === cat.id && <ChevronRight size={16} />}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BoutiqueSidebar;