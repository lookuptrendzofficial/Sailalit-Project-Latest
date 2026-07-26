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

export default function ContactPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide((prev) => (prev + 1) % heroImages.length);

    }, 4000);

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
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />

          ))}

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>

          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">

            <div className="max-w-3xl text-white">

              <p className="uppercase tracking-[8px] text-red-500 font-semibold">

                Contact Sai Lalit

              </p>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

                Let's Build
                <br />

                <span className="text-red-500">

                  Your Dream Space

                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-gray-200">

                Planning a home, office or commercial project?

                Our experts are ready to help you with premium
                interior, exterior and turnkey solutions.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#contact-form"
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold shadow-xl transition"
                >

                  Get Free Quote

                </a>

                <a
                  href="tel:+918106406999"
                  className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition"
                >

                  Call Now

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= QUICK CONTACT ================= */}

        <section className="relative -mt-16 z-20 pb-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="bg-white rounded-[35px] shadow-2xl p-8">

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card */}

                <div className="group rounded-3xl bg-[#faf8f5] p-8 text-center hover:-translate-y-3 hover:shadow-xl transition duration-500">

                  <div className="text-5xl mb-5">
                    📞
                  </div>

                  <h3 className="text-2xl font-bold">

                    Call Us

                  </h3>

                  <p className="mt-4 text-gray-600">

                    +91 81064 06999

                  </p>

                </div>

                {/* Card */}

                <div className="group rounded-3xl bg-[#faf8f5] p-8 text-center hover:-translate-y-3 hover:shadow-xl transition duration-500">

                  <div className="text-5xl mb-5">
                    ✉️
                  </div>

                  <h3 className="text-2xl font-bold">

                    Email

                  </h3>

                  <p className="mt-4 text-gray-600 break-all">

                    info@sailalitinteriors.com

                  </p>

                </div>

                {/* Card */}

                <div className="group rounded-3xl bg-[#faf8f5] p-8 text-center hover:-translate-y-3 hover:shadow-xl transition duration-500">

                  <div className="text-5xl mb-5">
                    📍
                  </div>

                  <h3 className="text-2xl font-bold">

                    Head Office

                  </h3>

                  <p className="mt-4 text-gray-600">

                    Old Karasa,
                    Marripalem,
                    Visakhapatnam

                  </p>

                </div>

                {/* Card */}

                <div className="group rounded-3xl bg-[#faf8f5] p-8 text-center hover:-translate-y-3 hover:shadow-xl transition duration-500">

                  <div className="text-5xl mb-5">
                    🏢
                  </div>

                  <h3 className="text-2xl font-bold">

                    Branches

                  </h3>

                  <p className="mt-4 text-gray-600">

                    Vijayawada
                    <br />

                    Hyderabad

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= CONTACT SECTION ================= */}

        <section
          id="contact-form"
          className="py-24 bg-white overflow-hidden"
        >

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT SIDE */}

            <div>

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Get In Touch
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight">
                We'd Love To
                <br />
                Hear From You
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">

                Whether you're planning a dream home,
                office renovation or commercial project,
                our experienced team is ready to deliver
                premium interior and exterior solutions.

              </p>

              <div className="mt-12 space-y-8">

                {/* Address */}

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
                    📍
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Head Office
                    </h3>

                    <p className="mt-2 text-gray-600 leading-8">

                      P6RV+439,
                      Old Karasa,
                      Marripalem,
                      Visakhapatnam,
                      Andhra Pradesh - 530009

                    </p>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
                    📞
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Call Anytime
                    </h3>

                    <p className="mt-2 text-gray-600">
                      +91 81064 06999
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
                    ✉️
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Email
                    </h3>

                    <p className="mt-2 text-gray-600 break-all">
                      info@sailalitinteriors.com
                    </p>

                  </div>

                </div>

                {/* Branches */}

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
                    🏢
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Branches
                    </h3>

                    <p className="mt-2 text-gray-600 leading-8">

                      Vijayawada,
                      Andhra Pradesh

                      <br />

                      Hyderabad,
                      Telangana

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* CONTACT FORM */}

            <div className="relative">

              <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-red-100 blur-3xl opacity-60"></div>

              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

              <div className="relative bg-white rounded-[35px] shadow-2xl border border-gray-100 overflow-hidden">

                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">

                  <p className="uppercase tracking-[5px] text-red-200">
                    Free Consultation
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    Request Your Free Quote
                  </h2>

                  <p className="mt-4 text-red-100 leading-8">
                    Fill in your details and our team will get in touch shortly.
                  </p>

                </div>

                <form className="p-8 lg:p-10 space-y-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 transition"
                  />

                  <select
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  >

                    <option>Select Service</option>

                    <option>Modular Interiors</option>

                    <option>Imported Aluminium</option>

                    <option>False Ceiling</option>

                    <option>Painting & Wallpapers</option>

                    <option>Glass Works</option>

                    <option>UPVC Cupboards</option>

                    <option>3D Elevation</option>

                    <option>Vertical Garden</option>

                    <option>Turnkey Projects</option>

                  </select>

                  <select
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100"
                  >

                    <option>Select Budget</option>

                    <option>Below ₹5 Lakhs</option>

                    <option>₹5–10 Lakhs</option>

                    <option>₹10–25 Lakhs</option>

                    <option>Above ₹25 Lakhs</option>

                  </select>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 transition"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
                  >

                    Request Free Consultation →

                  </button>

                  <p className="text-center text-sm text-gray-500">

                    🔒 Your information is safe and will only be used to contact you regarding your enquiry.

                  </p>

                </form>

              </div>

            </div>

          </div>

        </section>
        {/* ================= GOOGLE MAP ================= */}

<section className="py-24 bg-[#faf8f5]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[6px] text-red-600 font-semibold">
        Visit Our Office
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        Let's Meet In Person
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
        Visit our office to discuss your dream interior or exterior project.
        Our team is ready to guide you with expert advice and customized solutions.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10 items-start">

      {/* Office Details */}

      <div className="bg-white rounded-[30px] shadow-xl p-8">

        <div className="space-y-8">

          <div>

            <div className="text-4xl mb-3">📍</div>

            <h3 className="text-2xl font-bold">
              Head Office
            </h3>

            <p className="mt-3 text-gray-600 leading-8">
              P6RV+439,<br />
              Old Karasa,<br />
              Marripalem,<br />
              Visakhapatnam,<br />
              Andhra Pradesh – 530009
            </p>

          </div>

          <hr />

          <div>

            <div className="text-4xl mb-3">🏢</div>

            <h3 className="text-2xl font-bold">
              Branches
            </h3>

            <p className="mt-3 text-gray-600 leading-8">
              Vijayawada, Andhra Pradesh
              <br /><br />
              Hyderabad, Telangana
            </p>

          </div>

          <a
            href="https://maps.google.com/?q=P6RV+439+Old+Karasa+Marripalem+Visakhapatnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Open in Google Maps
          </a>

        </div>

      </div>

      {/* Map */}

      <div className="lg:col-span-2">

        <div className="rounded-[30px] overflow-hidden shadow-2xl border-8 border-white">

          <iframe
            src="https://share.google/zlWH8tyWlHr7RydNd"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold leading-tight">
      Ready to Transform Your Space?
    </h2>

    <p className="mt-8 text-xl text-red-100 leading-9">
      From interiors to complete turnkey solutions, our team is ready to
      bring your vision to life with premium quality and expert craftsmanship.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <a
        href="tel:+918106406999"
        className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/918106406999"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition"
      >
        💬 WhatsApp Us
      </a>

    </div>

  </div>

</section>

      </main>

      <Footer />

    </>

  );

}
