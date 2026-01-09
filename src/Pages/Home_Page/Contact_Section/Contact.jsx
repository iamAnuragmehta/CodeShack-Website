import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

export const Contact = () => {
  const SocialButton = ({ href, label, bgColor, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        aria-label={label}
      >
        {/* Button */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white
        ${bgColor}
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-lg
        group-hover:shadow-white/20`}
        >
          {children}
        </div>

        {/* Tooltip */}
        <span
          className="absolute -top-10 left-1/2 -translate-x-1/2
        bg-white text-black text-xs px-2 py-1 rounded
        opacity-0 scale-90
        transition-all duration-300
        group-hover:opacity-100 group-hover:scale-100"
        >
          {label}
        </span>
      </a>
    );
  };

  return (
    <footer className="w-screen bg-black text-white">
      <div className="mx-10 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          <div>
            <h3 className="font-semibold text-lg">CONTACT US</h3>
            <p className="text-sm py-4">
              Sir M. Visvesvaraya Institute of Technology, <br />
              International Airport Road, <br />
              Yelahanka, Bengaluru, Karnataka 562157
            </p>
            <p className="text-sm">
              glug@smvit.edu <br />
              techhub@smvit.edu
            </p>
          </div>

          <div>
            <p className="text-sm">Made with ❤ by</p>
            <span className="text-9xl">&lt;CodeShack/&gt;</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-12">
          <div>
            <p className="text-sm bottom-0 mt-4 ">
              © 2026 CodeShack. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-3">
            <SocialButton
              href="https://x.com/_techhub"
              label="Twitter"
              bgColor="bg-sky-500"
            >
              <FaTwitter />
            </SocialButton>

            <SocialButton
              href="https://www.instagram.com/techhub_community/"
              label="Instagram"
              bgColor="bg-pink-500"
            >
              <FaInstagram />
            </SocialButton>

            <SocialButton
              href="https://www.linkedin.com/company/techhub-smvit/"
              label="LinkedIn"
              bgColor="bg-blue-600"
            >
              <FaLinkedinIn />
            </SocialButton>

            <SocialButton
              href="https://discord.com"
              label="Discord"
              bgColor="bg-indigo-500"
            >
              <FaDiscord />
            </SocialButton>

            <SocialButton
              href="https://wa.me/919999999999"
              label="WhatsApp"
              bgColor="bg-green-500"
            >
              <FaWhatsapp />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
};
