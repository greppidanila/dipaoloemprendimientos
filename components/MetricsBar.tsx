'use client';

import React from 'react';

const METRICS = [
  {
    number: '1,900+',
    label: 'departamentos en cartera',
  },
  {
    number: '100+',
    label: 'edificios construidos por Clamaco',
  },
  {
    number: '5.000+',
    label: 'familias felices, fans de Di Paolo',
  },
  {
    number: '7.500+',
    label: 'departamentos entregados',
  },
];

export default function MetricsBar() {
  return (
    <section className="bg-[#D81E27] text-white py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {METRICS.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums mb-1.5 drop-shadow-xs">
                {metric.number}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 max-w-[200px] leading-snug">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
