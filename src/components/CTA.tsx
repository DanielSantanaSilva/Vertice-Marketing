import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-28 px-6 md:px-16 bg-secondary text-on-secondary relative overflow-hidden">
      {/* Abstract geometric background layer */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.4em] mb-6 block font-extrabold text-on-secondary/90"
        >
          #vempravértice
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight uppercase"
        >
          PRONTO PARA ELEVAR<br /> SEUS RESULTADOS?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.95 }}
          viewport={{ once: true }}
          className="font-sans text-body-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Entendemos perfeitamente seus desafios comerciais e entregamos a inteligência estratégica e criativa que sua corporação precisa para dominar o território digital com excelência técnica.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-3 bg-background text-secondary px-10 py-5 rounded-lg font-display text-base font-bold hover:scale-[1.03] transition-transform duration-300 shadow-2xl uppercase tracking-wider group"
          >
            FALAR COM UM ESPECIALISTA 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-secondary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
