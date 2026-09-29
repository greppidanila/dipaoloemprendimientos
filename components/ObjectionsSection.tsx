'use client';

import React from 'react';
import Image from 'next/image';

export default function ObjectionsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-6">
            ¿Qué te hace dudar a la hora de comprar una propiedad que aún no está construida?
          </h2>
          <div className="space-y-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            <p>
              Conocemos muy bien tus dudas y preocupaciones. Invertir en una propiedad no es cualquier cosa.
            </p>
            <p>
              Por eso, te acompañamos desde el primer contacto hasta que te entregamos la llave de tu nueva propiedad. Nuestra misión es que hagas la mejor inversión con total tranquilidad y transparencia.
            </p>
          </div>
        </div>

        {/* Feature Block 1: Plazos Acordados */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-16 sm:mb-24">
          <div className="md:col-span-6 order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-5 tracking-tight">
              Cumplimos los plazos acordados
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Más de 100 edificios terminados y entregados a tiempo y más de 10000 departamentos construidos son la prueba fehaciente que confirma el profesionalismo y la experiencia puesta en esta alianza.
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
              <Image
                src="/images/building_balconies.jpg"
                alt="Edificio terminado y entregado a tiempo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Feature Block 2: Garantía de tu inversión */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-6 order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
              <Image
                src="/images/advisor.jpg"
                alt="Asesor inmobiliario de confianza Di Paolo"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-5 tracking-tight">
              Somos garantía de tu inversión
            </h3>
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              <p>Trabajamos bajo estrictas normas morales y éticas.</p>
              <p>Sin términos confusos ni «letras chicas».</p>
              <p>
                El valor de la unidad, el plan de financiamiento, los costos legales y los detalles de construcción quedan asentados en el boleto de compraventa.
              </p>
              <p className="font-semibold text-neutral-800">
                Vos invertís con la seguridad de lo que vas a recibir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
