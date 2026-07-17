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

        {/* Hero Slideshow */}

        <section className="relative h-[550px] overflow-hidden">

          <img
            src={gallery[current]}
            alt="Bedroom Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">

            <div className="max-w-4xl px-6 text-center text-white">

              <p className="uppercase tracking-[5px] text-blue-200 font-semibold">
                Our Projects
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold mt-5">
                Bedroom Interiors
              </h1>

              <p className="mt-8 text-lg lg:text-xl leading-8 text-blue-100">
                Discover luxurious bedroom interiors designed for comfort,
                elegance, and peaceful living.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold"
              >
                Get Free Consultation
              </Link>

            </div>

          </div>

        </section>

        {/* About */}

        <section className="py-20 bg-white">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
              About This Category
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Premium Bedroom Interiors
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Our bedroom interiors are thoughtfully designed to create
              relaxing, stylish, and functional spaces. From customized
              wardrobes to elegant wall finishes, every detail is crafted
              with care and precision.
            </p>

          </div>

        </section>

        {/* Gallery */}

        <section className="py-20 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">

              <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
                Project Gallery
              </p>

              <h2 className="text-4xl font-bold mt-3">
                Explore Our Bedroom Designs
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {gallery.map((image, index) => (

                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-lg bg-white"
                >
                  <img
                    src={image}
                    alt={`Bedroom ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-20 bg-gradient-to-r from-[#0A4F9E] to-[#1565C0] text-white">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold">
              Create Your Dream Bedroom
            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              Let Sai Lalit Interior & Exterior transform your bedroom into
              a beautiful, comfortable, and personalized space.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold"
            >
              Contact Us
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
