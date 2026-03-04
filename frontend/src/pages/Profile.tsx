import React from 'react';
import { Video, Star, Calendar, DollarSign } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border p-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 h-64 bg-gray-100 rounded-xl"></div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Pseudo / Nom</h1> [cite: 79]
              <p className="text-xl text-orange-600">Acteur • Junior</p> [cite: 81]
            </div>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium">Contacter</button> [cite: 104]
          </div>
          
          <p className="mt-4 text-gray-600 leading-relaxed">Biographie courte de l'artiste... [cite: 84]</p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <DollarSign size={16} /> Cachet min: 50.000 FCFA [cite: 92]
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} /> Disponible [cite: 95]
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio & Filmographie (Section 3.2) */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-bold mb-4 flex items-center gap-2"><Video size={20}/> Bandes démo</h3> [cite: 87]
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-white">Lecture Vidéo</div> [cite: 88]
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-bold mb-4 flex items-center gap-2"><Star size={20}/> Filmographie</h3> [cite: 89]
          <ul className="space-y-2 text-sm">
            <li className="border-b pb-2">"Titre du film" - Rôle Principal (2024)</li>
            <li className="border-b pb-2">"Série TV" - Second Rôle (2023)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;