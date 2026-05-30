import { motion } from "motion/react";
import { Award, Zap, RefreshCw, Layers, Compass } from "lucide-react";

export default function Diferenciais() {
  const list = [
    {
      num: "01",
      icon: <Layers size={22} className="text-secondary" />,
      title: "Atendimento Parceiro",
      desc: "Cliente e agência atuando como um só time, com transparência total de canais, dados abertos e proatividade constante no planejamento."
    },
    {
      num: "02",
      icon: <Zap size={22} className="text-secondary" />,
      title: "Data-Driven Decisions",
      desc: "Análise analítica de alto nível. Unimos tecnologia proprietária e dados brutos para construir estratégias de escala previsíveis."
    },
    {
      num: "03",
      icon: <RefreshCw size={22} className="text-secondary" />,
      title: "Melhoria Contínua",
      desc: "Feedback contínuo pós-análise diária de lances e performance. Testamos ideias novas toda semana com mentalidade de startup."
    },
    {
      num: "04",
      icon: <Compass size={22} className="text-secondary" />,
      title: "Metodologia Vértice",
      desc: "Nossos processos internos aceleram o onboarding de novas marcas e garantem consistência operacional livre de erros humanos."
    },
    {
      num: "05",
      icon: <Award size={22} className="text-secondary" />,
      title: "Especialistas Reais",
      desc: "Aqui sua conta não é gerida por estagiários. Nosso time técnico é composto por especialistas seniores experientes em grandes carteiras digitais."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-surface-container" id="diferenciais">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
            #diferenciais
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface uppercase font-black tracking-normal">
            O QUE NOS TORNA ÚNICOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First 3 differential columns */}
          {list.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="md:col-span-4 bg-background p-8 rounded-lg border-l-4 border-secondary hover:translate-y-[-4px] transition-all duration-300 shadow-lg group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:border-secondary/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-secondary font-display text-4xl opacity-25 font-black tracking-tighter">
                  {item.num}
                </span>
              </div>
              <h4 className="font-display text-lg text-on-surface mb-3 font-bold group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Bottom 2 wider differential columns */}
          {list.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="md:col-span-6 bg-background p-8 rounded-lg border-l-4 border-secondary hover:translate-y-[-4px] transition-all duration-300 shadow-lg group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:border-secondary/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-secondary font-display text-4xl opacity-25 font-black tracking-tighter">
                  {item.num}
                </span>
              </div>
              <h4 className="font-display text-lg text-on-surface mb-3 font-bold group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
