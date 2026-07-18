"use client";

import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import HangingBadge from "./components/HangingBadge";

export default function Home() {

  const heroImage =
    "https://lookuptrendz.com/wp-content/uploads/2026/07/file_000000001804723085d86eb19bcdca03.png";

  return (
    <main className="w-full">

      <Header />

      {/* ================= HERO ================= */}
  

  {/* ================= HERO ================= */}  

  <section  
    className="relative min-h-screen bg-cover bg-center flex items-center"  
    style={{  
      backgroundImage: `url(${heroImage})`,  
    }}  
  >  
    {/* Overlay */}  

    <div className="absolute inset-0 bg-black/50"></div>  

    <div className="relative max-w-7xl mx-auto w-full px-6 pt-24">  

      <div className="max-w-2xl text-white">  

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">  

          Transforming Spaces  
          <br />  

          with Premium  

          <br />  

          <span className="text-red-500">  
            Interior & Exterior  
          </span>  

          <br />  

          Solutions  

        </h1>  

        <h2 className="mt-6 text-2xl font-semibold">  

          Building Dream Homes & Commercial Spaces  

          <span className="text-red-500">  
            {" "}Since 2019  
          </span>  

        </h2>  

        <p className="mt-6 text-lg text-gray-200 leading-8">  

          With over 20 years of experience and 170+ completed  
          projects, Sai Lalit Interior & Exterior specializes  
          in imported aluminium systems, modular interiors,  
          false ceilings, ACP cladding, elevations, railings,  
          and customized design solutions across  
          Visakhapatnam, Vizianagaram & Hyderabad.  

        </p>  

        <div className="mt-10 flex flex-wrap gap-5">  

          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-md font-semibold">  

            Get Free Quote  

          </button>  

          <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-md flex items-center gap-2 font-semibold">  

            View Our Projects  

            <ArrowRight size={20} />  

          </button>  

        </div>  

      </div>  

    </div>  

  </section>  
                                                                                                                                                                                      
   {/* ================= ABOUT ================= */}

<section id="about" className="bg-white py-20 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Content */}

    <div>

      <p className="text-red-600 font-semibold uppercase tracking-widest">
        — About Company
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
        Building Beautiful
        <br />
        Spaces Since <span className="text-red-600">2019</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Sai Lalit Interior & Exterior has been delivering premium
        interior and exterior solutions since 2019. We specialize in
        creating elegant residential and commercial spaces through
        innovative designs, quality materials, and expert craftsmanship.

        <br /><br />

        From modular interiors and false ceilings to aluminium systems,
        ACP cladding, railings, glass works, and exterior elevations,
        we transform every space into a perfect blend of beauty,
        comfort, and functionality.
      </p>

      {/* Features */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl">✔</span>
          <span className="font-medium">
            Since 2019 Experience
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl">✔</span>
          <span className="font-medium">
            Premium Interior Solutions
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl">✔</span>
          <span className="font-medium">
            100+ Projects Completed
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl">✔</span>
          <span className="font-medium">
            Quality Materials & Finishing
          </span>
        </div>

      </div>

      {/* Button */}

      <button className="mt-10 bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
        Explore More About Us →
      </button>

    </div>

    {/* Right Image */}

    <div>

      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_0000000091b881fa92e8fdd7aed18f94.jpg"
        alt="Sai Lalit Interior"
        className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

  </div>

</section>                                                                                                                                                                                               

                                                                                                                                                    
                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                            

                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                 

                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                        

                                                                                                                                                                                                                                                                                                                                                                                                               


                                                                                                                                                                                                                                                                                                                                                                                                                                   

                                                                                                                                                                                                                                                                                                                                                                                                                                         

                                                                                                                                                                                                                                                                                                                                                                                                                                               

                                                                                                                                                                                                                                                                                                                                                                                                                                           

                                                                                                                                                                                                                                                                                                                                                                                                                                                       

                                                                                                                                                                                                                                                                                                                                                                                                                                                            

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                             

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {/* ================= WHAT WE DO ================= */}

<section id="services" className="bg-[#faf8f5] py-20 px-6">

<div className="max-w-7xl mx-auto">

  {/* Heading */}

  <div className="text-center mb-14">

    <p className="text-red-600 font-semibold uppercase tracking-wider">
      — Our Services
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
      What We Do
    </h2>

    <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 leading-8">
      We provide complete interior and exterior solutions designed to
      transform residential and commercial spaces with modern designs,
      premium materials, and expert craftsmanship. Every project is
      carefully planned to deliver functionality, elegance, durability,
      and long-lasting value.
    </p>

  </div>
{/* Services */}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_000000009fe072088dd3f6700a00e3de.png"
        alt="Modular Interiors"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      Modular Interiors
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      Modular Kitchens, Wardrobes, TV Units &
      Kids' Bedroom Designs.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_0000000054d071fab01b4282367d3683.png"
        alt="Imported Aluminium"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      Imported Aluminium
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      Premium Aluminium Windows,
      Sliding Systems &
      Mesh Doors.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_00000000a52871fabb53414fc5d919c5.png"
        alt="Exterior Solutions"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      Exterior Solutions
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      Building Elevations,
      ACP Cladding &
      Facade Works.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_00000000eca0720797666fa17604a48d.png"
        alt="False Ceiling"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      False Ceiling
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      PVC & Gypsum False Ceiling
      with Modern Lighting Concepts.
    </p>
  </div>

  {/* Card 5 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_00000000ec0871fa865d0df7f503ded1-1.png"
        alt="Painting & Wallpapers"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      Painting & Wallpapers
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      Interior Painting,
      Designer Wallpapers &
      Decorative Finishes.
    </p>
  </div>

  {/* Card 6 */}
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
    <div className="flex justify-center mb-5">
      <img
        src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/file_00000000523c72078cc3b58a91847ae3.png"
        alt="Railings & Glass Works"
        className="w-20 h-20 object-contain"
      />
    </div>

    <h3 className="font-bold text-lg text-gray-900">
      Railings & Glass Works
    </h3>

    <p className="text-sm text-gray-600 mt-3 leading-6">
      SS Railings, Glass Railings &
      Custom Architectural Installations.
    </p>
  </div>

</div>
  

  {/* Button */}

  <div className="text-center mt-12">

    <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-md font-semibold">
      View All Services →
    </button>

  </div>

</div>

</section>                    
  {/* ================= IMPORTED ALUMINIUM STRIP ================= */}

<section className="bg-[#1D4ED8] overflow-hidden py-4">

  <div className="marquee">

    <div className="marquee-content">

      <span>✨ Specialists in Imported Aluminium Systems</span>

      <span>•</span>

      <span>Premium Sliding Windows</span>

      <span>•</span>

      <span>Folding Doors</span>

      <span>•</span>

      <span>Premium Quality • Professional Installation</span>

    </div>

  </div>

</section>

      {/* ================= OUR PROJECTS ================= */}

<section id="projects" className="py-20 bg-[#faf8f5]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        — Our Projects —
      </p>

      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
        Explore Our
        <span className="text-blue-600"> Project Categories</span>
      </h2>

      <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
        Browse our completed interior and exterior works. Click any category to
        explore the complete project gallery.
      </p>
    </div>

    {/* Categories */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {[
    {
      title: "Modular Kitchens",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.00.09.jpeg",
      link: "/projects/modular-kitchens",
    },
    {
      title: "Living Rooms",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.22.jpeg",
      link: "/projects/living-room",
    },
    {
      title: "TV Units",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-00.52.15-1.jpeg",
      link: "/projects/tv-units",
    },
    {
      title: "Wardrobes",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.01.08-scaled.jpeg",
      link: "/projects/wardrobes",
    },
    {
      title: "False Ceiling",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.45-2.jpeg",
      link: "/projects/false-ceiling",
    },
    {
      title: "Pooja Mandir",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.22-2.jpeg",
      link: "/projects/pooja-mandir",
    },
    {
      title: "Elevations",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/IMG-20201213-WA0029.jpg",
      link: "/projects/elevations",
    },
    {
      title: "Wall Designs",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.41-2.jpeg",
      link: "/projects/wall-designs",
    },
    {
      title: "Vertical Gardens",
      image: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-06-23-at-01.03.48.jpeg",
      link: "/projects/vertical-gardens",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-center text-gray-900">
          {item.title}
        </h3>

        <Link
          href={item.link}
          className="mt-6 inline-flex justify-center w-full py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          View Gallery →
        </Link>
      </div>
    </div>
  ))}

</div>

{/* View All */}

<div className="text-center mt-20">
  <Link
    href="/projects"
    className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gray-900 text-white text-lg font-bold hover:bg-red-600 transition duration-300 shadow-xl"
  >
    View All Projects →
  </Link>
</div>

</div>

</section>
      
{/* ================= WHY CHOOSE US ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Image */}
    <div>
      <img
        src="https://lookuptrendz.com/wp-content/uploads/2026/07/why-choose-us.png"
        alt="Why Choose Us"
        className="w-full rounded-xl"
      />
    </div>

    {/* Right Content */}
    <div>

      <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
        WHY CHOOSE US
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
        Trusted Interior &
        <span className="text-blue-600"> Exterior Experts</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        We combine innovative design, premium materials, and skilled craftsmanship to create elegant residential and commercial spaces with unmatched quality and customer satisfaction.
      </p>

      <div className="mt-10 space-y-6">

        {/* Experience */}
        <div className="flex items-center gap-5 group">
          <img
            src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/1_20260717_060343_0000.png"
            alt="Experience"
            className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
          />
          <span className="text-lg font-semibold text-gray-800">
            20+ Years of Industry Experience
          </span>
        </div>

        {/* Quality */}
        <div className="flex items-center gap-5 group">
          <img
            src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/2_20260717_060343_0001.png"
            alt="Quality"
            className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
          />
          <span className="text-lg font-semibold text-gray-800">
            Premium Quality Materials
          </span>
        </div>

        {/* Delivery */}
        <div className="flex items-center gap-5 group">
          <img
            src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/3_20260717_060343_0002.png"
            alt="Delivery"
            className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
          />
          <span className="text-lg font-semibold text-gray-800">
            On-Time Project Delivery
          </span>
        </div>

        {/* Support */}
        <div className="flex items-center gap-5 group">
          <img
            src="https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/4_20260717_060343_0003.png"
            alt="Support"
            className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
          />
          <span className="text-lg font-semibold text-gray-800">
            Dedicated Customer Support
          </span>
        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= TESTIMONIALS ================= */}

<section id="testimonials" className="py-20 bg-[#faf8f5] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-12">

      <p className="text-red-600 font-semibold uppercase tracking-widest">
        — Testimonials —
      </p>

      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
        What Our <span className="text-red-600">Clients Say</span>
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        Trusted by homeowners and businesses for quality workmanship,
        timely project delivery and customer satisfaction.
      </p>

      <div className="flex justify-center items-center gap-3 mt-6">

        <span className="text-yellow-500 text-2xl">
          ★★★★★
        </span>

        <span className="font-semibold text-gray-700">
          5.0 Google Rating
        </span>

      </div>

    </div>

    {/* Review Slider */}
<section id="testimonials" className="py-20 bg-[#faf8f5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-red-600 font-semibold uppercase tracking-widest">
        — Testimonials —
      </p>

      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
        What Our <span className="text-red-600">Clients Say</span>
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        Trusted by homeowners and businesses for quality workmanship,
        timely project delivery and customer satisfaction.
      </p>

      <div className="flex justify-center items-center gap-3 mt-6">
        <span className="text-yellow-500 text-2xl">★★★★★</span>

        <span className="font-semibold text-gray-700">
          5.0 Google Rating
        </span>
      </div>
    </div>

    {/* Review Slider */}
    <div className="overflow-hidden">
      <div className="review-scroll gap-6">

        {[
          {
            name: "Lalith Chandra Yeddu",
            rating: "★★★★★",
            review: "Best interior well trained labours and friendly workers and the work is excellent and this is best interior person who mad this throughout and the material is imported and top class material and the quality and texture of the interior will ne topnotch"
          },
          {
            name: "BYLAPOODI GOWRI",
            rating: "★★★★★",
            review: "Excellent quality"
          },
          {
            name: "Mahesh Vadada",
            rating: "★★★★★",
            review: "Great work."
          },
          {
            name: "prasad katta",
            rating: "★★★★★",
            review: "I am very Satisfied and very reasonable price also."
          },
          {
            name: "Pindi sunil Kumar",
            rating: "★★★★★",
            review: "Good work srinivas garu"
          },
          {
            name: "Sajeeshmadhavan Pkd",
            rating: "★★★★★",
            review: "Excellent quality and good sarvees"
          },
          {
            name: "Nanaji dadi",
            rating: "★★★★★",
            review: "Vert good quality work at a reasonable price."
          },
          {
            name: "bhassckar bobbhile",
            rating: "★★★★★",
            review: "I was completely impressed with their professionalism and work."
          },
          {
            name: "NAVEEN KUMAR",
            rating: "★★★★★",
            review: "It's simply ossum. Had a pleasant and innovative work output with this firm. Thnx to SLIEC."
          },
          {
            name: "Santanu Bhutia",
            rating: "★★★★★",
            review: "Good experience and polite work man of word srinivas garu"
          },
          {
            name: "Rohit padavanil",
            rating: "★★★★★",
            review: "Seamless experience from start to finish—an amazing team, great attention to detail, and truly beautiful results. Would highly recommend for anyone looking for quality interiors."
          },
          {
            name: "vamsi badireddi",
            rating: "★★★★★",
            review: "Great service and most knowledge in interior designing and Aluminium cupboard works, thank you for the service."
          },
          {
            name: "Sai Kumar Mutyala",
            rating: "★★★★★",
            review: "Excellent work very much satisfied with low cost showing very good ambious"
          },
          {
            name: "avinash Chinna",
            rating: "★★★★★",
            review: "Had a very pleasant experience working with Srinivas garu. They did a really good work and the final output exceeded our expectations. He helped a lot with the color selection and interiors."
          },
          {
            name: "krishna reddy",
            rating: "★★★★★",
            review: "Quality, on time delivery and availability"
          },
          {
            name: "srinivasa reddy",
            rating: "★★★★★",
            review: "I have did a cupboard with the Sai Lalith team the best quality and good looking."
          },
          {
            name: "Mummana Bharat",
            rating: "★★★★★",
            review: "They have done a very great work by giving a best result, thank you 😊"
          },
          {
            name: "dons group",
            rating: "★★★★★",
            review: "he is a gentleman...good behaviour,,,its nice to deal with him ( aalia aluminium)"
          },

          /* Duplicate for Infinite Scroll */

          {
            name: "Lalith Chandra Yeddu",
            rating: "★★★★★",
            review: "Best interior well trained labours and friendly workers and the work is excellent and this is best interior person who mad this throughout and the material is imported and top class material and the quality and texture of the interior will ne topnotch"
          },
          {
            name: "Rohit padavanil",
            rating: "★★★★★",
            review: "Seamless experience from start to finish—an amazing team, great attention to detail, and truly beautiful results. Would highly recommend for anyone looking for quality interiors."
          },
          {
            name: "avinash Chinna",
            rating: "★★★★★",
            review: "Had a very pleasant experience working with Srinivas garu. They did a really good work and the final output exceeded our expectations. He helped a lot with the color selection and interiors."
          },
          {
            name: "vamsi badireddi",
            rating: "★★★★★",
            review: "Great service and most knowledge in interior designing and Aluminium cupboard works, thank you for the service."
          },
          {
            name: "Mummana Bharat",
            rating: "★★★★★",
            review: "They have done a very great work by giving a best result, thank you 😊"
          }

        ].map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-[340px] flex-shrink-0 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-yellow-500 text-xl mb-4">
              {item.rating}
            </div>

            <p className="text-gray-600 leading-7 italic">
              "{item.review}"
            </p>

            <div className="mt-8">
              <h4 className="font-bold text-lg text-gray-900">
                {item.name}
              </h4>

              <p className="text-red-600 text-sm mt-1">
                Verified Google Customer
              </p>
            </div>

          </div>

        ))}

      </div>
    </div>

  </div>
</section>

    {/* Button */}

    <div className="text-center mt-14">

      <a
        href="#"
        className="inline-flex items-center bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-md font-semibold"
      >
        View Google Reviews →
      </a>

    </div>

  </div>

</section>
  {/* ================= FAQ ================= */}

<section id="faq" className="bg-[#faf8f5] py-20 px-6">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-red-600 font-semibold uppercase tracking-widest">
        — Frequently Asked Questions —
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
        Got Questions?
        <span className="text-red-600"> We've Got Answers.</span>
      </h2>

      <p className="mt-5 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
        Find answers to the most common questions about our interior
        and exterior services, project timelines, materials, and more.
      </p>

    </div>

    <div className="space-y-5">

      <details className="group bg-white rounded-2xl shadow-md p-6">

        <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 list-none">
          Do you undertake both residential and commercial projects?
          <span className="text-red-600 text-2xl group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          Yes. We provide complete interior and exterior solutions for
          homes, apartments, villas, offices, retail stores, and
          commercial buildings.
        </p>

      </details>

      <details className="group bg-white rounded-2xl shadow-md p-6">

        <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 list-none">
          Do you provide free site visits and quotations?
          <span className="text-red-600 text-2xl group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          Yes. Our team can visit your site, understand your
          requirements, and provide a detailed quotation.
        </p>

      </details>

      <details className="group bg-white rounded-2xl shadow-md p-6">

        <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 list-none">
          What services do you offer?
          <span className="text-red-600 text-2xl group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          We specialize in modular interiors, imported aluminium,
          false ceilings, ACP cladding, glass works, railings,
          wallpapers, painting, and complete exterior solutions.
        </p>

      </details>

      <details className="group bg-white rounded-2xl shadow-md p-6">

        <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 list-none">
          How long does a typical project take?
          <span className="text-red-600 text-2xl group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          Project duration depends on the size and scope. We always
          provide a clear timeline before work begins.
        </p>

      </details>

      <details className="group bg-white rounded-2xl shadow-md p-6">

        <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 list-none">
          Which locations do you serve?
          <span className="text-red-600 text-2xl group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          We proudly serve Visakhapatnam, Vizianagaram, Hyderabad,
          and nearby locations.
        </p>

      </details>

    </div>

  </div>

</section>
{/* ================= CALL TO ACTION ================= */}

<section className="py-20 px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    <div
      className="relative overflow-hidden rounded-3xl"
      style={{
        backgroundImage:
          "url('https://your-banner-image-link.jpg')", // Replace later
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16 py-12 gap-8">

        {/* Left */}

        <div className="text-center lg:text-left max-w-2xl">

          <p className="text-red-500 font-semibold uppercase tracking-widest">
            Let's Build Together
          </p>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Ready to Transform
            <span className="text-red-500"> Your Space?</span>
          </h2>

          <p className="text-gray-200 mt-5 text-lg leading-8">
            Whether you're planning your dream home, office, or commercial
            project, our expert team is ready to bring your vision to life
            with premium interior and exterior solutions.
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="tel:8106406999"
            className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-4 rounded-xl text-white font-semibold text-center shadow-xl"
          >
            📞 Call Now
          </a>

          <a
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-xl font-semibold text-center"
          >
            Get Free Quote →
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= FEATURED CLIENTS ================= */}
<section id="clients" className="bg-[#faf8f5] py-20 overflow-hidden">

  <div className="text-center mb-14 px-6">
    <p className="text-red-600 font-semibold uppercase tracking-widest">
      — Our Clients —
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold mt-3">
      Trusted By Industry Leaders
    </h2>
  </div>

  <div className="overflow-hidden">

    <div className="flex gap-12 animate-marquee whitespace-nowrap">

      {[
        {
          name: "Shapoorji Pallonji",
          logo: "https://www.shapoorjipallonji.com/assets/vectors/icons/icon_splogo_blue.svg",
        },
        {
          name: "Pfizer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/1280px-Pfizer_%282021%29.svg.png",
        },
        {
          name: "Sumadhura",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Sumadhura-Group-Logo-Image-scaled.png",
        },
        {
          name: "MVV Builders",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/logo-1.png",
        },
        {
          name: "STBL",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/website-logo_1.jpg",
        },
        {
          name: "Shapoorji Pallonji",
          logo: "https://www.shapoorjipallonji.com/assets/vectors/icons/icon_splogo_blue.svg",
        },
        {
          name: "Pfizer",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/1280px-Pfizer_%282021%29.svg.png",
        },
        {
          name: "Sumadhura",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/Sumadhura-Group-Logo-Image-scaled.png",
        },
        {
          name: "MVV Builders",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/logo-1.png",
        },
        {
          name: "STBL",
          logo: "https://businessprideawards.lookuptrendz.com/wp-content/uploads/2026/07/website-logo_1.jpg",
        },
      ].map((client, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 h-36 bg-white rounded-2xl shadow-lg flex items-center justify-center p-8"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-16 w-auto object-contain"
          />
        </div>
      ))}

    </div>

  </div>

</section>
{/* ================= FOOTER ================= */}

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

        <li><a href="#about">About Us</a></li>

        <li><a href="#services">Services</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

    </div>

    {/* Services */}

    <div>

      <h3 className="text-white font-bold text-xl mb-6">
        Our Services
      </h3>

      <ul className="space-y-4">

        <li>Modular Interiors</li>

        <li>Exterior Solutions</li>

        <li>False Ceiling</li>

        <li>Glass & Railings</li>

        <li>ACP Cladding</li>

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
        P6RV+439, Old Karasa, Marripalem, Visakhapatnam, Andhra Pradesh 530009.
        Branches: Vijayawada, AndhraPradesh Hyderabad, Telangana
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
        Powered by
        <span className="text-red-500 font-semibold">
          {" "}Lookuptrendz
        </span>
      </p>

    </div>

  </div>

</footer>
</main>

);
}
