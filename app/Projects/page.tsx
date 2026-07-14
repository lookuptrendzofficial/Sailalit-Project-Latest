"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Interior",
    location: "Visakhapatnam",
    description:
      "Complete interior execution including modular kitchen, wardrobes, TV unit, false ceiling and premium lighting.",
    image: "YOUR_PROJECT_IMAGE_1",
    slug: "luxury-villa-interior",
  },
  {
    id: 2,
    title: "Premium Office Interior",
    location: "Hyderabad",
    description:
      "Modern office interiors with imported aluminium partitions, glass works and designer workstations.",
    image: "YOUR_PROJECT_IMAGE_2",
    slug: "premium-office-interior",
  },
  {
    id: 3,
    title: "Modern Duplex House",
    location: "Vizianagaram",
    description:
      "Luxury residential project with customized interiors and premium finishing.",
    image: "YOUR_PROJECT_IMAGE_3",
    slug: "modern-duplex-house",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-[#0A4F9E] text-white py-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-red-300 font-semibold">
              Our Portfolio
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Completed Projects
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
              Explore some of our completed interior and exterior projects
              delivered with premium quality, innovative design and expert craftsmanship.
            </p>

          </div>

        </section>

        {/* Projects */}

        <section className="py-20 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-10">

              {projects.map((project) => (

                <div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[340px] object-cover"
                  />

                  <div className="p-8">

                    <p className="text-red-600 font-semibold">
                      📍 {project.location}
                    </p>

                    <h2 className="text-3xl font-bold mt-3">
                      {project.title}
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">
                      {project.description}
                    </p>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                      View Project
                    </Link>

                  </div>

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
