
import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Wallet, 
  PiggyBank, 
  Plus, 
  Trash2, 
  CheckCircle,
  Home,
  ClipboardList,
  Utensils,
  Dumbbell,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Bell
} from 'lucide-react';

export const InteractiveMockup: React.FC = () => {
  return (
    <section className="py-24 bg-[#2D9C8B] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Virtual Phone Displaying the Finances Screenshot Content */}
          <div className="flex-1 order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Main Phone Frame */}
              <div className="w-[320px] h-[680px] bg-white rounded-[3.5rem] border-[10px] border-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                
                {/* App Content Reconstructed from Finances Screenshot */}
                <div className="bg-[#F8FAFB] h-full flex flex-col custom-scrollbar">
                  
                  {/* Header */}
                  <div className="p-4 flex justify-between items-start bg-white">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#2D9C8B] rounded-full flex items-center justify-center text-white font-bold text-sm">R</div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800 flex items-center gap-1">Bom dia! 👋</h4>
                        <p className="text-[8px] text-gray-400 font-semibold leading-none">Domingo, 15 De Fevereiro</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center">
                      <Bell className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Month Selector */}
                  <div className="flex items-center justify-between px-6 py-4 bg-white">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 font-bold text-gray-900">
                        <span>💰</span> Fevereiro
                      </div>
                      <div className="text-[10px] font-bold text-gray-400">2026</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* Finances Grid Cards */}
                  <div className="p-4 grid grid-cols-2 gap-3">
                    <FinanceCard label="Receitas" value="R$ 5.000,00" color="text-[#2D9C8B]" icon={<TrendingUp className="w-4 h-4" />} iconBg="bg-emerald-50 text-emerald-500" />
                    <FinanceCard label="Despesas" value="R$ 3.000,00" color="text-red-500" icon={<TrendingUp className="w-4 h-4 rotate-180" />} iconBg="bg-red-50 text-red-500" />
                    <FinanceCard label="Saldo" value="R$ 2.000,00" color="text-[#2D9C8B]" icon={<Wallet className="w-4 h-4" />} iconBg="bg-emerald-50 text-emerald-500" />
                    <FinanceCard label="Patrimônio" value="R$ 1.035.000,00" color="text-[#2D9C8B]" icon={<PiggyBank className="w-4 h-4" />} iconBg="bg-emerald-50 text-emerald-500" />
                  </div>

                  {/* Section Tabs */}
                  <div className="px-4 flex gap-2 mb-4">
                    <button className="flex-1 py-2.5 bg-[#2D9C8B] text-white rounded-2xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3 rotate-180" /> Despesas
                    </button>
                    <button className="flex-1 py-2.5 bg-white border border-gray-100 text-gray-600 rounded-2xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <Wallet className="w-3 h-3" /> Dívidas
                    </button>
                    <button className="flex-1 py-2.5 bg-white border border-gray-100 text-gray-600 rounded-2xl text-[10px] font-bold flex items-center justify-center gap-1">
                      <PiggyBank className="w-3 h-3" /> Investimentos
                    </button>
                  </div>

                  {/* Expenses Section */}
                  <div className="mx-4 bg-white rounded-3xl p-5 shadow-sm border border-gray-50 flex-1">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="font-black text-gray-900">Despesas</h5>
                      <button className="bg-[#2D9C8B] text-white px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Adicionar
                      </button>
                    </div>

                    <div className="bg-gray-50/50 p-3 rounded-2xl flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h6 className="text-xs font-black text-gray-900">Lifestyle</h6>
                        <p className="text-[9px] text-gray-400 font-bold uppercase">Outros</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-red-500">R$ 3.000,00</div>
                        <Trash2 className="w-3 h-3 text-gray-300 ml-auto mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Nav Bar */}
                  <div className="bg-white border-t border-gray-50 flex items-center justify-around h-16 px-2 mt-auto">
                    <TabItem icon={<Home className="w-4 h-4" />} label="Início" />
                    <TabItem icon={<ClipboardList className="w-4 h-4" />} label="Rotina" />
                    <TabItem icon={<Utensils className="w-4 h-4" />} label="Alimentação" />
                    <TabItem icon={<Dumbbell className="w-4 h-4" />} label="Treinos" />
                    <TabItem icon={<DollarSign className="w-4 h-4" />} label="Finanças" active />
                    <TabItem icon={<MoreHorizontal className="w-4 h-4" />} label="Mais" />
                  </div>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute -right-12 top-1/4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 w-48 hidden md:block animate-bounce">
                 <div className="flex items-center gap-2 mb-1 text-[#2D9C8B]">
                   <TrendingUp className="w-4 h-4" />
                   <span className="text-xs font-black uppercase">Domínio Financeiro</span>
                 </div>
                 <p className="text-[10px] text-gray-500">Controle receitas, gastos e patrimônio em um só lugar, exatamente como no seu aplicativo.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-white order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Sua Liberdade <br/><span className="text-emerald-200">Financeira</span> Começa Aqui.
            </h2>
            <p className="text-xl text-emerald-50 mb-12 leading-relaxed font-medium">
              Não adianta ter uma rotina produtiva se seu dinheiro está desorganizado. No Rotineira, você visualiza seu patrimônio crescer em tempo real, controla cada despesa e foca no seu primeiro milhão.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12 text-left">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <div className="w-10 h-10 bg-emerald-400/20 rounded-xl flex items-center justify-center mb-4 text-emerald-200">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">Controle Total</h4>
                <p className="text-emerald-100 text-sm">Visualize Receitas, Despesas e Saldo de forma limpa e intuitiva como no print.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <div className="w-10 h-10 bg-emerald-400/20 rounded-xl flex items-center justify-center mb-4 text-emerald-200">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h4 className="font-black text-xl mb-2">Visão de Patrimônio</h4>
                <p className="text-emerald-100 text-sm">Acompanhe seus investimentos e dívidas para acelerar sua evolução financeira.</p>
              </div>
            </div>

            <a href="#precos" className="inline-flex items-center gap-4 bg-white text-[#2D9C8B] px-12 py-6 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              ASSUMIR O CONTROLE AGORA
              <ArrowRight className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinanceCard = ({ label, value, color, icon, iconBg }: { label: string, value: string, color: string, icon: React.ReactNode, iconBg: string }) => (
  <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-7 h-7 ${iconBg} rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">{label}</span>
    </div>
    <div className={`text-[11px] font-black ${color}`}>{value}</div>
  </div>
);

const TabItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#2D9C8B]' : 'text-gray-300'}`}>
    {icon}
    <span className="text-[7px] font-black uppercase tracking-tighter">{label}</span>
  </div>
);
