
import React from 'react';
import { 
  Trophy, 
  CheckSquare, 
  Apple, 
  Dumbbell, 
  TrendingUp, 
  Calendar, 
  Zap, 
  Heart,
  ArrowRight
} from 'lucide-react';

const APP_PILLARS = [
  {
    title: "Dashboard de Elite (Gamificação)",
    desc: "Transforme sua vida em um jogo onde você sempre vence. Acompanhe seu Nível (chegue ao Nível 7 e além!), ganhe XP por cada ação e visualize seu progresso real com métricas de tarefas, hábitos e minutos de foco.",
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-emerald-500",
    detail: "1240 min de foco e 12 dias de streak"
  },
  {
    title: "Comando de Tarefas",
    desc: "Chega de pendências. Nosso sistema de tarefas permite que você categorize cada compromisso (Pessoal, Trabalho, Saúde) e acompanhe a barra de progresso até o 100%. Visualize o que foi concluído e o que ainda exige sua energia.",
    icon: <CheckSquare className="w-8 h-8" />,
    color: "bg-blue-500",
    detail: "Consertar o carro, atividades das crianças..."
  },
  {
    title: "Nutrição Inteligente",
    desc: "Saiba exatamente o que colocar no prato. Registre desde a 'Batata Doce' do café da manhã até o 'Peito de Frango' do almoço. Controle de gramas e macros simplificado para quem quer resultados estéticos e saúde.",
    icon: <Apple className="w-8 h-8" />,
    color: "bg-orange-500",
    detail: "Diário alimentar completo e intuitivo"
  },
  {
    title: "Arsenal de Treinos",
    desc: "Seu personal trainer de bolso. Organize sua semana: Peito na segunda, Costas na terça, Cardio no domingo. Adicione exercícios, séries e repetições para nunca mais treinar 'no escuro'.",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "bg-purple-500",
    detail: "Divisão ABCDE e treinos de cardio"
  },
  {
    title: "Dominância Financeira",
    desc: "Onde seu dinheiro está indo? Visualize suas receitas (R$ 5.000+), controle despesas e acompanhe seu patrimônio crescendo (chegue ao primeiro milhão!). Gestão de dívidas e investimentos em um só lugar.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-green-600",
    detail: "Saldo, Receitas, Despesas e Patrimônio"
  },
  {
    title: "Fábrica de Hábitos",
    desc: "Meditação às 08h? Futebol com os amigos? O Rotineira monitora sua constância semanal. Veja seus 'quadradinhos' verdes preencherem a semana e sinta o orgulho da disciplina inabalável.",
    icon: <Calendar className="w-8 h-8" />,
    color: "bg-cyan-500",
    detail: "Monitoramento de hábitos viciante"
  },
  {
    title: "Foco Profundo (Pomodoro)",
    desc: "Elimine distrações. Ative o Modo Foco de 25:00 minutos e veja sua produtividade explodir. Registre horas focadas e número de sessões para dominar sua gestão de tempo.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-red-500",
    detail: "Mantenha o foco, mude seu futuro"
  },
  {
    title: "Reflexão e Mentalidade",
    desc: "Como foi seu dia? Registre seu nível de energia (1 a 5) e seu humor (Ótimo, Bom, Ok...). Um check-in diário para garantir que sua mente esteja tão afiada quanto sua rotina.",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-pink-500",
    detail: "Check-in de energia e anotações"
  }
];

export const FeatureSection: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-8 text-gray-900 leading-tight tracking-tighter">
            O Aplicativo que vai <span className="text-[#2D9C8B]">Substituir</span> Todos os Outros
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Por que pagar 8 assinaturas se você pode ter o ecossistema completo do Rotineira? Analisamos cada detalhe das imagens reais para garantir que você tenha a melhor experiência de organização do mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APP_PILLARS.map((p, i) => (
            <div key={i} className="group p-8 rounded-[3rem] bg-gray-50 border-2 border-transparent hover:border-[#2D9C8B] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(45,156,139,0.2)] transition-all duration-500 flex flex-col">
              <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-gray-900 leading-tight">{p.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-medium">{p.desc}</p>
              
              <div className="pt-6 border-t border-gray-200">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-2">Destaque do App</span>
                <span className="text-sm font-black text-[#2D9C8B] italic">"{p.detail}"</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-900 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D9C8B] opacity-20 blur-[100px]"></div>
          <h3 className="text-4xl md:text-5xl text-white font-black mb-8 leading-tight">Você está a um clique de <br/><span className="text-[#2D9C8B]">zerar a vida.</span></h3>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Todas as 8 funções mostradas acima estão inclusas no seu acesso vitalício. Sem letras miúdas. Sem cobranças extras.
          </p>
          <a href="#precos" className="inline-flex items-center gap-4 bg-[#2D9C8B] text-white px-12 py-7 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(45,156,139,0.5)]">
            LIBERAR MEU ACESSO POR R$ 9,99
            <ArrowRight className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
