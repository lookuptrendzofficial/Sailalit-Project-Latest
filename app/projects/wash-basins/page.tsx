"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const washBasinImages = [
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.04.54-1.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.36-scaled.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20211222-WA0025.jpg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.40.jpeg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG_20220329_203649-scaled.jpg",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Screenshot_2024_0914_210326.png",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Screenshot_2024_0914_210315.png",
  "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Screenshot_2024_0914_210301.png",
];

export default function WashBasinsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % washBasinImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white pt-20">

        {/* Hero Slideshow */}

        <section className="relative h-[90vh] overflow-hidden">

          {washBasinImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Wash Basin ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto px-6">

              <div className="max-w-3xl">

                <p className="uppercase tracking-[8px] text-red-400 font-semibold">
                  Premium Collection
                </p>

                <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Designer
                  <br />
                  Wash Basins
                </h1>

                <p className="mt-8 text-lg text-gray-200 leading-8">
                  Explore our premium collection of stylish wash basins
                  designed to enhance modern homes, luxury bathrooms and
                  commercial interiors with elegance and functionality.
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
              Featured Collection
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Wash Basin Showcase
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
              Discover elegant wash basin designs crafted to combine
              luxury, durability and modern aesthetics for every space.
            </p>

          </div>

          <div className="overflow-hidden">

            <div className="flex gap-8 animate-marquee whitespace-nowrap">
                            {[...washBasinImages, ...washBasinImages].map((image, index) => (

                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[380px] h-[270px] overflow-hidden rounded-3xl shadow-xl"
                >

                  <img
                    src={image}
                    alt={`Wash Basin ${index + 1}`}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition duration-500">

                    <p className="text-white text-xl font-semibold">
                      Designer Wash Basin
                    </p>

                    <p className="text-gray-200 text-sm mt-2">
                      Elegant • Premium • Modern
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
                Explore Wash Basin Collection
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
                Browse our premium wash basin collection featuring
                contemporary designs, elegant finishes and exceptional
                craftsmanship for luxury interiors.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {washBasinImages.map((image, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >

                  <div className="relative overflow-hidden">

                    <img
                      src={image}
                      alt={`Wash Basin ${index + 1}`}
                      className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="absolute top-5 left-5">

                      <span className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-10 group-hover:translate-y-0 transition duration-500">

                      <h3 className="text-2xl font-bold text-white">
                        Wash Basin
                      </h3>

                      <p className="mt-2 text-gray-200">
                        Luxury • Elegant • Timeless
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
              Beautiful spaces begin with thoughtful details.
              Our premium wash basin collection blends elegant
              design, superior quality and lasting durability
              for every modern interior.
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
              Upgrade Your Space
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Looking for
              <br />
              Premium Wash Basins?
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-red-100 leading-8">
              Discover stylish designer wash basins that combine
              luxury, functionality and exceptional craftsmanship.
              Let Sai Lalit Interior, Exterior & Co. help you create
              elegant bathroom and interior spaces.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-white text-red-600 font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                Book Free Consultation
              </a>

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

    </>
  );
}
