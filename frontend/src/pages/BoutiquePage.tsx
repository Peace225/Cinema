// src/pages/BoutiquePage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ShoppingCart, Star, Filter, ArrowRight, Zap, Crown, PlayCircle, Download, CheckCircle2, X, Eye, Calendar, ShieldCheck, Flame } from 'lucide-react';

// --- DATA : PRODUITS ENRICHIS (LOCATION & VENTE) ---
const products = [
  // MATÉRIEL CINÉMA (Nouveau)
  { 
    id: 11, 
    name: "RED V-Raptor 8K VV + Pack Objectifs", 
    category: "Appareils & Caméras", 
    price: "4 500 000 FCFA", 
    rentPrice: "150 000 FCFA/jour",
    rating: 5.0, 
    image: "https://images.unsplash.com/photo-1576133030430-2cb01950e051?w=600&q=80", 
    isNew: true, 
    isLimited: true, 
    type: "gear",
    views: 42 // Social Proof: nombre de personnes qui regardent
  },
  { 
    id: 12, 
    name: "Stabilisateur DJI Ronin 2 Professional", 
    category: "Appareils & Caméras", 
    price: "1 200 000 FCFA", 
    rentPrice: "45 000 FCFA/jour",
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1589131008205-044c79658f81?w=600&q=80", 
    isNew: false, 
    isLimited: false, 
    type: "gear",
    stock: 2 
  },
  { 
    id: 13, 
    name: "Kit Arri Skypanel S60-C (Éclairage)", 
    category: "Appareils & Caméras", 
    price: "2 800 000 FCFA", 
    rentPrice: "60 000 FCFA/jour",
    rating: 5.0, 
    image: "https://images.unsplash.com/photo-1543165365-072ca203193c?w=600&q=80", 
    isNew: true, 
    isLimited: true, 
    type: "gear",
    views: 18
  },

  // MERCHANDISING
  { id: 1, name: "Hoodie 'Director's Cut' Éburnywood", category: "Vêtements & Merch", price: "35 000 FCFA", rating: 4.9, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80", isNew: true, isLimited: false, type: "physique" },
  { id: 3, name: "Veste Multi-Poches (Chef Op)", category: "Vêtements & Merch", price: "55 000 FCFA", rating: 5.0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", isNew: false, isLimited: true, stock: 4, type: "physique" },

  // RESSOURCES DIGITALES
  { id: 4, name: "Pack LUTs 'African Sun' (Color Grading)", category: "Ressources Digitales", price: "25 000 FCFA", rating: 5.0, image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?w=600&q=80", isNew: true, isLimited: false, type: "digital" },
];

const categories = ["Tous", "Appareils & Caméras", "Vêtements & Merch", "Ressources Digitales", "Masterclasses"];

const BoutiquePage = () => {
  const [activeTab, setActiveTab] = useState('Tous');
  const [cartItems, setCartItems] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // --- SOCIAL PROOF NOTIFICATION ---
  const [showSalesNotif, setShowSalesNotif] = useState(false);
  const [currentSalesNotif, setCurrentSalesNotif] = useState(0);

  const salesNotifications = [
    { name: "Kora Productions", item: "RED V-Raptor", action: "louée pour 5 jours", time: "Il y a 4 min" },
    { name: "M. Diop", item: "Hoodie Director", action: "acheté", time: "Il y a 12 min" },
    { name: "Studio 225", item: "DJI Ronin 2", action: "réservé en location", time: "Il y a 1 heure" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowSalesNotif(true), 5000);
    const interval = setInterval(() => {
      setShowSalesNotif(false);
      setTimeout(() => {
        setCurrentSalesNotif((prev) => (prev + 1) % salesNotifications.length);
        setShowSalesNotif(true);
      }, 1000);
    }, 15000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  const handleAddToCart = (name: string) => {
    setCartItems(prev => prev + 1);
    setToastMessage(`"${name}" ajouté au panier !`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredProducts = products.filter(p => activeTab === "Tous" || p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white selection:bg-orange-500 selection:text-white pb-24 relative overflow-hidden">
      
      {/* --- POPUP SOCIAL PROOF (LIVE SALES) --- */}
      <AnimatePresence>
        {showSalesNotif && (
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="fixed bottom-24 left-6 z-[100] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl"
          >
            <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center">
              <Flame size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">{salesNotifications[currentSalesNotif].name}</p>
              <p className="text-[11px] text-slate-400">
                {salesNotifications[currentSalesNotif].item} <span className="text-orange-400 font-bold">{salesNotifications[currentSalesNotif].action}</span>
              </p>
              <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">{salesNotifications[currentSalesNotif].time}</p>
            </div>
            <button onClick={() => setShowSalesNotif(false)}><X size={14} className="text-slate-500 ml-2" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- WIDGET PANIER --- */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button className="bg-orange-600 text-white p-4 rounded-full shadow-2xl relative">
          <ShoppingCart size={24} />
          {cartItems > 0 && <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">{cartItems}</span>}
        </button>
      </div>

      {/* --- TOAST --- */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ y: 50, x: "-50%" }} animate={{ y: 0, x: "-50%" }} exit={{ y: 20 }} className="fixed bottom-10 left-1/2 z-[110] bg-green-600 px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl">
            <CheckCircle2 size={18} /> <span className="text-sm font-bold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO --- */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={14} /> Matériel Certifié Éburnywood
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 italic">Le Studio <span className="text-orange-500 not-italic">Store</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Équipez votre production avec les meilleurs outils. Vente de matériel neuf et location de packs caméras/lumières à tarifs préférentiels.
          </p>
        </div>
      </div>

      {/* --- NAVIGATION / FILTRES --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex gap-2 overflow-x-auto hide-scroll pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === cat ? 'bg-orange-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRILLE DE PRODUITS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div layout key={product.id} className="group relative bg-[#0a0515] rounded-[2rem] p-4 border border-white/5 hover:border-orange-500/50 transition-all flex flex-col">
              
              {/* Image & Overlay FOMO */}
              <div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-5">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Badge Live Views (Social Proof) */}
                {product.views && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Eye size={12} className="text-orange-500" />
                    <span className="text-[10px] font-bold text-white">{product.views} pros regardent</span>
                  </div>
                )}

                {/* Badges types */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isLimited && <span className="bg-red-600 text-white text-[9px] font-black uppercase px-2 py-1 rounded">Stock Limité</span>}
                  {product.rentPrice && <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-2 py-1 rounded">Location Dispo</span>}
                </div>
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{product.name}</h3>
                
                {/* Block Prix Spécifique Cinéma */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold uppercase">Vente</span>
                    <span className="text-white font-black">{product.price}</span>
                  </div>
                  {product.rentPrice && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-orange-500 font-bold uppercase flex items-center gap-1"><Calendar size={12}/> Location</span>
                      <span className="text-orange-500 font-black">{product.rentPrice}</span>
                    </div>
                  )}
                </div>

                {/* FOMO Stock */}
                {product.stock && product.stock <= 3 && (
                  <p className="text-red-500 text-[10px] font-bold mb-4 uppercase tracking-tighter animate-pulse flex items-center gap-1">
                    <Zap size={10} fill="currentColor"/> Plus que {product.stock} exemplaires en vente !
                  </p>
                )}

                <div className="mt-auto flex gap-2">
                  <button onClick={() => handleAddToCart(product.name)} className="flex-1 bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-all">
                    Acheter
                  </button>
                  {product.rentPrice && (
                    <button className="bg-white/5 border border-white/10 text-white px-4 rounded-xl hover:bg-white/10 transition-all">
                      <Calendar size={18} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoutiquePage;