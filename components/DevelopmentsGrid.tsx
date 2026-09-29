'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, SlidersHorizontal, MapPin, Building2, ChevronDown, Check } from 'lucide-react';
import {
  Development,
  ALL_DEVELOPMENTS,
  DEVELOPMENTS_TRES_DE_FEBRERO,
  DEVELOPMENTS_OTRAS_ZONAS,
} from '@/lib/developmentsData';
import DevelopmentCard from './DevelopmentCard';

interface DevelopmentsGridProps {
  onOpenBrochure: (dev: Development) => void;
  onOpenDetails: (dev: Development) => void;
  onOpenModelVisit: (dev: Development) => void;
}

export default function DevelopmentsGrid({
  onOpenBrochure,
  onOpenDetails,
  onOpenModelVisit,
}: DevelopmentsGridProps) {
  // Zone selection state
  const [selectedZone, setSelectedZone] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('todos');
  const [visibleLimit, setVisibleLimit] = useState<number>(9);

  const zones = [
    { id: 'todos', label: 'Todos los Emprendimientos', count: ALL_DEVELOPMENTS.length },
    { id: 'tres-de-febrero', label: 'Tres de Febrero', count: ALL_DEVELOPMENTS.filter(d => d.zone === 'tres-de-febrero').length },
    { id: 'moron', label: 'Morón', count: ALL_DEVELOPMENTS.filter(d => d.zone === 'moron').length },
    { id: 'nordelta', label: 'Nordelta', count: ALL_DEVELOPMENTS.filter(d => d.zone === 'nordelta').length },
    { id: 'otras-zonas', label: 'Ramos Mejía & Otras', count: ALL_DEVELOPMENTS.filter(d => d.zone === 'otras-zonas').length },
  ];

  const filteredDevelopments = useMemo(() => {
    return ALL_DEVELOPMENTS.filter((dev) => {
      // Zone filter
      if (selectedZone !== 'todos' && dev.zone !== selectedZone) {
        return false;
      }

      // Status filter
      if (selectedStatus === 'en-progreso' && dev.status !== 'en-progreso') return false;
      if (selectedStatus === 'obra-finalizada' && dev.status !== 'obra-finalizada') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = dev.name.toLowerCase().includes(q);
        const matchesLocation = dev.location.toLowerCase().includes(q);
        const matchesAddress = dev.address.toLowerCase().includes(q);
        const matchesNeighborhood = dev.neighborhood.toLowerCase().includes(q);
        if (!matchesName && !matchesLocation && !matchesAddress && !matchesNeighborhood) {
          return false;
        }
      }

      return true;
    });
  }, [selectedZone, selectedStatus, searchQuery]);

  const displayedDevelopments = filteredDevelopments.slice(0, visibleLimit);
  const hasMore = filteredDevelopments.length > visibleLimit;

  return (
    <section id="emprendimientos" className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-[#D81E27] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Desarrollos Inmobiliarios en Pozo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight mb-4">
            Emprendimientos Di Paolo & Clamaco
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Elegí tu departamento en pozo con financiación propia, cuotas fijas y garantía de entrega. Filtrá según la zona de tu preferencia:
          </p>
        </div>

        {/* Filter Toolbar: Zone Selector Pills */}
        <div className="bg-white p-3 sm:p-4 rounded-3xl border border-neutral-200/90 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Zone Pills (Scrollable on mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {zones.map((z) => {
                const isActive = selectedZone === z.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => {
                      setSelectedZone(z.id);
                      setVisibleLimit(9); // Reset pagination on filter change
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#D81E27] text-white shadow-sm ring-2 ring-red-600'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80'
                    }`}
                  >
                    <span>{z.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full font-extrabold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-neutral-200 text-neutral-800'
                      }`}
                    >
                      {z.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Link to Full Catalog Page */}
            <Link
              href="/emprendimientos"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-[#D81E27] bg-red-50 hover:bg-red-100 border border-red-200 transition-colors whitespace-nowrap"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Ver Catálogo Completo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Secondary Filter Line: Search + Status */}
          <div className="mt-3.5 pt-3.5 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleLimit(9);
                }}
                placeholder="Buscar por calle, barrio o localidad..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-[#D81E27] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Status Pills */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
              <span className="text-neutral-400 font-medium hidden md:inline">Estado:</span>
              <button
                onClick={() => setSelectedStatus('todos')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  selectedStatus === 'todos'
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedStatus('en-progreso')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  selectedStatus === 'en-progreso'
                    ? 'bg-[#D81E27] text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                En Obra
              </button>
              <button
                onClick={() => setSelectedStatus('obra-finalizada')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  selectedStatus === 'obra-finalizada'
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                Terminados
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter and Zone Context Banner */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500 px-1">
          <p>
            Mostrando{' '}
            <span className="font-bold text-neutral-900">
              {displayedDevelopments.length}
            </span>{' '}
            de{' '}
            <span className="font-bold text-neutral-900">
              {filteredDevelopments.length}
            </span>{' '}
            proyectos disponibles{' '}
            {selectedZone !== 'todos' && (
              <span>
                en{' '}
                <strong className="text-[#D81E27]">
                  {zones.find((z) => z.id === selectedZone)?.label}
                </strong>
              </span>
            )}
          </p>

          {selectedZone !== 'todos' && (
            <button
              onClick={() => setSelectedZone('todos')}
              className="text-[#D81E27] hover:underline font-semibold cursor-pointer"
            >
              Restablecer a todas las zonas
            </button>
          )}
        </div>

        {/* Developments Grid (Responsive 3 cols) */}
        {displayedDevelopments.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200">
            <Building2 className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800 mb-1">
              No encontramos proyectos con esos filtros
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Probá modificando la zona o el texto de búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedZone('todos');
                setSelectedStatus('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedDevelopments.map((dev) => (
              <DevelopmentCard
                key={dev.id}
                development={dev}
                onOpenBrochure={onOpenBrochure}
                onOpenDetails={onOpenDetails}
                onOpenModelVisit={onOpenModelVisit}
              />
            ))}
          </div>
        )}

        {/* Load More / Catalog CTA Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {hasMore && (
            <button
              onClick={() => setVisibleLimit((prev) => prev + 9)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver más proyectos ({filteredDevelopments.length - visibleLimit} restantes)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          )}

          <Link
            href="/emprendimientos"
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#D81E27] hover:bg-[#b8151d] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Ir a la página de Catálogo Completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
