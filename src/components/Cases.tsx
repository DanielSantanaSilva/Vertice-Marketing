import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Trophy, Sparkles, TrendingUp, X } from "lucide-react";

interface CaseItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  fullNarrative: string;
  metrics: string[];
}

export default function Cases() {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  const casesList: CaseItem[] = [
    {
      id: "worldvet",
      tag: "TikTok Performance",
      title: "World Veterinária: Aumento de 1500% em engajamento orgânico",
      desc: "Transformamos a comunicação de produtos veterinários em conteúdo de entretenimento nativo que engajou tutores e dominou o nicho organicamente.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc3Lc4nj21A84Cs6Oe6knLX5K72ZWMaDl4K6nhmryMveTMyvwoBKjlfZFpPIhn7CwXUC178vMF02kunSytAlTSogyqjO1kbhAeD2GHnaQ45yU_-J2pTh5kxybUg2K-eI-ycrVPz2XlKiRKcmIWgZqzYWBItjE5B_LY9yp9tOFX26hkXnxz8CXyKVQkNdhFxFrbDsXN4eCwIqIYsXdn-BFLcx84qo2yt3Ch5nCYIPrXtwZ7Q5fll3SFckBAlpLrQeueXhrB44LvOBsf",
      fullNarrative: "Enquanto a concorrência focava em anúncios técnicos frios, a Vértice criou esquetes de humor de convivência de animais com seus donos. Nossos roteiristas criaram dinâmicas virais no TikTok usando as dores e delícias de guiar pets domésticos, integrando de forma sutil os remédios de World Veterinária no cotidiano. O algoritmo distribuiu maciçamente e o engajamento escalou a níveis astronômicos.",
      metrics: ["+1500% Engajamento de Canal", "4.2 Milhões de Views Orgânicos", "Aumento direto nas revendas físicas"]
    },
    {
      id: "pagbank",
      tag: "Content Marketing",
      title: "PagBank: Do zero aos 5M de usuários via conteúdo SEO",
      desc: "Construção de ecossistema focado em finanças, investimentos e empreendedorismo que tirou a dependência de anúncios pagos.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiiHUNqLzxdGjmZaHH26VJA_NQ-I21Og2KyVi7o7_fenxwmlBBd8O7jllJuPIDSJMJKbfhwXQKquu-0ZUpsDM7ZzIABTlF4DXCXO9BRg3CzevP1Zj0xPO2s1thQ2aljwxNcU27fRtNnqO4NQJS0ZBKyi-IjhZX7TRvQhYynDmGb6g8rBjv6JJXbLDPDdKOytMMcKoZU5_MEi2vqFmEzV5SvLKO7yE2MK2ijzLulwSMpTmQxGJCszyBNqARekLTK_6qDLMbe88Pi3lY",
      fullNarrative: "Nossa equipe estruturou um hub completo de educação financeira focado nas dúvidas tributárias e empresariais do público brasileiro. Otimizamos mais de 400 termos altamente concorridos no topo de busca do Google. Isso gerou um fluxo autossuficiente e gratuito de novos correntistas para o banco.",
      metrics: ["5 Milhões de usuários via orgânico", "Mais de 120 palavras em #1 do Google", "Custo de Aquisição de Cliente (CAC) reduzido a zero"]
    },
    {
      id: "oakley",
      tag: "Paid Media",
      title: "Oakley: Budget reduzido, objetivos ousados e ROI recorde",
      desc: "Análise analítica extrema de lances automáticos e redefinição de criativos para e-commerce em datas críticas de comércio.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyauiSuCfp7rP6kKvFyIfQKsJMgCV1dE9IIj6ogDWf-bXwbgczKie8AhiaVJM0ofgAhFZntU02iGcwzAaaU67GL1ea42psQkJQj7t1GmGKX6y3NZh6eXufLomWXM3LejlDRPw29k_cHVvXAbmJxxWjj4ikAkREMCDZS85ycq4XnidS_Kd51DX67tpYqt6zDzyxty2vDsubmB10WRyN2TCSpyctu1vu_LbhZ7fPUdyQ70ruDU8BAuqyzwoFMlENne7SvHKdANkO4pF1",
      fullNarrative: "Enfrentando uma queda de verba trimestral, a Oakley precisava de máxima efetividade de anúncios. Implementamos listas de exclusão ultra-precisas com foco em públicos super-customizados do Instagram e Google. Criamos micro-vídeos focado nas funcionalidades esportivas dos óculos e atingimos o maior faturamento de vendas online da marca.",
      metrics: ["Melhor ROAS histórico de e-commerce", "Taxa de rejeição de anúncios cai 40%", "Aumento de 24% na taxa de conversão direta"]
    },
    {
      id: "tooseguros",
      tag: "Full Funnel Strategy",
      title: "Too Seguros: Estratégia de impacto em todo o funil",
      desc: "Trabalho sincronizado de awareness para corretores e microempresas ligado à inteligência de Google de alta intenção.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0BThtHe8Xc989yPKONlqUQ2DVVxVW8bJydGyEDbnadA6nCedR7JhuczB7fsd70UZPqXzbaDkidljXycEfZr9KaxnvWkn-x07RmFfLA-W7qrg_F-3vL_liqmdmrBwJ52IUoMqiWULCJI8rV5NpoDf_s8MT2OSJJfBrLU_kIeKOA5Kk7ATHnmLSS4HL_sdyXFEjzhAUISX_yKu1NTxPqjSJtlKqF0kteUGa_eARtFx_RYuGexAfsfGvYH_6uQFued4u9cVSm85kkEgc",
      fullNarrative: "Seguros é um setor complexo. Nossa equipe desenhou uma campanha de duas etapas. Primeiro, educamos o consumidor final sobre a segurança no lar e automóvel através de influenciadores e formatos dinâmicos de vídeo. Em seguida, cercamos no search do Google todos que buscaram cotações imediatas.",
      metrics: ["Impacto sincronizado de ponta a ponta", "+34% aumento nas cotações qualificadas", "Brand lift mensurável de 18%"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto" id="cases">
      <div className="text-center mb-20">
        <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
          #cases
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-on-surface uppercase font-black">
          RESULTADOS QUE FALAM POR SI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {casesList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl glass-panel border border-outline-variant/10 shadow-2xl hover:border-secondary/30 transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            
            <div className="p-8 sm:p-10">
              <span className="text-secondary font-mono text-xs uppercase tracking-wider mb-4 block font-bold">
                {item.tag}
              </span>
              <h3 className="font-display text-xl text-on-surface mb-6 font-bold leading-snug group-hover:text-secondary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-10 leading-relaxed">
                {item.desc}
              </p>
              
              <button
                onClick={() => setActiveCase(item)}
                className="border border-secondary/50 hover:border-secondary hover:bg-secondary hover:text-on-secondary text-secondary px-8 py-3 rounded-lg font-mono text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Ver Estudo Completo
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Narrative Detailed case overlay modal */}
      <AnimatePresence>
        {activeCase && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl cursor-pointer"
              onClick={() => setActiveCase(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-surface-container-low border border-outline-variant/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl glass-panel z-10 p-8 sm:p-12"
            >
              <button
                onClick={() => setActiveCase(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-secondary p-1.5 rounded-full hover:bg-surface-container"
              >
                <X size={20} />
              </button>

              <span className="text-secondary text-xs font-mono uppercase tracking-[0.2em] mb-4 block font-bold">
                {activeCase.tag}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-on-surface mb-6 font-black leading-snug">
                {activeCase.title}
              </h3>

              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8 border border-outline-variant/20 shadow-md">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider text-on-surface-variant mb-2 font-bold flex items-center gap-1.5">
                    <Sparkles size={14} className="text-secondary" /> ESTRATÉGIA APLICADA
                  </h4>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {activeCase.fullNarrative}
                  </p>
                </div>

                <div className="border-t border-outline-variant/20 pt-6">
                  <h4 className="font-display text-sm uppercase tracking-wider text-on-surface-variant mb-4 font-bold flex items-center gap-1.5">
                    <Trophy size={14} className="text-secondary" /> MÉTRICAS CHAVE ATINGIDAS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCase.metrics.map((metric, i) => (
                      <div key={i} className="bg-surface-container px-4 py-3 rounded border border-outline-variant/20">
                        <span className="text-secondary font-mono text-xs uppercase tracking-wider block font-bold mb-1">
                          Resultado {i + 1}
                        </span>
                        <span className="text-on-surface font-sans text-sm font-semibold">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#contato"
                  onClick={() => setActiveCase(null)}
                  className="bg-secondary text-on-secondary px-8 py-3.5 rounded-lg font-display text-xs font-bold uppercase hover:brightness-110 transition-all text-center flex-1 cyan-glow"
                >
                  CONSEGUIR RESULTADO SEMELHANTE
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
