"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const gallery = [
  "YOUR_IMAGE_1",
  "YOUR_IMAGE_2",
  "YOUR_IMAGE_3",
  "YOUR_IMAGE_4",
  "YOUR_IMAGE_5",
  "YOUR_IMAGE_6",
];

export default function ModularKitchensPage() {

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

        {/* Hero Slideshow */}

        <section className="relative h-[550px] overflow-hidden">

          <img
            src={gallery[current]}
            alt="Modular Kitchen"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">

            <div className="max-w-4xl px-6 text-center text-white">

              <p className="uppercase tracking-[5px] text-blue-200 font-semibold">
                Our Projects
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold mt-5">
                Modular Kitchens
              </h1>

              <p className="mt-8 text-lg lg:text-xl leading-8 text-blue-100">
                Discover beautifully crafted modular kitchen designs that
                combine elegance, functionality, and modern aesthetics.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Get Free Consultation
              </Link>

            </div>

          </div>

        </section>

        {/* Category Description */}

        <section className="py-20 bg-white">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
              About This Category
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Premium Modular Kitchen Designs
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Our modular kitchens are designed to maximize space,
              functionality, and elegance. Every project is carefully
              customized to suit your lifestyle while maintaining a premium
              finish and long-lasting quality.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              From compact kitchens to luxurious open layouts, our team
              delivers modern solutions using high-quality materials,
              innovative storage systems, and exceptional craftsmanship.
            </p>

          </div>

        </section>

        {/* Gallery */}

        <section className="py-20 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
                Project Gallery
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                Explore Our Work
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                Browse some of our completed modular kitchen projects that
                reflect quality craftsmanship and timeless design.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {gallery.map((image, index) => (

                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg"
                >

                  <img
                    src={image}
                    alt={`Kitchen ${index + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

              ))}
                          </div>

          </div>

        </section>

        {/* Call To Action */}

        <section className="py-20 bg-gradient-to-r from-[#0A4F9E] to-[#1565C0] text-white">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-blue-200 font-semibold">
              Let's Create Something Beautiful
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Ready to Design Your Dream Kitchen?
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-3xl mx-auto">
              Whether you're building a new home or renovating your existing
              kitchen, our team is here to transform your ideas into elegant,
              functional spaces with premium craftsmanship.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-10 bg-white text-[#0A4F9E] font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition"
            >
              Get Free Consultation
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
