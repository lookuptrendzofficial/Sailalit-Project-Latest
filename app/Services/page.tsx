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
        {/* ================= FALSE CEILING ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <div className="order-2 lg:order-1">

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      04. False Ceiling
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Premium False Ceiling Solutions
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Transform your interiors with beautifully designed false ceilings that
      enhance lighting, improve aesthetics and create a luxurious ambience.
      We specialize in Gypsum, PVC, Grid and Designer ceilings for homes,
      offices and commercial spaces.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Every ceiling is designed according to your interior theme, ensuring
      durability, elegant finishing and seamless integration with lighting,
      air-conditioning and décor elements.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ Gypsum Ceiling</p>
      <p>✔ PVC Ceiling</p>
      <p>✔ Cove Lighting</p>
      <p>✔ Designer Ceiling</p>
      <p>✔ Office Ceiling</p>
      <p>✔ Commercial Projects</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

  <img
    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.15-1.jpeg"
    alt="False Ceiling"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover order-1 lg:order-2"
  />

</div>

{/* ================= PAINTING & WALLPAPERS ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <img
    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg"
    alt="Painting & Wallpapers"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
  />

  <div>

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      05. Painting & Wallpapers
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Luxury Wall Finishes & Wallpapers
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Give your interiors a fresh identity with premium painting solutions,
      designer wallpapers and decorative wall finishes. Our experts create
      elegant interiors that perfectly match your lifestyle and décor.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      We work with premium paints, textured finishes and imported wallpapers
      to deliver long-lasting beauty and a sophisticated appearance for every
      room.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ Interior Painting</p>
      <p>✔ Exterior Painting</p>
      <p>✔ Imported Wallpapers</p>
      <p>✔ Texture Finishes</p>
      <p>✔ Decorative Walls</p>
      <p>✔ Premium Paints</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

</div>

{/* ================= RAILINGS & GLASS WORKS ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <div className="order-2 lg:order-1">

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      06. Railings & Glass Works
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Modern Railings & Toughened Glass Solutions
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Enhance safety and elegance with premium stainless steel railings,
      glass railings, partitions and customized toughened glass
      installations for residential and commercial spaces.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Our experienced professionals ensure precision installation using
      premium-quality materials that provide durability, strength and a
      contemporary architectural appearance.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ SS Railings</p>
      <p>✔ Glass Railings</p>
      <p>✔ Toughened Glass</p>
      <p>✔ Glass Partitions</p>
      <p>✔ Balcony Railings</p>
      <p>✔ Office Glass Works</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

  <img
    src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg"
    alt="Railings & Glass Works"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover order-1 lg:order-2"
  />

</div>
        {/* ================= CUPBOARDS ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <img
    src="YOUR_CUPBOARDS_IMAGE"
    alt="Cupboards"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
  />

  <div>

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      07. Cupboards
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Elegant Storage Solutions for Every Space
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      At Sai Lalit Interior & Exterior & Co., we understand that storage is
      just as important as style. Our custom-designed cupboards are crafted
      to maximize storage while enhancing the beauty of your home or office.
      From wardrobes and kitchen cupboards to office storage units and TV
      cabinets, every design is tailored to suit your space perfectly.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      We use premium plywood, laminates, acrylic finishes and branded
      hardware to ensure long-lasting durability, smooth functionality and
      elegant aesthetics that complement every interior.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ Bedroom Wardrobes</p>
      <p>✔ Kitchen Cupboards</p>
      <p>✔ Office Storage</p>
      <p>✔ TV Cabinets</p>
      <p>✔ Customized Designs</p>
      <p>✔ Premium Hardware</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

</div>

{/* ================= WPVC LOUVERS ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <div className="order-2 lg:order-1">

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      08. WPVC Louvers
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Stylish & Durable WPVC Louvers
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Our premium WPVC Louvers provide the perfect combination of modern
      aesthetics, privacy and ventilation. Designed using high-quality
      Wood-Plastic Composite materials, they are waterproof,
      termite-resistant and ideal for both residential and commercial
      interiors.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Whether used for feature walls, ceilings, partitions or decorative
      elements, our WPVC Louvers add elegance while requiring very little
      maintenance throughout their lifespan.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ Waterproof</p>
      <p>✔ Termite Resistant</p>
      <p>✔ Low Maintenance</p>
      <p>✔ Modern Designs</p>
      <p>✔ Decorative Panels</p>
      <p>✔ Premium Finish</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

  <img
    src="YOUR_WPVC_IMAGE"
    alt="WPVC Louvers"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover order-1 lg:order-2"
  />

</div>

{/* ================= PVC & ALUMINIUM ACCESSORIES ================= */}

<div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

  <img
    src="YOUR_ACCESSORIES_IMAGE"
    alt="PVC & Aluminium Accessories"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
  />

  <div>

    <p className="uppercase tracking-[5px] text-red-600 font-semibold">
      09. PVC & Aluminium Accessories
    </p>

    <h3 className="mt-4 text-4xl font-bold text-gray-900">
      Premium PVC & Aluminium Accessories
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Complete your interior and exterior projects with our premium range of
      PVC and aluminium accessories. We provide durable, stylish and
      high-quality products that improve both functionality and aesthetics
      for residential and commercial spaces.
    </p>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Every accessory is selected to meet the highest quality standards,
      offering corrosion resistance, durability and a clean modern finish.
      Our expert team ensures proper installation and seamless integration
      with your project.
    </p>

    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <p>✔ PVC Profiles</p>
      <p>✔ Aluminium Profiles</p>
      <p>✔ Decorative Accessories</p>
      <p>✔ Durable Materials</p>
      <p>✔ Modern Finishes</p>
      <p>✔ Professional Installation</p>
    </div>

    <a
      href="https://wa.me/918106406999"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Get Free Consultation
    </a>

  </div>

</div>
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
