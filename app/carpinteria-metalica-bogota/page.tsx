import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carpintería metálica Bogotá | Industria Metálica JSP",
  description:
    "Carpintería metálica en Bogotá para obra industrial, comercial e institucional con soldadura certificada y control de tolerancias.",
};

export default function CarpinteriaMetalica() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-slate-950">
          Carpintería metálica técnica para proyectos en Bogotá
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Industria Metálica JSP S.A.S. ofrece carpintería metálica con inspección de soldadura,
          control de tolerancias y asistencia técnica para minimizar ajustes en obra.
        </p>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Alcance de servicio</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Fabricación de marcos, puertas, barandas y cerramientos con control técnico.</li>
            <li>Carpintería metálica para fachadas, paneles y elementos estructurales.</li>
            <li>Soldadura certificada y verificaciones con ensayos MT/UT.</li>
            <li>Acabados industriales adaptados a obra en Bogotá.</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Procesos y control</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-slate-700">
            <li>Revisión de detalles y validación de planos de carpintería metálica.</li>
            <li>Programación de corte, plegado y ensamblaje con tolerancias ajustadas.</li>
            <li>Control de calidad documental para evitar reprocesos en obra.</li>
            <li>Coordinación de entregas con el cronograma de montaje.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-[28px] border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Aplicaciones de proyecto</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-slate-950">Industrial y comercial</p>
            <p className="mt-2 text-slate-700 leading-7">
              Fachadas, celosías, barandas y puertas especiales en proyectos con requerimientos de montaje y seguridad.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-950">Institucional y vivienda</p>
            <p className="mt-2 text-slate-700 leading-7">
              Elementos metálicos para colegios, clínicas y conjuntos residenciales con control de acabados.
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
