"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <img
            src="https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg"
            alt="Sai Lalit"
            className="h-16 mb-6"
          />

          <p className="leading-8">
            Sai Lalit Interior & Exterior specializes in premium
            residential and commercial interior & exterior solutions,
            delivering quality craftsmanship, innovative designs,
            and exceptional customer satisfaction.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white font-bold text-xl mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li><Link href="/about">About Us</Link></li>

            <li><Link href="/services">Services</Link></li>

            <li><Link href="/projects">Projects</Link></li>

            <li><Link href="/contact">Contact Us</Link></li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-white font-bold text-xl mb-6">
            Our Services
          </h3>

          <ul className="space-y-4">

            <li>Modular Interiors</li>

            <li>Imported Aluminium</li>

            <li>Exterior Solutions</li>

            <li>False Ceiling</li>

            <li>Painting & Wallpapers</li>

            <li>Railings & Glass Works</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white font-bold text-xl mb-6">
            Contact Us
          </h3>

          <p>📞 +91 81064 06999</p>

          <p className="mt-4">
            📧 info@sailalitinteriors.com
          </p>

          <p className="mt-4 leading-7">
            Visakhapatnam,
            Andhra Pradesh,
            India
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 Sai Lalit Interior & Exterior. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Powered by{" "}
            <span className="text-red-500 font-semibold">
              Lookuptrendz
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}
