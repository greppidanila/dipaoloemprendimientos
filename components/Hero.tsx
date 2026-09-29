'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: (title?: string) => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section id="inicio" className="pt-4 pb-8 sm:pt-6 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#CCD7DF] rounded-3xl overflow-hidden relative shadow-sm border border-neutral-300/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[520px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 z-10 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-600 mb-3 block">
                Desarrollos inmobiliarios en Tres de Febrero, Nordelta y Morón
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111827] leading-[1.12] tracking-tight mb-6">
                Tu departamento en pozo,<br />
                una inversión rentable y<br />
                segura
              </h1>

              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                <p>
                  Inmobiliaria Di Paolo y Constructora Clamaco se unen para ofrecerte opciones con alto potencial de revalorización y atractivos planes de financiamiento.
                </p>
                <p>
                  Sumate desde el comienzo: comprar un departamento en construcción te permite cumplir el sueño de tener tu hogar a estrenar, a un precio rentable y plazos concretos.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onOpenAppointment('Consulta Inicial')}
                  className="inline-flex items-center justify-center gap-2 bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold px-7 py-3.5 rounded-full text-base tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg group transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>¿HABLAMOS?</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 h-[340px] sm:h-[420px] lg:h-full relative flex items-end justify-center lg:justify-end px-4 sm:px-8 pb-0">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[490px] max-w-md lg:max-w-none">
                <Image
                  src="/images/hero_team.jpg"
                  alt="Equipo Directivo Di Paolo & Clamaco"
                  fill
                  priority
                  className="object-cover object-top rounded-2xl lg:rounded-none lg:rounded-br-3xl shadow-sm"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#CCD7DF]/40 via-transparent to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
