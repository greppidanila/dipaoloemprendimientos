'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
            ¿Quiénes somos? Di Paolo y Clamaco:<br />
            Unidos y potenciados
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Team Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/hero_team.jpg"
                alt="Directivos de Inmobiliaria Di Paolo y Constructora Clamaco"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-5 text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
            <p>Podríamos decirte muchas cosas sobre nosotros...</p>
            <p>
              Hablarte de nuestra trayectoria, de la cantidad de clientes que hemos atendido, de nuestra profesionalidad o del compromiso con el que asumimos cada consulta y operación...
            </p>
            <p>
              Podríamos contarte sobre la confianza que hemos generado a lo largo de los años, la seriedad y la pasión con la que afrontamos nuestra profesión...
            </p>
            <p className="font-medium text-neutral-800">
              Sí, de todo eso podríamos hablar.
            </p>

            <p className="pt-2">
              Pero si hay algo que nos define y que constituye nuestra identidad, es{' '}
              <strong className="font-bold text-neutral-900">
                haber construido una sólida red de clientes, socios y proveedores
              </strong>{' '}
              que se identifican con los valores de nuestra empresa familiar.
            </p>

            <p>
              Se dice rápido. Pero nos tomó más de <strong className="font-bold text-neutral-900">45 años</strong>.
            </p>

            <p>
              Por eso decimos que <strong className="font-bold text-neutral-900">no vendemos propiedades, sino que construimos relaciones a largo plazo</strong>.
            </p>

            <p>
              Cuando nos conozcas, entenderás lo que decimos.
            </p>

            <p>
              Hoy vamos por más, haciendo una alianza muy productiva con los NÚMERO UNO de la construcción de edificios, la empresa más reconocida en el mercado de desarrollos inmobiliarios:{' '}
              <strong className="font-bold text-neutral-900">Clamaco Constructora</strong>.
            </p>

            {/* Highlight Callout */}
            <div className="pt-4 pb-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] leading-snug">
                Sus 30 años construyendo viviendas de alta calidad se unen a nuestros 45 años de experiencia vendiéndolas.
              </h3>
            </div>

            <div className="pt-1">
              <p className="text-base font-extrabold text-[#111827] mb-1">
                ¿El resultado?
              </p>
              <p className="text-neutral-700 font-medium text-sm sm:text-base">
                Una inversión segura y rentable. ¡Un sueño cumplido!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
