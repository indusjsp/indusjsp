import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estructuras metálicas pesadas Bogotá | Industria Metálica JSP",
  description:
    "Diseño, fabricación y montaje de estructuras metálicas pesadas en Bogotá con NSR-10 y soldadura certificada.",
};

export default function EstructurasMetalicasPesadas() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-slate-950">
          Diseño, fabricación y montaje de estructuras metálicas pesadas en Bogotá
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Industria Metálica JSP S.A.S. entrega estructuras metálicas para proyectos industriales,
          comerciales, institucionales y de vivienda. Aplicamos NSR-10 en el diseño, soldadura certificada
          en taller y control documental para reducir reprocesos en obra.
        </p>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Servicio integral</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Evaluación de cargas y selección de perfiles según NSR-10.</li>
            <li>Fabricación de marcos, columnas y vigas con soldadura certificada.</li>
            <li>Control de calidad dimensional y pruebas no destructivas MT/UT.</li>
            <li>Coordinación de entregas parciales según cronograma de obra.</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Tipos de proyectos</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Industrial: naves y plantas con estructura de acero para carga pesada.</li>
            <li>Comercial: edificios de oficinas, centros comerciales y cubiertas.
            </li>
            <li>Institucional: sedes educativas, clínicas y proyectos públicos.</li>
            <li>Vivienda: torres y conjuntos residenciales con sistemas metálicos ligeros.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Diferenciales técnicos</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-slate-950">Cumplimiento de cronogramas</p>
            <p className="mt-2 text-slate-700 leading-7">
              Gestión de tiempos desde taller hasta montaje para evitar demoras en obra y mantener avances estables.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Calidad en soldadura</p>
            <p className="mt-2 text-slate-700 leading-7">
              Soldadura certificada con inspecciones técnicas, trazabilidad de procesos y documentación para interventoría.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Optimización de costos</p>
            <p className="mt-2 text-slate-700 leading-7">
              Secuencias de fabricación y montaje optimizadas para reducir tiempo de obra y gastos de mano de obra.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Personal especializado</p>
            <p className="mt-2 text-slate-700 leading-7">
              Equipo técnico con experiencia en obras en Bogotá y conocimiento de los requisitos normativos.
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
