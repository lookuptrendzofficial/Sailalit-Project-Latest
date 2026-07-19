"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const heroImages = [
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.09.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.15-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
];

const services = [
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000009fe072088dd3f6700a00e3de.png",
    title: "Modular Interiors",
    desc: "Premium modular kitchens, wardrobes, TV units, pooja units and customized furniture crafted for modern living.",
    link: "/projects/modular-interiors",
  },
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.09.jpeg",
    title: "Imported Aluminium",
    desc: "Luxury sliding windows, folding doors, slim profiles and premium imported aluminium systems.",
    link: "/projects/imported-aluminium",
  },
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
    title: "Exterior Solutions",
    desc: "ACP Cladding, elevations, facade works and premium architectural exterior finishes.",
    link: "/projects/elevations",
  },
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.15-1.jpeg",
    title: "False Ceiling",
    desc: "PVC & gypsum false ceilings with designer lighting concepts and premium finishing.",
    link: "/projects/false-ceiling",
  },
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
    title: "Painting & Wallpapers",
    desc: "Luxury wall finishes, premium wallpapers, designer textures and decorative painting solutions.",
    link: "/projects/painting-wallpapers",
  },
  {
    image:
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
    title: "Railings & Glass Works",
    desc: "SS railings, glass railings, partitions and customized toughened glass solutions.",
    link: "/projects/railings-glass",
  },
];

export default function Services() {
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

        {/* Hero */}

        <section className="relative h-[90vh] overflow-hidden">

          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto px-6">

              <div className="max-w-3xl">

                <p className="uppercase tracking-[8px] text-red-500 font-semibold">
                  Premium Interior & Exterior Solutions
                </p>

                <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Our
                  <br />
                  Services
                </h1>

                <p className="mt-8 text-lg text-gray-200 leading-8">
                  From luxury modular interiors and imported aluminium
                  systems to false ceilings, exterior elevations, ACP
                  cladding, glass works and customized architectural
                  solutions, we create premium spaces that combine
                  elegance, durability and functionality.
                </p>

                <div className="mt-12 flex flex-wrap gap-5">

                  <a
                    href="#services"
                    className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-semibold"
                  >
                    Explore Services
                  </a>

                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-red-600 transition"
                  >
                    Free Consultation
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= SERVICES ================= */}

        <section id="services" className="py-24 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                What We Offer
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                Complete Interior & Exterior Solutions
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                Every project is carefully designed with premium materials,
                innovative concepts and expert craftsmanship to deliver
                beautiful, functional and long-lasting spaces.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >

                  <div className="relative overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="absolute top-5 left-5">

                      <span className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7">
                      {service.desc}
                    </p>

                    <Link
                      href={service.link}
                      className="inline-flex items-center mt-8 text-red-600 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Explore Service →
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
                {/* ================= WHY CHOOSE US ================= */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                The Sai Lalit Advantage
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                We believe every project deserves attention to detail,
                premium quality materials and flawless execution. Our
                experienced team transforms ideas into elegant and
                functional spaces that stand the test of time.
              </p>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

              <div className="bg-red-600 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">20+</h3>
                <p className="mt-3 text-red-100">Years Experience</p>
              </div>

              <div className="bg-[#0A4F9E] rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">170+</h3>
                <p className="mt-3 text-blue-100">Projects Completed</p>
              </div>

              <div className="bg-gray-900 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">100%</h3>
                <p className="mt-3 text-gray-300">Premium Quality</p>
              </div>

              <div className="bg-green-600 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">100%</h3>
                <p className="mt-3 text-green-100">Customer Satisfaction</p>
              </div>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🏆</div>
                <h3 className="mt-6 text-2xl font-bold">Expert Team</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Highly skilled professionals with years of industry experience.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">✨</div>
                <h3 className="mt-6 text-2xl font-bold">Premium Materials</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  We use trusted brands and high-quality materials for every project.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">📐</div>
                <h3 className="mt-6 text-2xl font-bold">Customized Designs</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Every design is tailored to match your lifestyle and space.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">⏰</div>
                <h3 className="mt-6 text-2xl font-bold">On-Time Delivery</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Timely project completion with uncompromised quality.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">💰</div>
                <h3 className="mt-6 text-2xl font-bold">Transparent Pricing</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Honest quotations with no hidden charges or surprises.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🛡️</div>
                <h3 className="mt-6 text-2xl font-bold">Quality Workmanship</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Precision craftsmanship ensuring durability and perfection.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🤝</div>
                <h3 className="mt-6 text-2xl font-bold">Dedicated Support</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Friendly guidance and assistance from consultation to completion.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🏡</div>
                <h3 className="mt-6 text-2xl font-bold">Complete Solutions</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  End-to-end interior and exterior solutions under one roof.
                </p>
              </div>

            </div>

          </div>

        </section>
                {/* ================= OUR PROCESS ================= */}

        <section className="py-24 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Our Process
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                From Concept to Completion
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                We follow a structured approach to ensure every project is
                delivered with premium quality, precision and complete
                customer satisfaction.
              </p>

            </div>

            <div className="grid md:grid-cols-5 gap-8">

              {[
                {
                  no: "01",
                  title: "Consultation",
                  desc: "Understanding your requirements and project goals."
                },
                {
                  no: "02",
                  title: "Design",
                  desc: "Creating innovative layouts and premium concepts."
                },
                {
                  no: "03",
                  title: "Material Selection",
                  desc: "Choosing the best materials and finishes."
                },
                {
                  no: "04",
                  title: "Execution",
                  desc: "Professional installation with quality workmanship."
                },
                {
                  no: "05",
                  title: "Handover",
                  desc: "Final inspection and successful project delivery."
                }
              ].map((step) => (

                <div
                  key={step.no}
                  className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300"
                >

                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold">
                    {step.no}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {step.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-500">

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[6px] text-red-100 font-semibold">
              Let's Build Something Amazing
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              Your Dream Space?
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-red-100 leading-8">
              Whether it's a home, office or commercial project,
              Sai Lalit Interior & Exterior delivers elegant,
              durable and customized solutions tailored to your needs.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-white text-red-600 font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:8106406999"
                className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-red-600 transition duration-300"
              >
                📞 Call Now
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
