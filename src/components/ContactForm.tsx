import React, { useState } from "react";
import { Mail, MapPin, Send, Instagram, Youtube, Facebook, CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name.trim()) {
      setErrorMsg("Por favor, preencha o seu nome.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Por favor, insira um e-mail corporativo válido.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Por favor, insira uma breve mensagem informando o seu objetivo.");
      return;
    }

    setIsSubmitting(true);

    // Simulate backend request after 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", website: "", message: "" });
    }, 1200);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-surface" id="contato">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Details Column */}
          <div className="space-y-12">
            <div>
              <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
                #contato
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface mb-6 leading-tight uppercase font-black">
                Vamos conversar sobre seus resultados?
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant max-w-md leading-relaxed">
                Preencha o formulário e um de nossos engenheiros de performance entrará em contato comercial em até 24h.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-surface-container-high border border-outline-variant/20 flex items-center justify-center rounded-lg group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <Mail className="text-secondary group-hover:text-on-secondary transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    E-mail Direto
                  </p>
                  <p className="font-sans text-body-md text-on-surface font-semibold mt-0.5">
                    contato@verticemarketing.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-surface-container-high border border-outline-variant/20 flex items-center justify-center rounded-lg group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                  <MapPin className="text-secondary group-hover:text-on-secondary transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    Sede Operacional
                  </p>
                  <p className="font-sans text-body-md text-on-surface font-semibold mt-0.5">
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-outline-variant/20">
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-6 font-bold">
                Canais Sociais
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary border border-outline-variant/20 transition-all cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary border border-outline-variant/20 transition-all cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary border border-outline-variant/20 transition-all cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Block Column */}
          <div className="glass-panel p-8 sm:p-12 rounded-xl shadow-2xl relative border border-outline-variant/20">
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary cyan-glow">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  Mensagem Enviada!
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                  Agradecemos seu contato. Analisaremos seu site e canais digitais e ligaremos para apresentar nossa proposta em até 24 horas úteis.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 border border-secondary/50 text-secondary hover:bg-secondary hover:text-on-secondary px-8 py-3 rounded-lg font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300"
                >
                  Enviar Outra Mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-[10px] text-on-surface-variant mb-2.5 uppercase tracking-wider font-bold" htmlFor="name">
                    Nome Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-3.5 px-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:opacity-30 text-sm font-sans"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Pedro de Alcântara"
                    type="text"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-on-surface-variant mb-2.5 uppercase tracking-wider font-bold" htmlFor="email">
                    E-mail Corporativo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-3.5 px-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:opacity-30 text-sm font-sans"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="lucas@suaempresa.com.br"
                    type="email"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-on-surface-variant mb-2.5 uppercase tracking-wider font-bold" htmlFor="website">
                    URL do seu Site (opcional)
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-3.5 px-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:opacity-30 text-sm font-sans"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="www.suaempresa.com.br"
                    type="url"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-on-surface-variant mb-2.5 uppercase tracking-wider font-bold" htmlFor="message">
                    Como podemos ajudar seu negócio hoje?
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-3.5 px-4 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:opacity-30 text-sm font-sans"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Gostaria de escalar minhas conversões e otimizar campanhas de tráfego pago..."
                    rows={4}
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-400 font-sans text-xs font-semibold bg-red-400/5 py-2 px-3 rounded border border-red-400/20">
                    {errorMsg}
                  </p>
                )}

                <button
                  className="w-full bg-secondary text-on-secondary py-4.5 rounded-lg font-display text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 cyan-glow flex items-center justify-center gap-3 group cursor-pointer"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"} 
                  <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
