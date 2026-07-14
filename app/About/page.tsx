
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-[#0A4F9E] text-white py-24">
          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-5xl font-bold">
              About Us
            </h1>

            <p className="mt-5 text-xl text-gray-200">
              Building Premium Interior & Exterior Spaces Since 2019
            </p>

          </div>
        </section>

        {/* Company */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-red-600 font-semibold uppercase">
                Our Company
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Sai Lalit Interior & Exterior
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Sai Lalit Interior & Exterior is one of the trusted names
                in premium interior and exterior solutions.
                We specialize in modular interiors, imported aluminium,
                ACP cladding, false ceilings, railings,
                glass works and customized residential &
                commercial projects.
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                With experienced professionals, premium materials,
                innovative ideas and quality workmanship,
                we deliver projects that exceed expectations.
              </p>

            </div>

            <div>
              <img
                src="YOUR_ABOUT_IMAGE"
                alt="About"
                className="rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
