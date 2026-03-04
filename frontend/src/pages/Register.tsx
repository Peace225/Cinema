import React, { useState } from 'react';
import { User, Film, Tv, Gavel, ShieldCheck } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState('professionnel');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Rejoindre Eburniewood</h2>
          <p className="text-gray-500 mt-2 text-sm">Plateforme professionnelle du cinéma en Côte d'Ivoire</p>
        </div>
        
        <form className="space-y-6">
          {/* Sélection du Type de Compte (Section 3.1) */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Je m'inscris en tant que :
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { id: 'professionnel', label: 'Professionnel', icon: User },
                { id: 'producteur', label: 'Producteur', icon: Film },
                { id: 'chaine_tv', label: 'Chaîne TV', icon: Tv },
                { id: 'streaming', label: 'Streaming', icon: Tv },
                { id: 'expert_juridique', label: 'Expert Juridique', icon: Gavel },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setRole(item.id)}
                  className={`flex flex-col items-center p-3 rounded-xl border-2 transition ${
                    role === item.id 
                    ? 'border-orange-600 bg-orange-50 text-orange-600' 
                    : 'border-gray-100 bg-white text-gray-500 hover:border-orange-200'
                  }`}
                >
                  <item.icon size={20} className="mb-1" />
                  <span className="text-[10px] font-bold uppercase">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600">Nom Complet / Raison Sociale</label>
              <input type="text" className="w-full p-2 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600">Email Professionnel</label>
              <input type="email" className="w-full p-2 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
          </div>

          {/* Classification par Niveau (Section 2.2) */}
          {role === 'professionnel' && (
            <div className="p-4 bg-slate-900 rounded-xl text-white">
              <label className="block text-xs font-bold mb-3 flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-500" /> 
                Auto-classification par niveau de compétence
              </label>
              <select className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg text-sm">
                <option value="amateur">Amateur (Moins de 2 projets validés)</option>
                <option value="junior">Junior (2 à 10 projets professionnels)</option>
                <option value="senior">Senior (+10 projets / reconnaissance officielle)</option>
              </select>
              <p className="text-[10px] text-slate-400 mt-2 italic">
                * Vos informations seront vérifiées par l'administration pour obtenir le badge "Profil Vérifié".
              </p>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600">Mot de passe</label>
            <input type="password" placeholder="••••••••" className="w-full p-2 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500" required />
          </div>

          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" id="terms" className="rounded text-orange-600" required />
            <label htmlFor="terms" className="text-xs text-gray-500">
              J'accepte les conditions générales et la charte de confidentialité.
            </label>
          </div>

          <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200">
            Créer mon compte Eburniewood
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;