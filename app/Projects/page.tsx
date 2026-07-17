"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const categories = [
  {
    title: "Modular Kitchens",
    image: "https://lookuptrendz.com/wp-content/uploads/2026/07/file_00000000523c72078cc3b58a91847ae3.png",
    link: "/projects/modular-kitchens",
    description: "Elegant modular kitchen designs with premium finishes."
  },
  {
    title: "Living Rooms",
    image: "YOUR_LIVING_ROOM_IMAGE",
    link: "/projects/living-room",
    description: "Modern living room interiors crafted for comfort."
  },
  {
    title: "Bedrooms",
    image: "YOUR_BEDROOM_IMAGE",
    link: "/projects/bedrooms",
    description: "Luxury bedroom interiors with customized wardrobes."
  },
  {
    title: "TV Units",
    image: "YOUR_TV_UNIT_IMAGE",
    link: "/projects/tv-units",
    description: "Designer TV units with elegant storage solutions."
  },
  {
    title: "Wardrobes",
    image: "YOUR_WARDROBE_IMAGE",
    link: "/projects/wardrobes",
    description: "Premium sliding and hinged wardrobe designs."
  },
  {
    title: "False Ceilings",
    image: "YOUR_FALSE_CEILING_IMAGE",
    link: "/projects/false-ceilings",
    description: "Gypsum and PVC ceiling designs with lighting."
  },
  {
    title: "Pooja Mandir",
    image: "YOUR_POOJA_IMAGE",
    link: "/projects/pooja-mandir",
    description: "Beautiful handcrafted pooja mandir designs."
  },
  {
    title: "Office Interiors",
    image: "YOUR_OFFICE_IMAGE",
    link: "/projects/office-interiors",
    description: "Professional office interiors for productive spaces."
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-gradient-to-r from-[#0A4F9E] to-[#1565C0] text-white py-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[5px] text-blue-200 font-semibold">
              Explore Our Projects
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-5">
              Every Space Reflects
              <span className="text-blue-200"> Our Craftsmanship</span>
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
              Discover our diverse portfolio of residential and commercial
              interior & exterior projects. Each category showcases our
              commitment to quality, innovation, and timeless design.
            </p>

          </div>

        </section>

        {/* Categories */}

        <section className="py-20 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
                Our Portfolio
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                Explore Our Project Categories
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
                Browse our completed works across various categories and
                discover inspiring designs tailored for every space.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {categories.map((item, index) => (

                <Link
                  key={index}
                  href={item.link}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >

                  <div className="overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7">
                      {item.description}
                    </p>

                    <div className="mt-6 text-blue-600 font-semibold">
                      Explore Gallery →
                    </div>

                  </div>

                </Link>

              ))}
                          </div>
          </div>
        </section>

        {/* Call To Action */}

        <section className="py-20 bg-gradient-to-r from-[#0A4F9E] to-[#1565C0] text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl lg:text-5xl font-bold">
              Let's Build Your Dream Space
            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              From elegant home interiors to premium commercial spaces,
              Sai Lalit Interior & Exterior delivers quality craftsmanship,
              innovative designs, and timely execution.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-10 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition"
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
              
