"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
const projects = [
  {
    title: "Modular Kitchens",
    link: "/projects/modular-kitchens",
    images: [
        "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.39.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.28.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.11.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.50.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.09.jpeg",
  },

  {
    title: "Living Rooms",
    link: "/projects/living-room",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.17.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.48.34.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.25-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.48.30.jpeg",
    ],
  },

  {
    title: "TV Units",
    link: "/projects/tv-units",
    images: [
        "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.25-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.12-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.59.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.56.jpeg",
],
      },

  {
    title: "Wardrobes",
    link: "/projects/wardrobes",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.12.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.05-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.02-1-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.19.jpeg",
],
      },

  {
    title: "False Ceiling",
    link: "/projects/false-ceilings",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
    ],
  },

  {
    title: "Pooja Mandir",
    link: "/projects/pooja-mandir",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.31-2-scaled.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-3.jpeg",
    ],
  },

  {
    title: "Hyderabad Projects",
    link: "/projects/hyderabad-projects",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.48.44-scaled.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.37.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
    ],
  },

  {
    title: "Elevations",
    link: "/projects/elevations",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.37.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20201213-WA0029.jpg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-3.jpeg",
    ],
  },

  {
    title: "3D Designs",
    link: "/projects/3d-designs",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Screenshot_2022_1001_091412.png",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
    ],
  },
    {
    title: "Wall Designs",
    link: "/projects/wall-designs",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-3.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.37.jpeg",
    ],
  },

  {
    title: "Vertical Gardens",
    link: "/projects/vertical-gardens",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-3.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
    ],
  },

  {
    title: "MSB Area",
    link: "/projects/msb-area",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20220131-WA0066.jpg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.04.50.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
    ],
  },

  {
    title: "UPVC Cupboards",
    link: "/projects/upvc-cupboards",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.25.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
    ],
  },

  {
    title: "Wash Basins",
    link: "/projects/wash-basins",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.04.54-1.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.04.50.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
    ],
  },

  {
    title: "Pfizer Vizag Projects",
    link: "/projects/pfizer-vizag-projects",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.04.50.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20220131-WA0066.jpg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-3.jpeg",
    ],
  },

  {
    title: "SPCL Site",
    link: "/projects/spcl-site",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-02.00.54.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-3.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
    ],
  },

  {
    title: "Rajasthan Site",
    link: "/projects/rajasthan-site",
    images: [
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-01.55.39-3.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-06-at-02.00.54.jpeg",
      "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20220131-WA0066.jpg",
    ],
  },
];


export default function ProjectsPage() {
  const [currentImages, setCurrentImages] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((value, index) => {
          const total = projects[index].images.length;
          return (value + 1) % total;
        })
      );
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}

      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">

        <img
          src="https://lookuptrendz.com/wp-content/uploads/2026/07/file_00000000523c72078cc3b58a91847ae3.png"
          alt="Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="text-center px-6">

            <p className="uppercase tracking-[6px] text-red-400 font-semibold">
              Our Portfolio
            </p>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
              Premium Interior
              <br />
              Project Gallery
            </h1>

            <p className="mt-8 text-lg text-gray-200 max-w-2xl mx-auto leading-8">
              Explore our completed residential and commercial
              interior projects crafted with precision,
              premium materials and modern design.
            </p>

            <a
              href="#gallery"
              className="inline-flex items-center mt-10 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition duration-300 shadow-xl hover:scale-105"
            >
              Explore Projects ↓
            </a>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section
        id="gallery"
        className="py-24 bg-gradient-to-b from-white to-red-50"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-red-600 font-semibold">
              Our Categories
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Explore Our Projects
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
              Choose any category below to explore its complete
              gallery with premium images.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (

  <Link
    key={index}
    href={project.link}
    className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
  >

    {/* Project Image */}

    <div className="relative h-[340px] overflow-hidden">
      <div className="relative w-full h-full">
  {project.images.map((image, imgIndex) => (
    <img
      key={imgIndex}
      src={image}
      alt={project.title}
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
        currentImages[index] === imgIndex
          ? "opacity-100 scale-110"
          : "opacity-0 scale-100"
      }`}
    />
  ))}

  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
    {project.images.map((_, dotIndex) => (
      <span
        key={dotIndex}
        className={`w-2 h-2 rounded-full ${
          currentImages[index] === dotIndex
            ? "bg-white"
            : "bg-white/40"
        }`}
      />
    ))}
  </div>
</div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

      {/* Floating Button */}

      <div className="absolute top-5 right-5">

        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-red-600 shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-300">

          →

        </div>

      </div>

      {/* Bottom Content */}

      <div className="absolute bottom-0 left-0 right-0 p-8">

        <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-semibold tracking-wider uppercase">

          Project

        </span>

        <h3 className="mt-5 text-3xl font-bold text-white">

          {project.title}

        </h3>

        <p className="mt-3 text-gray-200 leading-7 opacity-90">

          Click to explore the complete gallery with premium project photographs.

        </p>

        <div className="mt-6 flex items-center gap-3 text-white font-semibold group-hover:translate-x-2 transition duration-300">

          <span>View Gallery</span>

          <span className="text-2xl">→</span>

        </div>

      </div>

    </div>

  </Link>

))}
          </div>

        </div>

      </section>

      {/* ================= Statistics ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-red-50 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

              <h3 className="text-5xl font-bold text-red-600">
                150+
              </h3>

              <p className="mt-4 text-gray-700 font-medium">
                Projects Completed
              </p>

            </div>

            <div className="bg-red-50 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

              <h3 className="text-5xl font-bold text-red-600">
                100+
              </h3>

              <p className="mt-4 text-gray-700 font-medium">
                Happy Clients
              </p>

            </div>

            <div className="bg-red-50 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

              <h3 className="text-5xl font-bold text-red-600">
                20+
              </h3>

              <p className="mt-4 text-gray-700 font-medium">
                Expert Team
              </p>

            </div>

            <div className="bg-red-50 rounded-3xl p-10 text-center hover:shadow-xl transition duration-300">

              <h3 className="text-5xl font-bold text-red-600">
                100%
              </h3>

              <p className="mt-4 text-gray-700 font-medium">
                Quality Commitment
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Why Choose Us ================= */}

      <section className="py-24 bg-[#faf8f5]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-red-600 font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Built With Passion,
              <span className="text-red-600"> Designed For Life</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

              <h3 className="text-xl font-bold text-gray-900">
                Premium Materials
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                High-quality materials that ensure elegance,
                durability and long-lasting beauty.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

              <h3 className="text-xl font-bold text-gray-900">
                Creative Designs
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Modern concepts carefully designed to suit
                every lifestyle and space.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

              <h3 className="text-xl font-bold text-gray-900">
                Expert Execution
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Skilled professionals delivering precision,
                quality and timely completion.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition">

              <h3 className="text-xl font-bold text-gray-900">
                Customer Satisfaction
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Every project is completed with complete
                attention to detail and client satisfaction.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= Call To Action ================= */}

      <section className="py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-500 relative overflow-hidden">

        {/* Decorative Circles */}

        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-red-100 font-semibold">
            Let's Build Together
          </p>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready To Transform
            <br />
            Your Dream Space?
          </h2>

          <p className="mt-8 text-red-100 text-lg max-w-3xl mx-auto leading-8">
            Whether it's a modular kitchen, luxury interiors, office space
            or complete home transformation, our experts are ready to
            bring your vision to life.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">

            <Link
              href="/contact"
              className="bg-white text-red-600 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition duration-300"
            >
              Get Free Consultation
            </Link>

            <a
              href="tel:8106406999"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition duration-300"
            >
              📞 81064 06999
            </a>

          </div>

        </div>

      </section>
<Footer />
    </main>

  );
}
            
