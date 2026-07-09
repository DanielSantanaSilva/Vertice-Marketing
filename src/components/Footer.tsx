import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 px-6 md:px-16 max-w-[1280px] mx-auto">

        {/* Brand Description Column */}
        <div className="flex flex-col gap-6 lg:col-span-3">
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-auto text-secondary"
              viewBox="0 0 400 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="logo-glow-footer" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur1" />
                  <feGaussianBlur stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Neon Glow Layer */}
              <path
                d="M 25,48 L 52,88 L 80,44"
                stroke="#00E5FF"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
                filter="url(#logo-glow-footer)"
              />
              <path
                d="M 69,39 L 88,26 L 91,49"
                stroke="#00E5FF"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
                filter="url(#logo-glow-footer)"
              />

              {/* Core White/Light Blue Layer */}
              <path
                d="M 25,48 L 52,88 L 80,44"
                stroke="#E0F7FA"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 69,39 L 88,26 L 91,49"
                stroke="#E0F7FA"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="110" y="72" fill="#d5e3fc" fontSize="48" fontWeight="800" fontFamily="Montserrat">VÉRTICE</text>
              <text x="110" y="98" fill="#5de6ff" fontSize="18" fontWeight="600" letterSpacing="0.3em" fontFamily="Inter">MARKETING</text>
            </svg>
          </div>

          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed max-w-sm">
            Referência em performance digital de alta performance, SEO tático e estratégia focada em dados integrados no Brasil. Transformando marcas com precisão analítica.
          </p>

        </div>

        {/* Column 2: Empresa */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          <h5 className="font-display text-sm font-bold text-on-surface uppercase tracking-widest border-b border-outline-variant/15 pb-2">
            Empresa
          </h5>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <a href="#hero" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Nossa história</a>
            <a href="#diferenciais" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Metodologia</a>
            <a href="#diferenciais" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Princípios</a>
            <a href="#contato" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Carreiras</a>
          </div>
        </div>

        {/* Column 3: Serviços */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          <h5 className="font-display text-sm font-bold text-on-surface uppercase tracking-widest border-b border-outline-variant/15 pb-2">
            Serviços
          </h5>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <a href="#servicos" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Estratégia</a>
            <a href="#servicos" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Redes Sociais</a>
            <a href="#servicos" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Mídia Paga</a>
            <a href="#servicos" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">TikTok Strategy</a>
          </div>
        </div>

        {/* Column 4: Suporte */}
        <div className="flex flex-col gap-5 lg:col-span-1">
          <h5 className="font-display text-sm font-bold text-on-surface uppercase tracking-widest border-b border-outline-variant/15 pb-2">
            Suporte
          </h5>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <a href="#contato" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Fale Conosco</a>
            <a href="#cases" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Casos reais</a>
            <a href="#hero" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Diretivas</a>
            <a href="#contato" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all">Análise gratuita</a>
          </div>
        </div>

      </div>

      {/* Subfooter */}
      <div className="mt-16 pt-8 border-t border-outline-variant/10 px-6 md:px-16 max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="font-sans text-xs text-on-surface-variant opacity-60 text-center sm:text-left">
          © {currentYear} VÉRTICE Marketing. Todos os direitos reservados. Precision in every pixel.
        </p>
        <div className="flex gap-6 font-sans text-xs">
          <a href="#hero" className="text-on-surface-variant hover:text-secondary">Políticas de privacidade</a>
          <a href="#hero" className="text-on-surface-variant hover:text-secondary">Termos de serviço</a>
        </div>
      </div>
    </footer>
  );
}
