import React, { useState } from 'react';
import { Send, Paperclip, FileText, User } from 'lucide-react';

const Messages = () => {
  const [activeChat, setActiveChat] = useState("Producteur A");

  return (
    <div className="max-w-7xl mx-auto p-6 h-[85vh]">
      <div className="bg-white border rounded-2xl shadow-sm h-full flex overflow-hidden">
        
        {/* Liste des conversations (Historique) */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b font-bold text-lg">Messages</div>
          <div className="flex-1 overflow-y-auto">
            {["Producteur A", "Chaîne TV CI", "Expert Juridique"].map((name) => (
              <div 
                key={name}
                onClick={() => setActiveChat(name)}
                className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center gap-3 ${activeChat === name ? 'bg-orange-50 border-r-4 border-orange-600' : ''}`}
              >
                <div className="bg-gray-200 p-2 rounded-full"><User size={20} /></div>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-gray-500">Dernier message...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zone de Chat (Interface sécurisée) */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header du chat */}
          <div className="p-4 bg-white border-b flex justify-between items-center">
            <h2 className="font-bold">{activeChat}</h2>
            <span className="text-xs text-green-600 flex items-center gap-1">● En ligne</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex flex-col items-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border max-w-md">
                <p className="text-sm">Bonjour, j'ai bien reçu votre portfolio. Pouvons-nous discuter du contrat ?</p>
                <span className="text-[10px] text-gray-400 mt-1 block">10:30</span>
              </div>
            </div>

            {/* Partage de document (Section 3.4 & 4.3) */}
            <div className="flex flex-col items-end">
              <div className="bg-orange-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-md">
                <div className="flex items-center gap-3 border-b border-orange-400 pb-2 mb-2">
                  <FileText size={24} />
                  <div className="text-left">
                    <p className="text-xs font-bold">Contrat_Acteur_Type.pdf</p>
                    <p className="text-[10px] opacity-80">245 KB</p>
                  </div>
                </div>
                <p className="text-sm">Voici le modèle de contrat généré via l'espace juridique.</p>
                <span className="text-[10px] opacity-70 mt-1 block text-right">10:35</span>
              </div>
            </div>
          </div>

          {/* Barre d'envoi */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-xl">
              <button className="p-2 text-gray-500 hover:text-orange-600">
                <Paperclip size={20} />
              </button>
              <input 
                type="text" 
                placeholder="Votre message sécurisé..." 
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;