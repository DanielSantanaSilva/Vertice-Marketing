import { motion } from "motion/react";
import technova from "../../assets/clients/technova.png";
import urbanachic from "../../assets/clients/urbanachic.png";
import clinicabemestar from "../../assets/clients/clinicabemestar.png";
import edutech from "../../assets/clients/edutech.png";
import saborelegante from "../../assets/clients/saborelegante.png";

export default function Clients() {
  const corporateLogos = [
    {
      id: "technova",
      name: "TechNova Solutions",
      url: technova,
    },
    {
      id: "urbanachic",
      name: "Urbana Chic",
      url: urbanachic,
    },
    {
      id: "clinicabemestar",
      name: "Clínica Bem-Estar",
      url: clinicabemestar,
    },
    {
      id: "edutech",
      name: "EduTech Online",
      url: edutech,
    },
    {
      id: "saborelegante",
      name: "Sabor Elegante",
      url: saborelegante,
    },
  ];

  return (
    <section className="bg-surface-container-lowest py-20 px-6 md:px-16" id="clientes">
      <div className="max-w-[1280px] mx-auto text-center">
        <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
          #clientes
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-on-surface mb-4 font-bold">
          Marcas que confiam na Vértice
        </h2>
        <p className="font-sans text-body-md text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          Somos a agência por trás dos resultados das marcas mais reconhecidas no mercado digital.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center bg-surface-container/30 py-8 px-6 rounded-xl border border-outline-variant/10">
          {corporateLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <img
                alt={`Logo ${logo.name}`}
                className="max-h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
                src={logo.url}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
