"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      icon: "/icons/modular.png",
      title: "Modular Interiors",
      desc: "Premium modular kitchens, wardrobes, TV units, bedroom furniture and customized storage solutions."
    },
    {
      icon: "/icons/aluminium.png",
      title: "Imported Aluminium",
      desc: "High-quality sliding windows, folding doors, slim profiles and premium imported aluminium systems."
    },
    {
      icon: "/icons/exterior.png",
      title: "Exterior Solutions",
      desc: "ACP Cladding, Elevations, Facade Works and modern architectural exterior finishes."
    },
    {
      icon: "/icons/ceiling.png",
      title: "False Ceiling",
      desc: "PVC, Gypsum False Ceiling, designer ceiling concepts and modern lighting integration."
    },
    {
      icon: "/icons/painting.png",
      title: "Painting & Wallpapers",
      desc: "Luxury interior painting, designer wallpapers and decorative wall finishes."
    },
    {
      icon: "/icons/railings.png",
      title: "Railings & Glass Works",
      desc: "SS Railings, Glass Railings, Toughened Glass Partitions and customized installations."
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-[#0A4F9E] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">
              Our Services
            </h1>

            <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto">
              Complete Interior & Exterior Solutions for Residential,
              Commercial and Corporate Spaces.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 p-8 text-center"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {service.desc}
                  </p>

                  <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Get Quote
                  </button>

                </div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
