'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  TrendingUp,
  Percent,
  Calendar,
  ShieldCheck,
  Building,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Calculator,
  HelpCircle,
} from 'lucide-react';

export default function InversionesPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  // Investment calculator state
  const [selectedBudget, setSelectedBudget] = useState<number>(45000);
  const [selectedTerm, setSelectedTerm] = useState<number>(24);

  // FAQs open state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const estimatedGrowthPct = 30; // 30% average appreciation
  const initialAdvance = Math.round(selectedBudget * 0.4);
  const monthlyInstallment = Math.round((selectedBudget - initialAdvance) / selectedTerm);
  const estimatedFinishedValue = Math.round(selectedBudget * (1 + estimatedGrowthPct / 100));
  const estimatedCapitalGain = estimatedFinishedValue - selectedBudget;

  const faqs = [
    {
      q: '¿Qué es exactamente comprar un departamento en pozo?',
      a: 'Comprar en pozo significa adquirir una unidad antes o durante su construcción física. Esta modalidad te permite acceder a valores de lanzamiento hasta un 30% por debajo del precio de mercado terminado y abonar en cuotas durante el plazo de obra.',
    },
    {
      q: '¿Cómo se garantiza la finalización de la obra?',
      a: 'A través de un Boleto de Compraventa formalizado ante escribanía pública con Clamaco Constructora y Di Paolo Inmobiliaria. Clamaco cuenta con más de 100 edificios construidos y entregados a lo largo de 30 años, con respaldo financiero propio e independiente del sistema bancario.',
    },
    {
      q: '¿Cómo son las cuotas y en qué moneda se pagan?',
      a: 'Ofrecemos dos esquemas principales adaptados a cada inversor: cuotas fijas en dólares sin interés, o cuotas en pesos argentinos ajustadas por el índice CAC (Cámara Argentina de la Construcción). No intervienen bancos ni intermediarios.',
    },
    {
      q: '¿Puedo revender la unidad antes de que termine el edificio?',
      a: 'Sí. Podés ceder el boleto de compraventa en cualquier momento de la obra, realizando una plusvalía de capital intermedia muy atractiva a medida que la construcción avanza.',
    },
    {
      q: '¿Qué rentabilidad promedio genera el alquiler luego de la entrega?',
      a: 'En corredores como Caseros, Villa Bosch y Morón, la rentabilidad anual por alquiler ronda el 6% al 8% anual en dólares gracias a la alta demanda de vivienda cercana a estaciones de tren y centros comerciales.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-neutral-800">
      <Navbar onOpenAppointment={() => setAppointmentModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-16 sm:py-20 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Guía del Inversor Inmobiliario</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                Invertir en Pozo: <span className="text-[#D81E27]">Seguridad & Alta Rentabilidad</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
                Descubrí por qué adquirir propiedades en pozo con Di Paolo y Clamaco es la herramienta más sólida y rentable para proteger tu capital de la inflación y maximizar tu patrimonio en dólares.
              </p>
            </div>
          </div>
        </section>

        {/* 4 CORE ADVANTAGES */}
        <section className="py-16 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
                ¿Por qué invertir en pozo hoy?
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">
                Los beneficios clave que convierten al ladrillo en pozo en la inversión predilecta:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#D81E27] flex items-center justify-center mb-4">
                  <Percent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Hasta 30% más económico
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Comprás a costo de inicio de obra y disfrutás de la apreciación constante mientras el edificio se levanta.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Financiación a Medida
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Adelanto accesible y saldo financiado en hasta 36 cuotas fijas o en pesos CAC, sin aprobación crediticia bancaria.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Seguridad Contractual
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Boletos certificados por escribano, cumplimiento de plazos garantizado y más de 100 edificios culminados exitosamente.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Renta Mensual Asegurada
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Unidades a estrenar con altísima demanda de alquiler en corredores urbanos consolidados con transporte y servicios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE INVESTMENT CALCULATOR */}
        <section className="py-16 sm:py-24 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-[#D81E27] flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-neutral-900">
                    Simulador Estimativo de Inversión
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    Ajustá los valores para visualizar tu esquema de cuotas y ganancia proyectada
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Sliders Side */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-neutral-800 mb-2">
                      <span>Valor estimado de la unidad</span>
                      <span className="text-[#D81E27] text-base">USD {selectedBudget.toLocaleString('es-AR')}</span>
                    </div>
                    <input
                      type="range"
                      min="35000"
                      max="140000"
                      step="5000"
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#D81E27]"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                      <span>USD 35.000</span>
                      <span>USD 85.000</span>
                      <span>USD 140.000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-neutral-800 mb-2">
                      <span>Plazo de financiación en obra</span>
                      <span className="text-[#D81E27] text-base">{selectedTerm} Meses</span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="36"
                      step="6"
                      value={selectedTerm}
                      onChange={(e) => setSelectedTerm(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#D81E27]"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                      <span>12 meses</span>
                      <span>24 meses</span>
                      <span>36 meses</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-600 space-y-1">
                    <p className="font-semibold text-neutral-800">Nota informativa:</p>
                    <p>Los valores son ilustrativos y pueden ajustarse a esquemas con refuerzos semestrales o mayores adelantos según tus posibilidades.</p>
                  </div>
                </div>

                {/* Calculation Results Card */}
                <div className="lg:col-span-6 bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl space-y-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    Proyección de Rendimiento
                  </span>

                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center py-2 border-b border-neutral-800 text-sm">
                      <span className="text-neutral-300">Adelanto estimado (40%):</span>
                      <span className="font-bold text-white">USD {initialAdvance.toLocaleString('es-AR')}</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-neutral-800 text-sm">
                      <span className="text-neutral-300">Valor de cuota mensual:</span>
                      <span className="font-bold text-red-400">USD {monthlyInstallment.toLocaleString('es-AR')} / mes</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-neutral-800 text-sm">
                      <span className="text-neutral-300">Valor estimado a la entrega:</span>
                      <span className="font-bold text-emerald-400">USD {estimatedFinishedValue.toLocaleString('es-AR')}</span>
                    </div>

                    <div className="flex justify-between items-center py-2 text-base font-extrabold">
                      <span className="text-white">Plusvalía proyectada en pozo:</span>
                      <span className="text-emerald-400">+ USD {estimatedCapitalGain.toLocaleString('es-AR')} (+{estimatedGrowthPct}%)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setAppointmentModalOpen(true)}
                    className="w-full bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md mt-4 cursor-pointer"
                  >
                    Solicitar Asesoramiento Financiero
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP BY STEP ROADMAP */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-3">
                Tu Camino de Compra en 4 Pasos Simples
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base">
                Proceso claro, ágil y con respaldo notarial completo:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Elección de Unidad',
                  desc: 'Revisás tipologías, orientación, piso y memoria de calidades con tu asesor asignado.',
                },
                {
                  step: '02',
                  title: 'Reserva & Boleto',
                  desc: 'Congelás el valor de pozo y formalizás el boleto de compraventa ante escribano público.',
                },
                {
                  step: '03',
                  title: 'Seguimiento de Obra',
                  desc: 'Abonás tus cuotas pactadas y recibís informes con fotografías periódicas del avance real.',
                },
                {
                  step: '04',
                  title: 'Posesión & Llaves',
                  desc: 'Inspección final de la unidad modelo, entrega de llaves y escrituración definitiva.',
                },
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 rounded-3xl bg-neutral-50 border border-neutral-200">
                  <span className="text-4xl font-black text-[#D81E27]/20 block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/emprendimientos"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-all text-sm"
              >
                <span>Explorar proyectos disponibles para invertir</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-neutral-700 text-xs font-bold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="text-3xl font-extrabold text-neutral-900">
                Todo lo que necesitás saber antes de dar el paso
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left font-bold text-neutral-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/80 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#D81E27]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {appointmentModalOpen && (
        <AppointmentModal
          developmentName="Asesoramiento Integral de Inversión en Pozo"
          onClose={() => setAppointmentModalOpen(false)}
        />
      )}

      <WhatsAppButton />
      <Footer onOpenAppointment={() => setAppointmentModalOpen(true)} />
    </div>
  );
}
