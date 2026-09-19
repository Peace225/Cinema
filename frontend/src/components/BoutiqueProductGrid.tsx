// src/components/BoutiqueProductGrid.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Calendar, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  categoryId: string;
  desc: string;
  price: string | null;
  rentPrice: string | null;
  image: string;
  isNew?: boolean;
  isLimited?: boolean;
  views?: number;
  stock?: number;
}

interface BoutiqueProductGridProps {
  products: Product[];
  currentCategoryData: any;
  handleAction: (name: string, actionType: 'achat' | 'location') => void;
}

const BoutiqueProductGrid: React.FC<BoutiqueProductGridProps> = ({ products, currentCategoryData, handleAction }) => {
  return (
    <div className="flex-1">
      {/* Header Catégorie & Sous-catégories */}
      <div className="mb-10">
        <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
          {currentCategoryData?.icon && React.createElement(currentCategoryData.icon, { className: "text-orange-500", size: 28 })}
          {currentCategoryData?.name}
        </h2>
        
        {currentCategoryData && currentCategoryData.subs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {currentCategoryData.subs.map((sub: string, i: number) => (
              <span key={i} className="bg-[#0a0515] border border-white/10 text-slate-400 text-[11px] font-bold px-4 py-2 rounded-lg cursor-pointer hover:border-orange-500/50 hover:text-white transition-colors">
                {sub}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Grille des cartes */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {products.map((product) => (
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={product.id} 
              className="group bg-[#0a0515] rounded-[2.5rem] p-5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-5 bg-[#050110] border border-white/5">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] via-transparent to-transparent opacity-90"></div>
                
                {product.views && (
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <Eye size={12} className="text-orange-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white">{product.views} pros regardent</span>
                  </div>
                )}

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-lg shadow-lg">Nouveau</span>}
                  {product.isLimited && <span className="bg-red-600 text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-lg shadow-lg">Sur Commande</span>}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-black text-white mb-2 leading-tight">{product.name}</h3>
                <p className="text-xs text-slate-400 mb-6 line-clamp-3 leading-relaxed font-medium">{product.desc}</p>
                
                <div className="space-y-3 mb-6 mt-auto">
                  {product.price && (
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5"><ShoppingCart size={12}/> Achat</span>
                      <span className="text-white font-black">{product.price}</span>
                    </div>
                  )}
                  {product.rentPrice && (
                    <div className="flex justify-between items-center bg-orange-500/10 p-3 rounded-xl border border-orange-500/20">
                      <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest flex items-center gap-1.5"><Calendar size={12}/> Location</span>
                      <span className="text-orange-500 font-black">{product.rentPrice}</span>
                    </div>
                  )}
                </div>

                {product.stock && product.stock <= 2 && (
                  <p className="text-red-500 text-[10px] font-bold mb-4 uppercase tracking-tighter animate-pulse flex items-center gap-1">
                    <Zap size={12} fill="currentColor"/> Plus que {product.stock} dispo !
                  </p>
                )}

                <div className="flex gap-3">
                  {product.price && (
                    <button onClick={() => handleAction(product.name, 'achat')} className="flex-1 bg-white text-black py-3.5 rounded-xl font-black text-[11px] uppercase tracking-wider hover:bg-slate-200 transition-colors shadow-lg">Acheter</button>
                  )}
                  {product.rentPrice && (
                    <button onClick={() => handleAction(product.name, 'location')} className="flex-1 bg-orange-600 text-white py-3.5 rounded-xl font-black text-[11px] uppercase tracking-wider hover:bg-orange-500 transition-colors shadow-[0_5px_20px_rgba(234,88,12,0.3)] flex justify-center items-center gap-2">Louer <Calendar size={14} /></button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BoutiqueProductGrid;