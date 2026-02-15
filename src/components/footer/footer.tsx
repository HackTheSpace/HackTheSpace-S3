import React from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoDiscord,
} from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="w-full bg-white text-black pt-16 pb-8 border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="w-32 md:w-40">
              <img
                src="/assets/logo/Color/main-logo.png"
                alt="Hack the space Hackathon planet"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Documents Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold font-qurova bg-clip-text text-transparent text-gradient-brand">
              Documents
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="./images/footer/Code of Conduct - HTS.pdf"
                  className="text-gray-300 hover:text-black transition-colors duration-200 text-sm md:text-base  decoration-purple-500 underline-offset-4"
                >
                  HTS - Rule Book / Code of Conduct
                </Link>
              </li>
              <li>
                <Link
                  href="https://devfolio.co/code-of-conduct"
                  className="text-gray-300 hover:text-black transition-colors duration-200 text-sm md:text-base  decoration-purple-500 underline-offset-4"
                >
                  Devfolio Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Handles Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold font-qurova bg-clip-text text-transparent text-gradient-brand">
              Social Handles
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <Link
                href="https://instagram.com/hack.the.space"
                target="_blank"
                className="text-gray-300 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full p-2 bg-white/5 backdrop-blur-sm"
              >
                <IoLogoInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/hackthespace/"
                target="_blank"
                className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] rounded-full p-2 bg-white/5 backdrop-blur-sm"
              >
                <IoLogoLinkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com/HackTheSpace_"
                target="_blank"
                className="text-gray-300 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] rounded-full p-2 bg-white/5 backdrop-blur-sm"
              >
                <IoLogoTwitter size={24} />
              </Link>
              <Link
                href="https://discord.gg/FJKTSgdxPX"
                target="_blank"
                className="text-gray-300 hover:text-indigo-500 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full p-2 bg-white/5 backdrop-blur-sm"
              >
                <IoLogoDiscord size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold font-qurova bg-clip-text text-transparent text-gradient-brand">
              Contact Us
            </h3>
            <div>
              <Link
                href="mailto:support@hackthespace.co"
                target="_blank"
                className="text-gray-300 hover:text-black transition-colors duration-200 text-sm md:text-base decoration-cyan-400 underline-offset-4"
              >
                support@hackthespace.co
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full bg-[#030014] py-6 border-t border-white/5">
        <p className="text-center text-gray-500 text-sm font-medium">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by
          the Team HackTheSpace
        </p>
      </div>
    </>
  );
};

export default Footer;
