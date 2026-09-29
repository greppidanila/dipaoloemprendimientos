'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/5491158914930?text=Hola!%20Vengo%20desde%20la%20p%C3%A1gina%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20departamentos%20en%20pozo.';

  return (
    <aside aria-label="Contacto directo" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip message */}
      <div className="hidden sm:flex bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-neutral-100 text-xs font-semibold text-neutral-800 animate-pulse">
        ¿Consultas? ¡Chateá con nosotros!
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al +54 9 11 5891-4930"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
}
