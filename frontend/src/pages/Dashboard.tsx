import React from 'react';
import { 
  LayoutDashboard, 
  FileCheck, 
  Users, 
  Wallet, 
  Clock, 
  ChevronRight 
} from 'lucide-react';

const Dashboard = () => {
  // Ces données seront plus tard récupérées depuis Firebase
  const stats = [
    { label: "Projets conclus", value: "12", icon: LayoutDashboard, color: "text-blue-600" }, // [cite: 175]
    { label: "Contrats signés", value: "08", icon: FileCheck, color: "text-green-600" },    // [cite: 176]
    { label: "Collaborations", value: "24", icon: Users, color: "text-purple-600" },      // [cite: 128]
    { label: "Cachets générés", value: "1.2M", icon: Wallet, color: "text-orange-600" }, // [cite: 177]
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 text-sm">Bienvenue sur votre espace professionnel Eburniewood.</p>
      </header>

      {/* Section KPI - Indicateurs de performance (Section 8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projets en cours (Section 4.2) */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="font-bold">Projets en cours</h2>
              <button className="text-orange-600 text-sm font-medium">Tout voir</button>
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-5 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-slate-500" />
                    </div>
                    <div>
                      <p className="font-semibold">Production Film "{item === 1 ? 'Abidjan 2026' : 'Le Destin'}"</p>
                      <p className="text-xs text-gray-500">Statut: En attente de signature</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Score de fiabilité et Ponctualité (Section 3.3) */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="font-bold mb-4">Évaluation & Fiabilité</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Score de fiabilité</span>
                  <span className="font-bold text-green-600">95%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Indicateur de ponctualité</span>
                  <span className="font-bold text-blue-600">100%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Accès rapide aux services juridiques (Section 7) */}
          <section className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-2">Service Juridique Premium</h3>
            <p className="text-xs text-slate-400 mb-4">Accédez à l'horodatage de vos œuvres et aux conseils d'experts.</p>
            <button className="w-full bg-orange-600 py-2 rounded-lg text-sm font-bold">Consulter un expert</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;