'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug mb-5 uppercase">
              ¿Necesitás consultarnos algo en particular?
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              Si preferís hacerlo por mail, dejanos tus datos y te responderemos a la brevedad:
            </p>

            <div className="space-y-4 text-sm text-neutral-700">
              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                  Llamanos al celular:
                </span>
                <a
                  href="tel:+5491158914930"
                  className="font-bold text-neutral-900 hover:text-[#D81E27] transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D81E27]" />
                  (+54) 9 11 5891-4930
                </a>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                  Envianos tu consulta:
                </span>
                <a
                  href="mailto:emprendimientos@dipaolopropiedades.com.ar"
                  className="font-semibold text-neutral-800 hover:text-[#D81E27] transition-colors inline-flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-[#D81E27]" />
                  emprendimientos@dipaolopropiedades.com.ar
                </a>
              </div>

              <div>
                <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-0.5">
                  Ubicanos:
                </span>
                <p className="text-neutral-800 inline-flex items-center gap-2 font-medium">
                  <MapPin className="w-4 h-4 text-[#D81E27]" />
                  Av. Juan D. Perón 6100, San Martín, Buenos Aires
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-2">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-sm sm:text-base text-emerald-800 max-w-md mb-6">
                  Muchas gracias {formData.name}. Un asesor especializado de Di Paolo & Clamaco se pondrá en contacto con vos a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    ¿Cómo te llaman tus amigos? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-sm text-neutral-900 bg-white"
                  />
                </div>

                {/* Field 2: Phone */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    ¿Tu celular? *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-sm text-neutral-900 bg-white"
                  />
                </div>

                {/* Field 3: Email */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    ¿Cuál es el email que más revisás? *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-sm text-neutral-900 bg-white"
                  />
                </div>

                {/* Field 4: Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Contanos cuál emprendimiento te interesa o qué duda tenés.
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Esta casilla no tiene límite de caracteres. ¡Podés comentarnos todo lo que quieras!"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors text-sm text-neutral-900 bg-white placeholder:text-neutral-400"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#D81E27] hover:bg-[#b8151d] text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'ENVIANDO...' : 'ENVIAR'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
