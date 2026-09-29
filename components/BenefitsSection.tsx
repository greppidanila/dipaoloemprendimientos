'use client';

import React from 'react';
import { Check } from 'lucide-react';

const BENEFITS = [
  {
    prefix: 'Precios hasta un 30% más bajos',
    rest: 'en relación a propiedades ya construidas',
  },
  {
    prefix: 'Financiamiento',
    rest: 'en hasta 24 cuotas',
  },
  {
    prefix: 'Potencial de valorización',
    rest: 'a mediano y largo plazo',
  },
  {
    prefix: 'Zonas en crecimiento',
    rest: 'y desarrollo',
  },
  {
    prefix: 'Construcciones nuevas de alta calidad,',
    rest: 'de la mano de Constructora Clamaco.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-6">
          Conocé nuestros desarrollos inmobiliarios<br />
          en las mejores zonas para invertir y vivir
        </h2>

        {/* Intro text */}
        <div className="space-y-3 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          <p>
            Tal como lo hacían nuestros abuelos, los «ladrillos» siguen siendo la forma más inteligente de asegurar y potenciar el capital.
          </p>
          <p>
            La inversión inmobiliaria nunca se desvaloriza y ofrece seguridad ante los cambios económicos.
          </p>
          <p className="font-medium text-neutral-700 pt-2">
            Nuestros proyectos te ofrecen{' '}
            <span className="underline decoration-neutral-400 underline-offset-4">
              beneficios concretos desde el minuto cero:
            </span>
          </p>
        </div>

        {/* 5 Benefit Cards */}
        <div className="space-y-3.5 max-w-2xl mx-auto text-left mb-12">
          {BENEFITS.map((b, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-4 rounded-xl border border-neutral-200/90 bg-white shadow-2xs hover:border-neutral-300 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#D81E27] flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              <p className="text-neutral-800 text-sm sm:text-[15px]">
                <strong className="font-bold text-neutral-900">{b.prefix}</strong>{' '}
                <span className="text-neutral-700">{b.rest}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Final sentence */}
        <p className="text-base sm:text-lg text-neutral-800 font-medium">
          Si estás buscando una <strong className="font-extrabold italic text-neutral-900">oportunidad</strong>, tenemos muchas para ofrecerte.
        </p>
      </div>
    </section>
  );
}
