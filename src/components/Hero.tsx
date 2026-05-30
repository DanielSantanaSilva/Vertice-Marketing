import { Rocket, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const socialIcons = [
    {
      name: "Meta",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL-1XdmOLpBmRJ7g2EOgwK6M3d2fO40bKMSC8tW0Z2SJK9yXUgvwRu5dPSnlyzPNC4C8bRRnSvfH_D55NTMVFRdsV8guyLZVrOAYtFgBaYmCojxzYfmnXZOQNIChlBzrkIbqUC9KBzBjJMvqLcLqVsARZeOFy1SLZX5Q4vio9K40oelghs2ktqM5aLbYJe3g4Z3gSOsdXnrrCUtrh1j8g-sSEQBYOMSyRFdWxYVPlx0QGSXJ2CVdLKSge7wWOBsvJteqybLVxPRxI",
      animClass: "animate-orbit-1",
      delay: "0s",
    },
    {
      name: "Google Ads",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcyy4Pi5mTzBD4BO9tevWekFBpVEWTXBcOn7bzGnYzKszEmgehAjymYVTgBP-yYuR_CeKc4Hy66W7fqdAFr9wU0nPQi3Jfj9rzDQPrQLCBZoT_okepFuUQMjhb4hbaMjMszRHVCu28MpsHgDJvQBa1yEWWLw6EEDrbO_ffWGI9_Xh2oUcECwjYyTIeXNjQ7i4j0k7ox_zqdB6eNVWm1W8-K_5zmcxBsr56S3MxFRdjxsRNRXCDb48THxZKvfiBBpbi9igFoDBqGCY",
      animClass: "animate-orbit-2",
      delay: "-2.5s",
    },
    {
      name: "Analytics",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFp_i2C20NuniqRmwd7OkGDjIa7SlgW4h9FY4DZSNMkRB08hiLl1-HbP_QLEDmI7n7mHWpTDBZvH3Na2s8tSQ2ZjPMbk-aGAzfMD0GM2fBNxGc8xTaCejDGLRQSaoyienSUQMQn16tEtoicm7MOpPQklOVcX029qph33BJCPwksTd4KT18FeHpMFtPDIAGFK-aKe5O6VivoDwqDnHFT3IdHpZ8d5t0ea2Rr0Rv6_hChB045-X9hNkapeJn6wxumNLYQXqlwUZnODE",
      animClass: "animate-orbit-3",
      delay: "-5s",
    },
    {
      name: "Google Business",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQ9Q8nt4sLLbovsmOrvXD32A0sOFYgvip9tWMtgxtar_APxLFE3_q7WjyLBjbbMrwmc0hxTrfRPLkO8ZYOnmz5_PGkJUXXg8_zNKt419hYtcIQtSK_qQu4sPL0__qHGSJA1ESXE1ZP9t6AnL4YkIOT1UwsuiqGrlIB_3NXDRvvYuubmXDcAcz9Db4PtTRMHyXvcbWiqZ1ydfl_O5R6UXyvWHB8Xsr-FTCkkdFEQ9PE9XFEKhkgo_HBcDjLON63aBdZGAAsxzy-g4",
      animClass: "animate-orbit-4",
      delay: "-7.5s",
    },
    {
      name: "Instagram",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9w0ASAprOpTn0t-malz_YmunkYnaDxAw5KOkcSjFc912E_C0efX49g532iuWZOgH792T1QlFmhamA3NmDoTgFlwWyXnCUd8yCjBVuOJOlNNhEMHwvqwFUlD9_JzB1wq5uLlmcUFsKWLr5oe5kCOuI-lbQttUXRqC430YPA13cEjjJ1HK37SLBcchx1MGCmqMB9OpmwsjWjSEWMPWRBS5XqHODvJxH4ztxZPVpe9XCqoZWIqcJDOmKNQZBQ_TdGINAnk4ZKFWR2Yk",
      animClass: "animate-orbit-1",
      delay: "-10s",
    },
    {
      name: "YouTube",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB978ZLOUEzXH-IrHybYTccQtY6h1EoIt55gvLC8sb5sMbTgL-H00sMeGbmKOgV-AKcwiuTB2WbcVxGrzpTvy-tNychqEp0xUhNmpaCbcYEBiRjwafY7E9eswnKGRTXzCCGTdP0TQuFXZOckwo0gOXTWHvaqeEw3KJWpPCkqIIrOo4ivK4a9mL5nX26ei0_BUb4s_npUlUCWg_lavdolCui_AwDC8KU-wsFOZOBGI6kqR5AsEs9mYSIHSnQ4DlsjXODQ-UTzRjuGOc",
      animClass: "animate-orbit-2",
      delay: "-12.5s",
    },
    {
      name: "TikTok",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBUZzUjPHUWku-72K9JD8nzYCQLVJXgaMcQAXg5cBUNU8DmfmadcoWGFkwBYYUix6Ee_dvquSWqndLHdTtlehoC9s_DVd9frP6hN72tsbBoCwC2efbV6w_fuvwZhxZNiauKyfBu_hMpJH_niiF9NFmOH0o-TapP_UTNIfAKuGVPGbV96N7nwLOlTj-fdWokLLJZo3ewUs1XOzK6ajxr3YAz-KPg41ddo-VzXQebqHxwHmwMKFYWRSKrBD6b5HStBG-SngOEdiY94g",
      animClass: "animate-orbit-3",
      delay: "-15s",
    },
    {
      name: "Facebook",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq3911ZPG3gLBmu0HXcTs2ii5Zlz3Gc0SnCEYi0s_2meqzyqyxAQZjC3ILeeuH2Ovaq6EpX_2o5Xe8x48liNA3G6HaH12qO8zLCMTQKSMrKzmnlsywnxsip8QUpRLSojPkSDQUv20TjQuQJUhp1aP2Bk0zZLZdSoIc5OohCxwEnaoorpNuo0zSgCUDINEUoYYrutWyidkXQgMUqGS6VjqN5QPY-jhc4RocT9sG-tSXTVpiYaQ3xI8UPHPoJQtnNfhARLfbpJkcUpc",
      animClass: "animate-orbit-4",
      delay: "-17.5s",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 py-16 md:py-24 max-w-[1280px] mx-auto overflow-hidden" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Core narrative section */}
        <div className="lg:col-span-7 z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-secondary font-mono text-xs uppercase tracking-[0.25em] font-bold">
              Performance &amp; Estratégia
            </span>
            <span className="h-[1px] w-12 bg-secondary opacity-50"></span>
            <Sparkles className="text-secondary w-4 h-4 animate-pulse" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-on-surface mb-8 leading-[1.1] font-extrabold"
          >
            MAIS QUE AGÊNCIA:<br />
            <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-400">
              ESTRATEGIA
            </span> QUE ELEVA SEU RESULTADO.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed"
          >
            Somos a Vértice, especialistas em performance digital e conteúdo data-driven. Transformamos sua presença online em crescimento real através de estratégia, redes sociais e mídia paga de alta performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#contato" 
              className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-display text-base font-bold flex items-center justify-center gap-3 cyan-glow hover:brightness-110 transition-all duration-300 group"
            >
              FALE COM A VÉRTICE 
              <Rocket className="group-hover:translate-x-1 group-hover:scale-110 transition-transform w-5 h-5 text-on-secondary" />
            </a>
          </motion.div>
        </div>

        {/* Orbit graphical element */}
        <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center">
          <div className="absolute inset-0 bg-secondary/5 rounded-full blur-[120px] -z-10"></div>
          
          <div className="glass-panel p-8 rounded-xl relative overflow-visible w-full max-w-[450px]">
            <div className="relative h-[380px] flex items-center justify-center overflow-visible">
              
              {/* Outer orbit boundary guide line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
                <circle cx="200" cy="190" r="110" fill="none" stroke="#5de6ff" strokeDasharray="5 5" strokeWidth="1" />
              </svg>

              {/* Glowing core logo center point */}
              <div className="relative z-20 w-24 h-24 bg-surface rounded-full flex items-center justify-center border-2 border-secondary cyan-glow shadow-2xl">
                <span className="font-display text-secondary text-5xl font-extrabold">V</span>
                <div className="absolute inset-0 rounded-full animate-ping bg-secondary/15"></div>
              </div>

              {/* Orbiting assets mapping */}
              {socialIcons.map((icon, idx) => (
                <div 
                  key={idx}
                  className={`absolute ${icon.animClass} z-10`}
                  style={{ animationDelay: icon.delay }}
                >
                  <div className="bg-white rounded-lg p-2.5 border border-outline-variant/30 flex items-center justify-center cyan-glow w-16 h-16 transition-all hover:scale-110">
                    <img 
                      alt={icon.name} 
                      className="w-full h-full object-contain" 
                      src={icon.url} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* In-device dynamic micro stat boxes */}
            <div className="grid grid-cols-2 gap-4 relative z-35 -mt-2">
              <div className="glass-panel p-4 rounded-xl border-secondary/20 hover:border-secondary transition-colors duration-300 group">
                <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant mb-1 group-hover:text-secondary tracking-widest">
                  ROAS MÉDIO
                </p>
                <h4 className="font-display text-3xl font-extrabold text-secondary">
                  8.4x
                </h4>
              </div>
              
              <div className="glass-panel p-4 rounded-xl border-secondary/20 hover:border-secondary transition-colors duration-300 group">
                <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant mb-1 group-hover:text-green-400 tracking-widest">
                  CONVERSÕES
                </p>
                <h4 className="font-display text-3xl font-extrabold text-green-400">
                  +150%
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
