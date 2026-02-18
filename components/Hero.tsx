
import React from 'react';
import { 
  ArrowRight, 
  Trophy, 
  Star, 
  Bell, 
  CheckCircle, 
  Target, 
  Clock, 
  Flame, 
  Plus, 
  Home, 
  ClipboardList, 
  Utensils, 
  Dumbbell, 
  DollarSign, 
  MoreHorizontal,
  Sun
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#2D9C8B15] to-white">
      {/* Decorative Circles */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-[#2D9C8B] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-emerald-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D9C8B20] text-[#2D9C8B] rounded-full font-black text-sm mb-8 floating border border-[#2D9C8B40]">
              <Trophy className="w-4 h-4" />
              DOMINE SUA ROTINA DEFINITIVAMENTE
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter">
              Saia do <span className="text-[#2D9C8B]">Nível 1</span> na vida real.
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Tarefas, Alimentação, Treinos, Finanças e Foco. Tudo o que você precisa para <span className="text-gray-900 font-bold underline decoration-[#2D9C8B]">evoluir todos os dias</span> em um só app.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#precos" className="w-full sm:w-auto px-12 py-6 bg-[#2D9C8B] text-white rounded-3xl font-black text-2xl shadow-[0_20px_40px_-10px_rgba(45,156,139,0.5)] hover:bg-[#258274] transition-all flex items-center justify-center gap-4 transform hover:-translate-y-2">
                Começar Agora
                <ArrowRight className="w-6 h-6" />
              </a>
              <a href="#funcionalidades" className="w-full sm:w-auto px-12 py-6 bg-white text-gray-800 border-2 border-gray-100 rounded-3xl font-black text-xl hover:border-[#2D9C8B] transition-all text-center">
                Ver Funcionalidades
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Phone Frame */}
            <div className="relative z-10 bg-white p-2 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-gray-900 w-[320px] md:w-[380px] mx-auto overflow-hidden">
              
              {/* App Content Reconstructed from Screenshot */}
              <div className="bg-[#F8FAFB] h-[680px] rounded-[2.8rem] overflow-y-auto overflow-x-hidden flex flex-col relative custom-scrollbar">
                
                {/* Header Section */}
                <div className="p-5 flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2D9C8B] rounded-full flex items-center justify-center text-white font-bold text-lg">R</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-1">Bom dia! 👋</h4>
                      <p className="text-[10px] text-gray-400 font-semibold">Domingo, 15 De Fevereiro</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center relative">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Progress Header */}
                <div className="px-5 flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-[#2D9C8B] font-bold text-xs uppercase tracking-tight">
                    <Target className="w-4 h-4" />
                    Seu Progresso
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-[10px] font-bold">
                    <Star className="w-3 h-3 fill-yellow-500" />
                    12 dias
                  </div>
                </div>

                {/* Level 7 Card */}
                <div className="mx-5 bg-white p-4 rounded-3xl shadow-sm border border-gray-50 mb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#2D9C8B] rounded-full flex items-center justify-center text-white text-2xl font-bold">7</div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-xs font-bold text-gray-800">Nível 7</span>
                        <span className="text-[10px] font-bold text-gray-400">680/1000 XP</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[68%] h-full bg-[#2D9C8B] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium text-center">Faltam 320 XP para o próximo nível</p>
                </div>

                {/* Main Stats Grid */}
                <div className="px-5 grid grid-cols-2 gap-3 mb-4">
                  <StatCard value="127" label="Tarefas" color="text-[#2D9C8B]" />
                  <StatCard value="89" label="Hábitos" color="text-emerald-500" />
                  <StatCard value="1240" label="Min. Foco" color="text-[#2D9C8B]" />
                  <StatCard value="21" label="Maior Streak" color="text-orange-400" />
                </div>

                {/* Status Items Grid */}
                <div className="px-5 grid grid-cols-2 gap-3 mb-6">
                  <StatusItem icon={<CheckCircle className="w-4 h-4" />} title="Tarefas" value="0/0" subtitle="concluídas" iconColor="bg-emerald-50 text-emerald-500" />
                  <StatusItem icon={<Target className="w-4 h-4" />} title="Hábitos" value="0/0" subtitle="mantidos" iconColor="bg-emerald-50 text-emerald-500" />
                  <StatusItem icon={<Clock className="w-4 h-4" />} title="Foco" value="45min" subtitle="concentração" iconColor="bg-blue-50 text-blue-500" />
                  <StatusItem icon={<Flame className="w-4 h-4" />} title="Streak" value="12 dias" subtitle="consecutivos" iconColor="bg-orange-50 text-orange-500" />
                </div>

                {/* Energy Banner */}
                <div className="mx-5 bg-[#2D9C8B] rounded-3xl p-5 text-white flex justify-between items-center relative overflow-hidden mb-20 shadow-lg">
                  <div className="absolute top-0 right-0 opacity-10"><Sun className="w-20 h-20 -mr-6 -mt-6" /></div>
                  <div>
                    <h5 className="font-bold text-lg mb-0.5">Bom dia! 👋</h5>
                    <p className="text-[10px] opacity-90 font-medium">Como está sua energia agora?</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Tab Bar Simulation */}
                <div className="absolute bottom-0 w-full h-20 bg-white border-t border-gray-50 flex items-center justify-around px-4">
                  <TabItem icon={<Home className="w-5 h-5" />} label="Início" active />
                  <TabItem icon={<ClipboardList className="w-5 h-5" />} label="Rotina" />
                  <TabItem icon={<Utensils className="w-5 h-5" />} label="Alimentação" />
                  <TabItem icon={<Dumbbell className="w-5 h-5" />} label="Treinos" />
                  <TabItem icon={<DollarSign className="w-5 h-5" />} label="Finanças" />
                  <TabItem icon={<MoreHorizontal className="w-5 h-5" />} label="Mais" />
                </div>

              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full -z-10 blur-[80px] opacity-40"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#2D9C8B] rounded-full -z-10 blur-[80px] opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, color }: { value: string, label: string, color: string }) => (
  <div className="bg-white p-4 rounded-3xl text-center shadow-sm border border-gray-50">
    <div className={`text-xl font-bold ${color}`}>{value}</div>
    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{label}</div>
  </div>
);

const StatusItem = ({ icon, title, value, subtitle, iconColor }: { icon: React.ReactNode, title: string, value: string, subtitle: string, iconColor: string }) => (
  <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50">
    <div className={`w-8 h-8 ${iconColor} rounded-xl flex items-center justify-center mb-2`}>
      {icon}
    </div>
    <div className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{title}</div>
    <div className="text-sm font-bold text-gray-900 leading-none">{value}</div>
    <div className="text-[10px] text-gray-400 font-medium leading-none mt-1">{subtitle}</div>
  </div>
);

const TabItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#2D9C8B]' : 'text-gray-400'}`}>
    {icon}
    <span className="text-[8px] font-bold uppercase">{label}</span>
  </div>
);
