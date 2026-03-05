// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants de structure (omniprésents)
import Header from './components/Header';
import Footer from './pages/Footer';
import TalentDirectoryPage from './pages/TalentDirectoryPage';
import B2BSpacePage from './pages/B2BSpacePage';
import LegalExpertsPage from './pages/LegalExpertsPage';
import AuthPage from './pages/AuthPage';
import BoutiquePage from './pages/BoutiquePage';
import DistributionPage from './pages/DistributionPage';
import SoutenirPage from './pages/SoutenirPage';
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
            <Route path="/repertoire" element={<TalentDirectoryPage />} />
            <Route path="/b2b" element={<B2BSpacePage />} />
            <Route path="/experts" element={<LegalExpertsPage />} />
            <Route path="/connexion" element={<AuthPage />} />
            <Route path="/inscription" element={<AuthPage />} />
            <Route path="/boutique" element={<BoutiquePage />} />
            <Route path="/distribution" element={<DistributionPage />} />
            <Route path="/soutenir" element={<SoutenirPage />} />
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