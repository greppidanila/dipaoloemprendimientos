'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrochureModal from '@/components/BrochureModal';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import DevelopmentCard from '@/components/DevelopmentCard';
import {
  ALL_DEVELOPMENTS,
  getDevelopmentById,
  Development,
} from '@/lib/developmentsData';
import {
  MapPin,
  Calendar,
  Home,
  Banknote,
  CheckCircle2,
  FileText,
  Phone,
  MessageCircle,
  Share2,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';

export default function DevelopmentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const development = getDevelopmentById(id);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Modals state
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Similar developments in same zone
  const similarDevelopments = ALL_DEVELOPMENTS.filter(
    (d) => d.zone === development?.zone && d.id !== development?.id
  ).slice(0, 3);

  if (!development) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-red-100 text-[#D81E27] mx-auto flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-neutral-900 mb-3">
            Emprendimiento no encontrado
          </h1>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            El proyecto que estás buscando no existe o fue actualizado. Podés explorar nuestro catálogo completo de emprendimientos.
          </p>
          <Link
            href="/emprendimientos"
            className="inline-flex items-center gap-2 bg-[#D81E27] hover:bg-[#b8151d] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver todos los emprendimientos</span>
          </Link>
        </main>
        <Footer onOpenAppointment={() => {}} />
      </div>
    );
  }

  const gallery =
    development.gallery && development.gallery.length > 0
      ? development.gallery
      : [development.image];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Estoy interesado en el proyecto ${development.name} (${development.location}). Quisiera recibir información sobre precios, financiación y disponibilidad.`
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-neutral-800">
      <Navbar onOpenAppointment={() => setAppointmentModalOpen(true)} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs text-neutral-500 gap-1.5 overflow-x-auto whitespace-nowrap py-0.5">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <Link
              href="/emprendimientos"
              className="hover:text-neutral-900 transition-colors"
            >
              Emprendimientos
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <Link
              href={`/emprendimientos?zone=${development.zone}`}
              className="hover:text-neutral-900 transition-colors"
            >
              {development.zoneDisplay}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="font-semibold text-neutral-900 truncate">
              {development.name}
            </span>
          </nav>
        </div>
      </div>

      <main className="flex-1 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          {/* Header Title & Badges */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    development.status === 'obra-finalizada'
                      ? 'bg-neutral-800 text-white'
                      : 'bg-[#D81E27] text-white shadow-xs'
                  }`}
                >
                  {development.status === 'obra-finalizada'
                    ? 'Obra Finalizada'
                    : 'En Construcción'}
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700">
                  {development.zoneDisplay}
                </span>

                {development.isLastUnits && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 animate-pulse">
                    ¡Últimas unidades!
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
                {development.name}
              </h1>

              <div className="flex items-center gap-2 text-neutral-600 text-sm sm:text-base mt-2">
                <MapPin className="w-4 h-4 text-[#D81E27] shrink-0" />
                <span>{development.address}</span>
              </div>
            </div>

            {/* Price & Action Header */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                title="Copiar enlace del proyecto"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? '¡Enlace copiado!' : 'Compartir'}</span>
              </button>

              <button
                onClick={() => setBrochureModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Brochure PDF</span>
              </button>
            </div>
          </div>

          {/* Main Grid: Gallery on Left (7 cols), Sticky CTA Card on Right (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            {/* LEFT COLUMN: Gallery & Details */}
            <div className="lg:col-span-7 space-y-8">
              {/* Photo Showcase */}
              <div className="bg-white rounded-3xl p-2.5 sm:p-3 border border-neutral-200/80 shadow-xs">
                {/* Main Large Image */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={gallery[activeImageIndex] || development.image}
                    alt={development.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                      Foto {activeImageIndex + 1} de {gallery.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnails Row */}
                {gallery.length > 1 && (
                  <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 sm:w-24 aspect-16/10 rounded-xl overflow-hidden shrink-0 transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? 'ring-2 ring-[#D81E27] scale-102 opacity-100 shadow-xs'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${development.name} miniatura ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="100px"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Specs Highlight Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Home className="w-3.5 h-3.5 text-[#D81E27]" />
                    <span>Tipologías</span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">
                    {development.units}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D81E27]" />
                    <span>Entrega</span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">
                    {development.deliveryDate.replace('Entrega en ', '').replace('Entregado en ', '')}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Banknote className="w-3.5 h-3.5 text-[#D81E27]" />
                    <span>Financiación</span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">
                    {development.cuotasCount > 0
                      ? `${development.cuotasCount} Cuotas Fijas`
                      : 'Financiación Directa'}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D81E27]" />
                    <span>Garantía</span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">
                    Clamaco Constructora
                  </p>
                </div>
              </div>

              {/* Description & Architecture */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                  Acerca del Emprendimiento
                </h2>
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  {development.description}
                </p>
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#D81E27] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <span className="font-bold text-neutral-900 block mb-0.5">
                      Alianza Di Paolo & Clamaco Constructora
                    </span>
                    Este proyecto cuenta con respaldo integral de más de 30 años de experiencia, más de 100 edificios culminados y garantía contractual de plazos y calidades constructivas.
                  </div>
                </div>
              </div>

              {/* Features & Amenities */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-5">
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                  Características & Terminaciones
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {development.features.map((feat, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-neutral-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typologies & Floorplans */}
              {development.floorplans && development.floorplans.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                        Tipologías Disponibles
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                        Distribución funcional diseñada para aprovechar la luz natural
                      </p>
                    </div>
                    <Layers className="w-6 h-6 text-[#D81E27]" />
                  </div>

                  <div className="space-y-4">
                    {development.floorplans.map((fp, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 transition-all space-y-2.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-bold text-base text-neutral-900">
                            {fp.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-md bg-neutral-200/70 text-neutral-800 text-xs font-bold">
                              {fp.rooms}
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-red-100 text-[#D81E27] text-xs font-extrabold">
                              {fp.surface}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {fp.description}
                        </p>
                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-xs text-neutral-500 font-medium">
                            Consultar disponibilidad en piso alto o medio
                          </span>
                          <button
                            onClick={() => setBrochureModalOpen(true)}
                            className="text-xs font-bold text-[#D81E27] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <span>Ver plano en Brochure</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Construction Progress Tracker */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
                    Avance de Obra
                  </h2>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {development.status === 'obra-finalizada'
                      ? '100% Finalizado'
                      : 'Cronograma al día'}
                  </span>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1.5">
                      <span>Estructura de Hormigón Armado</span>
                      <span className="text-neutral-900 font-bold">
                        {development.status === 'obra-finalizada' ? '100%' : '100%'}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1.5">
                      <span>Mampostería y Cerramientos</span>
                      <span className="text-neutral-900 font-bold">
                        {development.status === 'obra-finalizada' ? '100%' : '85%'}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{
                          width:
                            development.status === 'obra-finalizada'
                              ? '100%'
                              : '85%',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1.5">
                      <span>Instalaciones (Agua, Luz, Gas/Eléctrico)</span>
                      <span className="text-neutral-900 font-bold">
                        {development.status === 'obra-finalizada' ? '100%' : '65%'}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{
                          width:
                            development.status === 'obra-finalizada'
                              ? '100%'
                              : '65%',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1.5">
                      <span>Terminaciones y Pintura</span>
                      <span className="text-neutral-900 font-bold">
                        {development.status === 'obra-finalizada' ? '100%' : '40%'}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{
                          width:
                            development.status === 'obra-finalizada'
                              ? '100%'
                              : '40%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-neutral-500 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-neutral-400" />
                  <span>Podés coordinar una visita guiada para ver el avance real en obra.</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Financing & Contact Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-md space-y-6">
                {/* Investment & Plan */}
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-neutral-500">
                    Esquema de Inversión
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-neutral-900">
                      Desde USD {development.priceFromUSD.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">
                    Valor estimado en pozo con bonificación por lanzamiento
                  </p>
                </div>

                {/* Plan Highlights */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D81E27] flex items-center justify-center shrink-0">
                      <Banknote className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 block">Financiación</span>
                      <span className="text-sm font-bold text-neutral-900">
                        {development.advanceAndInstallments}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 block">Fecha Estimada de Entrega</span>
                      <span className="text-sm font-bold text-neutral-900">
                        {development.deliveryDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA: Schedule Visit */}
                <div className="space-y-3">
                  <button
                    onClick={() => setAppointmentModalOpen(true)}
                    className="w-full bg-[#D81E27] hover:bg-[#b8151d] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Visita a la Obra</span>
                  </button>

                  {/* Secondary CTA: WhatsApp */}
                  <a
                    href={`https://wa.me/5491158914930?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>

                  {/* Tertiary: Download Brochure */}
                  <button
                    onClick={() => setBrochureModalOpen(true)}
                    className="w-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-neutral-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-neutral-600" />
                    <span>Descargar Brochure Digital Completo</span>
                  </button>
                </div>

                {/* Assigned Real Estate Advisor Box */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src="/images/advisor.jpg"
                      alt="Asesor comercial Di Paolo"
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-neutral-900 block">
                      Equipo Comercial Di Paolo
                    </span>
                    <span className="text-neutral-500 block">
                      Atención personalizada de Lun a Sáb
                    </span>
                    <a
                      href="tel:+5491158914930"
                      className="text-[#D81E27] font-semibold hover:underline mt-0.5 inline-block"
                    >
                      (+54) 9 11 5891-4930
                    </a>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-neutral-900 text-white rounded-3xl p-6 space-y-3">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <span>Garantía de Inversión Segura</span>
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Boleto de compraventa formalizado ante escribanía pública con posesión legal asegurada y seguimiento de obra trimestral con fotos y reportes de ingenieros.
                </p>
              </div>
            </div>
          </div>

          {/* SIMILAR DEVELOPMENTS IN SAME ZONE */}
          {similarDevelopments.length > 0 && (
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    Otros Emprendimientos en {development.zoneDisplay}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-1">
                    Conocé más alternativas con facilidades de pago en la misma zona
                  </p>
                </div>
                <Link
                  href={`/emprendimientos?zone=${development.zone}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#D81E27] hover:underline"
                >
                  <span>Ver todos en esta zona</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {similarDevelopments.map((dev) => (
                  <DevelopmentCard
                    key={dev.id}
                    development={dev}
                    onOpenBrochure={() => {}}
                    onOpenDetails={() => router.push(`/emprendimientos/${dev.id}`)}
                    onOpenModelVisit={() => setAppointmentModalOpen(true)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Brochure Modal */}
      {brochureModalOpen && (
        <BrochureModal
          development={development}
          onClose={() => setBrochureModalOpen(false)}
        />
      )}

      {/* Appointment Modal */}
      {appointmentModalOpen && (
        <AppointmentModal
          developmentName={development.name}
          onClose={() => setAppointmentModalOpen(false)}
        />
      )}

      <WhatsAppButton />
      <Footer onOpenAppointment={() => setAppointmentModalOpen(true)} />
    </div>
  );
}
