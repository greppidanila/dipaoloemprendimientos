'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Banknote, Calendar, AlertCircle, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Development } from '@/lib/developmentsData';

interface DevelopmentCardProps {
  development: Development;
  onOpenBrochure: (dev: Development) => void;
  onOpenDetails?: (dev: Development) => void;
  onOpenModelVisit: (dev: Development) => void;
  compact?: boolean;
}

export default function DevelopmentCard({
  development,
  onOpenBrochure,
  onOpenDetails,
  onOpenModelVisit,
  compact = false,
}: DevelopmentCardProps) {
  const isFinalizada = development.status === 'obra-finalizada';

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
      {/* Top Image & Badges */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <Link href={`/emprendimientos/${development.id}`} className="block w-full h-full">
            <Image
              src={development.image}
              alt={development.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Status Badge (Top-Left) */}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            {isFinalizada ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold tracking-wide bg-[#2B6CB0] text-white shadow-xs">
                Obra finalizada
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium tracking-wide bg-neutral-900/80 backdrop-blur-xs text-white shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                En progreso
              </span>
            )}
          </div>

          {/* Brochure Link Badge (Top-Right) */}
          <button
            onClick={() => onOpenBrochure(development)}
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-900/75 hover:bg-neutral-900 backdrop-blur-xs text-white transition-colors cursor-pointer"
            title="Descargar brochure digital"
          >
            <FileText className="w-3 h-3 text-white/80" />
            <span>Ver brochure digital</span>
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 pb-4">
          {/* Red Accent Dash */}
          <div className="w-6 h-0.5 bg-[#D81E27] mb-2.5"></div>

          {/* Name & Location */}
          <Link href={`/emprendimientos/${development.id}`} className="block">
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#D81E27] transition-colors">
              {development.name}
            </h3>
          </Link>
          <p className="text-xs font-medium text-neutral-500 mb-3.5 flex items-center justify-between">
            <span>{development.location}</span>
            <span className="text-[11px] font-semibold text-neutral-400">
              {development.zoneDisplay.split(',')[1]?.trim() || development.neighborhood}
            </span>
          </p>

          {/* Specs List */}
          <div className="space-y-2 text-xs text-neutral-600 mb-4">
            <div className="flex items-center gap-2">
              <Home className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="font-normal text-neutral-700">{development.units}</span>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="font-normal text-neutral-700">{development.advanceAndInstallments}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span className="font-normal text-neutral-700">{development.deliveryDate}</span>
            </div>

            {/* Warning or Sold Out indicators */}
            {development.isLastUnits && (
              <div className="flex items-center gap-1.5 pt-1 text-[#D81E27] font-semibold text-xs">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Últimas unidades disponibles</span>
              </div>
            )}

            {development.isSoldOut && (
              <div className="flex items-center gap-1.5 pt-1 text-[#D81E27] font-semibold text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>100% vendido</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        {development.isSoldOut ? (
          <Link
            href={`/emprendimientos/${development.id}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
          >
            <span>Ver detalles de obra</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/emprendimientos/${development.id}`}
              className="py-2.5 px-2 text-center rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors flex items-center justify-center gap-1"
            >
              <span>Más información</span>
            </Link>
            <button
              onClick={() => onOpenModelVisit(development)}
              className="py-2.5 px-2 text-center rounded-lg bg-[#D81E27] hover:bg-[#b8151d] text-white text-xs font-bold transition-colors shadow-2xs cursor-pointer"
            >
              Visitá la unidad modelo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
