'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DevelopmentCard from '@/components/DevelopmentCard';
import BrochureModal from '@/components/BrochureModal';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ALL_DEVELOPMENTS, Development } from '@/lib/developmentsData';
import { Search, SlidersHorizontal, RotateCcw, Building2, MapPin, Check, Filter } from 'lucide-react';

function EmprendimientosContent() {
  const searchParams = useSearchParams();
  const urlZone = searchParams.get('zone');

  const [userZone, setUserZone] = useState<string | null>(null);
  const selectedZone = userZone !== null ? userZone : (urlZone || 'todas');
  const setSelectedZone = (z: string) => setUserZone(z);

  const [selectedStatus, setSelectedStatus] = useState<string>('todos');
  const [selectedRooms, setSelectedRooms] = useState<string>('todos');
  const [selectedFinancing, setSelectedFinancing] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('destacados');

  // Modals state
  const [selectedBrochureDev, setSelectedBrochureDev] = useState<Development | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentTopic, setAppointmentTopic] = useState('Visita a Emprendimientos');

  // Zones definition with counts
  const zoneOptions = [
    { id: 'todas', label: 'Todas las Zonas', count: ALL_DEVELOPMENTS.length },
    {
      id: 'tres-de-febrero',
      label: 'Tres de Febrero',
      count: ALL_DEVELOPMENTS.filter((d) => d.zone === 'tres-de-febrero').length,
    },
    {
      id: 'moron',
      label: 'Morón',
      count: ALL_DEVELOPMENTS.filter((d) => d.zone === 'moron').length,
    },
    {
      id: 'nordelta',
      label: 'Nordelta',
      count: ALL_DEVELOPMENTS.filter((d) => d.zone === 'nordelta').length,
    },
    {
      id: 'otras-zonas',
      label: 'Ramos Mejía & Otras',
      count: ALL_DEVELOPMENTS.filter((d) => d.zone === 'otras-zonas').length,
    },
  ];

  // Filter logic
  const filteredDevelopments = useMemo(() => {
    return ALL_DEVELOPMENTS.filter((dev) => {
      // 1. Zone filter
      if (selectedZone !== 'todas' && dev.zone !== selectedZone) {
        return false;
      }

      // 2. Status filter
      if (selectedStatus === 'en-progreso' && dev.status !== 'en-progreso') return false;
      if (selectedStatus === 'obra-finalizada' && dev.status !== 'obra-finalizada') return false;
      if (selectedStatus === 'ultimas-unidades' && !dev.isLastUnits) return false;

      // 3. Rooms filter
      if (selectedRooms === '1' && !dev.unitTypes.includes(1)) return false;
      if (selectedRooms === '2' && !dev.unitTypes.includes(2)) return false;
      if (selectedRooms === '3' && !dev.unitTypes.includes(3) && !dev.unitTypes.includes(4)) return false;
      if (selectedRooms === 'oficinas' && !dev.isOffice) return false;

      // 4. Financing filter
      if (selectedFinancing === 'cuotas' && dev.cuotasCount === 0) return false;
      if (selectedFinancing === 'contado' && !dev.advanceAndInstallments.toLowerCase().includes('contado')) return false;

      // 5. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dev.name.toLowerCase().includes(query);
        const matchesLocation = dev.location.toLowerCase().includes(query);
        const matchesAddress = dev.address.toLowerCase().includes(query);
        const matchesNeighborhood = dev.neighborhood.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation && !matchesAddress && !matchesNeighborhood) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'destacados') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }
      if (sortBy === 'precio-asc') {
        return a.priceFromUSD - b.priceFromUSD;
      }
      if (sortBy === 'precio-desc') {
        return b.priceFromUSD - a.priceFromUSD;
      }
      if (sortBy === 'entrega-asc') {
        return a.deliveryYear - b.deliveryYear;
      }
      if (sortBy === 'nombre-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [selectedZone, selectedStatus, selectedRooms, selectedFinancing, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedZone('todas');
    setSelectedStatus('todos');
    setSelectedRooms('todos');
    setSelectedFinancing('todos');
    setSearchQuery('');
    setSortBy('destacados');
  };

  const handleOpenBrochure = (dev: Development) => {
    setSelectedBrochureDev(dev);
  };

  const handleOpenDetails = (dev: Development) => {
    setSelectedBrochureDev(dev);
  };

  const handleOpenModelVisit = (dev: Development) => {
    setAppointmentTopic(`Unidad Modelo - ${dev.name}`);
    setAppointmentModalOpen(true);
  };

  const handleOpenAppointmentGeneral = (topic?: string) => {
    setAppointmentTopic(topic || 'Consulta General');
    setAppointmentModalOpen(true);
  };

  const activeFiltersCount =
    (selectedZone !== 'todas' ? 1 : 0) +
    (selectedStatus !== 'todos' ? 1 : 0) +
    (selectedRooms !== 'todos' ? 1 : 0) +
    (selectedFinancing !== 'todos' ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  return (
    <>
      <main className="flex-1 pb-20">
        {/* HEADER SECTION */}
        <section className="bg-white border-b border-neutral-200/80 pt-10 pb-8 sm:pt-14 sm:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#D81E27] text-xs font-extrabold uppercase tracking-wider mb-3">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Buscador y Filtro de Emprendimientos</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-3">
                Catálogo de Desarrollos en Pozo
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Explorá todos los proyectos en pozo de Di Paolo y Clamaco. Filtrá por zona geográfica, tipología de ambientes, cuotas de financiación o estado de obra.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER BAR SECTION */}
        <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3.5">
            {/* 1. Zone Pills Selection */}
            <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center gap-2">
                {zoneOptions.map((zone) => {
                  const isActive = selectedZone === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#D81E27] text-white shadow-xs'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80'
                      }`}
                    >
                      <span>{zone.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? 'bg-white/20 text-white font-extrabold'
                            : 'bg-neutral-200 text-neutral-700 font-semibold'
                        }`}
                      >
                        {zone.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-[#D81E27] px-2 py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpiar filtros ({activeFiltersCount})</span>
                </button>
              )}
            </div>

            {/* 2. Secondary Row: Search input + Select Dropdowns + Sort */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-center">
              {/* Search box (5 cols) */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por calle, barrio o palabra clave..."
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-neutral-100/80 border border-neutral-200 focus:bg-white focus:border-[#D81E27] focus:outline-none transition-all placeholder:text-neutral-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Status Select (2 cols) */}
              <div className="md:col-span-2">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100/80 border border-neutral-200 text-neutral-800 font-semibold focus:bg-white focus:border-[#D81E27] focus:outline-none transition-all"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="en-progreso">En Construcción</option>
                  <option value="obra-finalizada">Obra Finalizada</option>
                  <option value="ultimas-unidades">¡Últimas Unidades!</option>
                </select>
              </div>

              {/* Rooms Select (2 cols) */}
              <div className="md:col-span-2">
                <select
                  value={selectedRooms}
                  onChange={(e) => setSelectedRooms(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100/80 border border-neutral-200 text-neutral-800 font-semibold focus:bg-white focus:border-[#D81E27] focus:outline-none transition-all"
                >
                  <option value="todos">Ambientes: Todos</option>
                  <option value="1">1 Ambiente (Monoamb.)</option>
                  <option value="2">2 Ambientes</option>
                  <option value="3">3 o más Ambientes</option>
                  <option value="oficinas">Oficinas Comerciales</option>
                </select>
              </div>

              {/* Sort By (3 cols) */}
              <div className="md:col-span-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-neutral-100/80 border border-neutral-200 text-neutral-800 font-semibold focus:bg-white focus:border-[#D81E27] focus:outline-none transition-all"
                >
                  <option value="destacados">Ordenar: Destacados</option>
                  <option value="precio-asc">Precio: Menor a Mayor</option>
                  <option value="precio-desc">Precio: Mayor a Menor</option>
                  <option value="entrega-asc">Fecha de Entrega más próxima</option>
                  <option value="nombre-asc">Nombre (A - Z)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS GRID SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Results Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200/80">
            <div>
              <p className="text-sm font-semibold text-neutral-800">
                Se encontraron{' '}
                <span className="text-[#D81E27] font-black text-base">
                  {filteredDevelopments.length}
                </span>{' '}
                emprendimientos disponibles
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Zona activa:{' '}
                <strong className="text-neutral-900">
                  {zoneOptions.find((z) => z.id === selectedZone)?.label}
                </strong>
              </p>
            </div>

            {/* Direct WhatsApp Prompt */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 hidden sm:inline">
                ¿Buscás una tipología específica?
              </span>
              <a
                href="https://wa.me/5491158914930?text=Hola!%20Estoy%20buscando%20un%20departamento%20en%20pozo%20y%20quiero%20asesoramiento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors"
              >
                <span>Consultar Asesor</span>
              </a>
            </div>
          </div>

          {/* Grid Render */}
          {filteredDevelopments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredDevelopments.map((dev) => (
                <DevelopmentCard
                  key={dev.id}
                  development={dev}
                  onOpenBrochure={handleOpenBrochure}
                  onOpenDetails={handleOpenDetails}
                  onOpenModelVisit={handleOpenModelVisit}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 max-w-xl mx-auto p-8 shadow-2xs">
              <Building2 className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                No se encontraron emprendimientos con estos filtros
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6">
                Probá ajustando la zona, el estado o la tipología para ver más opciones disponibles.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#D81E27] hover:bg-[#b8151d] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer onOpenAppointment={handleOpenAppointmentGeneral} />

      {/* Modals */}
      {selectedBrochureDev && (
        <BrochureModal
          development={selectedBrochureDev}
          onClose={() => setSelectedBrochureDev(null)}
          onOpenAppointment={handleOpenAppointmentGeneral}
        />
      )}

      {appointmentModalOpen && (
        <AppointmentModal
          isOpen={appointmentModalOpen}
          initialTopic={appointmentTopic}
          onClose={() => setAppointmentModalOpen(false)}
        />
      )}

      <WhatsAppButton />
    </>
  );
}

export default function EmprendimientosPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      <Navbar />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center py-32">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#D81E27]" />
          </div>
        }
      >
        <EmprendimientosContent />
      </Suspense>
    </div>
  );
}
