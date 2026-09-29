'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Download, Phone, Check, Building2, MapPin, Calendar, Banknote } from 'lucide-react';
import { Development } from '@/lib/developmentsData';

interface BrochureModalProps {
  development: Development | null;
  onClose: () => void;
  onOpenAppointment?: (title?: string) => void;
}

export default function BrochureModal({
  development,
  onClose,
  onOpenAppointment,
}: BrochureModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!development) return null;

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900">
          <Image
            src={development.image}
            alt={development.name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-red-400 font-bold mb-1 block">
              Brochure Oficial & Ficha Técnica
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">{development.name}</h3>
            <p className="text-xs text-white/80 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {development.zoneDisplay}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-neutral-700 text-sm leading-relaxed">
            {development.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-xs">
            <div>
              <span className="text-neutral-500 font-medium block">Tipologías</span>
              <strong className="text-neutral-900 font-semibold">{development.units}</strong>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Plan de Pago</span>
              <strong className="text-neutral-900 font-semibold">{development.advanceAndInstallments}</strong>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Estado de Entrega</span>
              <strong className="text-neutral-900 font-semibold">{development.deliveryDate}</strong>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Constructora</span>
              <strong className="text-neutral-900 font-semibold">Clamaco S.A.</strong>
            </div>
          </div>

          {/* Features pills */}
          {development.features && (
            <div>
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block mb-2">
                Destacados del proyecto
              </span>
              <div className="flex flex-wrap gap-2">
                {development.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-medium"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSimulateDownload}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-neutral-300 hover:bg-neutral-100 font-bold text-xs text-neutral-800 transition-colors"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Brochure Descargado (PDF)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Brochure en PDF</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenAppointment?.(`Visita a ${development.name}`);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar visita a obra</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
