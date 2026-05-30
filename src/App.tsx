/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import ServiceModal from "./components/ServiceModal";
import Diferenciais from "./components/Diferenciais";
import Cases from "./components/Cases";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { Service } from "./types";

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleContactClick = () => {
    setSelectedService(null);
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#051425] text-on-surface overflow-x-hidden selection:bg-secondary selection:text-on-secondary">
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#122032_1px,transparent_1px),linear-gradient(to_bottom,#122032_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10"></div>
      
      {/* Decorative colored ambient light sources */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[55%] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none -z-10"></div>

      {/* Global Interface Navigation */}
      <Navbar />

      <main className="relative pt-20">
        {/* Core Narrative Entry Point */}
        <Hero />

        {/* Client Trust Partnerships Column */}
        <Clients />

        {/* Channels Solutions Framework */}
        <Services onSelectService={setSelectedService} />

        {/* High-Performance Modals */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onContactClick={handleContactClick}
        />

        {/* Unique Selling Differentials Matrix */}
        <Diferenciais />

        {/* Case Studies Analytics and Success Data */}
        <Cases />

        {/* Closing Trigger Banner */}
        <CTA />

        {/* Discovery Form and Connection Hub */}
        <ContactForm />
      </main>

      {/* Social Instant Node Linkage */}
      <WhatsAppButton />

      {/* Corporate Metadata Footer */}
      <Footer />
    </div>
  );
}

