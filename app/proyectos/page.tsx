import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos reales | Industria Metálica JSP",
  description:
    "Proyectos reales de Industria Metálica JSP en Bogotá con estructuras metálicas, carpintería y montaje bajo NSR-10.",
};

export default function Proyectos() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-slate-950">Proyectos reales y referencias técnicas</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Referencias en obra con cumplimiento de cronograma, control de calidad en soldadura y normativa NSR-10. Proyectos industriales,
          comerciales, institucionales y de vivienda en Colombia.
        </p>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Clínica Belmonte Pereira</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Estructura metálica para ampliación de servicios médicos con soldadura certificada,
            control de cronograma y entrega de prefabricados en 6 semanas.
          </p>
        </article>

        <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">SENA Tulúa</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Carpintería metálica y estructura de cubierta para aulas técnicas con inspección MT/UT y documentación de soldadura.
          </p>
        </article>

        <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Zona Franca Bogotá</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Montaje de estructuras y plataformas con coordinación logística y control de cronograma para minimizar interferencias en obra.
          </p>
        </article>

        <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Colegio ERU Bogotá</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Estructura metálica institucional con enfoque en trazabilidad de soldadura y reducción de reprocesos en obra.
          </p>
        </article>

        <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Proyecto Morph Bogotá y Medellín</h2>
          <p className="mt-4 text-slate-700 leading-7">
            Suministro y montaje de estructuras metálicas híbridas para proyectos residenciales con supervisión técnica integral.
          </p>
        </article>
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
