import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact WAM Institute",
  description: "Contact the West African Institute of Management.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#e7f0e7]">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0b4935] px-5 py-12 text-white sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase text-[#a7d9a7]">We are here to help</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Contact WAM Institute</h1>
          </div>
        </section>
        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid max-w-4xl grid-cols-1 gap-8 border-t border-emerald-900/20 py-7 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-bold uppercase text-[#28724f]">Email</h2>
                <a href="mailto:aonlinewam@gmail.com" className="mt-2 inline-block break-all text-lg font-semibold text-[#073d2e] underline decoration-[#a7d9a7] underline-offset-4">
                  aonlinewam@gmail.com
                </a>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase text-[#28724f]">Location</h2>
                <p className="mt-2 text-lg font-semibold text-[#073d2e]">Nigeria, West Africa</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}