"use client";

import Link from "next/link";
import Footer from "../../components/Footer";

const wardrobeImages = [
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.12.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.05-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.02-1-scaled.jpeg",
  "https://YOUR-WARDROBE-IMAGE-05.jpg",
  "https://YOUR-WARDROBE-IMAGE-06.jpg",
  "https://YOUR-WARDROBE-IMAGE-07.jpg",
  "https://YOUR-WARDROBE-IMAGE-08.jpg",
  "https://YOUR-WARDROBE-IMAGE-09.jpg",
  "https://YOUR-WARDROBE-IMAGE-10.jpg",
  "https://YOUR-WARDROBE-IMAGE-11.jpg",
  "https://YOUR-WARDROBE-IMAGE-12.jpg",
  "https://YOUR-WARDROBE-IMAGE-13.jpg",
  "https://YOUR-WARDROBE-IMAGE-14.jpg",
  "https://YOUR-WARDROBE-IMAGE-15.jpg",
];

export default function WardrobesPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}

      <section className="relative h-[85vh] overflow-hidden">

        <img
          src={wardrobeImages[0]}
          alt="Luxury Wardrobe"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[8px] text-red-400 font-semibold">
                Premium Collection
              </p>

              <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
                Luxury
                <br />
                Wardrobe Designs
              </h1>

              <p className="mt-8 text-lg text-gray-200 leading-8">
                Discover beautifully crafted wardrobes with premium
                finishes, intelligent storage solutions and elegant
                designs that perfectly complement your interiors.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#gallery"
                  className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition duration-300"
                >
                  Explore Gallery
                </a>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-red-600 transition duration-300"
                >
                  Free Consultation
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Luxury Auto Scrolling Gallery */}

      <section id="gallery" className="py-24 bg-[#faf8f5]">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[6px] text-red-600 font-semibold">
            Featured Wardrobes
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Luxury Wardrobe Showcase
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Explore a premium collection of modern wardrobes crafted
            for style, functionality and maximum storage.
          </p>

        </div>

        <div className="overflow-hidden">

          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...wardrobeImages, ...wardrobeImages].map((image, index) => (

  <div
    key={index}
    className="group relative flex-shrink-0 w-[360px] h-[260px] overflow-hidden rounded-3xl shadow-xl"
  >

    <img
      src={image}
      alt={`Wardrobe ${index + 1}`}
      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition duration-500">

      <p className="text-white text-lg font-semibold">
        Luxury Wardrobe Design
      </p>

      <p className="text-gray-200 text-sm mt-2">
        Premium Storage Collection
      </p>

    </div>

  </div>

))}

          </div>

        </div>

      </section>

      {/* Premium Gallery */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-red-600 font-semibold">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Explore Every Wardrobe Design
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
              Browse our premium wardrobe collection featuring elegant
              finishes, smart storage and modern craftsmanship.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wardrobeImages.map((image, index) => (

  <div
    key={index}
    className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
  >

    <div className="relative overflow-hidden">

      <img
        src={image}
        alt={`Wardrobe Design ${index + 1}`}
        className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Image Number */}

      <div className="absolute top-5 left-5">

        <span className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>

      {/* Hover Content */}

      <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-10 group-hover:translate-y-0 transition duration-500">

        <h3 className="text-2xl font-bold text-white">
          Luxury Wardrobe
        </h3>

        <p className="mt-2 text-gray-200">
          Elegant • Smart • Functional
        </p>

      </div>

    </div>

  </div>

))}

          </div>

        </div>

      </section>

      {/* Premium Quote */}

      <section className="py-24 bg-[#faf8f5]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-5xl text-red-600 mb-8">
            ❝
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
            Every wardrobe should blend elegance,
            functionality and intelligent storage
            into one timeless design.
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-10 rounded-full"></div>

        </div>

      </section>
            {/* Premium Call To Action */}

      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500 py-24">

        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-red-100 font-semibold">
            Let's Build Your Dream Space
          </p>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Upgrade
            <br />
            Your Wardrobe?
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-red-100 leading-8">
            From sliding wardrobes to walk-in closets and custom storage
            solutions, Sai Lalit creates elegant wardrobes that combine
            style, functionality and premium craftsmanship.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-white text-red-600 font-bold shadow-xl hover:scale-105 transition duration-300"
            >
              Book Free Consultation
            </Link>

            <a
              href="tel:8106406999"
              className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-red-600 transition duration-300"
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
