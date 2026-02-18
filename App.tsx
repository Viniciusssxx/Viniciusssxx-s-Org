
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Target, 
  Flame, 
  DollarSign, 
  Utensils, 
  Zap, 
  BarChart3, 
  Smartphone, 
  ArrowRight,
  Star,
  Clock,
  Layout,
  Smile
} from 'lucide-react';

// Components
import { Hero } from './components/Hero';
import { GamificationDemo } from './components/GamificationDemo';
import { FeatureSection } from './components/FeatureSection';
import { InteractiveMockup } from './components/InteractiveMockup';
import { FoodDiarySection } from './components/FoodDiarySection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Persistent Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[#2D9C8B] tracking-tight">Rotineira</span>
          </div>
          {/* Menu links removidos conforme solicitado anteriormente */}
          <button className="bg-[#2D9C8B] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#258274] transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Começar Agora
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-white py-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Zap className="text-yellow-500" />} label="Usuários Ativos" value="50k+" />
            <StatItem icon={<CheckCircle className="text-emerald-500" />} label="Tarefas Concluídas" value="1.2M+" />
            <StatItem icon={<Flame className="text-orange-500" />} label="Maior Streak" value="450 dias" />
            <StatItem icon={<Star className="text-[#2D9C8B]" />} label="Avaliação Média" value="4.9/5" />
          </div>
        </div>

        <GamificationDemo />
        
        <div id="funcionalidades">
          <FeatureSection />
        </div>

        <InteractiveMockup />
        
        <FoodDiarySection />

        <Testimonials />

        <div id="precos">
          <Pricing />
        </div>
      </main>

      <Footer />

      {/* Persistent Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-full px-4">
        <button className="w-full bg-[#2D9C8B] text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Zap className="w-5 h-5" />
          Começar Jornada Agora
        </button>
      </div>
    </div>
  );
};

const StatItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-2 p-2 bg-gray-50 rounded-lg">{icon}</div>
    <div className="text-2xl font-extrabold text-gray-900">{value}</div>
    <div className="text-sm text-gray-500 font-medium">{label}</div>
  </div>
);

export default App;
