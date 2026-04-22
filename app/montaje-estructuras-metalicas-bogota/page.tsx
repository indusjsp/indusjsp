import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Montaje estructuras metálicas Bogotá | Industria Metálica JSP",
  description:
    "Montaje de estructuras metálicas en Bogotá con control de cronograma, supervisión técnica y cumplimiento NSR-10.",
};

export default function MontajeEstructurasMetalicas() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-slate-950">
          Montaje de estructuras metálicas con control rigoroso de cronograma
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Realizamos montaje estructural en obra con supervisión técnica, replanteo
          de anclajes y verificación de geometría para proyectos industriales,
          comerciales, institucionales y de vivienda.
        </p>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Operaciones en obra</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Coordinación de logística, transporte y montaje según cronograma.</li>
            <li>Replanteo de ejes, niveles y cotas antes de anclaje.</li>
            <li>Montaje de vigas, columnas, cerchas y entramados metálicos.</li>
            <li>Verificación de placas de anclaje y conexiones atornilladas.
            </li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Aseguramiento técnico</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Control de calidad en juntas soldadas durante el montaje.</li>
            <li>Informes técnicos de avance para gerentes de obra y jefes de compras.</li>
            <li>Supervisión de cumplimiento NSR-10 en montaje y apoyos estructurales.</li>
            <li>Minimización de reprocesos mediante secuencia de levantamiento.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Referencias de aplicación</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-slate-950">Zona Franca Bogotá</p>
            <p className="mt-2 text-slate-700 leading-7">
              Montaje de plataformas y estructuras de acceso con entrega según cronograma de obra.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Proyecto Morph Bogotá y Medellín</p>
            <p className="mt-2 text-slate-700 leading-7">
              Ejecución de estructuras metálicas híbridas con verificación técnica en sitio.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/contacto"
          className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Solicitar cotización
        </Link>
      </div>
    </main>
  );
}
