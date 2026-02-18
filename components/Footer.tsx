
import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* Ícone removido a pedido do usuário */}
              <span className="text-2xl font-extrabold tracking-tight">Rotineira</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed">
              O aplicativo número #1 em gamificação da produtividade no Brasil. Transformando vidas através de rotinas inteligentes.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram />} />
              <SocialLink icon={<Twitter />} />
              <SocialLink icon={<Facebook />} />
              <SocialLink icon={<Mail />} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Rotineira App. Todos os direitos reservados. Desenvolvido com ❤️ para você.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#2D9C8B] hover:text-white transition-all">
    {icon}
  </a>
);
