# ⚡ Vértice Marketing — Landing Page de Alta Performance

<div align="center">
  <img src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" width="1200" height="475" alt="Banner Vértice Marketing" style="border-radius: 8px;" />
  
  <br />
  
  [![React Version](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
  [![Vite Version](https://img.shields.io/badge/Vite-6.2.3-646cff?style=for-the-badge&logo=vite)](https://vite.dev/)
  [![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
</div>

---

## 🚀 Sobre o Projeto

A **Vértice Marketing** é uma plataforma institucional e *landing page* ultra-premium voltada para a captação de clientes de alta performance digital. O projeto foi projetado com as melhores práticas de design moderno, focando em estética escura, animações fluidas, efeitos de vidro (*glassmorphism*) e um logotipo customizado em vetor puro com efeitos realistas de neon.

Este projeto foi **desenvolvido e padronizado com maestria por Daniel Santana**.

---

## ✨ Recursos & Funcionalidades

- **💎 Design Ultra-Premium (Aesthetics-First):** Layout escuro moderno com gradientes harmoniosos, pontos de luz ambiente dinâmicos e grid de fundo geométrico.
- **✨ Logotipo Customizado em Neon:** Logo em SVG vetorizado puro com camadas duplas e filtro de desfoque gaussiano (`feGaussianBlur`) para simular iluminação de neon real, preservando a tipografia original e elegante.
- **📱 Responsividade Absoluta:** Componentes otimizados para dispositivos móveis com menu dinâmico tipo *drawer* lateral deslizante.
- **⚡ Performance & Animações:** Transições suaves baseadas em Framer Motion (`motion/react`) para interações mais fluidas e engajadoras.
- **💬 Modais de Serviços Interativos:** Exibição detalhada de canais de soluções sob demanda com transições suaves.
- **📊 Cases de Sucesso & Métricas:** Área voltada para demonstração de análises de tráfego, SEO e conversões.
- **✉️ Hub de Conexão & Lead Capture:** Formulário de contato robusto com validação integrada em tempo real e estados visuais pós-envio.
- **🟢 Botão WhatsApp Flutuante:** Ponto de contato instantâneo flutuante no canto inferior direito para acesso rápido dos visitantes.

---

## 🛠️ Stack Tecnológica

O ecossistema do projeto foi construído utilizando as ferramentas mais rápidas e modernas do desenvolvimento web:

| Tecnologia | Finalidade | Descrição |
| :--- | :--- | :--- |
| **React 19** | Biblioteca Core | Criação da interface reativa baseada em componentes funcionais modernos |
| **TypeScript 5** | Tipagem Estática | Maior confiabilidade, autocomplete inteligente e prevenção de bugs em tempo de desenvolvimento |
| **Vite 6** | Build & Dev Server | Inicialização instantânea, Hot Module Replacement (HMR) ultrarrápido |
| **Tailwind CSS v4** | Estilização | Design system moderno por meio de utilitários rápidos com carregamento otimizado |
| **Framer Motion** | Animações | Micro-interações premium e transições fluidas de elementos na tela |
| **Lucide React** | Pacote de Ícones | Conjunto de ícones vetoriais modernos, leves e elegantes |

---

## 📂 Estrutura do Projeto

Abaixo está o mapeamento dos principais diretórios e componentes que formam o ecossistema da aplicação:

```bash
vértice-marketing/
├── assets/                 # Ativos estáticos e mídias
├── src/
│   ├── components/         # Componentes React reutilizáveis e focados
│   │   ├── CTA.tsx             # Banner flutuante de chamada final para ação
│   │   ├── Cases.tsx           # Seção de cases de sucesso e métricas comerciais
│   │   ├── Clients.tsx         # Logos e parcerias de confiança da marca
│   │   ├── ContactForm.tsx     # Formulário de contato e captura de leads
│   │   ├── Diferenciais.tsx    # Vantagens competitivas e metodologia tática
│   │   ├── Footer.tsx          # Rodapé institucional completo com logotipo neon
│   │   ├── Hero.tsx            # Primeira dobra, impacto inicial e narrativa principal
│   │   ├── Navbar.tsx          # Cabeçalho fixo, links dinâmicos e logotipo neon
│   │   ├── ServiceModal.tsx    # Visualização detalhada para serviços específicos
│   │   ├── Services.tsx        # Grid com as vertentes de atuação
│   │   └── WhatsAppButton.tsx  # Botão flutuante para atendimento no WhatsApp
│   ├── App.tsx             # Arquivo centralizador do fluxo e layout
│   ├── main.tsx            # Ponto de entrada do React
│   ├── index.css           # Estilos globais e tokens do Design System
│   └── types.ts            # Tipagens TypeScript globais do projeto
├── package.json            # Scripts de automação e dependências do projeto
├── tsconfig.json           # Configurações do compilador TypeScript
└── vite.config.ts          # Arquivo de configuração de plugins e ambiente do Vite
```

---

## 💻 Como Executar Localmente

### 📋 Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 🔧 Passos para Inicialização

1. **Clonar ou baixar o repositório** para a sua máquina.
2. **Navegar até a pasta do projeto** utilizando o terminal:
   ```bash
   cd "caminho/para/vertice-marketing"
   ```
3. **Instalar as dependências do projeto:**
   ```bash
   npm install
   ```
4. **Configurar as variáveis de ambiente (Opcional):**
   - Duplique o arquivo `.env.example` e renomeie-o para `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Insira sua chave de API para integrações no campo `GEMINI_API_KEY`:
     ```env
     GEMINI_API_KEY=sua_chave_aqui
     ```
5. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
6. **Visualizar a página no navegador:**
   - Acesse o endereço indicado no terminal (normalmente: [http://localhost:3000](http://localhost:3000)).

---

## ⚡ Comandos Úteis do Projeto

- `npm run dev`: Inicia o servidor local de desenvolvimento na porta `3000`.
- `npm run build`: Compila e otimiza o código do projeto para produção na pasta `dist/`.
- `npm run preview`: Inicia um servidor local para visualizar a build estática gerada pelo comando de build.
- `npm run clean`: Limpa as pastas temporárias de build (`dist/`).
- `npm run lint`: Valida o código TypeScript em busca de inconsistências ou erros de tipagem.

---

## 🏷️ Licença e Créditos

Este projeto foi totalmente customizado, estilizado e polido por:

**Daniel Santana** — *Software Developer & Performance Specialist* 🚀

---
<div align="center">
  <sub>Criado com carinho, foco em performance e precisão cirúrgica em cada pixel. © 2026 Vértice Marketing.</sub>
</div>
