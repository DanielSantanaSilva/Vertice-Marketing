import { motion } from "motion/react";
import { TrendingUp, Share2, MousePointerClick, FileText, Users, ArrowRight, Globe } from "lucide-react";
import { Service } from "../types";

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const serviceList: Service[] = [
    {
      id: "estrategia",
      iconName: "TrendingUp",
      title: "Estratégia",
      shortDescription: "Planejamento focado em objetivos de negócio e análise de mercado profunda.",
      fullDescription: "Conectamos sua marca com soluções de crescimento inovadoras. Mapeamos jornadas de clientes, analisamos a concorrência de forma implacável e usamos inteligência competitiva para criar planos de mídia e conteúdo focados em pura performance.",
      features: [
        "Pesquisa de mercado & Benchmarking competitivo",
        "Mapeamento da jornada do cliente ideal (ICP)",
        "Auditoria completa de canais e histórico digital",
        "Planejamento anual refinado com metas claras de ROI"
      ],
      metrics: "Previsibilidade de Retorno sobre Investimento (ROI)"
    },
    {
      id: "redes-sociais",
      iconName: "Share2",
      title: "Redes Sociais",
      shortDescription: "Presença digital relevante com conteúdo que engaja e converte sua audiência.",
      fullDescription: "Não se trata apenas de curtidas, mas de construir uma comunidade qualificada que se identifica com o seu propósito. Criamos narrativas fortes, rituais de marca e designs de altíssimo padrão que saltam aos olhos para fidelizar clientes.",
      features: [
        "Identidade visual moderna e padronização premium",
        "Gestão de comunidade, engajamento & SAC social",
        "Copywriting estratégico focado em neurovendas",
        "Relatórios mensais detalhados de alcance e conversão"
      ],
      metrics: "Taxa de Engajamento Qualificado"
    },
    {
      id: "landing-pages-sites",
      iconName: "Globe",
      title: "Landing Pages & Sites",
      shortDescription: "Criação de landing pages e sites robustos com SEO focados em alta conversão.",
      fullDescription: "Desenvolvemos landing pages e sites institucionais robustos, totalmente otimizados para SEO e focados em alta conversão. Unimos design premium, velocidade de carregamento excepcional e estratégias de marketing orgânico para posicionar sua marca no topo e maximizar suas vendas.",
      features: [
        "Desenvolvimento de Landing Pages de altíssima conversão",
        "Sites corporativos robustos, rápidos e responsivos",
        "SEO avançado para atração de tráfego qualificado orgânico",
        "Otimização de velocidade e experiência do usuário (UX/UI)"
      ],
      metrics: "Taxa de Conversão & Tráfego Orgânico"
    },
    {
      id: "midia-paga",
      iconName: "MousePointerClick",
      title: "Mídia Paga",
      shortDescription: "Gerenciamento de tráfego com foco obsessivo em ROI e baixo custo de conversão.",
      fullDescription: "Investimento inteligente em Google Ads, Meta Ads, Pinterest Ads e LinkedIn Ads. Monitoramento cirúrgico de campanhas com análise diária para maximizar seu faturamento mantendo o custo por aquisição (CPA) extremamente controlado.",
      features: [
        "Otimização cirúrgica de lances diários",
        "Testes A/B sistemáticos de imagens, vídeos e copies",
        "Escala segura de orçamento sem desperdício de verbas",
        "Estrutura avançada de Remarketing multi-canal"
      ],
      metrics: "ROAS (Retorno Médio de Gasto com Anúncios)"
    },
    {
      id: "conteudo",
      iconName: "FileText",
      title: "Marketing de Conteúdo",
      shortDescription: "Autoridade de marca através de conteúdo estratégico e otimizado para SEO.",
      fullDescription: "Trabalhamos para gerar tráfego qualificado totalmente orgânico para seu ecossistema. Através de mapeamento semântico profundo, escrevemos artigos ricos e otimizados que escalam no Google e resolvem as dúvidas do seu cliente.",
      features: [
        "Pesquisa aprofundada de palavras-chave competitivas",
        "Otimização On-page completa e auditoria de SEO técnico",
        "Criação de artigos de blog focados em conversão",
        "Gestão ativa no Google Search Console & Analytics"
      ],
      metrics: "Tráfego Orgânico & Domínio de Palavras-Chave"
    },
    {
      id: "ugc",
      iconName: "Users",
      title: "UGC & Influência",
      shortDescription: "Conexões humanas que geram prova social e desejo de consumo imediato.",
      fullDescription: "Aproximamos marcas de pessoas autênticas. Coordenamos de ponta a ponta campanhas com micro e macro influenciadores alinhados à sua proposta de valor, produzindo criativos nativos que geram empatia imediata.",
      features: [
        "Curadoria, análise e contratação de influenciadores",
        "Direção criativa de conteúdo para formatos UGC nativos",
        "Monitoramento e relatórios de métricas de engajamento",
        "Uso de criativos de criadores em campanhas de tráfego"
      ],
      metrics: "Custo por Aquisição (CPA) de Influência"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "TrendingUp":
        return <TrendingUp className="text-secondary w-9 h-9" />;
      case "Share2":
        return <Share2 className="text-secondary w-9 h-9" />;
      case "MousePointerClick":
        return <MousePointerClick className="text-secondary w-9 h-9" />;
      case "FileText":
        return <FileText className="text-secondary w-9 h-9" />;
      case "Users":
        return <Users className="text-secondary w-9 h-9" />;
      case "Globe":
        return <Globe className="text-secondary w-9 h-9" />;
      default:
        return <TrendingUp className="text-secondary w-9 h-9" />;
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto" id="servicos">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
            #serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface leading-[1.2] font-black uppercase">
            PERFORMANCE EM<br /> TODOS OS CANAIS
          </h2>
        </div>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md lg:mb-2 leading-relaxed">
          Entenda como a VÉRTICE utiliza dados refinados e planejamento criativo para criar impacto mercantil robusto através de nossa suite de inteligência digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="glass-panel p-10 rounded-lg hover:border-secondary/50 transition-all duration-300 group border border-outline-variant/10 flex flex-col justify-between"
          >
            <div>
              {/* Animated Icon Ring */}
              <div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-secondary/40 transition-transform duration-300">
                {getIcon(service.iconName)}
              </div>
              <h3 className="font-display text-xl text-on-surface mb-4 font-bold group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-body-md leading-relaxed text-on-surface-variant mb-10">
                {service.shortDescription}
              </p>
            </div>

            <button
              onClick={() => onSelectService(service)}
              className="text-secondary font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 cursor-pointer self-start"
            >
              SAIBA MAIS 
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
