"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* Hero */}

        <section className="bg-[#0A4F9E] text-white py-20">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-red-300 font-semibold">
              Contact Us
            </p>

            <h1 className="text-5xl font-bold mt-4">
              Let's Build Your Dream Space
            </h1>

            <p className="mt-6 text-lg max-w-3xl mx-auto text-blue-100">
              Looking for premium interior or exterior solutions?
              Our experts are ready to assist you.
            </p>

          </div>

        </section>

        {/* Contact Section */}

        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <span className="text-red-600 uppercase font-semibold tracking-widest">
                Get In Touch
              </span>

              <h2 className="text-4xl font-bold mt-4">
                We'd Love To Hear From You
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Whether you're planning a new home, office, renovation,
                imported aluminium installation or complete interior works,
                we're here to help.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    📞
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Call Us
                    </h3>

                    <p className="text-gray-600">
                      +91 81064 06999
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    ✉️
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      info@sailalitinteriors.com
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    📍
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Office
                    </h3>

                    <p className="text-gray-600">
                      Visakhapatnam,
                      Andhra Pradesh,
                      India
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl">
                    🕘
                  </div>

                  <div>

                    <h3 className="font-bold text-xl">
                      Business Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 7:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="bg-[#faf8f5] rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-8">
                Request A Free Quote
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-red-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-red-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-red-600"
                />

                <select
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-red-600"
                >
                  <option>Select Service</option>
                  <option>Modular Interiors</option>
                  <option>Imported Aluminium</option>
                  <option>Exterior Solutions</option>
                  <option>False Ceiling</option>
                  <option>Painting & Wallpapers</option>
                  <option>Railings & Glass Works</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-red-600"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* Google Map */}

        <section className="pb-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-8">
              Find Us On Google Maps
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-xl">

              <iframe
                src="YOUR_GOOGLE_MAP_EMBED_URL"
                width="100%"
                height="500"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
