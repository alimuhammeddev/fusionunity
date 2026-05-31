import Image from "next/image";
import Navbar from "../component/Navbar";
import abouthero from "./assets/abouthero.jpg";
import about from "./assets/about.jpg";

export default function About() {
  return (
    <section>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={abouthero}
          alt="Program Image"
          className="w-full h-64 sm:h-112.5 md:h-137.5 object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 mt-16">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              About Us
            </h1>

            <p className="mt-4 text-sm sm:text-lg md:text-xl max-w-lg text-gray-200">
              Empowering Communities. Inspiring Hope. Creating Lasting Impact.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
              About Us
            </p>

            <div className="w-24 h-px bg-[#1C3D60] mt-3"></div>

            <p className="mt-3 text-gray-600 leading-relaxed md:text-lg">
              At Fusion Unity Empowerment Foundation, we are dedicated to
              creating positive change in the world. Our mission is to empower
              communities, inspire hope, and create lasting impact through our
              various programs and initiatives. We believe in the power of unity
              and collaboration to address pressing social issues and make a
              meaningful difference in the lives of those we serve.
              <br />
              <br />
              With a focus on education, relief initiatives, youth development,
              and sustainable support programs, we strive to uplift vulnerable
              communities and empower individuals to reach their full potential.
              Our team is passionate about creating opportunities for growth,
              fostering resilience, and building a brighter future for all.
            </p>
          </div>

          <div>
            <Image src={about} alt="About" className="rounded-xl" />
          </div>
        </div>

        <div className="mt-16">
            <div>
                <h1>Our Story</h1>
                <p></p>
            </div>
        </div>
      </div>
    </section>
  );
}
