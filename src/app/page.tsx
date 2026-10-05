import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e7f0e7]">
      <Navbar />

      <main className="flex-grow">
        <section className="relative overflow-hidden bg-[#062f24] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/wam-home-learning-sketch.svg')" }}
          />
          <div className="absolute inset-0 bg-[#062f24]/70" />

          <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:min-h-[620px] md:py-16">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block border border-emerald-200/50 bg-[#0d684b]/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-50">
                Learn from anywhere
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
                WAM Institute
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-emerald-50 md:text-xl">
                West African Institute of Management, an online institute for accessible, industry-relevant learning.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="bg-[#a7d9a7] px-8 py-3 text-center font-bold text-[#062f24] transition-colors hover:bg-white"
                >
                  Access Institute Portal
                </Link>
                <Link
                  href="/programmes"
                  className="border border-emerald-100 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-white hover:text-[#064e3b]"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#d4e5d5] px-6 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-emerald-900/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {[
              { title: "About WAM", href: "/about", detail: "Our institute and approach" },
              { title: "Programs", href: "/programmes", detail: "Explore undergraduate study" },
              { title: "Announcements", href: "/announcements", detail: "Institute updates" },
              { title: "Contact", href: "/contact", detail: "Get in touch with WAM" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group px-5 py-5 transition-colors hover:bg-white/40 sm:py-3">
                <span className="block text-lg font-bold text-[#073d2e] group-hover:text-[#28724f]">{item.title}</span>
                <span className="mt-1 block text-sm text-[#45624f]">{item.detail}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}