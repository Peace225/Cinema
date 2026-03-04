// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants de structure (omniprésents)
import Header from './components/Header';
import Footer from './pages/Footer';

// Pages
import Home from './pages/Home';
import TalentDetail from './pages/TalentDetail';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Conteneur principal en Noir profond pour éviter tout flash blanc */}
      <div className="flex flex-col min-h-screen bg-[#050110] selection:bg-orange-500 selection:text-white">
        
        {/* Le Header flotte au-dessus de tout (z-index 100 géré dans le composant) */}
        <Header />
        
        {/* Contenu dynamique */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talents/:id" element={<TalentDetail />} />
            {/* Ajoute tes futures routes ici */}
          </Routes>
        </main>

        {/* Le Footer ferme la page proprement */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;