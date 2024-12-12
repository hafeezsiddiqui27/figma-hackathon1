
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const PricingFAQs = () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "How does the pricing structure work?",
      answer:
        "Pricing is based on a flexible model that adapts to your needs. We offer monthly, yearly, and one-time payment options to suit various requirements.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, plans can be easily upgraded or downgraded based on your usage. Changes take effect immediately without any disruption to your service.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "We offer a 30-day money-back guarantee for all our subscription plans. If you're not satisfied, you can request a full refund.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, our pricing is transparent. All charges are clearly mentioned in the invoice, and you will never be billed for any hidden fees.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes, our dedicated support team is available 24/7 to assist you with any issues or queries you may have.",
    },
  ];

  return (
    <div className="mt-10 py-10 px-4 flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="w-full max-w-[1024px] text-center mb-8">
        <h2 className="text-[#252B42] font-bold text-[28px] sm:text-[36px]">
          Pricing FAQs
        </h2>
        <p className="text-[#737373] text-[14px] sm:text-[18px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* FAQ Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[1024px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-start gap-2">
              <FiChevronRight className="text-[#23A6F0] text-[20px] sm:text-[25px]" />
              <h3 className="text-[#252B42] font-bold text-[16px] sm:text-[18px]">
                {faq.question}
              </h3>
            </div>
            <p className="text-[#737373] text-[14px] mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <p className="text-[#737373] text-[14px] sm:text-[16px] mt-10 text-center w-full max-w-[1024px]">
        Haven&apos;t got your answer?{" "}
        <span className="text-[#23A6F0] ml-1 font-bold cursor-pointer hover:underline">
          Contact our support
        </span>
      </p>
    </div>
  );
};

export default PricingFAQs;
