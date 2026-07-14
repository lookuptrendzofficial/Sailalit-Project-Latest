"use client";

import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        src="https://your-about-image-link.jpg"
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
      src="/modular.png"
      alt="Modular Interiors"
      className="w-20 h-20 object-contain mx-auto"
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

      <div className="h-16 w-16 mx-auto mb-5 rounded-xl border-2 border-dashed border-red-300"></div>

      <h3 className="font-bold text-lg text-gray-900">
        Imported Aluminium
      </h3>

      <p className="text-sm text-gray-600 mt-3 leading-6">
        Premium Aluminium Windows,
        Sliding Systems & Mesh Doors.
      </p>

    </div>

    {/* Card 3 */}

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">

      <div className="h-16 w-16 mx-auto mb-5 rounded-xl border-2 border-dashed border-red-300"></div>

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

      <div className="h-16 w-16 mx-auto mb-5 rounded-xl border-2 border-dashed border-red-300"></div>

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

      <div className="h-16 w-16 mx-auto mb-5 rounded-xl border-2 border-dashed border-red-300"></div>

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

      <div className="h-16 w-16 mx-auto mb-5 rounded-xl border-2 border-dashed border-red-300"></div>

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

<section id="projects" className="bg-white py-20 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-14">

      <p className="text-red-600 font-semibold uppercase tracking-wider">
        — Our Projects —
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
        Crafted Spaces. Delivered with
        <span className="text-red-600"> Excellence.</span>
      </h2>

      <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600 leading-8">
        Explore some of our completed interior and exterior projects,
        thoughtfully designed with premium materials, modern aesthetics,
        and exceptional craftsmanship for homes and commercial spaces.
      </p>

    </div>

    {/* Projects Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          image:"https://your-image-link-1.jpg",
          title:"Luxury Modular Kitchen",
          location:"Visakhapatnam",
          desc:"Modern modular kitchen with premium finishes and elegant storage solutions."
        },
        {
          image:"https://your-image-link-2.jpg",
          title:"Master Bedroom Interior",
          location:"Vizianagaram",
          desc:"Contemporary bedroom featuring custom wardrobes and ambient lighting."
        },
        {
          image:"https://your-image-link-3.jpg",
          title:"TV Unit & Living Room",
          location:"Visakhapatnam",
          desc:"Custom TV unit with decorative wall panels and luxury interior styling."
        },
        {
          image:"https://your-image-link-4.jpg",
          title:"Modern Exterior Elevation",
          location:"Hyderabad",
          desc:"Premium exterior elevation designed with elegant architectural finishes."
        },
        {
          image:"https://your-image-link-5.jpg",
          title:"False Ceiling Design",
          location:"Visakhapatnam",
          desc:"Stylish gypsum false ceiling with concealed LED lighting."
        },
        {
          image:"https://your-image-link-6.jpg",
          title:"Glass Staircase Railings",
          location:"Hyderabad",
          desc:"Toughened glass railings with stainless steel fittings for modern interiors."
        },
        {
          image:"https://your-image-link-7.jpg",
          title:"Office Interior",
          location:"Visakhapatnam",
          desc:"Professional office workspace designed for productivity and elegance."
        },
        {
          image:"https://your-image-link-8.jpg",
          title:"ACP Cladding",
          location:"Vizianagaram",
          desc:"Durable ACP exterior cladding with contemporary architectural appeal."
        }

      ].map((project,index)=>(

        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
        >

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-5">

            <h3 className="font-bold text-xl text-gray-900">
              {project.title}
            </h3>

            <p className="text-red-600 text-sm mt-2">
              📍 {project.location}
            </p>

            <p className="text-gray-600 text-sm leading-6 mt-3">
              {project.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
  {/* ================= WHY CHOOSE US ================= */}

<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Image */}

    <div>
      <img
        src="/images/why-choose-us.png"
        alt="Why Choose Us"
        className="w-full"
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
        We combine innovative design, premium materials, and skilled
        craftsmanship to create elegant living and commercial spaces.
      </p>

      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-5 group">
          <img src="/icons/experience.png" className="w-14 h-14 group-hover:scale-110 transition duration-300" />
          <span className="text-lg font-semibold">20+ Years of Industry Experience</span>
        </div>

        <div className="flex items-center gap-5 group">
          <img src="/icons/quality.png" className="w-14 h-14 group-hover:scale-110 transition duration-300" />
          <span className="text-lg font-semibold">Premium Quality Materials</span>
        </div>

        <div className="flex items-center gap-5 group">
          <img src="/icons/delivery.png" className="w-14 h-14 group-hover:scale-110 transition duration-300" />
          <span className="text-lg font-semibold">On-Time Project Delivery</span>
        </div>

        <div className="flex items-center gap-5 group">
          <img src="/icons/support.png" className="w-14 h-14 group-hover:scale-110 transition duration-300" />
          <span className="text-lg font-semibold">Dedicated Customer Support</span>
        </div>

        <div className="flex items-center gap-5 group">
          <img src="/icons/design.png" className="w-14 h-14 group-hover:scale-110 transition duration-300" />
          <span className="text-lg font-semibold">Customized Design Solutions</span>
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

    <div className="overflow-hidden">

      <div className="review-scroll gap-6">

        {[
          {
            name: "Ramesh Kumar",
            review:
              "Excellent workmanship and timely delivery. Highly recommended for premium interior solutions."
          },
          {
            name: "Sowjanya Devi",
            review:
              "Very professional team. The modular kitchen exceeded our expectations."
          },
          {
            name: "Praveen Reddy",
            review:
              "Quality materials, elegant designs and excellent finishing. Worth every rupee."
          },
          {
            name: "Anil Kumar",
            review:
              "Fantastic experience from planning to execution. Great customer support."
          },
          {
            name: "Lakshmi Priya",
            review:
              "Beautiful interiors with premium quality. We are extremely happy with the outcome."
          },

          /* Duplicate for infinite scroll */

          {
            name: "Ramesh Kumar",
            review:
              "Excellent workmanship and timely delivery. Highly recommended for premium interior solutions."
          },
          {
            name: "Sowjanya Devi",
            review:
              "Very professional team. The modular kitchen exceeded our expectations."
          },
          {
            name: "Praveen Reddy",
            review:
              "Quality materials, elegant designs and excellent finishing. Worth every rupee."
          },
          {
            name: "Anil Kumar",
            review:
              "Fantastic experience from planning to execution. Great customer support."
          },
          {
            name: "Lakshmi Priya",
            review:
              "Beautiful interiors with premium quality. We are extremely happy with the outcome."
          }

        ].map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-[340px] flex-shrink-0 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-yellow-500 text-xl mb-4">
              ★★★★★
            </div>

            <p className="text-gray-600 leading-7 italic">
              "{item.review}"
            </p>

            <div className="mt-8">

              <h4 className="font-bold text-lg text-gray-900">
                {item.name}
              </h4>

              <p className="text-red-600 text-sm mt-1">
                Verified Customer
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

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

<section id="clients" className="bg-[#faf8f5] py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-red-600 font-semibold uppercase tracking-widest">
        — Our Clients —
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
        Our Featured <span className="text-red-600">Clients</span>
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
        We are proud to work with homeowners, builders, architects and
        businesses who trust Sai Lalit Interior & Exterior for quality,
        reliability and exceptional craftsmanship.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
        <div
          key={item}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex justify-center items-center h-40"
        >

          <img
            src={`https://your-logo-link-${item}.png`}
            alt="Client Logo"
            className="max-h-20 object-contain"
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
        src="https://your-logo-link.png"
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
