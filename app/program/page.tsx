import Navbar from "../component/Navbar";
import Image from "next/image";
import programhero from "./assets/programhero.jpg";
import CTA from "../component/Cta";
import Footer from "../component/Footer";
import Link from "next/link";

export default function Program() {
  return (
    <section>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={programhero}
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
              Our Programs
            </h1>

            <p className="mt-4 text-sm sm:text-lg md:text-xl max-w-lg text-gray-200">
              Empowering communities through education, relief initiatives,
              youth development, and sustainable support programs.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
            What We Do
          </p>

          <div className="w-24 h-px bg-[#1C3D60] mt-3"></div>

          <h2 className="text-xl md:text-5xl font-bold text-[#1C3D60] mt-4">
            Programs Creating Real Impact
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed md:text-lg">
            Through targeted initiatives and sustainable programs, we support
            vulnerable communities, empower individuals, and create
            opportunities for long-term growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Program 1 */}
          <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-xl transition">
            <span className="text-sm font-semibold text-[#1C3D60]">01</span>

            <h3 className="md:text-2xl text-xl font-bold text-[#1C3D60] mt-4">
              Child Welfare & Education
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We support children through educational materials, mentorship,
              school assistance, and programs designed to ensure every child has
              opportunities to succeed.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• School materials distribution</li>
              <li>• Mentorship programs</li>
              <li>• Child protection initiatives</li>
              <li>• Learning support services</li>
            </ul>

            <div className="mt-8">
              <Link href="/donate">
                <button className="px-4 py-3 bg-[#1C3D60] text-white rounded-xl hover:bg-[#16324f] transition duration-300">
                  Donate to Child Welfare
                </button>
              </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-xl transition">
            <span className="text-sm font-semibold text-[#1C3D60]">02</span>

            <h3 className="md:text-2xl text-xl font-bold text-[#1C3D60] mt-4">
              Food Relief & Emergency Support
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Providing immediate relief to families experiencing hardship
              through food support, emergency aid, and community assistance.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Food distribution drives</li>
              <li>• Emergency response support</li>
              <li>• Family assistance programs</li>
              <li>• Community outreach initiatives</li>
            </ul>

            <div className="mt-8">
              <Link href="/donate">
                <button className="px-4 py-3 bg-[#1C3D60] text-white rounded-xl hover:bg-[#16324f] transition duration-300">
                  Donate to Food Relief
                </button>
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-xl transition">
            <span className="text-sm font-semibold text-[#1C3D60]">03</span>

            <h3 className="md:text-2xl text-xl font-bold text-[#1C3D60] mt-4">
              Youth Empowerment & Skills Development
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Helping young people build independence through training,
              mentorship, and skill-building opportunities.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Vocational training</li>
              <li>• Leadership development</li>
              <li>• Skills workshops</li>
              <li>• Entrepreneurship support</li>
            </ul>

            <div className="mt-8">
              <Link href="/donate">
                <button className="px-4 py-3 bg-[#1C3D60] text-white rounded-xl hover:bg-[#16324f] transition duration-300">
                  Donate to Youth Empowerment
                </button>
              </Link>
            </div>
          </div>

          {/* Program 4 */}
          <div className="bg-white rounded-3xl md:p-8 p-5 shadow-sm border border-gray-100 hover:shadow-xl transition">
            <span className="text-sm font-semibold text-[#1C3D60]">04</span>

            <h3 className="md:text-2xl text-xl font-bold text-[#1C3D60] mt-4">
              Community & Vulnerable Support
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Supporting widows, widowers, elderly individuals, and vulnerable
              groups with resources and community programs.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Community care initiatives</li>
              <li>• Support groups</li>
              <li>• Resource distribution</li>
              <li>• Social welfare programs</li>
            </ul>

            <div className="mt-8">
              <Link href="/donate">
                <button className="px-4 py-3 bg-[#1C3D60] text-white rounded-xl hover:bg-[#16324f] transition duration-300">
                  Donate to Community Support
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-10 bg-[#1C3D60] rounded-2xl p-10 md:p-14 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="mt-2 text-gray-300">Lives Reached</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">30+</h3>
              <p className="mt-2 text-gray-300">Communities</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">150+</h3>
              <p className="mt-2 text-gray-300">Volunteers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2 text-gray-300">Projects Completed</p>
            </div>
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
