import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  AlertCircle, 
  FileSearch, 
  CheckCircle, 
  XCircle,
  BarChart3
} from 'lucide-react';

const Admin = () => {
  // Simulation des profils en attente de validation (Section 6)
  const [pendingProfiles, setPendingProfiles] = useState([
    { id: 1, name: "Jean Koffi", role: "Réalisateur", level: "Senior", status: "En attente" },
    { id: 2, name: "Marie Diallo", role: "Actrice", level: "Junior", status: "En attente" },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-slate-50 min-h-screen">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Portail d'Administration</h1>
          <p className="text-slate-500 text-sm">Gouvernance, modération et statistiques de la plateforme.</p>
        </div>
        <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
          <ShieldCheck size={18} /> Mode Administrateur
        </div>
      </header>

      {/* Vue d'ensemble des KPI (Section 8) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Profils Actifs</p>
              <h3 className="text-3xl font-bold">1,240</h3>
            </div>
            <Users className="text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Projets Conclus</p>
              <h3 className="text-3xl font-bold">84</h3>
            </div>
            <BarChart3 className="text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">Litiges en cours</p>
              <h3 className="text-3xl font-bold text-red-600">03</h3>
            </div>
            <AlertCircle className="text-red-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Validation des profils (Section 6) */}
        <div className="lg:col-span-2">
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b bg-slate-50">
              <h2 className="font-bold flex items-center gap-2">
                <FileSearch size={20} className="text-orange-600" /> 
                Vérification des documents professionnels
              </h2>
            </div>
            <div className="divide-y">
              {pendingProfiles.map((profile) => (
                <div key={profile.id} className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">{profile.name}</p>
                    <p className="text-xs text-slate-500">{profile.role} • Niveau {profile.level}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-2 rounded-lg font-bold hover:bg-green-200">
                      <CheckCircle size={14} /> Certifier
                    </button>
                    <button className="flex items-center gap-1 text-xs bg-red-100 text-red-700 px-3 py-2 rounded-lg font-bold hover:bg-red-200">
                      <XCircle size={14} /> Rejeter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Comité d'arbitrage & Aide (Section 6.7) */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="font-bold mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-orange-600" /> Gouvernance
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold">Comité d'arbitrage</p>
                <p className="text-slate-500 text-xs">Gérer les litiges contractuels entre acteurs et producteurs.</p>
              </li>
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold">Modération IA</p>
                <p className="text-slate-500 text-xs">Analyse des portfolios et des messages sécurisés.</p>
              </li>
            </ul>
          </section>

          {/* Modèle économique (Section 7) */}
          <section className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-4">Revenus de la plateforme</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Abonnements Pro</span>
                <span className="font-bold">450,000 FCFA</span>
              </div>
              <div className="flex justify-between">
                <span>Commissions Contrats</span>
                <span className="font-bold">125,000 FCFA</span>
              </div>
              <div className="border-t border-slate-700 pt-2 mt-2 flex justify-between text-sm font-bold text-orange-400">
                <span>Total</span>
                <span>575,000 FCFA</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;