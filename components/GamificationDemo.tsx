
import React, { useState } from 'react';
// Added missing icon imports to fix compilation errors
import { Target, Trophy, Flame, Star, CheckCircle } from 'lucide-react';

export const GamificationDemo: React.FC = () => {
  const [xp, setXp] = useState(680);
  const [level, setLevel] = useState(7);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Beber 2L de água', completed: false, xp: 20 },
    { id: 2, title: '30min de Meditação', completed: false, xp: 50 },
    { id: 3, title: 'Registrar despesas', completed: false, xp: 30 },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => {
      if (t.id === id && !t.completed) {
        const newXp = xp + t.xp;
        if (newXp >= 1000) {
          setLevel(l => l + 1);
          setXp(newXp - 1000);
        } else {
          setXp(newXp);
        }
        return { ...t, completed: true };
      }
      return t;
    }));
  };

  return (
    <section id="gamificacao" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Sua Produtividade é sua <span className="text-[#2D9C8B]">Pontuação</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transforme obrigações em diversão. Teste abaixo como o Rotineira funciona na prática:</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#2D9C8B] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  {level}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Seu Perfil</h3>
                  <p className="text-gray-500 font-medium">Rank: Explorador da Rotina</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-xl font-bold">
                <Flame className="w-5 h-5" />
                12 Dias
              </div>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-gray-500">EXPERIÊNCIA (XP)</span>
                <span className="text-sm font-black text-[#2D9C8B]">{xp} / 1000 XP</span>
              </div>
              <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden p-1 border border-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-[#2D9C8B] to-emerald-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(xp / 1000) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Missões Diárias</p>
              {tasks.map(task => (
                <button 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  disabled={task.completed}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all border-2 ${task.completed ? 'bg-emerald-50 border-emerald-100 opacity-60' : 'bg-white border-gray-50 shadow-sm hover:border-[#2D9C8B]'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}>
                      {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`font-bold text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{task.title}</span>
                  </div>
                  <span className={`font-bold ${task.completed ? 'text-emerald-600' : 'text-[#2D9C8B]'}`}>+{task.xp} XP</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <FeatureBadge 
              icon={<Target className="w-8 h-8" />} 
              title="Metas que Viciam" 
              desc="Nosso sistema de streaks faz com que você não queira quebrar a corrente. A consistência nunca foi tão recompensadora."
            />
            <FeatureBadge 
              icon={<Trophy className="w-8 h-8" />} 
              title="Conquistas Exclusivas" 
              desc="Desbloqueie medalhas e títulos conforme evolui. Do 'Iniciante' ao 'Mestre da Vida', cada passo conta."
            />
            <FeatureBadge 
              icon={<Star className="w-8 h-8" />} 
              title="Suba no Ranking" 
              desc="Compare seu progresso com amigos e com a comunidade global. Quem disse que ser produtivo precisa ser solitário?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureBadge = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-[#2D9C8B] group-hover:bg-[#2D9C8B] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
      {icon}
    </div>
    <div>
      <h4 className="text-2xl font-extrabold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
    </div>
  </div>
);
