import Image from "next/image";
import Navbar from "../component/Navbar";
import vhero from "./assets/vhero.jpg";
import {
  Baby,
  HandHeart,
  Briefcase,
  GraduationCap,
  Users,
  Droplets,
  Camera,
  HeartHandshake,
} from "lucide-react";
import pic from "./assets/pic.jpg";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import CTA from "../component/Cta";
import Footer from "../component/Footer";

export default function Volunteer() {
  return (
    <section>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={vhero}
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
              Become a Volunteer
            </h1>

            <p className="mt-4 text-sm sm:text-lg md:text-xl max-w-lg text-gray-200">
              Join us in making a difference! Volunteer your time and skills to
              support our mission and create a positive impact in the lives of
              those we serve.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
            Volunteer With Us
          </p>

          <div className="w-24 h-px bg-[#1C3D60] mt-3 mx-auto"></div>

          <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-2">
            Why Join Fusion Unity Empowerment Foundation?
          </h2>

          <p className="mt-2 text-gray-600">
            Become part of a mission focused on creating meaningful impact and
            transforming lives.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <HandHeart className="text-[#1C3D60]" />
            </div>

            <h3 className="mt-3 md:text-2xl text-xl font-semibold text-[#1C3D60]">
              Create Real Impact
            </h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              Support initiatives that directly improve lives through education,
              relief support, and community outreach.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <Briefcase className="text-[#1C3D60]" />
            </div>

            <h3 className="mt-3 md:text-2xl text-xl font-semibold text-[#1C3D60]">
              Use Your Skills
            </h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              Apply your experience in education, healthcare, technology,
              administration, and more to support communities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <GraduationCap className="text-[#1C3D60]" />
            </div>

            <h3 className="mt-3 md:text-2xl text-xl font-semibold text-[#1C3D60]">
              Build Valuable Experience
            </h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              Gain practical experience in humanitarian work, leadership,
              teamwork, and community development.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-2xl bg-[#1C3D60]/10 flex items-center justify-center">
              <Users className="text-[#1C3D60]" />
            </div>

            <h3 className="mt-3 md:text-2xl text-xl font-semibold text-[#1C3D60]">
              Join Community Outreach
            </h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              Participate in outreach events and initiatives that bring support
              directly to people who need it most.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
            Volunteer Roles
          </p>

          <div className="w-24 h-px bg-[#1C3D60] mt-3 mx-auto"></div>

          <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-2">
            Available Volunteer Opportunities
          </h2>

          <p className="mt-2 text-gray-600">
            Find a role that matches your skills, passion, and desire to create
            impact.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Baby className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Children Outreach Team
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <GraduationCap className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Youth Empowerment Assistants
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <HeartHandshake className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Family Support Volunteers
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Droplets className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Water Project Volunteers
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Camera className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Media & Documentation Volunteers
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <Briefcase className="text-[#1C3D60] w-8 h-8" />
            <h3 className="font-semibold text-[#1C3D60]">
              Administrative & Logistics Volunteers
            </h3>
          </div>
        </div>
      </div>

      <div className="md:mt-20 mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
            Support Our Mission
          </p>

          <div className="w-24 h-px bg-[#1C3D60] mt-3"></div>

          <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-2">
            Empower Lives Today. Build Stronger Communities Tomorrow.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic}
              alt="Community Support"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic1}
              alt="Outreach Program"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic2}
              alt="Education Support"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic3}
              alt="Volunteer Activities"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic4}
              alt="Community Outreach"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src={pic5}
              alt="Impact Programs"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text Section */}
          <div className="bg-[#1C3D60] rounded-3xl md:p-10 p-5 text-white order-1 lg:order-1">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300">
              Join Our Mission
            </p>

            <h2 className="text-xl md:text-3xl font-bold mt-2">
              Become a Volunteer Today
            </h2>

            <p className="mt-2 text-gray-200 leading-relaxed">
              Volunteers play a key role in our mission. By joining us, you help
              bring education, relief, and hope to vulnerable communities.
            </p>

            <div className="mt-5 space-y-5">
              <div className="border-l-2 border-white pl-4">
                <h3 className="font-semibold text-lg">Flexible Roles</h3>
                <p className="text-gray-300 mt-1">
                  Choose opportunities that match your time and skills.
                </p>
              </div>

              <div className="border-l-2 border-white pl-4">
                <h3 className="font-semibold text-lg">Real Impact</h3>
                <p className="text-gray-300 mt-1">
                  See the difference your support creates in real communities.
                </p>
              </div>

              <div className="border-l-2 border-white pl-4">
                <h3 className="font-semibold text-lg">Community Driven</h3>
                <p className="text-gray-300 mt-1">
                  Work with passionate people committed to change.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-3xl shadow-lg md:p-8 p-5 border border-gray-100 order-2 lg:order-2">
            <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
              Volunteer Form
            </p>

            <h2 className="text-xl font-semibold text-[#1C3D60] mt-2">
              Register Now
            </h2>

            <form className="mt-4 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <input
                type="text"
                placeholder="Address Line"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]">
                <option>Select Volunteer Role</option>
                <option>Children Outreach Team</option>
                <option>Youth Empowerment Assistants</option>
                <option>Family Support Volunteers</option>
                <option>Water Project Volunteers</option>
                <option>Media & Documentation</option>
                <option>Administrative & Logistics</option>
              </select>

              <textarea
                rows={5}
                placeholder="Why do you want to volunteer?"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <button className="w-full bg-[#1C3D60] text-white py-4 rounded-xl font-semibold hover:bg-[#16324f] transition">
                Submit Application
              </button>
            </form>
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
