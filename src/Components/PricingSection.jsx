 import React from "react";
import LOGO_FEELIZE from "../assets/LOGO_FEELIZE.png";

const PricingSection = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
       
        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-6 shadow">
          Let's Build Together
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          MVP in 2 Weeks
        </h2>
        <p className="text-6xl font-extrabold text-purple-700 mb-4">$5,999</p>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Launch your complete, polished product in just two weeks — crafted with care, speed, and precision by the Feelize team.
        </p>

        <button
          onClick={handleScrollToContact}
          className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Get Started Today <span className="text-2xl">🚀</span>
        </button>

        <div className="mt-12 w-full border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
          <div className="text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-900">Book a Call</h3>
            <p className="text-sm text-gray-500">Free 15-minute call with our core team</p>
          </div>
          <a
            href="https://calendly.com/navaj-bloch22/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-full text-base shadow-md transition-transform duration-300 hover:scale-105"
          >
            Schedule Call 📞
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
