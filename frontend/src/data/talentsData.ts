// src/data/talentsData.ts

export interface Talent {
  id: number;
  name: string;
  category: string;
  role: string;
  location: string;
  rate: number;
  image: string;
  level: string;
  available: boolean;
  skills: string[];
  projectsCount: number;
}

// --- LES CATÉGORIES (Génèrent automatiquement les onglets) ---
export const categories = [
  "Tous", 
  "Acteurs", 
  "Réalisateurs", 
  "Image & Lumière", 
  "Machinerie",
  "Son",
  "Costume & Maquillage", 
  "Direction Artistique", 
  "Casting", 
  "Production & Financement", 
  "Juridique & Business", 
  "Scénaristes", 
  "Post-Production"
];

// --- LA BASE DE DONNÉES COMPLÈTE (42 Talents) ---
export const talents: Talent[] = [
  // --- ACTEURS ---
  { id: 1, name: "Kader Ouattara", category: "Acteurs", role: "Acteur Principal", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", level: "Élite", available: true, skills: ["Action", "Drame", "Cascade"], projectsCount: 24 },
  { id: 5, name: "Bintou Sylla", category: "Acteurs", role: "Actrice", location: "Dakar", rate: 4.8, image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80", level: "Senior", available: false, skills: ["Romance", "Théâtre", "Voix off"], projectsCount: 18 },
  { id: 6, name: "Moussa Diabaté", category: "Acteurs", role: "Comédien", location: "Bouaké", rate: 4.7, image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Comédie", "Improvisation"], projectsCount: 9 },
  { id: 7, name: "Fatou Camara", category: "Acteurs", role: "Actrice Principale", location: "Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", level: "Élite", available: true, skills: ["Drame", "Thriller"], projectsCount: 31 },
  { id: 8, name: "Youssef Touré", category: "Acteurs", role: "Antagoniste / Acteur", location: "San-Pédro", rate: 4.9, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", level: "Expert", available: true, skills: ["Arts Martiaux", "Action"], projectsCount: 15 },
  { id: 9, name: "Aminata Diallo", category: "Acteurs", role: "Actrice", location: "Bamako", rate: 4.6, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", level: "Junior", available: true, skills: ["Série TV", "Modèle"], projectsCount: 4 },
  { id: 10, name: "Franck Bamba", category: "Acteurs", role: "Acteur de soutien", location: "Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", level: "Senior", available: false, skills: ["Historique", "Drame"], projectsCount: 22 },
  { id: 11, name: "Nafi Traoré", category: "Acteurs", role: "Comédienne", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", level: "Expert", available: true, skills: ["Sitcom", "Humour"], projectsCount: 27 },
  { id: 12, name: "Didier Kouassi", category: "Acteurs", role: "Acteur Principal", location: "Yamoussoukro", rate: 5.0, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", level: "Élite", available: false, skills: ["Policier", "Action"], projectsCount: 40 },
  { id: 13, name: "Sita Coulibaly", category: "Acteurs", role: "Figurante Spécialisée", location: "Korhogo", rate: 4.5, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Danse traditionnelle", "Chant"], projectsCount: 11 },

  // --- RÉALISATEURS ---
  { id: 2, name: "Aïcha Koné", category: "Réalisateurs", role: "Réalisatrice", location: "Bouaké", rate: 5.0, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", level: "Expert", available: false, skills: ["Long-métrage", "Documentaire"], projectsCount: 12 },
  { id: 14, name: "Cédric N'Guessan", category: "Réalisateurs", role: "Réalisateur 2nde Équipe", location: "Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", level: "Senior", available: true, skills: ["Scènes d'Action", "Clips"], projectsCount: 19 },
  { id: 15, name: "Mariam Doumbia", category: "Réalisateurs", role: "Réalisatrice", location: "Dakar", rate: 4.9, image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80", level: "Élite", available: true, skills: ["Séries TV", "Drame Psychologique"], projectsCount: 8 },
  { id: 16, name: "Oumar Fofana", category: "Réalisateurs", role: "Chef Réalisateur", location: "Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", level: "Élite", available: false, skills: ["Cinéma Panafricain", "Historique"], projectsCount: 33 },
  { id: 17, name: "Léa Kassi", category: "Réalisateurs", role: "Assistante Réalisatrice", location: "Abidjan", rate: 4.7, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Coordination", "Logistique"], projectsCount: 14 },

  // --- IMAGE & LUMIÈRE ---
  { id: 3, name: "Jean-Paul Aké", category: "Image & Lumière", role: "Directeur de la Photographie", location: "Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", level: "Senior", available: true, skills: ["Cinéma", "Pub", "RED Camera"], projectsCount: 38 },
  { id: 31, name: "Yves Ouédraogo", category: "Image & Lumière", role: "Cadreur", location: "Ouagadougou", rate: 4.7, image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&q=80", level: "Expert", available: true, skills: ["Cadrage Épaule", "Long-métrage"], projectsCount: 21 },
  { id: 32, name: "Ange N'Dri", category: "Image & Lumière", role: "Opérateur Steadicam", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", level: "Élite", available: false, skills: ["Plan Séquence", "Mouvement flou"], projectsCount: 45 },
  { id: 33, name: "Samir Diop", category: "Image & Lumière", role: "Gaffer", location: "Dakar", rate: 5.0, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", level: "Expert", available: true, skills: ["Lumière Studio", "Extérieur Nuit"], projectsCount: 52 },
  { id: 34, name: "Isaac Traoré", category: "Image & Lumière", role: "Chef Électricien", location: "Abidjan", rate: 4.6, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", level: "Senior", available: true, skills: ["Groupes Électrogènes", "Plateau"], projectsCount: 19 },
  { id: 35, name: "Marc Yao", category: "Image & Lumière", role: "Électricien Plateau", location: "Bouaké", rate: 4.5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Câblage", "Sécurité"], projectsCount: 14 },

  // --- MACHINERIE ---
  { id: 20, name: "Paul Yapi", category: "Machinerie", role: "Chef Machiniste", location: "Abidjan", rate: 4.7, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", level: "Expert", available: true, skills: ["Grues", "Travelling", "Drones"], projectsCount: 50 },

  // --- SON ---
  { id: 18, name: "Ali Keita", category: "Son", role: "Ingénieur du Son", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&q=80", level: "Expert", available: false, skills: ["Prise de son", "Mixage"], projectsCount: 45 },
  { id: 29, name: "Emma Loua", category: "Son", role: "Sound Designer", location: "Abidjan", rate: 4.7, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Bruitage", "Mixage Audio"], projectsCount: 19 },

  // --- COSTUME & MAQUILLAGE ---
  { id: 4, name: "Marie Josée", category: "Costume & Maquillage", role: "Maquilleuse SFX", location: "Grand-Bassam", rate: 4.9, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", level: "Élite", available: true, skills: ["Prothèses", "Effets Spéciaux"], projectsCount: 15 },
  { id: 21, name: "Nina Ehouman", category: "Costume & Maquillage", role: "Costumière", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", level: "Élite", available: true, skills: ["Mode Africaine", "Époque"], projectsCount: 29 },

  // --- DIRECTION ARTISTIQUE ---
  { id: 19, name: "Sophie Gbagbo", category: "Direction Artistique", role: "Cheffe Décoratrice", location: "Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", level: "Senior", available: true, skills: ["Set Design", "Accessoires"], projectsCount: 21 },
  { id: 36, name: "Luc Kassi", category: "Direction Artistique", role: "Directeur Artistique", location: "Abidjan / Paris", rate: 5.0, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", level: "Élite", available: false, skills: ["Concept Art", "Identité Visuelle"], projectsCount: 11 },

  // --- CASTING ---
  { id: 37, name: "Sarah Mensah", category: "Casting", role: "Direction de Casting", location: "Accra / Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80", level: "Expert", available: true, skills: ["Scouting", "Auditions", "Contrats"], projectsCount: 41 },

  // --- PRODUCTION & FINANCEMENT ---
  { id: 38, name: "Mamadou Sy", category: "Production & Financement", role: "Producteurs", location: "Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", level: "Élite", available: false, skills: ["Gestion de budget", "Distribution"], projectsCount: 30 },
  { id: 39, name: "Aline Ndoye", category: "Production & Financement", role: "Responsable des Financements", location: "Dakar", rate: 4.8, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", level: "Senior", available: true, skills: ["Levée de fonds", "Subventions"], projectsCount: 17 },
  { id: 40, name: "Koffi Diallo", category: "Production & Financement", role: "Responsable des Coproductions", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=600&q=80", level: "Expert", available: true, skills: ["International", "Négociation"], projectsCount: 25 },
  { id: 41, name: "Eric Boli", category: "Production & Financement", role: "Contrôleur de Gestion Cinéma", location: "Abidjan", rate: 4.7, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", level: "Senior", available: true, skills: ["Audit", "Suivi budgétaire"], projectsCount: 14 },

  // --- JURIDIQUE & BUSINESS ---
  { id: 42, name: "Me. Vanessa Zongo", category: "Juridique & Business", role: "Business Affairs", location: "Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", level: "Élite", available: true, skills: ["Droits d'Auteur", "Contrats TV/VOD"], projectsCount: 65 },

  // --- SCÉNARISTES ---
  { id: 22, name: "Amadou Kane", category: "Scénaristes", role: "Scénariste Principal", location: "Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", level: "Élite", available: false, skills: ["Thriller", "Politique"], projectsCount: 16 },
  { id: 23, name: "Chloe Koffi", category: "Scénaristes", role: "Dialoguiste", location: "Paris / Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80", level: "Senior", available: true, skills: ["Comédie", "Punchlines"], projectsCount: 23 },
  { id: 24, name: "Idriss Boli", category: "Scénaristes", role: "Auteur / Showrunner", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", level: "Expert", available: true, skills: ["Séries TV", "Bible Littéraire"], projectsCount: 7 },
  { id: 25, name: "Sarah N'Dri", category: "Scénaristes", role: "Scénariste Junior", location: "Bouaké", rate: 4.5, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", level: "Junior", available: true, skills: ["Court-métrage", "Romance"], projectsCount: 3 },

  // --- POST-PRODUCTION ---
  { id: 26, name: "Hassan Cissé", category: "Post-Production", role: "Chef Monteur", location: "Abidjan", rate: 4.9, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", level: "Élite", available: false, skills: ["Premiere Pro", "DaVinci Resolve"], projectsCount: 60 },
  { id: 27, name: "Flora Yao", category: "Post-Production", role: "Étalonneuse", location: "Abidjan", rate: 4.8, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", level: "Senior", available: true, skills: ["Color Grading", "Cinéma"], projectsCount: 26 },
  { id: 28, name: "Marc Zadi", category: "Post-Production", role: "Artiste VFX", location: "Lagos / Abidjan", rate: 5.0, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", level: "Expert", available: true, skills: ["CGI", "Compositing", "After Effects"], projectsCount: 14 },
  { id: 30, name: "David Kpoghomou", category: "Post-Production", role: "Monteur Vidéo", location: "San-Pédro", rate: 4.6, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", level: "Intermédiaire", available: true, skills: ["Clips musicaux", "Teasers"], projectsCount: 34 }
];