'use client';

import React from 'react';

interface CtaBannerProps {
  onOpenAppointment: (title?: string) => void;
}

export default function CtaBanner({ onOpenAppointment }: CtaBannerProps) {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B91820] text-white rounded-3xl p-8 sm:p-12 text-center shadow-md">
          <p className="text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-4">
            Si buscás rentabilidad a largo plazo, resguardar tu patrimonio o mudarte a un departamento a estrenar en una zona con potencial de revalorización, es por acá.
          </p>
          <p className="text-sm sm:text-base font-medium text-white/90 mb-8">
            Estamos esperando tu contacto.
          </p>

          <div>
            <button
              onClick={() => onOpenAppointment('Entrevista Personalizada')}
              className="bg-[#990F16] hover:bg-[#830a10] border border-white/20 text-white font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              Quiero una entrevista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
