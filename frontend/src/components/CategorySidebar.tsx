// src/components/CategorySidebar.tsx
import React from 'react';
import { 
  Briefcase, 
  Video, 
  PenTool, 
  Camera, 
  Palette, 
  Users, 
  Music, 
  Scissors, 
  Globe, 
  Megaphone,
  ChevronDown,
  Star
} from 'lucide-react';

const poles = [
  {
    id: 'production',
    name: '1. Production',
    icon: Briefcase,
    count: '45+',
    subRoles: [
      'Producteur exécutif', 'Producteur délégué', 'Producteur associé', 'Producteur indépendant',
      'Line producer', 'Chargé de production', 'Administrateur de prod', 'Responsable financements',
      'Business affairs', 'Responsable coproductions', 'Contrôleur de gestion'
    ]
  },
  {
    id: 'realisation',
    name: '2. Réalisation',
    icon: Video,
    count: '32+',
    subRoles: [
      'Réalisateur principal', 'Co-réalisateur', 'Réalisateur 2e équipe', 'Réalisateur documentaire',
      'Showrunner', '1er assistant réalisateur', '2e assistant réalisateur', 'Scripte'
    ]
  },
  {
    id: 'ecriture',
    name: '3. Écriture',
    icon: PenTool,
    count: '18+',
    subRoles: [
      'Auteur scénariste', 'Dialoguiste', 'Script doctor', 'Adaptateur', 'Consultant éditorial'
    ]
  },
  {
    id: 'image',
    name: '4. Image',
    icon: Camera,
    count: '50+',
    subRoles: [
      'Directeur de la photographie', 'Cadreur', 'Opérateur Steadicam', '1er assistant caméra',
      '2e assistant caméra', 'DIT (Digital Imaging)', 'Chef électricien', 'Électricien plateau', 'Gaffer'
    ]
  },
  {
    id: 'da',
    name: '5. Dir. Artistique',
    icon: Palette,
    count: '38+',
    subRoles: [
      'Directeur artistique', 'Chef décorateur', 'Décorateur plateau', 'Accessoiriste', 'Ensemblier',
      'Chef costumier', 'Styliste', 'Habilleur', 'Chef maquilleur', 'Coiffeur plateau'
    ]
  },
  {
    id: 'casting',
    name: '6. Interprétation',
    icon: Users,
    count: '150+',
    subRoles: [
      'Directeur de casting', 'Assistant casting', 'Acteur principal', 'Acteur secondaire',
      'Figurant', 'Cascadeur', 'Doublure'
    ]
  },
  {
    id: 'son',
    name: '7. Son & Musique',
    icon: Music,
    count: '25+',
    subRoles: [
      'Ingénieur du son', 'Perchman', 'Monteur son', 'Mixeur',
      'Compositeur', 'Superviseur musical', 'Arrangeur', 'Sound designer'
    ]
  },
  {
    id: 'postprod',
    name: '8. Post-Production',
    icon: Scissors,
    count: '42+',
    subRoles: [
      'Monteur image', 'Assistant monteur', 'Étalonneur', 'Motion designer',
      'Responsable VFX', 'Infographiste 3D'
    ]
  },
  {
    id: 'distribution',
    name: '9. Distribution',
    icon: Globe,
    count: '12+',
    subRoles: [
      'Distributeur cinéma', 'Ventes internationales', 'Agent de ventes',
      'Exploitant de salle', 'Programmateur', 'Plateforme streaming'
    ]
  },
  {
    id: 'marketing',
    name: '10. Marketing',
    icon: Megaphone,
    count: '20+',
    subRoles: [
      'Attaché de presse', 'Community manager', 'Responsable marketing', 'Chargé des festivals', 'Partenariats'
    ]
  }
];

const CategorySidebar = ({ activeCategory, setCategory }: any) => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6">
      <div className="bg-[#0a061a] border border-white/5 rounded-[2.5rem] p-6 shadow-2xl flex flex-col h-full max-h-[85vh]">
        
        {/* Header de la Sidebar */}
        <div className="mb-6 px-2 flex-shrink-0">
          <h3 className="text-white font-black text-2xl tracking-tight uppercase">
            Pôles Cinéma
          </h3>
          <div className="h-1 w-12 bg-orange-600 mt-2 rounded-full"></div>
        </div>

        {/* Liste des Catégories */}
        <nav className="space-y-3 overflow-y-auto flex-grow pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
          {poles.map((cat) => {
            const isExpanded = activeCategory === cat.id || cat.subRoles.includes(activeCategory);

            return (
              <div key={cat.id} className="flex flex-col">
                {/* Bouton du Pôle Principal */}
                <button
                  onClick={() => setCategory(cat.id)}
                  className={`w-full group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    isExpanded 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isExpanded ? 'bg-white/20' : 'bg-white/5'
                    }`}>
                      <cat.icon size={20} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-black uppercase tracking-wider leading-tight text-left">
                      {cat.name}
                    </span>
                  </div>
                  
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>

                {/* Liste des sous-métiers (Accordéon) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[800px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col gap-3 pl-14 pr-4 py-1 border-l-2 border-white/5 ml-8">
                    {cat.subRoles.map((role, idx) => {
                      const isSubActive = activeCategory === role;
                      return (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCategory(role);
                          }}
                          className={`text-left text-[13px] font-bold transition-colors ${
                            isSubActive ? 'text-orange-400' : 'text-slate-500 hover:text-slate-200'
                          }`}
                        >
                          • {role}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Footer Sidebar / Promo */}
        <div className="mt-6 flex-shrink-0 p-6 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-400 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform">
            <Star fill="white" size={40} />
          </div>
          <p className="text-white font-black text-base uppercase tracking-tighter mb-2 relative z-10">
            Devenir VIP
          </p>
          <p className="text-white/90 text-xs font-medium leading-relaxed mb-4 relative z-10">
            Boostez votre visibilité auprès des recruteurs.
          </p>
          <button className="w-full bg-black text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all relative z-10">
            En savoir plus
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;