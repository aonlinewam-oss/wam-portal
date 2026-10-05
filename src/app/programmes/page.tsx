import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faculties } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Undergraduate Programs | WAM Institute",
  description: "Browse undergraduate programs offered by WAM Institute faculties.",
};

export default function ProgrammesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#e7f0e7]">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0b4935] px-5 py-12 text-white sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase text-[#a7d9a7]">Undergraduate</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Programs offered</h1>
            <p className="mt-4 text-emerald-50">Four faculties · 27 programs</p>
          </div>
        </section>
        <section className="px-5 py-8 sm:px-8 sm:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
            {faculties.map((faculty) => (
              <section key={faculty.name} className="border-l-4 border-[#28724f] bg-white/70 p-5 sm:p-7">
                <h2 className="mb-5 text-xl font-bold text-[#073d2e] sm:text-2xl">{faculty.name}</h2>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {faculty.programmes.map((programme) => (
                    <li key={programme} className="flex gap-3 text-sm leading-relaxed text-[#244b38]">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#28724f]" />
                      {programme}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}