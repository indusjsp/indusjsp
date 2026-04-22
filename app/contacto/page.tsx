import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Industria Metálica JSP | Solicitar cotización Bogotá",
  description:
    "Formulario de contacto para constructoras, ingenieros residentes y jefes de compras. Solicite cotización técnica para estructuras metálicas en Bogotá.",
};

export default function Contacto() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-zinc-950">Contacto técnico en Bogotá</h1>
        <p className="max-w-3xl text-base leading-8 text-zinc-700">
          Dirigido a constructoras, ingenieros residentes y jefes de compras que
          requieren cotización de estructuras metálicas con montaje, carpetas de
          soldadura certificada y control de cronogramas.
        </p>
      </section>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">Formulario de cotización</h2>
          <form
            action="mailto:gerencia@indusjsp.com?subject=Solicitud%20de%20cotización"
            method="get"
            encType="text/plain"
            className="mt-6 space-y-5"
          >
            <label className="block text-zinc-700">
              Nombre completo
              <input
                type="text"
                name="Nombre"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-900"
              />
            </label>
            <label className="block text-zinc-700">
              Empresa / Constructora
              <input
                type="text"
                name="Empresa"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-900"
              />
            </label>
            <label className="block text-zinc-700">
              Correo electrónico
              <input
                type="email"
                name="Email"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-900"
              />
            </label>
            <label className="block text-zinc-700">
              Teléfono / WhatsApp
              <input
                type="tel"
                name="Telefono"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-900"
              />
            </label>
            <label className="block text-zinc-700">
              Descripción del requerimiento
              <textarea
                name="Requerimiento"
                rows={5}
                required
                className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-900"
              />
            </label>
            <button
              type="submit"
              className="inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Solicitar cotización
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">Datos de contacto</h2>
          <div className="mt-6 space-y-4 text-zinc-700">
            <p>
              <strong>Empresa:</strong> Industria Metálica JSP S.A.S. (Bogotá)
            </p>
            <p>
              <strong>Dirección:</strong> Carrera 117 No. 76A-10, Bogotá
            </p>
            <p>
              <strong>Correo:</strong> gerencia@indusjsp.com
            </p>
            <p>
              <strong>Teléfono:</strong> +57 316 267 8028
            </p>
            <p>
              <strong>Especialidad:</strong> NSR-10, soldadura certificada y control
              de cronogramas en fabricación y montaje estructural.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
