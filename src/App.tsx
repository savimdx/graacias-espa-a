/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, Mail, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-emerald-500 selection:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Soccer field decoration overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Clean soft radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl w-full bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/60 relative z-10 text-center space-y-8">
        
        {/* Header checkmark */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-20 w-20 bg-emerald-50 border border-emerald-200/80 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200/70 px-3.5 py-1 rounded-full">
            Acceso Desbloqueado
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            ¡Muchas Gracias por tu Compra!
          </h1>
        </div>

        {/* Gratitude & description text */}
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          <p>
            Tu pedido ha sido procesado con éxito y de forma 100% segura. ¡Queremos agradecerte sinceramente por tu confianza en nuestro trabajo!
          </p>
          <p className="text-slate-500 text-xs sm:text-sm">
            Hemos diseñado este contenido bajo los más altos estándares tácticos para impulsar tus entrenamientos de fútbol al nivel profesional. Has tomado la mejor decisión para la evolución y rendimiento de tus jugadores.
          </p>
          
          <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-2xl text-xs sm:text-sm text-amber-900 font-medium flex items-center justify-center gap-2.5 shadow-xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>¡Todas las sesiones y tus enlaces de acceso han sido enviados a tu correo electrónico!</span>
          </div>
        </div>

        {/* Support & details */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
            <span>PEDIDO : <strong className="text-slate-800">#FUT-77291B</strong></span>
            <span>ESTADO : <strong className="text-emerald-600 font-bold">APROBADO</strong></span>
            <span>SOPORTE : <strong className="text-slate-800 font-semibold">soporte@entrenamientosdefutbol.online</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}


