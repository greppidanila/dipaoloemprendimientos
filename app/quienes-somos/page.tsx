'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Handshake,
} from 'lucide-react';

export default function QuienesSomosPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const stats = [
    { number: '100+', label: 'Edificios Construidos y Entregados' },
    { number: '30+', label: 'Años de Trayectoria Ininterrumpida' },
    { number: '1,900+', label: 'Unidades Gestionadas en Cartera' },
    { number: '5,000+', label: 'Familias e Inversores Asesorados' },
  ];

  const pillars = [
    {
      icon: Clock,
      title: 'Entrega en Plazo Contractual',
      description:
        'Sabemos el valor de tu tiempo y de tu dinero. Por eso, nuestros compromisos de fecha de posesión quedan explícitos en el boleto de compraventa con penalidades claras ante demoras.',
    },
    {
      icon: ShieldCheck,
      title: 'Solidez Jurídica & Transparencia',
      description:
        'Todas las operaciones se formalizan ante escribanías públicas de primera línea. Cero sorpresas en las cuotas: pactamos valores transparentes, en pesos ajustados por índice CAC o fijos en dólares.',
    },
    {
      icon: Award,
      title: 'Calidad Constructiva de Vanguardia',
      description:
        'Clamaco Constructora ejecuta con hormigón de alta resistencia, aberturas de aluminio con doble vidriado hermético (DVH), porcelanatos de primera marca y ascensores electromecánicos de última generación.',
    },
    {
      icon: Users,
      title: 'Acompañamiento Personalizado',
      description:
        'Desde el día que visitás el terreno o la unidad modelo, hasta el momento exacto en que te entregamos las llaves de tu nuevo hogar o inversión, tenés un asesor personal dedicado a tus consultas.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-neutral-800">
      <Navbar onOpenAppointment={() => setAppointmentModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-16 sm:py-24 bg-neutral-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/building_caseros.jpg"
              alt="Edificios Clamaco y Di Paolo"
              fill
              className="object-cover filter grayscale"
              sizes="100vw"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Handshake className="w-3.5 h-3.5" />
                <span>Nuestra Historia & Alianza</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                Di Paolo & Clamaco: <span className="text-[#D81E27]">Unidos y Potenciados</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light">
                La experiencia inmobiliaria de Di Paolo se complementa con el poder constructivo y la impecable reputación de Clamaco, forjando el polo de desarrollo en pozo más confiable de Buenos Aires.
              </p>
            </div>
          </div>
        </section>

        {/* METRICS ROW */}
        <section className="bg-[#D81E27] text-white py-10 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              {stats.map((st, i) => (
                <div key={i} className="pt-4 md:pt-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-1">
                    {st.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white/90 font-medium max-w-[180px] mx-auto">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ALLIANCE & STORY */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Side */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/hero_team.jpg"
                    alt="Liderazgo Di Paolo y Clamaco"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-neutral-900 text-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                  <p className="text-xs text-neutral-300">
                    «Construimos relaciones duraderas basadas en el cumplimiento riguroso de cada promesa.»
                  </p>
                  <p className="text-xs font-bold text-red-400 mt-2">
                    — Luciano Di Paolo & Claudio Clamaco
                  </p>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Más que vender propiedades, construimos patrimonio
                </h2>
                <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                  <p>
                    Desde hace más de tres décadas, las familias del oeste y norte del Gran Buenos Aires confían en nuestro compromiso. La alianza estratégica entre <strong>Di Paolo Negocios Inmobiliarios</strong> y <strong>Clamaco Constructora</strong> nació con un propósito claro: democratizar el acceso a viviendas de alta calidad y ofrecer a inversores retornos reales y predecibles.
                  </p>
                  <p>
                    Mientras otras constructoras dependen de créditos bancarios o financiamiento volátil, nosotros operamos con capital propio y esquemas de pozo autofinanciados. Esto asegura que la obra <strong>nunca se frene</strong>, manteniendo un ritmo constructivo ágil de inicio a fin.
                  </p>
                  <p>
                    Nuestra presencia abarca desde los centros neurálgicos de <strong>Tres de Febrero (Caseros, Villa Bosch, Martín Coronado)</strong> y <strong>Morón</strong>, hasta condominios náuticos de primer nivel en <strong>Nordelta</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/emprendimientos"
                    className="inline-flex items-center gap-2 bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
                  >
                    <span>Ver proyectos en pozo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setAppointmentModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold px-6 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    <span>Agendar reunión con directivos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS & VALUES */}
        <section className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
                Los 4 Pilares de Nuestra Confianza
              </h2>
              <p className="text-neutral-600 text-base">
                Por qué más de 5.000 clientes ya eligieron comprar su departamento con nosotros:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#D81E27] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {pil.title}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {pil.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OFFICES / TOUCHPOINTS */}
        <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
                Nuestras Oficinas de Atención
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">
                Acercate a conversar con nuestros especialistas en cualquiera de nuestros puntos comerciales:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Casa Central San Martín</h3>
                <p className="text-xs text-neutral-500 mb-3">Sede administrativa & escribanía</p>
                <p className="text-sm text-neutral-700 font-medium">Av. Juan D. Perón 6100, San Martín</p>
                <p className="text-xs text-neutral-500 mt-2">Lunes a Viernes de 9:30 a 19:00 hs | Sábados de 10:00 a 13:00 hs</p>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Sucursal Caseros</h3>
                <p className="text-xs text-neutral-500 mb-3">Centro de ventas Tres de Febrero</p>
                <p className="text-sm text-neutral-700 font-medium">Av. San Martín & 3 de Febrero, Caseros</p>
                <p className="text-xs text-neutral-500 mt-2">Atención comercial y asesoramiento de pozo</p>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Punto Comercial Nordelta</h3>
                <p className="text-xs text-neutral-500 mb-3">Desarrollos premium & condominios</p>
                <p className="text-sm text-neutral-700 font-medium">Centro Comercial Nordelta, Tigre</p>
                <p className="text-xs text-neutral-500 mt-2">Visitas coordinadas y asesoramiento exclusivo</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {appointmentModalOpen && (
        <AppointmentModal
          developmentName="Reunión Directiva / Asesoramiento Institucional"
          onClose={() => setAppointmentModalOpen(false)}
        />
      )}

      <WhatsAppButton />
      <Footer onOpenAppointment={() => setAppointmentModalOpen(true)} />
    </div>
  );
}
