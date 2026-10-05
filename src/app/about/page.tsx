import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About WAM Institute",
  description: "Learn about the West African Institute of Management and its online learning approach.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#e7f0e7]">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0b4935] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase text-[#a7d9a7]">About the institute</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Learning without borders</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-50 sm:text-lg">
              WAM brings higher education closer to learners through flexible online study and practical academic support.
            </p>
          </div>
        </section>
        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <h2 className="text-2xl font-bold text-[#073d2e] sm:text-3xl">West African Institute of Management</h2>
            <div className="space-y-5 text-base leading-relaxed text-[#244b38]">
              <p>
                The West African Institute of Management (WAM) is an online institute delivering industry-relevant higher education. Through accessible digital resources and structured academic support, students can pursue their studies from home and across the region.
              </p>
              <p>
                WAM prepares learners to contribute to business, technology, public service, and leadership across West Africa.
              </p>
              <h2 className="pt-3 text-xl font-bold text-[#073d2e]">Our approach</h2>
              <p>
                Flexible online learning is paired with faculty-led programmes and institutional support, helping learners connect academic knowledge to practical work.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}