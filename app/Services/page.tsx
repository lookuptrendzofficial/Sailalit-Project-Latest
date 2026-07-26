"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const heroImages = [
  "YOUR_HERO_IMAGE_1",
  "YOUR_HERO_IMAGE_2",
  "YOUR_HERO_IMAGE_3",
  "YOUR_HERO_IMAGE_4",
  "YOUR_HERO_IMAGE_5",
  "YOUR_HERO_IMAGE_6",
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20">

        {/* ================= HERO SECTION ================= */}

        <section className="relative h-[70vh] overflow-hidden">

          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

            <p className="uppercase tracking-[8px] text-red-500 font-semibold">
              Our Services
            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-bold text-white">
              Complete Interior &
              <br />
              Exterior Solutions
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
              Explore our wide range of professional interior and exterior
              services designed for homes, apartments, villas, offices,
              commercial spaces and industrial projects with premium quality,
              modern designs and expert workmanship.
            </p>

            <Link
              href="/contact"
              className="mt-10 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Get Free Consultation
            </Link>

          </div>

        </section>

        <div className="mx-auto max-w-7xl px-6">

          {/* ================= 01. MODULAR INTERIORS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_MODULAR_INTERIORS_IMAGE"
              alt="Modular Interiors"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                01. Modular Interiors
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Elegant Modular Interior Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> offers
                premium modular interior solutions that combine functionality,
                comfort and modern aesthetics. Every space is carefully planned
                to maximize storage while maintaining a clean, elegant and
                luxurious appearance.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From modular kitchens and wardrobes to TV units, bedroom
                interiors, office furniture and customized storage solutions,
                our experienced team delivers high-quality craftsmanship using
                premium materials and branded hardware for lasting durability.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Modular Kitchens</p>
                <p>✔ Wardrobes</p>
                <p>✔ TV Units</p>
                <p>✔ Bedroom Interiors</p>
                <p>✔ Office Interiors</p>
                <p>✔ Customized Furniture</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>
                    {/* ================= 02. IMPORTED ALUMINIUM ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                02. Imported Aluminium
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Premium Imported Aluminium Systems
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> offers
                premium imported aluminium solutions that combine elegance,
                durability and superior performance. Our systems are designed
                to enhance both residential and commercial spaces with modern
                aesthetics and exceptional strength.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We specialize in aluminium sliding windows, doors, office
                partitions, fixed glazing and customized architectural
                solutions using premium-quality profiles and accessories that
                require minimal maintenance while delivering long-lasting
                performance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Sliding Windows</p>
                <p>✔ Sliding Doors</p>
                <p>✔ Office Partitions</p>
                <p>✔ Fixed Glazing</p>
                <p>✔ Premium Hardware</p>
                <p>✔ Custom Aluminium Systems</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_IMPORTED_ALUMINIUM_IMAGE"
              alt="Imported Aluminium"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

          {/* ================= 03. uPVC WINDOWS & DOORS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_UPVC_WINDOWS_IMAGE"
              alt="uPVC Windows & Doors"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                03. uPVC Windows & Doors
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Stylish, Energy-Efficient uPVC Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> provides
                premium uPVC windows and doors that offer excellent thermal
                insulation, sound reduction and weather resistance while adding
                a modern and elegant appearance to your property.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our customized uPVC solutions are ideal for villas,
                apartments, offices and commercial buildings, delivering
                outstanding durability, security and low maintenance for years
                to come.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Sliding Windows</p>
                <p>✔ Casement Windows</p>
                <p>✔ Sliding Doors</p>
                <p>✔ French Doors</p>
                <p>✔ Sound Insulation</p>
                <p>✔ Weather Resistant</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

          {/* ================= 04. MESH DOORS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                04. Mesh Doors
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Durable & Elegant Mesh Door Systems
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> supplies
                premium mesh door systems that provide excellent ventilation
                while protecting your home or office from insects, dust and
                unwanted pests without compromising natural airflow.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our mesh doors are available in sliding, pleated and customized
                designs that integrate seamlessly with aluminium and uPVC
                systems, offering durability, convenience and an elegant
                finish.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Pleated Mesh Doors</p>
                <p>✔ Sliding Mesh Doors</p>
                <p>✔ Magnetic Mesh</p>
                <p>✔ Insect Protection</p>
                <p>✔ Easy Maintenance</p>
                <p>✔ Premium Finishes</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_MESH_DOORS_IMAGE"
              alt="Mesh Doors"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

                    {/* ================= 05. EXTERIOR SOLUTIONS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_EXTERIOR_SOLUTIONS_IMAGE"
              alt="Exterior Solutions"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                05. Exterior Solutions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Transforming Exteriors with Style & Strength
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> provides
                complete exterior solutions that enhance the appearance,
                durability and value of your property. Our team combines modern
                architectural concepts with premium materials to create elegant
                and long-lasting exterior spaces.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Whether it's a residence, villa, apartment, commercial complex
                or corporate office, we deliver customized exterior solutions
                that perfectly blend beauty, functionality and structural
                excellence.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Residential Exteriors</p>
                <p>✔ Commercial Projects</p>
                <p>✔ Exterior Renovation</p>
                <p>✔ Modern Designs</p>
                <p>✔ Premium Finishes</p>
                <p>✔ Quality Execution</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

          {/* ================= 06. BUILDING ELEVATIONS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                06. Building Elevations
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Modern Building Elevation Designs
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> designs
                premium building elevations that create a powerful first
                impression while reflecting your lifestyle and architectural
                vision. Every elevation is thoughtfully planned to achieve the
                perfect balance of beauty, functionality and structural
                harmony.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From contemporary villas to luxury residences, apartments,
                commercial buildings and office spaces, our creative team
                delivers customized elevation designs with exceptional
                attention to detail and premium finishing.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Villa Elevations</p>
                <p>✔ Apartment Elevations</p>
                <p>✔ Commercial Buildings</p>
                <p>✔ Contemporary Designs</p>
                <p>✔ Premium Exterior Finish</p>
                <p>✔ Custom Architectural Concepts</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_BUILDING_ELEVATION_IMAGE"
              alt="Building Elevations"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>
                    {/* ================= 07. 3D DESIGNS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_3D_DESIGN_IMAGE"
              alt="3D Designs"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                07. 3D Designs
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Visualize Your Dream Before Execution
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> creates
                realistic 3D interior and exterior designs that help you
                visualize your dream project before construction begins. Our
                detailed concepts allow you to make confident design decisions
                while saving both time and cost.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We prepare high-quality 3D views for homes, villas,
                apartments, offices, commercial spaces and exterior projects,
                ensuring every detail reflects your vision with precision.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Interior 3D Views</p>
                <p>✔ Exterior 3D Views</p>
                <p>✔ Walkthrough Concepts</p>
                <p>✔ Space Planning</p>
                <p>✔ Material Selection</p>
                <p>✔ Photorealistic Renders</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

          {/* ================= 08. ACP CLADDING ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                08. ACP Cladding
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Premium ACP Cladding Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> delivers
                premium ACP cladding solutions that provide a modern,
                sophisticated appearance while improving the durability and
                weather resistance of your building.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our ACP cladding systems are ideal for commercial buildings,
                offices, showrooms, apartments and luxury residences, offering
                excellent strength, elegant finishes and long-term performance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Exterior Cladding</p>
                <p>✔ Building Facades</p>
                <p>✔ Commercial Buildings</p>
                <p>✔ Office Elevations</p>
                <p>✔ Premium Finish</p>
                <p>✔ Weather Resistant</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_ACP_CLADDING_IMAGE"
              alt="ACP Cladding"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

          {/* ================= 09. FACADE WORKS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_FACADE_WORK_IMAGE"
              alt="Facade Works"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                09. Facade Works
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Innovative Facade Design & Installation
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> specializes
                in innovative facade works that enhance the architectural
                identity of residential, commercial and corporate buildings.
                Our facade solutions combine elegance, durability and modern
                engineering.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Using premium materials and expert craftsmanship, we create
                visually striking facades that improve curb appeal while
                ensuring long-lasting performance and low maintenance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Glass Facades</p>
                <p>✔ ACP Facades</p>
                <p>✔ Commercial Facades</p>
                <p>✔ Architectural Designs</p>
                <p>✔ Modern Elevations</p>
                <p>✔ Premium Installation</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>
                    {/* ================= 10. VERTICAL GARDEN ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                10. Vertical Garden
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Bring Nature Into Your Living Spaces
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> designs
                and installs premium vertical gardens that transform ordinary
                walls into beautiful green spaces. Our solutions enhance
                aesthetics while creating a refreshing and eco-friendly
                environment for residential and commercial properties.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Whether you prefer natural or artificial vertical gardens,
                our customized designs are perfect for homes, offices,
                restaurants, hotels, balconies and outdoor landscapes,
                delivering beauty with minimal maintenance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Natural Vertical Gardens</p>
                <p>✔ Artificial Green Walls</p>
                <p>✔ Balcony Gardens</p>
                <p>✔ Terrace Landscaping</p>
                <p>✔ Office Green Spaces</p>
                <p>✔ Low Maintenance Designs</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_VERTICAL_GARDEN_IMAGE"
              alt="Vertical Garden"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

          {/* ================= 11. FALSE CEILING ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_FALSE_CEILING_IMAGE"
              alt="False Ceiling"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                11. False Ceiling
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Modern False Ceiling Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> delivers
                elegant false ceiling solutions that enhance the beauty,
                lighting and overall ambience of your interiors. Our designs
                seamlessly combine style, functionality and durability.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We specialize in gypsum, PVC and designer false ceilings with
                integrated lighting concepts for homes, offices, retail
                outlets and commercial spaces, creating sophisticated interiors
                with premium finishes.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Gypsum Ceilings</p>
                <p>✔ PVC Ceilings</p>
                <p>✔ Cove Lighting</p>
                <p>✔ Designer Ceilings</p>
                <p>✔ Commercial Ceilings</p>
                <p>✔ Premium Finishes</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

          {/* ================= 12. DESIGNER WALLPAPERS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                12. Designer Wallpapers
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Stylish Designer Wallpapers
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> offers an
                exclusive collection of premium designer wallpapers that add
                elegance, personality and luxury to every room. Our wallpaper
                solutions are carefully selected to suit both classic and
                contemporary interiors.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From living rooms and bedrooms to offices, hotels and retail
                spaces, we provide professional wallpaper selection and
                installation services with flawless finishing and long-lasting
                quality.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Luxury Wallpapers</p>
                <p>✔ 3D Wallpapers</p>
                <p>✔ Customized Designs</p>
                <p>✔ Office Wallpapers</p>
                <p>✔ Premium Textures</p>
                <p>✔ Professional Installation</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_WALLPAPER_IMAGE"
              alt="Designer Wallpapers"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>
                    {/* ================= 13. SS RAILINGS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_SS_RAILINGS_IMAGE"
              alt="SS Railings"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                13. SS Railings
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Elegant Stainless Steel Railing Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> provides
                premium stainless steel railing solutions that combine safety,
                durability and modern elegance. Our railings are designed to
                complement contemporary residential and commercial spaces while
                ensuring long-lasting performance.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We manufacture and install customized SS railings for
                staircases, balconies, terraces and commercial buildings using
                high-grade stainless steel with precision finishing and expert
                workmanship.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Staircase Railings</p>
                <p>✔ Balcony Railings</p>
                <p>✔ Terrace Railings</p>
                <p>✔ Glass SS Railings</p>
                <p>✔ Hand Rail Systems</p>
                <p>✔ Custom Designs</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

          {/* ================= 14. GLASS WORKS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                14. Glass Works
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Premium Glass Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> offers
                premium glass solutions that add sophistication, openness and
                natural light to residential and commercial interiors. Every
                installation is completed with precision and premium-quality
                materials.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From toughened glass installations to decorative glass
                applications, our experienced team delivers customized
                solutions that perfectly blend functionality with elegant
                architectural design.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Toughened Glass</p>
                <p>✔ Decorative Glass</p>
                <p>✔ Glass Doors</p>
                <p>✔ Glass Panels</p>
                <p>✔ Office Glass Systems</p>
                <p>✔ Custom Installations</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_GLASS_WORKS_IMAGE"
              alt="Glass Works"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

          {/* ================= 15. GLASS PARTITIONS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_GLASS_PARTITION_IMAGE"
              alt="Glass Partitions"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                15. Glass Partitions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Modern Glass Partition Systems
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> designs
                and installs elegant glass partition systems that maximize
                natural light while creating stylish, functional and
                professional spaces for homes and offices.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Our glass partitions are available in frameless, framed,
                sliding and customized designs, making them ideal for offices,
                conference rooms, cabins, retail spaces and luxury interiors.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Frameless Partitions</p>
                <p>✔ Office Cabins</p>
                <p>✔ Sliding Glass Systems</p>
                <p>✔ Conference Rooms</p>
                <p>✔ Toughened Glass</p>
                <p>✔ Customized Solutions</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>
                    {/* ================= 16. MS FABRICATION ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
            >

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                16. MS Fabrication
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Precision Mild Steel Fabrication Solutions
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> provides
                high-quality Mild Steel (MS) fabrication services for
                residential, commercial and industrial projects. We combine
                expert craftsmanship with premium materials to deliver durable,
                secure and aesthetically appealing fabrication works.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                From gates and staircases to structural frameworks and custom
                fabrication, our experienced team ensures precision
                manufacturing, professional installation and long-lasting
                performance tailored to your project requirements.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ MS Gates</p>
                <p>✔ MS Staircases</p>
                <p>✔ Structural Fabrication</p>
                <p>✔ MS Railings</p>
                <p>✔ Industrial Fabrication</p>
                <p>✔ Custom Metal Works</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

            <img
              src="YOUR_MS_FABRICATION_IMAGE"
              alt="MS Fabrication"
              className="order-1 lg:order-2 h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

          </div>

          {/* ================= 17. ALL INTERIOR & EXTERIOR SOLUTIONS ================= */}

          <div className="grid lg:grid-cols-2 gap-14 items-center py-24 border-t">

            <img
              src="YOUR_ALL_SERVICES_IMAGE"
              alt="All Interior & Exterior Solutions"
              className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />

            <div data-aos="fade-left">

              <p className="uppercase tracking-[5px] text-red-600 font-semibold">
                17. Complete Interior & Exterior Solutions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                One Destination for Every Space
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong>Sai Lalit Interior & Exterior & Co.</strong> is your
                trusted partner for complete interior and exterior solutions.
                From concept, planning and 3D visualization to manufacturing,
                execution and final finishing, we handle every stage with
                professionalism and attention to detail.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Whether you're building a new home, renovating an existing
                property or developing a commercial project, our experienced
                team delivers innovative designs, premium materials and quality
                workmanship to bring your vision to life.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">
                <p>✔ Residential Projects</p>
                <p>✔ Commercial Projects</p>
                <p>✔ Office Interiors</p>
                <p>✔ Turnkey Solutions</p>
                <p>✔ End-to-End Execution</p>
                <p>✔ Premium Quality Assurance</p>
              </div>

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </a>

            </div>

          </div>

        </div>

        {/* ================= CALL TO ACTION ================= */}

        <section className="bg-gray-900 py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Build Your Dream Space Together
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether it's a home, office or commercial project,
              <strong> Sai Lalit Interior & Exterior & Co.</strong> is ready to
              transform your ideas into reality with innovative designs,
              premium materials and exceptional craftsmanship.
            </p>

            <a
              href="https://wa.me/918106406999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              Book a Free Consultation
            </a>

          </div>

        </section>
          
                {/* ================= WHY CHOOSE US ================= */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                The Sai Lalit Advantage
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                We believe every project deserves attention to detail,
                premium quality materials and flawless execution. Our
                experienced team transforms ideas into elegant and
                functional spaces that stand the test of time.
              </p>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

              <div className="bg-red-600 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">20+</h3>
                <p className="mt-3 text-red-100">Years Experience</p>
              </div>

              <div className="bg-[#0A4F9E] rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">170+</h3>
                <p className="mt-3 text-blue-100">Projects Completed</p>
              </div>

              <div className="bg-gray-900 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">100%</h3>
                <p className="mt-3 text-gray-300">Premium Quality</p>
              </div>

              <div className="bg-green-600 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">100%</h3>
                <p className="mt-3 text-green-100">Customer Satisfaction</p>
              </div>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🏆</div>
                <h3 className="mt-6 text-2xl font-bold">Expert Team</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Highly skilled professionals with years of industry experience.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">✨</div>
                <h3 className="mt-6 text-2xl font-bold">Premium Materials</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  We use trusted brands and high-quality materials for every project.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">📐</div>
                <h3 className="mt-6 text-2xl font-bold">Customized Designs</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Every design is tailored to match your lifestyle and space.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">⏰</div>
                <h3 className="mt-6 text-2xl font-bold">On-Time Delivery</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Timely project completion with uncompromised quality.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">💰</div>
                <h3 className="mt-6 text-2xl font-bold">Transparent Pricing</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Honest quotations with no hidden charges or surprises.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🛡️</div>
                <h3 className="mt-6 text-2xl font-bold">Quality Workmanship</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Precision craftsmanship ensuring durability and perfection.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🤝</div>
                <h3 className="mt-6 text-2xl font-bold">Dedicated Support</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  Friendly guidance and assistance from consultation to completion.
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
                <div className="text-5xl">🏡</div>
                <h3 className="mt-6 text-2xl font-bold">Complete Solutions</h3>
                <p className="mt-4 text-gray-600 leading-7">
                  End-to-end interior and exterior solutions under one roof.
                </p>
              </div>

            </div>

          </div>

        </section>
                {/* ================= OUR PROCESS ================= */}

        <section className="py-24 bg-[#faf8f5]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-[6px] text-red-600 font-semibold">
                Our Process
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                From Concept to Completion
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                We follow a structured approach to ensure every project is
                delivered with premium quality, precision and complete
                customer satisfaction.
              </p>

            </div>

            <div className="grid md:grid-cols-5 gap-8">

              {[
                {
                  no: "01",
                  title: "Consultation",
                  desc: "Understanding your requirements and project goals."
                },
                {
                  no: "02",
                  title: "Design",
                  desc: "Creating innovative layouts and premium concepts."
                },
                {
                  no: "03",
                  title: "Material Selection",
                  desc: "Choosing the best materials and finishes."
                },
                {
                  no: "04",
                  title: "Execution",
                  desc: "Professional installation with quality workmanship."
                },
                {
                  no: "05",
                  title: "Handover",
                  desc: "Final inspection and successful project delivery."
                }
              ].map((step) => (

                <div
                  key={step.no}
                  className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300"
                >

                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold">
                    {step.no}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {step.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-500">

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[6px] text-red-100 font-semibold">
              Let's Build Something Amazing
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              Your Dream Space?
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-red-100 leading-8">
              Whether it's a home, office or commercial project,
              Sai Lalit Interior & Exterior delivers elegant,
              durable and customized solutions tailored to your needs.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="https://wa.me/918106406999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-white text-red-600 font-bold shadow-xl hover:scale-105 transition duration-300"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:8106406999"
                className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-red-600 transition duration-300"
              >
                📞 Call Now
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
