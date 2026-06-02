"use client";

import {  useState } from "react";
import Image from "next/image";
import CTA from "../component/Cta";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Phone, Mail, MapPin } from "lucide-react";
import chero from "./assets/chero.jpg";

export default function Contact() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailTo = "Fusionunityfoundation@gmail.com";
    const subjectText = subject || "Contact form message";
    const body = `Name: ${fullName}\nEmail: ${email}\nSubject: ${subjectText}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${mailTo}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={chero}
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
              Contact Us
            </h1>

            <p className="mt-4 text-sm sm:text-lg md:text-xl max-w-lg text-gray-200">
              We would love to hear from you. Reach out to us for partnerships,
              volunteering, donations, or general inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="md:text-3xl text-2xl font-bold text-[#1C3D60]">
              Get In Touch
            </h2>

            <p className="mt-2 text-gray-600">
              We are always open to discussions about community impact,
              volunteering, and support programs.
            </p>

            <div className="mt-5 space-y-6">
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                <Phone className="text-[#1C3D60]" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-[#1C3D60]">
                    +234 8134448552
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                <Mail className="text-[#1C3D60]" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-[#1C3D60]">
                    Fusionunityfoundation@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                <MapPin className="text-[#1C3D60]" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-semibold text-[#1C3D60]">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm md:p-8 p-5 border border-gray-100">
            <h2 className="text-xl font-semibold text-[#1C3D60]">
              Send Us a Message
            </h2>

            <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName ?? ""}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email ?? ""}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={subject ?? ""}
                onChange={(event) => setSubject(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                value={message ?? ""}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#1C3D60]"
                required
              />

              <button type="submit" className="w-full bg-[#1C3D60] text-white py-4 rounded-xl font-semibold hover:bg-[#16324f] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 py-10">
        <FAQ />
        <div className="text-center p-6">
          <h3 className="text-xl md:text-3xl font-semibold text-[#1C3D60]">
            Together, we can make a difference
          </h3>

          <p className="mt-2 text-gray-600">
            Your message could be the start of something impactful.
          </p>
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
