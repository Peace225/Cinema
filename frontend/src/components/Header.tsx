import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Film, Search, Briefcase, Gavel, User } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo et Nom de la Plateforme */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Film className="h-8 w-8 text-orange-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">
                EBURNY<span className="text-orange-600">WOOD</span>
              </span>
            </Link>
          </div>

          {/* Navigation Desktop (Section 2, 4 et 5) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/repertoire" className="text-gray-600 hover:text-orange-600 flex items-center gap-1 text-sm font-medium">
              <Search size={18} /> Répertoire des Talents
            </Link>
            <Link to="/b2b" className="text-gray-600 hover:text-orange-600 flex items-center gap-1 text-sm font-medium">
              <Briefcase size={18} /> Espace B2B
            </Link>
            <Link to="/experts" className="text-gray-600 hover:text-orange-600 flex items-center gap-1 text-sm font-medium">
              <Gavel size={18} /> Experts Juridiques
            </Link>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <Link to="/connexion" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Connexion</Link>
              <Link to="/inscription" className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-orange-700 transition">
                S'inscrire
              </Link>
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          <Link to="/repertoire" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Répertoire</Link>
          <Link to="/b2b" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Espace B2B</Link>
          <Link to="/experts" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Experts Juridiques</Link>
          <hr />
          <Link to="/connexion" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Connexion</Link>
          <Link to="/inscription" className="block text-orange-600 font-bold" onClick={() => setIsOpen(false)}>S'inscrire</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;