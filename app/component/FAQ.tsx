"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How can I become a volunteer?",
      answer:
        "You can register through our volunteer form. Once submitted, our team will contact you with available opportunities.",
    },
    {
      question: "How do I make a donation?",
      answer:
        "You can donate directly through our bank details on the donation page or contact us for more guidance.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "All donations are used for education support, community outreach, relief programs, and empowerment initiatives.",
    },
    {
      question: "Can I partner with your foundation?",
      answer:
        "Yes, we welcome partnerships from individuals, organizations, and companies aligned with our mission.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#1C3D60] font-medium">
          FAQs
        </p>

        <div className="w-24 h-px bg-[#1C3D60] mt-3 mx-auto"></div>

        <h2 className="text-xl md:text-3xl font-bold text-[#1C3D60] mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-7 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center"
            >
              <span className="font-semibold text-[#1C3D60]">
                {faq.question}
              </span>

              <span className="text-[#1C3D60] text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
