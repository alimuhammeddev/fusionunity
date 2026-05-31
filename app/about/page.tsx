import Image from "next/image";
import Navbar from "../component/Navbar";
import abouthero from "./assets/abouthero.jpg";
import about from "./assets/about.jpg";
import { HeartHandshake, HandCoins, Users } from "lucide-react";
import CTA from "../component/Cta";
import Footer from "../component/Footer";

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
      </div>

      <div className="bg-[#F2F4F7]">
        <div className="mt-16 max-w-7xl mx-auto md:p-7 p-4">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
              Who We Are
            </p>

            <div className="w-24 h-px bg-[#1C3D60] mt-3"></div>

            <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-4">
              Building Hope Through Action
            </h2>

            <p className="mt-2 text-gray-600 leading-relaxed">
              We are committed to empowering communities through support,
              education, compassion, and sustainable development initiatives.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
            {/* Story */}
            <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-2xs transition">
              <h3 className="text-2xl font-bold text-[#1C3D60]">Our Story</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Fusion Unity Empowerment Foundation started from a desire to
                uplift vulnerable individuals and remind them they are not
                alone. What began with small community support initiatives has
                evolved into a mission-driven foundation focused on education,
                empowerment, humanitarian relief, and sustainable impact across
                communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-2xs transition">
              <h3 className="text-2xl font-bold text-[#1C3D60]">Our Vision</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                To create communities where children have access to education,
                young people have opportunities to thrive, vulnerable
                individuals live with dignity, and sustainable support systems
                create lasting change.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-2xs transition">
              <h3 className="text-2xl font-bold text-[#1C3D60]">Our Mission</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                To provide practical support through education initiatives,
                empowerment programs, humanitarian assistance, and community
                development projects that inspire hope and improve lives.
              </p>
            </div>

            {/* Duties */}
            <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-2xs transition">
              <h3 className="text-2xl font-bold text-[#1C3D60]">Our Duties</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We are committed to transparency, responsible resource
                management, and ensuring every donation reaches meaningful
                causes. Through regular updates and accountability, we build
                trust with supporters and partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl justify-center text-center mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
            Make A Difference
          </p>

          <div className="w-24 h-px bg-[#1C3D60] mt-3 text-center mx-auto"></div>

          <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-3">
            Help us reach more children, youths, and vulnerable communities
          </h2>

          <p className="mt-2 text-gray-600 leading-relaxed">
            Together, every act of support creates opportunities, restores hope,
            and changes lives.
          </p>
        </div>

        <div className="md:mt-10 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <HeartHandshake className="text-[#1C3D60] w-7 h-7" />
            </div>

            <h2 className="text-2xl font-bold text-[#1C3D60] mt-6">
              Give Hope
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Your kindness helps provide care, support, and opportunities for
              people facing difficult circumstances.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <HandCoins className="text-[#1C3D60] w-7 h-7" />
            </div>

            <h2 className="text-2xl font-bold text-[#1C3D60] mt-6">Donate</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every donation helps fund education, relief efforts, empowerment
              programs, and community projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <Users className="text-[#1C3D60] w-7 h-7" />
            </div>

            <h2 className="text-2xl font-bold text-[#1C3D60] mt-6">
              Volunteer
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Use your time, skills, and passion to help create meaningful
              change within communities.
            </p>
          </div>
        </div>
      </div>

      <div>
        <CTA />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
