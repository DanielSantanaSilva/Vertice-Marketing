import { motion } from "motion/react";

export default function Clients() {
  const corporateLogos = [
    {
      id: "logo1",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO8oI5HOIM062kAScsT8MKJPBK-7qzfCqdimqmp7jPWynA5BN-G12QXUyy0iqsxoiGqyRGbDBlr-zb1eAV2YbkfB-3VQSPZ-EFG7yYRrdJjjH19vYWbmLk_IULm-X0zHvTvV_jrJR_E6VIgVm7dqQnJhm0JjZdIAfYRnxK5J9H0rnIWE4i82wavp7dvIuZz0Ko6k6PwE9zARGN2Ud6DbKYZi2FGFR4E-iKxpL4BV0RtxWVShX6aZVZIxKzDtv_RPTAfZ9Vb_U96IsH",
    },
    {
      id: "logo2",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuACkxOy-xkpb5OpCUuCVaBOxsnySsRTmnnU4R3IyNf8Pssu9ojYlhdsKguvEXpko8D6rk0hoaEjqQuOC20V7MnDMR880axN30nxTKLUNUKMNlkiFDU9nx5uuHzd3H3tIqNnjjx2YflIHJqIXp9LNL6hJJIdo80a2WZkTGNXEA94oUjjDFHYz3NwQmS2kHk4cxlo5BJ6diTY2OCZzI4wbjdNL8cMSrWwIJ9DQkCaSBqYq6-Nqc3ilOArGhoaC5a8UY9mS5eYzO35VhKq",
    },
    {
      id: "logo3",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7xpWF_Ud2DIBB_nD0Dk34LN5ZU-Wt0sJNOS1NjV450mPHs5HnzNrhBL3AWX7ov85GLLpdcKPBVCAIcva25YsV5YPC2HPhSZz_IbRAe3CoBRY5LUBVZ_qRiu-B1s3LsUPosZc5g4W35WIaJUYviZCDUHmvyhcIQiLbhHtB7c-gF9pxXruBQKD2ttCcI8mxJsr-14P_wkafoxrzgk2r204aoShW5vnC-1ruvZmS8xyuvkbxyrXALssLkWy6Rz8r0BiTMMtVcWs2x5xM",
    },
    {
      id: "logo4",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFGEYDrM-A9vQA-9-rW29vOgMnecG1EVK3UdGABDCSwlVMqHD8Lt_EcPIOHTH2Q6X-WJMRSqHr3JdSh-zHp2VnBmqW36-K70OWgA7n_SdaPjjOKyNTQAfz3WdTSc1Bq9s31yDE5QoUL7d3ke_8CT5QyfGJ4wRPkVkdjOfCZaOaI4Cl8nBiLifwZC-lR6A7xGxpFE3mkfxQV8NRwnGaAGfBq172a_vUYjA21gt8Gh_eNWuHAPD1TqHNLAHA5a6nVvxn8XqzccF3pEhO",
    },
    {
      id: "logo5",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGVUx4rgwutwOfywvJsdva4yU8obkUbwrUF1Ei6qpM4vjMAr7I4JTHP9f0ePO3NgzWjTp-nNTQrgwAuSCCxTPvELcZulXAtue6upFV0Q57QBBVoAM_OapaTY_V3FPkdMNS_nXq7ZlEvkpl1H_0ROESo2pUzq4nKf2X6UaC0usMpFYlubqmMFaQ4tqOujYPhLxTJ_k_93R4utltrEI0qwISJRszkiDNmuyJhsEyzLxEA4zhgQe83OSY5XDYSCzpbx6jr9LQ98EURfqf",
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
                alt="Logo Cliente Vértice"
                className="max-h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
                src={logo.url}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
