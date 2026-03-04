// src/pages/TalentDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar } from 'lucide-react';

const TalentDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour au répertoire
        </Link>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/2 aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Talent"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <span className="text-orange-500 font-black tracking-widest text-xs uppercase">Profil ID: {id}</span>
              <h1 className="text-5xl font-black mt-2 tracking-tighter">Kader Ouattara</h1>
              <p className="text-2xl text-slate-400 font-medium mt-2">Acteur Principal</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <Star className="mx-auto mb-2 text-orange-500" size={24} />
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest">Niveau</span>
                <span className="font-bold">Senior</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <MapPin className="mx-auto mb-2 text-orange-500" size={24} />
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ville</span>
                <span className="font-bold">Abidjan</span>
              </div>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-orange-600/20">
              Contacter le Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDetail;