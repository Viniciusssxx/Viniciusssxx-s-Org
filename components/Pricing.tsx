
import React from 'react';
import { Check, Sparkles, Zap, Timer, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D9C8B]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full font-black text-xs uppercase tracking-tighter mb-4 animate-pulse">
            <Timer className="w-4 h-4" /> Oferta por tempo limitadíssimo
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            A <span className="text-[#2D9C8B]">Única Oportunidade</span> que Você Terá
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Não haverá uma segunda chance. O valor de uma vida organizada e vitoriosa está diante de você por um preço simbólico. Tome a decisão agora.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Single Legendary Plan Card */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border-4 border-[#2D9C8B] shadow-[0_32px_64px_-12px_rgba(45,156,139,0.3)] relative flex flex-col transform hover:scale-[1.02] transition-all duration-500">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-2 rounded-full font-black text-sm flex items-center gap-2 shadow-xl uppercase tracking-widest whitespace-nowrap">
              <Zap className="w-4 h-4 fill-white" /> ACESSO VITALÍCIO LEGENDÁRIO
            </div>

            <div className="text-center mb-10">
              <h3 className="text-3xl font-black mb-2 text-gray-900">Domínio Total da Vida</h3>
              <p className="text-gray-500 font-medium">Tudo o que o Rotineira oferece, para sempre.</p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-1">
                <span className="text-gray-400 line-through text-xl font-bold">R$ 197,00</span>
                <div className="flex items-start gap-1">
                   <span className="text-2xl font-black text-gray-900 mt-2">R$</span>
                   <span className="text-7xl font-black text-[#2D9C8B] tracking-tighter">9,99</span>
                </div>
                <span className="text-emerald-600 font-black text-sm bg-emerald-50 px-3 py-1 rounded-lg mt-2">PAGAMENTO ÚNICO - SEM MENSALIDADES</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-12">
              <PricingItem text="Sistema de Gamificação Completo e Ilimitado" bold />
              <PricingItem text="Gestão Financeira Avançada com Gráficos" />
              <PricingItem text="Plano Nutricional e Diário de Dieta" />
              <PricingItem text="Modo Foco Profissional (Pomodoro Analytics)" />
              <PricingItem text="Backup em Nuvem Blindado e Permanente" />
              <PricingItem text="Suporte VIP 24h via WhatsApp" />
              <PricingItem text="Zero Anúncios - Foco Total na sua Evolução" bold />
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-[#2D9C8B] to-emerald-400 text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(45,156,139,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(45,156,139,0.6)] transition-all transform hover:-translate-y-2 active:scale-95 group overflow-hidden relative">
              <span className="relative z-10 flex items-center justify-center gap-3">
                QUERO MUDAR MINHA VIDA AGORA
                <Sparkles className="w-6 h-6 animate-spin" />
              </span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Compra 100% Segura
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="text-xs font-bold uppercase tracking-widest">7 Dias de Garantia</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-gray-500 font-medium italic">
            "Sabe aquele café que você toma na padaria? Ele custa o mesmo que a sua transformação pessoal. A escolha é sua."
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .group-hover\\:animate-shine {
          animation: shine 0.75s;
        }
      `}</style>
    </section>
  );
};

const PricingItem = ({ text, bold = false }: { text: string, bold?: boolean }) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0 w-6 h-6 bg-[#2D9C8B] rounded-full flex items-center justify-center shadow-sm">
      <Check className="w-4 h-4 text-white font-black" />
    </div>
    <span className={`${bold ? 'font-black text-gray-900 text-lg' : 'text-gray-600 font-medium'}`}>{text}</span>
  </div>
);
