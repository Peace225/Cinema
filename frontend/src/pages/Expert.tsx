import React from 'react';
import { Scale, ShieldCheck, FileText } from 'lucide-react';

const Expert = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Cadre Juridique & Annuaire d'Experts</h1>
          <p className="text-gray-600 mt-2">Sécurisez vos contrats et protégez vos droits d'auteur sur Eburniewood.</p>
        </header>

        {/* Bibliothèque de contrats (Section 5.3) */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="text-orange-600" /> Modèles contractuels intégrés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Contrat d\'acteur', 'Coproduction', 'Distribution', 'Cession de droits'].map((type) => (
              <div key={type} className="bg-white p-4 rounded-lg shadow-sm border hover:border-orange-500 cursor-pointer transition">
                <p className="text-sm font-medium">{type}</p>
                <span className="text-xs text-blue-600 hover:underline">Télécharger (PDF)</span>
              </div>
            ))}
          </div>
        </section>

        {/* Annuaire des Experts (Section 5.2) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Scale className="text-orange-600" /> Avocats et Juristes spécialisés
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 border">
              <div className="bg-orange-100 p-3 rounded-full h-fit">
                <ShieldCheck className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Cabinet Juridique Eburnie</h3>
                <p className="text-sm text-gray-600">Spécialité : Propriété Intellectuelle</p>
                <p className="text-xs text-gray-500 mt-1">Zone : Abidjan & International</p>
                <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// C'EST CETTE LIGNE QUI MANQUAIT OU QUI N'ÉTAIT PAS RECONNUE :
export default Expert;