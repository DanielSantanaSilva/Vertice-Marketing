import { X, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Service } from "../types";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ServiceModal({ service, onClose, onContactClick }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-surface-container-low border border-outline-variant/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl glass-panel z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-secondary transition-colors p-2 rounded-full hover:bg-surface-container-high"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <div className="p-8 sm:p-12 md:p-16">
              <span className="text-secondary font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
                Nossa Solução
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-on-surface mb-6 font-bold">
                {service.title}
              </h3>
              
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {service.metrics && (
                <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/25 mb-8">
                  <span className="text-on-surface-variant text-xs uppercase tracking-wider block mb-1">
                    Indicador Chave de Performance (KPI)
                  </span>
                  <span className="text-secondary text-2xl font-bold font-display">
                    {service.metrics}
                  </span>
                </div>
              )}

              <h4 className="font-display font-semibold text-on-surface text-lg mb-4">
                O que inclui em nossa entrega:
              </h4>
              <ul className="space-y-3.5 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-on-surface-variant font-sans text-body-md">
                    <span className="mt-1 text-secondary shrink-0 bg-secondary/15 p-1 rounded-full">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-display text-body-md font-bold hover:brightness-110 transition-all cyan-glow uppercase tracking-wider text-center"
                >
                  Falar com um especialista
                </button>
                <button
                  onClick={onClose}
                  className="border border-outline-variant/50 text-on-surface-variant hover:text-on-surface px-8 py-4 rounded-lg font-display text-body-md font-semibold transition-all hover:bg-surface-container-high uppercase tracking-wider text-center"
                >
                  Voltar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
