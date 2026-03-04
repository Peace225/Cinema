import React from 'react';
import { Tv, PlayCircle, FileUp, Briefcase } from 'lucide-react';

const B2B = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-slate-900 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Eburniewood B2B</h1>
          <div className="flex gap-6 text-sm">
            <span>Chaînes TV</span>
            <span>Streaming</span>
            <span>Appels à projets</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Statistiques de collaboration (Section 4.2) */}
          {[
            { label: 'Projets en cours', val: '12', icon: Briefcase },
            { label: 'Contenus achetés', val: '45', icon: PlayCircle },
            { label: 'Talents recrutés', val: '128', icon: Tv },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <stat.icon className="text-blue-600 mb-2" size={24} />
              <p className="text-3xl font-bold text-slate-800">{stat.val}</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Publication d'appels à projets (Section 4.2) */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileUp className="text-blue-600" /> Publier un Appel à Projets
            </h2>
            <div className="space-y-4">
              <input type="text" placeholder="Titre de l'appel (ex: Série Drama 26min)" className="w-full p-3 border rounded-lg bg-slate-50" />
              <textarea placeholder="Description des besoins et critères..." className="w-full p-3 border rounded-lg bg-slate-50 h-32"></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Lancer l'appel
              </button>
            </div>
          </section>

          {/* Espace de dépôt sécurisé (Section 4.2) */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4">Projets Reçus (Streaming Privé)</h2>
            <div className="divide-y">
              <div className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-700">Le Destin d'Awa</p>
                  <p className="text-xs text-slate-400">Dépôt: Il y a 2h • Format: Série</p>
                </div>
                <button className="text-blue-600 text-sm font-medium">Visionner</button>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-700">Abidjan Night</p>
                  <p className="text-xs text-slate-400">Dépôt: Hier • Format: Documentaire</p>
                </div>
                <button className="text-blue-600 text-sm font-medium">Visionner</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default B2B;