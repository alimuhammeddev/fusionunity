import Image from "next/image";
import Navbar from "./component/Navbar";
import hero from "./assets/hero.jpg";
import {
  HeartHandshake,
  Users,
  GraduationCap,
  Stethoscope,
  House,
  HandHelping,
  BadgeDollarSign,
  Megaphone,
  Handshake,
} from "lucide-react";
import child1 from "./assets/child1.jpg";

export default function Home() {
  return (
    <section className="relative w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Background Image */}
        <Image
          src={hero}
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-20 space-y-2">
          <p className="text-white/80 text-xs sm:text-sm tracking-widest uppercase md:mb-3">
            Fusion Unity Empowerment Foundation
          </p>

          <h1 className="text-white font-extrabold leading-tight max-w-4xl md:text-6xl text-xl">
            Bringing Hope.{" "}
            <span className="text-white/80">Transforming Lives.</span>
          </h1>

          <p className="text-white md:mt-5 max-w-4xl md:text-xl font-medium leading-relaxed">
            We are dedicated to uplifting children, empowering young people,
            supporting vulnerable adults, and strengthening communities through
            compassionate and impactful support.
          </p>

          <div className="flex flex-row md:gap-10 gap-3 mt-2">
            <button className="md:mt-8 px-7 py-3 rounded-full bg-[#1C3D60] text-white font-medium hover:bg-[#2F2E31] cursor-pointer active:scale-95 transition duration-200">
              Donate Now
            </button>
            <button className="md:mt-8 px-7 py-3 rounded-full bg-[#336F7C] text-white font-medium hover:bg-[#2F2E31] cursor-pointer active:scale-95 transition duration-200">
              Get Involved
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <HeartHandshake className="text-green-600 w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold text-[#1C3D60] mb-3">
              Aid Distribution
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Learn more about our aid distribution programs and how you can
              help vulnerable communities thrive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <Users className="text-blue-600 w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold text-[#1C3D60] mb-3">
              Community Support
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Empowering families and communities through education, outreach,
              and sustainable support initiatives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <HandHelping className="text-orange-600 w-7 h-7" />
            </div>

            <h1 className="text-xl font-bold text-[#1C3D60] mb-3">
              Volunteer Programs
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Join our volunteers in creating meaningful impact and bringing
              hope to people in need.
            </p>
          </div>
        </div>

        <div>
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div>
              <p className="text-sm text-[#1C3D60] uppercase tracking-[0.3em] font-medium">
                Because We Can
              </p>

              <div className="w-24 h-px bg-[#1C3D60] mt-2"></div>

              <h1 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-6 leading-tight">
                How can we help them?
              </h1>

              <p className="text-gray-600 leading-relaxed mt-5 max-w-xl md:text-lg">
                We believe every person, regardless of background, deserves
                dignity, support, and the opportunity to live a meaningful life.
              </p>

              <button className="mt-8 px-6 py-3 bg-[#1C3D60] text-white rounded-full font-medium hover:bg-[#16324f] transition duration-300">
                Donate
              </button>
            </div>

            {/* Right Section */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <GraduationCap className="w-7 h-7 text-[#1C3D60]" />
                </div>

                <h3 className="font-semibold text-[#1C3D60] text-lg">
                  Help for Education
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Supporting children and youth with access to quality
                  education.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <HeartHandshake className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="font-semibold text-[#1C3D60] text-lg">
                  Help for Humanity
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Reaching vulnerable communities with care and compassion.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Stethoscope className="w-7 h-7 text-red-500" />
                </div>

                <h3 className="font-semibold text-[#1C3D60] text-lg">
                  Help for Medicals
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Providing medical aid and healthcare support to those in need.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <House className="w-7 h-7 text-green-600" />
                </div>

                <h3 className="font-semibold text-[#1C3D60] text-lg">
                  Help for Shelter
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Helping families with shelter, food, and clean water support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid lg:grid-cols-2 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="relative inline-block">
              <p className="text-sm text-[#1C3D60] uppercase tracking-[0.35em] font-semibold">
                Join Us in Making a Difference
              </p>

              <div className="w-24 h-[0.5px] bg-[#1C3D60] mt-2"></div>
            </div>

            <h1 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-8 leading-tight max-w-2xl">
              Step forward, serve humanity, and help create a better future.
            </h1>

            <p className="text-gray-600 leading-relaxed mt-6 max-w-2xl md:text-lg">
              Your support can bring hope, transform lives, and create
              meaningful change for vulnerable communities. Together, we can
              make a lasting impact.
            </p>

            {/* Cards */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card */}
              <div className="group bg-white border border-gray-100 hover:border-[#1C3D60] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#1C3D60] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <HandHelping className="w-6 h-6 text-[#ffffff]" />
                </div>

                <h1 className="text-lg font-semibold text-[#1C3D60]">Volunteer</h1>

                <p className="text-gray-600 leading-relaxed mt-3">
                  Join our dedicated volunteers and make a real difference in
                  the lives of people who need support the most.
                </p>
              </div>

              {/* Card */}
              <div className="group bg-white border border-gray-100 hover:border-[#1C3D60] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#1C3D60] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-6 h-6 text-[#ffffff]" />
                </div>

                <h1 className="text-lg font-semibold text-[#1C3D60]">
                  Partner with Us
                </h1>

                <p className="text-gray-600 leading-relaxed mt-3">
                  Collaborate with us to expand our impact and bring sustainable
                  change to underserved communities.
                </p>
              </div>

              {/* Card */}
              <div className="group bg-white border border-gray-100 hover:border-[#1C3D60] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#1C3D60] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <BadgeDollarSign className="w-6 h-6 text-[#ffffff]" />
                </div>

                <h1 className="text-lg font-semibold text-[#1C3D60]">
                  Sponsor a Program
                </h1>

                <p className="text-gray-600 leading-relaxed mt-3">
                  Help fund impactful programs and initiatives that directly
                  improve lives and provide hope.
                </p>
              </div>

              {/* Card */}
              <div className="group bg-white border border-gray-100 hover:border-[#1C3D60] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#1C3D60] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-6 h-6 text-[#ffffff]" />
                </div>

                <h1 className="text-lg font-semibold text-[#1C3D60]">
                  Spread Awareness
                </h1>

                <p className="text-gray-600 leading-relaxed mt-3">
                  Raise awareness about the causes we support and inspire more
                  people to join the movement for change.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute top-10 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src={child1}
                alt="Helping children"
                className="w-full h-80 sm:h-112.5 md:h-137.5 lg:h-162.5 object-cover object-center hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>

              {/* Bottom Overlay Content */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg max-w-full sm:max-w-sm">
                  <h3 className="text-[#1C3D60] font-bold text-base sm:text-lg">
                    Together We Can Change Lives
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    Every act of kindness creates hope and opens the door to a
                    brighter tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-5 left-4 sm:left-6 bg-white shadow-xl rounded-2xl px-4 py-3 sm:px-5 sm:py-4 border border-gray-100">
              <p className="text-2xl sm:text-3xl font-bold text-[#1C3D60]">
                10K+
              </p>

              <p className="text-xs sm:text-sm text-gray-500">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
