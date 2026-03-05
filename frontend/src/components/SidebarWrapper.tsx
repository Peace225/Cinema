// src/components/SidebarWrapper.tsx
import React from 'react';
import CategorySidebar from './CategorySidebar';

interface SidebarWrapperProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    // Correction : Utilisation de "h-fit" à la place de "h-screen" pour que le "sticky" glisse parfaitement sans déborder
    <aside className="hidden lg:block lg:sticky lg:top-24 w-72 shrink-0 py-10 z-30 h-fit">
      
      {/* Conteneur avec ombre pour détacher la sidebar du fond global */}
      <div className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <CategorySidebar 
          activeCategory={activeCategory} 
          setCategory={setActiveCategory} 
        />
      </div>
      
    </aside>
  );
};

export default SidebarWrapper;