'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, SlidersHorizontal } from 'lucide-react';
import { ALL_DEVELOPMENTS } from '@/lib/developmentsData';

interface NavbarProps {
  onOpenAppointment?: (title?: string) => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppointmentClick = () => {
    if (onOpenAppointment) {
      onOpenAppointment('Consulta General');
    } else {
      window.location.href = '/contacto';
    }
  };

  const navLinks = [
    { href: '/', label: 'Inicio' },
    {
      href: '/emprendimientos',
      label: 'Emprendimientos',
      badge: ALL_DEVELOPMENTS.length.toString(),
      highlight: true
    },
    { href: '/inversiones', label: 'Invertir en Pozo' },
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? 'shadow-md border-b border-neutral-200/80 py-2.5' : 'border-b border-neutral-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group cursor-pointer">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 group-hover:text-red-600 transition-colors">
                Di<span className="font-extrabold">PAOLO</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D81E27] inline-block mb-1"></span>
            </div>
            <span className="text-[10px] tracking-wider text-neutral-500 uppercase -mt-1 font-medium">
              negocios inmobiliarios
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'text-[#D81E27] font-bold'
                      : 'hover:text-[#D81E27]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-red-100 text-[#D81E27]">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D81E27] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/emprendimientos"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filtrar Proyectos</span>
            </Link>

            <button
              onClick={handleAppointmentClick}
              className="bg-[#D81E27] hover:bg-[#b8151d] text-white px-5 py-2 rounded-full shadow-xs hover:shadow transition-all duration-200 text-center flex flex-col items-center justify-center group cursor-pointer"
            >
              <span className="text-sm font-bold tracking-wide flex items-center gap-1.5 leading-tight">
                <Phone className="w-3.5 h-3.5 text-white/90" />
                +54 9 11 5891-4930
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-white/95 uppercase leading-tight mt-0.5">
                AGENDAR UNA VISITA AHORA
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/emprendimientos"
              className="p-2 rounded-full bg-neutral-100 text-neutral-700"
              aria-label="Filtrar emprendimientos"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </Link>
            <button
              onClick={handleAppointmentClick}
              className="bg-[#D81E27] text-white p-2 rounded-full"
              aria-label="Agendar visita"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-neutral-200 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 px-3 rounded-lg flex items-center justify-between ${
                  pathname === link.href
                    ? 'bg-red-50 text-[#D81E27] font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                    {link.badge} proyectos
                  </span>
                )}
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleAppointmentClick();
              }}
              className="mt-3 w-full bg-[#D81E27] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Agendar una visita ahora
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
