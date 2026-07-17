"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const gallery = [
  "YOUR_BEDROOM_IMAGE_1",
  "YOUR_BEDROOM_IMAGE_2",
  "YOUR_BEDROOM_IMAGE_3",
  "YOUR_BEDROOM_IMAGE_4",
  "YOUR_BEDROOM_IMAGE_5",
  "YOUR_BEDROOM_IMAGE_6",
  "YOUR_BEDROOM_IMAGE_7",
  "YOUR_BEDROOM_IMAGE_8",
  "YOUR_BEDROOM_IMAGE_9",
  "YOUR_BEDROOM_IMAGE_10",
  "YOUR_BEDROOM_IMAGE_11",
  "YOUR_BEDROOM_IMAGE_12",
  "YOUR_BEDROOM_IMAGE_13",
  "YOUR_BEDROOM_IMAGE_14",
  "YOUR_BEDROOM_IMAGE_15",
];

export default function BedroomsPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20">

        {/* ================= HERO ================= */}

        <section className="relative h-[600px] overflow-hidden">

          <img
            src={gallery[current]}
            alt="Bedroom Interior"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#021B3A]/90 via-[#0A4F9E]/65 to-black/60 flex items-center">

            <div className="max-w-7xl mx-auto px-6 text-white">

              <p className="uppercase tracking-[6px] text-blue-200 font-semibold">
                Our Projects
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold mt-6">
                Bedroom Interiors
              </h1>

              <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-9 text-blue-100">
                Elegant bedroom interiors crafted with premium materials,
                modern aesthetics and timeless comfort.
              </p>

              <Link
                href="/contact"
                className="inline-flex mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
              >
                Get Free Consultation
              </Link>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="bg-white py-10 shadow-md">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-[#faf8f5] rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
                <h2 className="text-5xl font-bold text-blue-700">
                  170+
                </h2>
                <p className="mt-3 text-gray-600">
                  Projects Completed
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
                <h2 className="text-5xl font-bold text-blue-700">
                  20+
                </h2>
                <p className="mt-3 text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
                <h2 className="text-5xl font-bold text-blue-700">
                  150+
                </h2>
                <p className="mt-3 text-gray-600">
                  Happy Clients
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-2xl p-8 text-center hover:shadow-xl transition duration-300">
                <h2 className="text-5xl font-bold text-blue-700">
                  100%
                </h2>
                <p className="mt-3 text-gray-600">
                  Quality Assurance
                </p>
              </div>

            </div>

          </div>

        </section>
