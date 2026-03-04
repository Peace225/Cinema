// src/sections/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-slate-900 relative overflow-hidden">
      {/* Effet de lueur en fond de footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Colonne 1 : Branding XXL */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-black text-white tracking-tighter mb-6 block">
              EBURNY<span className="text-orange-600">WOOD</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
              La plateforme de référence pour l'excellence cinématographique en Côte d'Ivoire.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-xl">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Répertoire des Talents', 'Espace B2B & TV', 'Experts Juridiques', 'Actualités'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-orange-500 font-bold transition-colors flex items-center group">
                    {item} <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Support */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Assistance</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact Direct */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-orange-600 mt-1" size={20} />
                <span className="text-slate-400 font-medium">Cocody, Riviera Palmeraie,<br />Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-orange-600" size={20} />
                <span className="text-slate-400 font-medium">+225 07 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-orange-600" size={20} />
                <span className="text-slate-400 font-medium">contact@eburnywood.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de copyright finale */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-bold tracking-widest uppercase">
            © {currentYear} Eburnywood. Tous droits réservés.
          </p>
          <p className="text-slate-600 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
            Design by <span className="text-slate-400">Elite Creative</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;