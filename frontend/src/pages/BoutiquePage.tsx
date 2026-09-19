// src/pages/BoutiquePage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Flame, CheckCircle2, X, Video, Aperture, Lightbulb, Mic2, Wrench, Palette, Monitor, Truck, Briefcase, LayoutGrid } from 'lucide-react';
import BoutiqueSidebar from '../components/BoutiqueSidebar';
import BoutiqueProductGrid from '../components/BoutiqueProductGrid';

// --- DONNÉES GLOBALES ---
const shopCategories = [
  { id: 'tous', name: "Tout le catalogue", icon: LayoutGrid, subs: [] },
  { id: 'cameras', name: "Caméras & Captation", icon: Video, subs: ["Cinéma Numérique", "Broadcast", "Drones", "Accessoires"] },
  { id: 'optiques', name: "Objectifs & Optiques", icon: Aperture, subs: ["Prime", "Zoom", "Anamorphique", "Filtres"] },
  { id: 'lumiere', name: "Éclairage Cinéma", icon: Lightbulb, subs: ["LED", "Fresnel", "HMI", "Accessoires"] },
  { id: 'son', name: "Matériel de Son", icon: Mic2, subs: ["Micros Canon", "HF/Cravate", "Enregistreurs", "Perches"] },
  { id: 'machinerie', name: "Machinerie", icon: Wrench, subs: ["Gimbals", "Steadicam", "Trépieds", "Grues & Rails"] },
  { id: 'decor', name: "Décor & Costumes", icon: Palette, subs: ["Fonds Studio", "Machines SFX", "Maquillage Pro"] },
  { id: 'postprod', name: "Post-Production", icon: Monitor, subs: ["Stations", "Écrans d'étalonnage", "Disques Durs"] },
  { id: 'logistique', name: "Logistique & Régie", icon: Truck, subs: ["Générateurs", "Camions", "Streaming"] },
  { id: 'services', name: "Services & Location", icon: Briefcase, subs: ["Location Studio", "Formation", "Assistance Tech"] },
];

const products = [
  { id: 11, name: "RED V-Raptor 8K VV", categoryId: "cameras", desc: "Caméra cinéma 8K plein format, idéale pour les productions haut de gamme.", price: "14 500 000 FCFA", rentPrice: "150 000 FCFA/j", image: "https://images.unsplash.com/photo-1576133030430-2cb01950e051?w=600&q=80", isNew: true, views: 42, stock: 2 },
  { id: 12, name: "Série Zeiss Master Prime", categoryId: "optiques", desc: "Set de 6 objectifs cinéma de référence (18mm à 135mm) avec ouverture T1.3.", price: "Sur Devis", rentPrice: "250 000 FCFA/j", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=600&q=80", isLimited: true },
  { id: 13, name: "Arri SkyPanel S60-C LED", categoryId: "lumiere", desc: "Panneau LED RGBW ultra-lumineux. La norme industrielle pour les plateaux.", price: "3 800 000 FCFA", rentPrice: "60 000 FCFA/j", image: "https://images.unsplash.com/photo-1543165365-072ca203193c?w=600&q=80", isNew: false, views: 18 },
  { id: 14, name: "Sennheiser MKH 416", categoryId: "son", desc: "Microphone canon directionnel standard pour la prise de son sur perche.", price: "650 000 FCFA", rentPrice: "15 000 FCFA/j", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80", isNew: false },
  { id: 15, name: "DJI Ronin 2 Professional", categoryId: "machinerie", desc: "Stabilisateur motorisé 3 axes professionnel, charge jusqu'à 13,6 kg.", price: "4 200 000 FCFA", rentPrice: "80 000 FCFA/j", image: "https://images.unsplash.com/photo-1589131008205-044c79658f81?w=600&q=80", stock: 1, views: 89 },
  { id: 16, name: "Mac Studio M2 Ultra", categoryId: "postprod", desc: "Station de montage surpuissante pour le montage multicam 4K/8K.", price: "3 200 000 FCFA", rentPrice: null, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80", isNew: true },
  { id: 17, name: "Générateur Honda EU7000is", categoryId: "logistique", desc: "Groupe électrogène silencieux 7000W pour courant propre et stable.", price: "2 800 000 FCFA", rentPrice: "45 000 FCFA/j", image: "https://images.unsplash.com/photo-1585644111726-2678687a41ea?w=600&q=80" },
  { id: 18, name: "Location Studio Fond Vert", categoryId: "services", desc: "Plateau insonorisé de 200m² avec cyclorama vert 3 faces et loges.", price: null, rentPrice: "200 000 FCFA/j", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80", isLimited: true },
];

const BoutiquePage = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [cartItems, setCartItems] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const [showSalesNotif, setShowSalesNotif] = useState(false);
  const [currentSalesNotif, setCurrentSalesNotif] = useState(0);

  const salesNotifications = [
    { name: "Studio 225", item: "RED V-Raptor", action: "réservée", time: "Il y a 4 min" },
    { name: "Kora Films", item: "Zeiss Master Prime", action: "loués", time: "Il y a 12 min" },
    { name: "M. Diabaté", item: "Mac Studio M2", action: "acheté", time: "Il y a 1 heure" },
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

  const handleAction = (name: string, actionType: 'achat' | 'location') => {
    setCartItems(prev => prev + 1);
    setToastMessage(`"${name}" ajouté pour ${actionType} !`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredProducts = products.filter(p => activeCategory === 'tous' || p.categoryId === activeCategory);
  const currentCategoryData = shopCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-white pb-24 relative overflow-x-hidden">
      
      {/* WIDGETS GLOBAUX (Popup & Panier) */}
      <AnimatePresence>
        {showSalesNotif && (
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="fixed bottom-24 left-6 z-[100] bg-[#0a0515]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center border border-orange-500/20"><Flame size={20} className="text-orange-500" /></div>
            <div>
              <p className="text-xs font-bold text-white">{salesNotifications[currentSalesNotif].name}</p>
              <p className="text-[11px] text-slate-400">{salesNotifications[currentSalesNotif].item} <span className="text-orange-400 font-bold">{salesNotifications[currentSalesNotif].action}</span></p>
              <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">{salesNotifications[currentSalesNotif].time}</p>
            </div>
            <button onClick={() => setShowSalesNotif(false)}><X size={14} className="text-slate-500 ml-2" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-[100]">
        <button className="bg-orange-600 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(234,88,12,0.4)] hover:scale-110 transition-transform relative group">
          <ShoppingCart size={24} />
          {cartItems > 0 && <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#050110]">{cartItems}</span>}
        </button>
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ y: 50, x: "-50%" }} animate={{ y: 0, x: "-50%" }} exit={{ y: 20, opacity: 0 }} className="fixed bottom-10 left-1/2 z-[110] bg-[#0a0515]/95 backdrop-blur-xl border border-green-500/30 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <CheckCircle2 size={20} className="text-green-500" /> <span className="text-sm font-bold text-white">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION FIXE */}
      <div className="sticky top-20 z-40 w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b border-white/10">
        <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0515] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1920&q=80" alt="Arsenal background" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0515] via-transparent to-[#0a0515]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-orange-600/15 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-[1440px] mx-auto relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[10px] font-black uppercase tracking-widest mb-4">
              <ShieldCheck size={14} /> Hub Matériel Certifié
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 italic text-white drop-shadow-md">L'Arsenal du <span className="text-orange-500 not-italic">Créateur</span></h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light drop-shadow-sm">
              De l'achat de caméras RED à la location de machinerie lourde et de studios. Équipez votre production professionnelle.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENU PRINCIPAL (Composants extraits) */}
      <div className="relative z-10 bg-[#050110] pt-12 pb-24 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* L'AJOUT CRUCIAL : items-start */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            <BoutiqueSidebar 
              categories={shopCategories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />

            <BoutiqueProductGrid 
              products={filteredProducts} 
              currentCategoryData={currentCategoryData} 
              handleAction={handleAction} 
            />

          </div>
        </div>
      </div>

    </div>
  );
};

export default BoutiquePage;