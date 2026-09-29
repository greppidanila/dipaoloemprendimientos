'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import BenefitsSection from '@/components/BenefitsSection';
import DevelopmentsGrid from '@/components/DevelopmentsGrid';
import ObjectionsSection from '@/components/ObjectionsSection';
import AboutSection from '@/components/AboutSection';
import CtaBanner from '@/components/CtaBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BrochureModal from '@/components/BrochureModal';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Development } from '@/lib/developmentsData';

export default function HomePage() {
  const [selectedBrochureDev, setSelectedBrochureDev] = useState<Development | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentTopic, setAppointmentTopic] = useState('Visita a Emprendimientos');

  const handleOpenBrochure = (dev: Development) => {
    setSelectedBrochureDev(dev);
  };

  const handleOpenDetails = (dev: Development) => {
    setSelectedBrochureDev(dev);
  };

  const handleOpenModelVisit = (dev: Development) => {
    setAppointmentTopic(`Unidad Modelo - ${dev.name}`);
    setAppointmentModalOpen(true);
  };

  const handleOpenAppointmentGeneral = (topic?: string) => {
    setAppointmentTopic(topic || 'Consulta General');
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenAppointment={handleOpenAppointmentGeneral} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenAppointment={handleOpenAppointmentGeneral} />

        {/* 2. Red Metrics Bar */}
        <MetricsBar />

        {/* 3. Value Proposition / Benefits */}
        <BenefitsSection />

        {/* 4. Developments Grid (Tres de Febrero & Otras Zonas) */}
        <DevelopmentsGrid
          onOpenBrochure={handleOpenBrochure}
          onOpenDetails={handleOpenDetails}
          onOpenModelVisit={handleOpenModelVisit}
        />

        {/* 5. Objections Handling: Cumplimos plazos & Garantía */}
        <ObjectionsSection />

        {/* 6. About: Di Paolo + Clamaco */}
        <AboutSection />

        {/* 7. Red Action Banner */}
        <CtaBanner onOpenAppointment={handleOpenAppointmentGeneral} />

        {/* 8. Testimonials & Google Reviews */}
        <TestimonialsSection />

        {/* 9. Contact Info & Form */}
        <ContactSection />
      </main>

      {/* 10. Footer with city banner & broker legal info */}
      <Footer onOpenAppointment={handleOpenAppointmentGeneral} />

      {/* Modals & Floating Tools */}
      <BrochureModal
        development={selectedBrochureDev}
        onClose={() => setSelectedBrochureDev(null)}
        onOpenAppointment={handleOpenAppointmentGeneral}
      />

      <AppointmentModal
        isOpen={appointmentModalOpen}
        initialTopic={appointmentTopic}
        onClose={() => setAppointmentModalOpen(false)}
      />

      <WhatsAppButton />
    </div>
  );
}
