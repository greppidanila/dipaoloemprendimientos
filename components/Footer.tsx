'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAppointment?: (title?: string) => void;
}

export default function Footer({ onOpenAppointment }: FooterProps) {
  const handleAction = () => {
    if (onOpenAppointment) {
      onOpenAppointment('Consulta General');
    } else {
      window.location.href = '/contacto';
    }
  };

  return (
    <footer className="w-full bg-white border-t border-neutral-100">
      {/* Dark Architectural Banner with "Haz clic aquí" Button */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/building_moron.jpg"
          alt="Desarrollos urbanos Di Paolo"
          fill
          className="object-cover opacity-35 filter brightness-75 contrast-125"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <p className="text-white/95 text-base sm:text-lg font-bold mb-5 max-w-lg">
            Tu próximo departamento a estrenar con financiación directa y garantía de entrega
          </p>
          <button
            onClick={handleAction}
            className="bg-[#D81E27] hover:bg-[#b8151d] text-white text-xs sm:text-sm font-extrabold px-8 py-3 rounded-full transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            Haz clic aquí para asesorarte
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Broker Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex flex-col group inline-block">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black tracking-tight text-neutral-900 group-hover:text-red-600 transition-colors">
                  Di<span className="font-extrabold">PAOLO</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D81E27] inline-block mb-0.5"></span>
              </div>
              <span className="text-[10px] tracking-wider text-neutral-500 uppercase -mt-1 font-medium">
                negocios inmobiliarios
              </span>
            </Link>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-xs">
              Especialistas en comercialización y desarrollo de departamentos en pozo con más de 100 edificios culminados junto a Clamaco Constructora.
            </p>

            <div className="text-xs text-neutral-500 leading-relaxed pt-2">
              <p className="font-bold text-neutral-800">Corredor responsable:</p>
              <p>Luciano M. Di Paolo</p>
              <p>Matrícula C.S.M. 2529 / CUCICBA 8655</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
              Navegación del Sitio
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <Link href="/" className="hover:text-[#D81E27] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/emprendimientos"
                  className="hover:text-[#D81E27] font-semibold text-neutral-800 transition-colors"
                >
                  Catálogo con Filtros por Zona
                </Link>
              </li>
              <li>
                <Link
                  href="/emprendimientos?zone=tres-de-febrero"
                  className="hover:text-[#D81E27] transition-colors"
                >
                  Emprendimientos en Tres de Febrero
                </Link>
              </li>
              <li>
                <Link
                  href="/emprendimientos?zone=moron"
                  className="hover:text-[#D81E27] transition-colors"
                >
                  Emprendimientos en Morón
                </Link>
              </li>
              <li>
                <Link
                  href="/emprendimientos?zone=nordelta"
                  className="hover:text-[#D81E27] transition-colors"
                >
                  Emprendimientos en Nordelta
                </Link>
              </li>
              <li>
                <Link href="/inversiones" className="hover:text-[#D81E27] transition-colors">
                  Guía para Invertir en Pozo
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-[#D81E27] transition-colors">
                  Quiénes Somos (Di Paolo & Clamaco)
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#D81E27] transition-colors">
                  Contacto & Sedes Físicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3.5 text-xs text-neutral-600">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
              Contacto Directo
            </h4>
            <div>
              <span className="block font-bold text-neutral-800">Llamanos al celular</span>
              <a
                href="tel:+5491158914930"
                className="hover:text-[#D81E27] font-semibold text-sm transition-colors text-neutral-900 block"
              >
                (+54) 9 11 5891-4930
              </a>
            </div>

            <div>
              <span className="block font-bold text-neutral-800">Envianos tu consulta</span>
              <a
                href="mailto:emprendimientos@dipaolopropiedades.com.ar"
                className="hover:text-[#D81E27] font-medium transition-colors break-all"
              >
                emprendimientos@dipaolopropiedades.com.ar
              </a>
            </div>

            <div>
              <span className="block font-bold text-neutral-800">Casa Central</span>
              <p className="font-medium text-neutral-700">
                Av. Juan D. Perón 6100, San Martín, Buenos Aires
              </p>
            </div>

            <div>
              <span className="block font-bold text-neutral-800">Sucursal Caseros</span>
              <p className="font-medium text-neutral-700">
                Av. San Martín & 3 de Febrero, Caseros
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>Copyright © 2026, Di Paolo Emprendimientos - by Danila Digital</p>
          <p className="text-[11px]">
            Las imágenes, renders y medidas son de carácter ilustrativo y están sujetas a modificaciones de obra.
          </p>
        </div>
      </div>
    </footer>
  );
}
