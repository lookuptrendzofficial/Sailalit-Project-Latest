"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const gallery = [
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-2.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-3.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-5.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-11.jpeg",
];

export default function RajasthanSitePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      {/* Hero */}

      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

        <img
          src={gallery[current]}
          alt="Rajasthan Site"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <p className="uppercase tracking-[0.4em] text-red-500 font-semibold">
            Premium Projects
          </p>

          <h1 className="mt-4 text-5xl lg:text-7xl font-extrabold text-white">
            Rajasthan Site
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-8">
            Discover our premium Rajasthan project showcasing elegant
            craftsmanship, modern aesthetics, and exceptional execution.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-white font-semibold transition"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Back to Projects
            </Link>

          </div>

        </div>

      </section>
            {/* CTA */}

      <section className="py-24 bg-red-600 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[0.35em] text-red-200 font-semibold">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold">
            Planning Your Dream Interior or Exterior Project?
          </h2>

          <p className="mt-6 text-lg text-red-100 leading-8">
            From premium residential interiors to commercial spaces,
            Sai Lalit Interior, Exterior & Co. delivers quality,
            innovation, and elegant craftsmanship in every project.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="https://wa.me/918106406999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition"
            >
              Free Consultation
            </a>

            <Link
              href="/projects"
              className="border border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-bold transition"
            >
              Explore More Projects
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
