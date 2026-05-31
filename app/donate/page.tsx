"use client";

import Image from "next/image";
import Navbar from "../component/Navbar";
import donatehero from "./assets/donatehero.jpg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import love from "./assets/love.jpg";

import "swiper/css";
import { CircleCheck } from "lucide-react";
import Footer from "../component/Footer";

export default function Donate() {
  return (
    <section>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={donatehero}
          alt="Program Image"
          className="w-full h-80 sm:h-112.5 md:h-137.5 object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 mt-16">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Give Hope. Change Lives.
            </h1>

            <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200">
              Your donation to Fusion Unity Empowerment Foundation supports
              education, empowerment, relief, and brighter futures for
              vulnerable communities.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-col gap-10 items-center">
          {/* Swiper */}
          <div className="order-2 lg:order-1 overflow-hidden rounded-xl shadow-xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="rounded-xl"
            >
              <SwiperSlide>
                <Image
                  src={slide1}
                  alt="Donation Impact"
                  className="w-full h-112.5 object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={slide2}
                  alt="Community Support"
                  className="w-full h-112.5 object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Donation Details */}
          <div className="order-1 lg:order-2 bg-[#1C3D60] text-white rounded-xl p-5 shadow-xl">
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300">
              Support Our Mission
            </p>

            <h2 className="text-xl md:text-3xl font-bold mt-2">Donate Today</h2>

            <p className="mt-3 text-gray-200 leading-relaxed">
              Every donation supports education, empowerment, relief programs,
              and community development initiatives.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Bank Name</p>
                <h3 className="text-xl font-semibold">Fusion Unity Bank</h3>
              </div>

              <div>
                <p className="text-gray-300 text-sm">Account Number</p>
                <h3 className="text-xl font-bold tracking-wider">1234567890</h3>
              </div>

              <div>
                <p className="text-gray-300 text-sm">Account Name</p>
                <h3 className="md:text-lg text-base font-semibold">
                  Fusion Unity Empowerment Foundation
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
                Why Your Support Matters
              </p>

              <div className="w-24 h-px bg-[#1C3D60] mt-3"></div>

              <h2 className="text-2xl md:text-4xl font-bold text-[#1C3D60] mt-4">
                Every Contribution Creates Impact
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Your donations help us provide essential support and create
                lasting opportunities for vulnerable communities.
              </p>
            </div>

            <div className="mt-3 space-y-3">
              <div className="flex gap-2 items-center">
                <CircleCheck className="text-[#1C3D60] min-w-6 mt-1" />
                <p className="text-gray-700">
                  School supplies, learning materials, and essentials for
                  children
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <CircleCheck className="text-[#1C3D60] min-w-6 mt-1" />
                <p className="text-gray-700">
                  Vocational and digital skills training for young people
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <CircleCheck className="text-[#1C3D60] min-w-6 mt-1" />
                <p className="text-gray-700">
                  Food support, healthcare, and clothing for widows and
                  vulnerable families
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <CircleCheck className="text-[#1C3D60] min-w-6 mt-1" />
                <p className="text-gray-700">
                  Clean water initiatives that improve entire communities
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <CircleCheck className="text-[#1C3D60] min-w-6 mt-1" />
                <p className="text-gray-700">
                  Emergency relief and humanitarian support during crises
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image src={love} alt="Love" className="rounded-xl" />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
