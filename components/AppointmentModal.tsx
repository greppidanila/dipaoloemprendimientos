'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone } from 'lucide-react';
import { DEVELOPMENTS_TRES_DE_FEBRERO, DEVELOPMENTS_OTRAS_ZONAS } from '@/lib/developmentsData';

interface AppointmentModalProps {
  isOpen?: boolean;
  initialTopic?: string;
  developmentName?: string;
  onClose: () => void;
}

export default function AppointmentModal({
  isOpen = true,
  initialTopic,
  developmentName,
  onClose,
}: AppointmentModalProps) {
  const defaultTopic = developmentName || initialTopic || 'Visita a Emprendimientos';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDev, setSelectedDev] = useState(defaultTopic);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const allProjects = [...DEVELOPMENTS_TRES_DE_FEBRERO, ...DEVELOPMENTS_OTRAS_ZONAS];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {confirmed ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
              ¡Visita Agendada!
            </h3>
            <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
              Muchas gracias, <strong className="text-neutral-800">{name}</strong>. Nos comunicaremos al <strong className="text-neutral-800">{phone}</strong> para confirmar tu visita para <strong className="text-neutral-800">{selectedDev}</strong> el día {date || 'pautado'} a las {time} hs.
            </p>
            <div className="space-y-3 w-full">
              <a
                href={`https://wa.me/5491158914930?text=Hola,%20agend%C3%A9%20una%20visita%20para%20${encodeURIComponent(selectedDev)}%20a%20nombre%20de%20${encodeURIComponent(name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Confirmar vía WhatsApp ahora
              </a>
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-neutral-500 font-semibold hover:text-neutral-800"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#D81E27] font-bold block mb-1">
                Atención personalizada
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                Agendar una visita
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Conocé la unidad modelo o el avance de obra junto a nuestros asesores.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Tu nombre y apellido *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Martín Rodríguez"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="11 5891-4930"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Emprendimiento de interés
                </label>
                <select
                  value={selectedDev}
                  onChange={(e) => setSelectedDev(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
                >
                  <option value="Consulta General">Cualquier emprendimiento / Asesoramiento general</option>
                  {allProjects.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.location})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    Horario sugerido
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
                  >
                    <option value="10:00">10:00 hs</option>
                    <option value="11:30">11:30 hs</option>
                    <option value="14:00">14:00 hs</option>
                    <option value="16:00">16:00 hs</option>
                    <option value="17:30">17:30 hs</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'AGENDANDO...' : 'CONFIRMAR AGENDAMIENTO'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
