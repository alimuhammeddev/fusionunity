import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import footer from "./assets/footer.png";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1C3D60] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              <Image src={footer} alt="FusionUnity" width={120} />
            </h2>

            <p className="text-gray-300 mt-5 leading-relaxed">
              Empowering communities through compassion, education, and
              sustainable support programs that create lasting change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/volunteer" className="hover:text-white transition">
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Our Programs</h3>

            <ul className="space-y-3 text-gray-300">
              <li>Child Welfare</li>
              <li>Food Relief</li>
              <li>Youth Empowerment</li>
              <li>Community Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Us</h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3 items-center">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <p>Lagos, Nigeria</p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 shrink-0" />
                <p>+234 8134448552</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 shrink-0" />
                <p>Fusionunityfoundation@gmail.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-3">
              <a
                href="https://www.instagram.com/fusionunityfoundation?"
                className="text-white hover:text-gray-300 hover:scale-110 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://x.com/fusionunityemp_?"
                className="text-white hover:text-gray-300 hover:scale-110 transition"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:mt-10 mt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 text-center">
            © 2026 FusionUnity. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Built With Love */}
        <div className="py-4 px-6">
          <p className="text-center text-base text-gray-400">
            Built with ❤️ by{" "}
            <Link href="https://alimuhammeddev.netlify.app/">
              <span className="font-medium text-white">Ali Muhammed</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
