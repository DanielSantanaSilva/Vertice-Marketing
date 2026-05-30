import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Quem somos", href: "#hero" },
    { label: "Clientes", href: "#clientes" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <svg
              className="h-8 md:h-10 w-auto text-secondary transition-transform duration-300 group-hover:scale-[1.03]"
              viewBox="0 0 400 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
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
                filter="url(#logo-glow)"
              />
              <path
                d="M 69,39 L 88,26 L 91,49"
                stroke="#00E5FF"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.75"
                filter="url(#logo-glow)"
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
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant font-semibold text-xs tracking-wider uppercase hover:text-secondary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:block">
          <a
            href="#contato"
            className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:scale-[1.04] transition-transform duration-300 cyan-glow inline-block"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-on-surface hover:text-secondary transition-colors"
          aria-label="Alternar menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant/30 py-6 px-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant font-semibold text-sm tracking-wider uppercase hover:text-secondary py-2 border-b border-outline-variant/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-secondary text-on-secondary text-center py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform duration-200 cyan-glow mt-2 inline-block"
            >
              Fale conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
