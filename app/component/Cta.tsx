import Image from "next/image";
import cta from "./assets/cta.jpg";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative mt-16">
      <div className="relative overflow-hidden">
        <Image
          src={cta}
          alt="Children receiving educational materials"
          className="w-full h-87.5 sm:h-112.5 md:h-137.5 object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20"></div>

        <div className="absolute inset-0 flex items-center md:px-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Every child deserves the tools and support to learn and succeed
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              Providing school bags, books, learning materials, toys, and
              emotional support to help children learn, grow, and thrive.
            </p>

            <Link href="/donate">
              <button className="mt-6 px-6 py-3 cursor-pointer bg-white text-[#1C3D60] rounded-full font-semibold transition duration-300">
                Support the Cause
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
