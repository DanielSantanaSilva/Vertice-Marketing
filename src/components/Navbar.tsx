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
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/assets/logo.png"
            alt="Logo Vértice Marketing Digital"
            className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-[1.05] logo-img floating-logo"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-display text-lg md:text-xl font-extrabold text-white tracking-wide">
              VÉRTICE
            </span>
            <span className="font-sans text-[8px] md:text-[9px] font-bold text-[#5de6ff] tracking-[0.2em] uppercase mt-0.5">
              MARKETING DIGITAL
            </span>
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
