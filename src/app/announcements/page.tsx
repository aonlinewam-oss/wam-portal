import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Announcements | WAM Institute",
  description: "Official academic and institute announcements from WAM Institute.",
};

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#e7f0e7]">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0b4935] px-5 py-12 text-white sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase text-[#a7d9a7]">Stay informed</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Announcements</h1>
          </div>
        </section>
        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <article className="max-w-4xl border-l-4 border-[#28724f] bg-white/70 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase text-[#28724f]">Academic calendar</p>
              <h2 className="mt-2 text-xl font-bold text-[#173d2e] sm:text-2xl">Registration will soon be open</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#45624f] sm:text-base">
                All new and returning students should log into their dashboard for course registration.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}