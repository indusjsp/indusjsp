import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industria Metálica JSP S.A.S. | Estructuras metálicas en Bogotá",
  description:
    "Empresa de fabricación y montaje de estructuras metálicas en Bogotá con soldadura certificada y control de cronogramas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-100 text-slate-950">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
          <header className="bg-slate-950 text-white shadow-lg shadow-slate-950/10">
            <div className="mx-auto flex flex-wrap items-center justify-between px-6 py-5">
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-100">
                Industria Metálica JSP
              </div>
              <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
                <Link href="/estructuras-metalicas-pesadas-bogota" className="transition hover:text-white">
                  Estructuras
                </Link>
                <Link href="/carpinteria-metalica-bogota" className="transition hover:text-white">
                  Carpintería
                </Link>
                <Link href="/montaje-estructuras-metalicas-bogota" className="transition hover:text-white">
                  Montaje
                </Link>
                <Link href="/proyectos" className="transition hover:text-white">
                  Proyectos
                </Link>
                <Link
                  href="/contacto"
                  className="rounded-full border border-slate-700 bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-500"
                >
                  Contacto
                </Link>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto px-6 py-10 text-sm">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="font-semibold text-white">Industria Metálica JSP S.A.S.</p>
                  <p>Bogotá, Carrera 117 No. 76A-10</p>
                  <p>+57 316 267 8028</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Servicios</p>
                  <p>Diseño, fabricación y montaje de estructuras metálicas</p>
                  <p>Carpintería metálica</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Contacto</p>
                  <p>gerencia@indusjsp.com</p>
                  <p>Especializado en proyectos industriales, comerciales, institucionales y de vivienda</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
