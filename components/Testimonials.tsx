
import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Mariana Silva",
    role: "Freelancer & Designer",
    comment: "Eu usava 4 apps diferentes. O Rotineira mudou meu jogo integrando tudo. A gamificação me mantém motivada até nos dias difíceis!",
    rating: 5,
    img: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "João Paulo",
    role: "Estudante Concurseiro",
    comment: "O modo foco e o controle de hábitos são os melhores que já testei. Ver meu XP subir ao terminar um ciclo de estudos é viciante.",
    rating: 5,
    img: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Dra. Helena Costa",
    role: "Médica",
    comment: "Organização é vital na minha rotina. O Rotineira me ajuda a não esquecer da minha própria saúde e finanças enquanto cuido dos outros.",
    rating: 5,
    img: "https://picsum.photos/seed/user3/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">O que nossos <span className="text-[#2D9C8B]">aventureiros</span> dizem</h2>
          <p className="text-gray-600 text-lg">Junte-se a milhares de pessoas que transformaram o caos em ordem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-8 text-[#2D9C8B15] w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{r.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt={r.name} />
                <div>
                  <h4 className="font-bold text-gray-900">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
