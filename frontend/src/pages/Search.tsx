import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MapPin, Award } from 'lucide-react';

const Search = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Répertoire global des métiers</h1> [cite: 21]
      
      {/* Barre de Recherche Avancée (Section 2.3) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 text-gray-400" size={18} />
          <select className="w-full pl-10 p-2 border rounded-lg appearance-none">
            <option>Tous les métiers</option> [cite: 22]
            <option>Acteurs / Actrices</option> [cite: 23]
            <option>Réalisateurs</option> [cite: 24]
            <option>Scénaristes</option> [cite: 26]
          </select>
        </div>

        <select className="p-2 border rounded-lg">
          <option>Tous les niveaux</option> [cite: 51]
          <option>Amateur (-2 projets)</option> [cite: 46, 47]
          <option>Junior (2-10 projets)</option> [cite: 48]
          <option>Senior (+10 projets)</option> [cite: 49]
        </select>

        <select className="p-2 border rounded-lg">
          <option>Toutes les régions</option> [cite: 59]
          <option>Abidjan</option>
          <option>Bouaké</option>
        </select>

        <button className="bg-orange-600 text-white font-bold py-2 rounded-lg hover:bg-orange-700 transition">
          Filtrer les talents
        </button>
      </div>

      {/* Grille de Talents (Section 2.2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition relative">
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Award size={12} /> SENIOR
            </span> [cite: 53]
          </div>
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Nom du Professionnel</h3>
            <p className="text-orange-600 text-sm font-medium">Réalisateur</p> [cite: 80]
            <div className="flex items-center gap-1 text-gray-500 text-xs mt-2">
              <MapPin size={14} /> Abidjan, CI [cite: 82]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;