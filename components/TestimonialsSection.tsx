'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS } from '@/lib/developmentsData';

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const nextReviews = () => {
    setStartIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const prevReviews = () => {
    setStartIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-snug mb-3">
            Di Paolo + Clamaco: la sociedad estratégica que te garantiza felicidad, transparencia y seguridad
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-semibold">
            No lo decimos nosotros. Lo dicen nuestros clientes.
          </p>
        </div>

        {/* Featured Large Testimonial Card */}
        <div className="bg-[#B8B8B8]/30 rounded-3xl p-7 sm:p-10 relative mb-16 border border-neutral-200">
          <div className="absolute top-6 right-8 text-neutral-400">
            <Quote className="w-12 h-12 rotate-180 opacity-60" />
          </div>

          <p className="text-neutral-900 font-bold text-sm sm:text-base mb-3 uppercase tracking-wide">
            Si estás leyendo esta reseña: LOS SUPER RECOMIENDO.
          </p>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Una atención personalizada más que a la altura. En mi caso me asesoró Nehuen, agradezco nuevamente tu gentileza para responder todas mis preguntas con mucha paciencia y claridad. Sigan con este equipo de personas humanas y capacitadas.
          </p>

          <p className="text-right text-xs sm:text-sm font-semibold text-neutral-600">
            – Guillermo Ze.
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className="border border-neutral-200 rounded-3xl p-6 sm:p-8 bg-neutral-50/50 shadow-2xs">
          {/* Google badge header */}
          <div className="text-center mb-8">
            <span className="text-sm font-bold tracking-widest text-neutral-900 uppercase block mb-1">
              EXCELENTE
            </span>
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-neutral-500 font-medium">
              <span>A base de</span>
              <strong className="text-neutral-800 font-bold">218 reseñas</strong>
              {/* Google Brand G */}
              <span className="font-semibold text-neutral-700 ml-0.5">Google</span>
            </div>
          </div>

          {/* Reviews Slider / Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GOOGLE_REVIEWS.slice(0, 4).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    {/* Author & Google Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full ${rev.avatarBg} text-white flex items-center justify-center text-xs font-bold`}
                        >
                          {rev.avatar}
                        </div>
                        <span className="text-xs font-bold text-neutral-800 line-clamp-1">
                          {rev.author}
                        </span>
                      </div>
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-xs text-neutral-600 line-clamp-4 leading-relaxed">
                      {rev.text}
                    </p>
                  </div>

                  <button className="text-[11px] font-semibold text-neutral-500 hover:text-neutral-800 text-left mt-3">
                    Leer más
                  </button>
                </div>
              ))}
            </div>

            {/* Carousel navigation arrow */}
            <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2">
              <button
                onClick={nextReviews}
                className="w-8 h-8 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
