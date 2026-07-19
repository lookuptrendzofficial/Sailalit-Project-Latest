"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const heroImages = [
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.09.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.15-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20">

        {/* ================= HERO ================= */}

        <section className="relative min-h-screen overflow-hidden flex items-center">

          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`About Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>

          {/* Floating Blur Circles */}

          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl text-white">

              <p className="uppercase tracking-[8px] text-red-500 font-semibold">
                Since 2019
              </p>

              <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
                About
                <br />
                <span className="text-red-500">
                  Sai Lalit
                </span>
              </h1>

              <h2 className="mt-6 text-2xl lg:text-3xl font-semibold">
                Building Elegant Spaces with
                Innovation, Quality & Craftsmanship
              </h2>

              <p className="mt-8 text-lg text-gray-200 leading-8 max-w-2xl">
                Since 2019, Sai Lalit Interior, Exterior & Co. has been
                transforming residential and commercial spaces with
                premium interior and exterior solutions. Our commitment
                to quality, innovative designs and customer satisfaction
                has helped us deliver exceptional projects across
                Visakhapatnam, Vizianagaram and Hyderabad.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-semibold"
                >
                  Get Free Consultation
                </Link>

                <a
                  href="#story"
                  className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold"
                >
                  Our Journey
                </a>

              </div>

            </div>

          </div>

          {/* Floating Stats */}

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center text-white">
                <h3 className="text-4xl font-bold text-red-400">
                  20+
                </h3>
                <p className="mt-2 text-gray-200">
                  Years Experience
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center text-white">
                <h3 className="text-4xl font-bold text-red-400">
                  170+
                </h3>
                <p className="mt-2 text-gray-200">
                  Projects Completed
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center text-white">
                <h3 className="text-4xl font-bold text-red-400">
                  100%
                </h3>
                <p className="mt-2 text-gray-200">
                  Premium Quality
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 text-center text-white">
                <h3 className="text-4xl font-bold text-red-400">
                  100%
                </h3>
                <p className="mt-2 text-gray-200">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>

        </section>
                {/* ================= OUR STORY ================= */}

        <section
          id="story"
          className="relative py-28 bg-white overflow-hidden"
        >

          {/* Background Decorations */}

          <div className="absolute -left-32 top-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-60"></div>

          <div className="absolute -right-32 bottom-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Image */}

            <div className="relative group">

              <div className="overflow-hidden rounded-[35px] shadow-2xl">

                <img
                  src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_0000000091b881fa92e8fdd7aed18f94.jpg"
                  alt="Sai Lalit Interior"
                  className="w-full h-[650px] object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Floating Experience Card */}

              <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl p-8 border-l-8 border-red-600 animate-bounce">

                <h2 className="text-5xl font-bold text-red-600">
                  20+
                </h2>

                <p className="mt-2 font-semibold text-gray-800">
                  Years of
                  <br />
                  Excellence
                </p>

              </div>

            </div>

            {/* Right Content */}

            <div>

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Our Story
              </p>

              <h2 className="mt-5 text-5xl font-bold text-gray-900 leading-tight">
                Designing Spaces
                <br />
                That Inspire
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">

                Sai Lalit Interior, Exterior & Co. has been transforming
                homes, offices and commercial spaces with innovative
                designs, premium materials and exceptional workmanship.

                <br /><br />

                Our commitment is to create beautiful environments that
                perfectly balance aesthetics, comfort and functionality.
                Every project reflects our passion for quality and our
                dedication to exceeding client expectations.

              </p>

              {/* Premium Features */}

              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    Premium Interior Solutions
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    Imported Aluminium Systems
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    170+ Successful Projects
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    Residential & Commercial Experts
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    Premium Quality Materials
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-[#faf8f5] rounded-2xl p-5 hover:shadow-lg transition">
                  <span className="text-3xl">✔️</span>
                  <span className="font-semibold text-gray-800">
                    On-Time Project Delivery
                  </span>
                </div>

              </div>

              <Link
                href="/contact"
                className="inline-flex items-center mt-12 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transition duration-300"
              >
                Start Your Dream Project →
              </Link>

            </div>

          </div>

        </section>
        {/* ================= OUR JOURNEY ================= */}

<section className="relative py-28 bg-[#faf8f5] overflow-hidden">

  {/* Background Glow */}

  <div className="absolute -top-40 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-red-600 font-semibold">
        Our Journey
      </p>

      <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-gray-900">
        Milestones of Excellence
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
        Every milestone reflects our commitment to quality,
        innovation and customer satisfaction.
      </p>

    </div>

    <div className="relative">

      {/* Center Line */}

      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-600 -translate-x-1/2 rounded-full"></div>

      <div className="space-y-20">

        {/* 2019 */}

        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="lg:text-right">

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <span className="text-red-600 text-5xl font-bold">
                2019
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Company Founded
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Started with a vision of delivering premium interior
                and exterior solutions with exceptional craftsmanship.
              </p>

            </div>

          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-7 h-7 rounded-full bg-red-600 border-8 border-white shadow-xl"></div>
          </div>

        </div>

        {/* 2021 */}

        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="hidden lg:flex justify-center order-2 lg:order-1">
            <div className="w-7 h-7 rounded-full bg-red-600 border-8 border-white shadow-xl"></div>
          </div>

          <div className="order-1 lg:order-2">

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <span className="text-red-600 text-5xl font-bold">
                2021
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Business Expansion
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Expanded our services into modular interiors,
                aluminium systems and complete turnkey projects.
              </p>

            </div>

          </div>

        </div>

        {/* 2023 */}

        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="lg:text-right">

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-500">

              <span className="text-red-600 text-5xl font-bold">
                2023
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                100+ Projects
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Successfully completed over 100 residential and
                commercial projects with outstanding client satisfaction.
              </p>

            </div>

          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-7 h-7 rounded-full bg-red-600 border-8 border-white shadow-xl"></div>
          </div>

        </div>

        {/* Today */}

        <div className="grid lg:grid-cols-2 items-center gap-12">

          <div className="hidden lg:flex justify-center order-2 lg:order-1">
            <div className="w-7 h-7 rounded-full bg-red-600 border-8 border-white shadow-xl animate-pulse"></div>
          </div>

          <div className="order-1 lg:order-2">

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl p-8 text-white hover:scale-105 transition duration-500">

              <span className="text-5xl font-bold">
                Today
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Trusted by Hundreds of Clients
              </h3>

              <p className="mt-4 text-red-100 leading-8">
                Today, Sai Lalit Interior, Exterior & Co. proudly
                delivers premium interior and exterior solutions with
                170+ completed projects, trusted quality and
                innovative craftsmanship.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
        {/* ================= VISION & MISSION ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-red-600 font-semibold">
        Vision & Mission
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Building Better Spaces,
        Building Better Lives
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Vision */}

      <div className="group relative overflow-hidden rounded-[30px] bg-gradient-to-br from-red-600 to-red-700 p-10 text-white shadow-2xl hover:-translate-y-3 transition-all duration-500">

        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>

        <div className="text-6xl mb-8">👁️</div>

        <h3 className="text-3xl font-bold">
          Our Vision
        </h3>

        <p className="mt-6 leading-9 text-red-100 text-lg">
          To become one of India's most trusted interior and exterior
          solution providers by creating inspiring spaces with innovation,
          premium quality and exceptional craftsmanship.
        </p>

      </div>

      {/* Mission */}

      <div className="group relative overflow-hidden rounded-[30px] bg-gray-900 p-10 text-white shadow-2xl hover:-translate-y-3 transition-all duration-500">

        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-red-600/20"></div>

        <div className="text-6xl mb-8">🎯</div>

        <h3 className="text-3xl font-bold">
          Our Mission
        </h3>

        <p className="mt-6 leading-9 text-gray-300 text-lg">
          To deliver elegant residential and commercial spaces through
          innovative designs, premium materials and timely execution,
          while exceeding customer expectations in every project.
        </p>

      </div>

    </div>

  </div>

</section>



{/* ================= CORE VALUES ================= */}

<section className="py-24 bg-[#faf8f5]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-red-600 font-semibold">
        Core Values
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        The Values That Define Us
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        ["🏆","Quality Excellence"],
        ["💡","Innovation"],
        ["🤝","Integrity"],
        ["🎨","Creativity"],
        ["⭐","Customer First"],
        ["🛠️","Commitment"],
      ].map(([icon,title],index)=>(
        <div
          key={index}
          className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 text-center"
        >

          <div className="text-6xl mb-6 group-hover:scale-110 transition">
            {icon}
          </div>

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-5 text-gray-600 leading-8">
            Delivering excellence through every project with dedication,
            innovation and premium craftsmanship.
          </p>

        </div>
      ))}

    </div>

  </div>

</section>



{/* ================= PREMIUM CTA ================= */}

<section className="relative overflow-hidden py-24">

  <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700"></div>

  <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

    <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
      Let's Build Your
      Dream Space Together
    </h2>

    <p className="mt-8 text-xl text-red-100 max-w-3xl mx-auto leading-9">
      Whether you're planning a new home, office or commercial project,
      our team is ready to transform your vision into reality.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <Link
        href="/contact"
        className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
      >
        Get Free Consultation
      </Link>

      <a
        href="https://wa.me/918106406999"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition"
      >
        WhatsApp Now
      </a>

    </div>

  </div>

</section>

<Footer />

</main>

</>
);
}
