
import React from 'react';
import { 
  ArrowRight, 
  Apple, 
  Flame, 
  Utensils, 
  Coffee, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Home,
  ClipboardList,
  Dumbbell,
  DollarSign,
  MoreHorizontal,
  Bell,
  Scale
} from 'lucide-react';

export const FoodDiarySection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-gray-900">
              Seu Corpo, Suas <br/><span className="text-orange-500">Regras.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              O Diário Alimentar do Rotineira é focado em resultados. Registre cada refeição, controle seus macros (Proteínas, Carbos e Gorduras) e mantenha a disciplina nutricional que seu objetivo exige.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12 text-left">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 group hover:border-orange-500 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                  <Apple className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">Nutrição de Precisão</h4>
                <p className="text-gray-500 text-sm">Registre alimentos específicos como "Batata Doce" ou "Frango" com gramas exatas.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 group hover:border-orange-500 transition-colors">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">Foco nos Macros</h4>
                <p className="text-gray-500 text-sm">Visualize instantaneamente se atingiu sua meta de proteína diária.</p>
              </div>
            </div>

            <a href="#precos" className="inline-flex items-center gap-4 bg-orange-500 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)]">
              COMEÇAR DIETA AGORA
              <ArrowRight className="w-8 h-8" />
            </a>
          </div>

          {/* Virtual Phone for Food Diary */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-[680px] bg-white rounded-[3.5rem] border-[10px] border-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden relative">
                
                {/* App Content Reconstructed: Food Diary */}
                <div className="bg-[#F8FAFB] h-full flex flex-col custom-scrollbar">
                  {/* Header */}
                  <div className="p-4 flex justify-between items-start bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#2D9C8B] rounded-full flex items-center justify-center text-white font-bold text-sm">R</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Alimentação 🍎</h4>
                        <p className="text-[8px] text-gray-400 font-semibold leading-none">Hoje, 15 De Fevereiro</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center"><Bell className="w-4 h-4 text-gray-400" /></div>
                  </div>

                  {/* Summary Calories */}
                  <div className="bg-white p-6 border-b border-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-lg font-black text-gray-900 leading-none">1.450</div>
                        <div className="text-[8px] text-gray-400 font-bold uppercase">Consumidas</div>
                      </div>
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path className="text-gray-100" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                          <path className="text-orange-500" strokeDasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-xs font-black text-gray-900">550</div>
                          <div className="text-[6px] text-gray-400 font-bold uppercase">Restantes</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black text-emerald-500 leading-none">2.000</div>
                        <div className="text-[8px] text-gray-400 font-bold uppercase">Meta</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <MacroMini label="Carbo" value="150g" color="bg-blue-400" />
                      <MacroMini label="Prot" value="120g" color="bg-[#2D9C8B]" />
                      <MacroMini label="Gord" value="45g" color="bg-orange-400" />
                    </div>
                  </div>

                  {/* Meal List */}
                  <div className="p-4 flex-1">
                    <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Refeições do Dia</h5>
                    
                    <MealCard icon={<Coffee className="w-4 h-4" />} title="Café da Manhã" items="2 Ovos, Batata Doce" cals="340 kcal" />
                    <MealCard icon={<Utensils className="w-4 h-4" />} title="Almoço" items="Frango, Arroz, Salada" cals="620 kcal" active />
                    <MealCard icon={<Zap className="w-4 h-4" />} title="Lanche" items="Maçã, Whey Protein" cals="210 kcal" />
                  </div>

                  {/* Nav Bar */}
                  <div className="bg-white border-t border-gray-50 flex items-center justify-around h-16 px-2">
                    <TabItem icon={<Home className="w-4 h-4" />} label="Início" />
                    <TabItem icon={<ClipboardList className="w-4 h-4" />} label="Rotina" />
                    <TabItem icon={<Utensils className="w-4 h-4" />} label="Alimentação" active />
                    <TabItem icon={<Dumbbell className="w-4 h-4" />} label="Treinos" />
                    <TabItem icon={<DollarSign className="w-4 h-4" />} label="Finanças" />
                    <TabItem icon={<MoreHorizontal className="w-4 h-4" />} label="Mais" />
                  </div>
                </div>

                {/* Floating "+" Button */}
                <div className="absolute right-6 bottom-20 w-12 h-12 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center text-white">
                  <Plus className="w-6 h-6" />
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 w-48 hidden md:block animate-pulse">
                 <div className="flex items-center gap-2 mb-1 text-orange-500">
                   <Flame className="w-4 h-4" />
                   <span className="text-xs font-black uppercase">Metabolismo Ativo</span>
                 </div>
                 <p className="text-[10px] text-gray-500">Mantenha sua dieta em dia e ganhe XP bônus por cada refeição registrada.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MacroMini = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className="bg-gray-50 p-2 rounded-xl text-center">
    <div className="text-[8px] font-bold text-gray-400 uppercase mb-0.5">{label}</div>
    <div className="text-[10px] font-black text-gray-900">{value}</div>
    <div className={`h-1 w-full ${color} rounded-full mt-1 opacity-20`}></div>
  </div>
);

const MealCard = ({ icon, title, items, cals, active = false }: { icon: React.ReactNode, title: string, items: string, cals: string, active?: boolean }) => (
  <div className={`mb-3 p-4 rounded-3xl border ${active ? 'bg-orange-50 border-orange-100 shadow-sm' : 'bg-white border-gray-50'} flex items-center gap-3`}>
    <div className={`w-10 h-10 ${active ? 'bg-orange-500 text-white' : 'bg-gray-50 text-gray-400'} rounded-2xl flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1">
      <h6 className="text-xs font-black text-gray-900 leading-none mb-1">{title}</h6>
      <p className="text-[9px] text-gray-400 font-bold">{items}</p>
    </div>
    <div className="text-right">
      <div className={`text-[10px] font-black ${active ? 'text-orange-600' : 'text-gray-400'}`}>{cals}</div>
      <Plus className={`w-3 h-3 ml-auto mt-1 ${active ? 'text-orange-500' : 'text-gray-200'}`} />
    </div>
  </div>
);

const TabItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-orange-500' : 'text-gray-300'}`}>
    {icon}
    <span className="text-[7px] font-black uppercase tracking-tighter">{label}</span>
  </div>
);
