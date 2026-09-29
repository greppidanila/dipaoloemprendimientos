'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { ALL_DEVELOPMENTS } from '@/lib/developmentsData';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    developmentId: '',
    contactChannel: 'whatsapp',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const offices = [
    {
      title: 'Casa Central San Martín',
      address: 'Av. Juan D. Perón 6100, San Martín, Buenos Aires',
      hours: 'Lunes a Viernes de 9:30 a 19:00 hs | Sábados de 10:00 a 13:00 hs',
      phone: '(+54) 9 11 5891-4930',
      badge: 'Sede Principal & Escribanía',
    },
    {
      title: 'Sucursal Caseros',
      address: 'Av. San Martín & 3 de Febrero, Caseros, Tres de Febrero',
      hours: 'Lunes a Viernes de 10:00 a 18:30 hs | Sábados con cita previa',
      phone: '(+54) 9 11 5891-4930',
      badge: 'Punto de Venta Tres de Febrero',
    },
    {
      title: 'Espacio Comercial Nordelta',
      address: 'Centro Comercial Nordelta, Tigre, Buenos Aires',
      hours: 'Atención con cita previa coordinada',
      phone: '(+54) 9 11 5891-4930',
      badge: 'Desarrollos Premium',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col text-neutral-800">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-14 sm:py-20 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-800/60">
              Estamos para Acompañarte
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 mb-4">
              Ponete en Contacto con <span className="text-[#D81E27]">Di Paolo</span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              ¿Tenés dudas sobre algún emprendimiento, plazos o esquemas de financiación? Nuestro equipo de asesores inmobiliarios está a tu disposición.
            </p>
          </div>
        </section>

        {/* MAIN CONTACT CONTENT */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* LEFT COLUMN: Channels & Offices */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-neutral-900 mb-2">
                    Canales de Atención Directa
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    Elegí el medio que te sea más cómodo para recibir asesoramiento personalizado sin demoras:
                  </p>

                  <div className="space-y-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/5491158914930?text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20web%20y%20quisiera%20consultar%20por%20los%20emprendimientos%20en%20pozo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 flex items-center gap-4 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                          Respuesta Inmediata
                        </span>
                        <p className="text-base font-extrabold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                          WhatsApp (+54) 9 11 5891-4930
                        </p>
                        <span className="text-xs text-neutral-600">
                          Chateá directo con un asesor de pozo
                        </span>
                      </div>
                    </a>

                    {/* Phone Call */}
                    <a
                      href="tel:+5491158914930"
                      className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 flex items-center gap-4 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold text-neutral-500 tracking-wider">
                          Llamada Telefónica
                        </span>
                        <p className="text-base font-extrabold text-neutral-900 group-hover:text-red-600 transition-colors">
                          (+54) 9 11 5891-4930
                        </p>
                        <span className="text-xs text-neutral-600">
                          Lun a Vie de 9:30 a 19:00 hs
                        </span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:emprendimientos@dipaolopropiedades.com.ar"
                      className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 flex items-center gap-4 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-red-100 text-[#D81E27] flex items-center justify-center shrink-0 shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-xs uppercase font-extrabold text-neutral-500 tracking-wider">
                          Correo Electrónico
                        </span>
                        <p className="text-sm font-bold text-neutral-900 truncate group-hover:text-red-600 transition-colors">
                          emprendimientos@dipaolopropiedades.com.ar
                        </p>
                        <span className="text-xs text-neutral-600">
                          Respondemos en menos de 24 hs
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Legal Broker Accreditation */}
                <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Corredor Inmobiliario Responsable</span>
                  </div>
                  <p>Luciano M. Di Paolo</p>
                  <p className="text-neutral-500">Matrícula C.S.M. 2529 | CUCICBA 8655</p>
                </div>
              </div>

              {/* RIGHT COLUMN: Contact Form */}
              <div className="lg:col-span-7 bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm">
                <h2 className="text-2xl font-black text-neutral-900 mb-2">
                  Envianos tu Consulta
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                  Completá tus datos y un especialista en desarrollos te responderá con toda la información técnica y de precios.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900">
                      ¡Consulta recibida con éxito!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Muchas gracias, {formData.name}. Un asesor del equipo de Di Paolo se pondrá en contacto al teléfono {formData.phone} a la brevedad.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          developmentId: '',
                          contactChannel: 'whatsapp',
                          message: '',
                        });
                      }}
                      className="mt-4 text-xs font-bold text-emerald-700 underline cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ej: Martín Rodríguez"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                          Teléfono celular (con WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Ej: 11 5891 4930"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="tuemail@ejemplo.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                          Emprendimiento de Interés
                        </label>
                        <select
                          value={formData.developmentId}
                          onChange={(e) =>
                            setFormData({ ...formData, developmentId: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                        >
                          <option value="">Cualquier emprendimiento / Consulta general</option>
                          {ALL_DEVELOPMENTS.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name} ({d.location})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                          Canal de contacto preferido
                        </label>
                        <select
                          value={formData.contactChannel}
                          onChange={(e) =>
                            setFormData({ ...formData, contactChannel: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                        >
                          <option value="whatsapp">Mensaje por WhatsApp</option>
                          <option value="llamada">Llamada telefónica</option>
                          <option value="email">Correo electrónico</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                        Mensaje o Consulta Particular
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Contanos qué tipo de unidad buscás (ambientes), plazo de entrega preferido o cómo te gustaría financiarla..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:border-[#D81E27] focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl bg-[#D81E27] hover:bg-[#b8151d] text-white font-extrabold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Enviando consulta...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Consulta a Di Paolo</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PHYSICAL BRANCHES SECTION */}
        <section className="py-16 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-neutral-900 mb-2">
                Nuestras Sedes Físicas
              </h2>
              <p className="text-neutral-600 text-sm">
                Podés visitarnos personalmente para ver maquetas, planos y firmar tu boleto de reserva:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((off, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-neutral-100 text-neutral-800 mb-3">
                      {off.badge}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {off.title}
                    </h3>
                    <div className="flex items-start gap-2 text-xs text-neutral-600 mb-2">
                      <MapPin className="w-4 h-4 text-[#D81E27] shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-neutral-500 mb-4">
                      <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{off.hours}</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${off.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs font-bold text-[#D81E27] hover:underline pt-3 border-t border-neutral-100 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Llamar a esta sucursal</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer onOpenAppointment={() => {}} />
    </div>
  );
}
