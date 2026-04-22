import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industria Metálica JSP | Estructuras metálicas Bogotá",
  description:
    "Diseño, fabricación y montaje de estructuras metálicas en Bogotá con NSR-10, soldadura certificada y control de cronograma.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.9),_transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.32em] text-sky-300">
                Industria Metálica JSP S.A.S. · Bogotá
              </p>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
                Diseño, fabricación y montaje de estructuras metálicas en Bogotá
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Servicios técnicos para proyectos industriales, comerciales, institucionales y de vivienda.
                Soldadura certificada, cumplimiento de cronograma, optimización de costos y personal especializado.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Solicitar cotización
                </Link>
                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center rounded-full border border-slate-400 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-200 hover:bg-white/10"
                >
                  Proyectos reales
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    Diferenciales técnicos
                  </p>
                  <p className="mt-4 text-3xl font-semibold">Soluciones estructurales integrales</p>
                  <p className="mt-2 text-slate-400">
                    Desde diseño hasta montaje con soporte técnico para minimizar reprocesos en obra.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Cronograma</p>
                    <p className="mt-3 text-lg font-semibold">Cumplimiento de tiempos</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Soldadura</p>
                    <p className="mt-3 text-lg font-semibold">Inspecciones y ensayos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Servicios</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Diseño, fabricación y montaje de estructuras metálicas y carpintería metálica
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-sky-700">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold text-slate-950">Estructuras metálicas</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Diseño, fabricación y montaje de estructuras metálicas para plantas industriales,
              edificios comerciales, sedes institucionales y proyectos de vivienda.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Validación de planos y cálculo de cargas según NSR-10.</li>
              <li>Soldadura certificada y control documental en cada junta.</li>
              <li>Optimización de costos con secuencias de montaje planificadas.</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-sky-700">
              🛠️
            </div>
            <h3 className="text-xl font-semibold text-slate-950">Carpintería metálica</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Elementos metálicos de carpintería para fachadas, puertas, barandas y cerramientos
              bajo especificaciones técnicas y control de tolerancias.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Revisión de detalles constructivos y planos de montaje.</li>
              <li>Soldadura y ensamblaje con inspección MT/UT.</li>
              <li>Personal especializado en acabados industriales en Bogotá.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <article className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Proyectos</p>
              <h2 className="mt-4 text-2xl font-semibold">Tipos de proyectos</h2>
              <p className="mt-4 text-slate-300 leading-7">
                Industrial, comercial, institucional y vivienda con control de cronograma y procesos.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-8">
              <h3 className="text-xl font-semibold">Industrial</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Aplicaciones de estructura pesada, plataformas y andenes logísticos.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-8">
              <h3 className="text-xl font-semibold">Comercial</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Cubiertas, fachadas metálicas y sistemas de carpintería en edificios de uso público.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-8">
              <h3 className="text-xl font-semibold">Institucional y vivienda</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Proyectos con cumplimiento de normativa, acabados técnicos y entregas según cronograma.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-800 bg-slate-900/95 p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Proyecto real</p>
            <h2 className="mt-4 text-3xl font-semibold">Referencias en obra en Bogotá y región</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-6">
                <p className="font-semibold text-white">Clínica Belmonte Pereira</p>
                <p className="mt-2 text-slate-400 leading-7">
                  Ampliación estructural con soldadura certificada y control de cronograma.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6">
                <p className="font-semibold text-white">SENA Tulúa</p>
                <p className="mt-2 text-slate-400 leading-7">
                  Carpintería metálica para aulas técnicas con inspección MT/UT.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6">
                <p className="font-semibold text-white">Zona Franca Bogotá</p>
                <p className="mt-2 text-slate-400 leading-7">
                  Montaje estructural con coordinación logística para minimizar retrasos.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6">
                <p className="font-semibold text-white">Colegio ERU Bogotá</p>
                <p className="mt-2 text-slate-400 leading-7">
                  Proyecto institucional con enfoque en trazabilidad de soldadura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <article className="rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white shadow-lg lg:col-span-2">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Diferenciales</p>
              <h2 className="mt-4 text-3xl font-semibold">Ventajas operativas para obra</h2>
              <p className="mt-4 text-slate-300 leading-7">
                Personal especializado, procesos documentados y enfoque técnico que reduce reprocesos y optimiza costos en obra.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-slate-100 p-8">
              <h3 className="text-xl font-semibold text-slate-950">Cumplimiento de cronogramas</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Se gestionan entregas según las fases de obra y se monitorea el avance semanalmente.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-slate-100 p-8">
              <h3 className="text-xl font-semibold text-slate-950">Optimización de costos</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Secuencias de trabajo eficientes y control de materiales para mantener el presupuesto previsto.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-slate-100 p-8">
              <h3 className="text-xl font-semibold text-slate-950">Calidad en soldadura</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Inspecciones técnicas y registros de soldadura certificados para su revisión por interventoría.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
