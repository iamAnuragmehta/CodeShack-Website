import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();

  const isMembersPage = location.pathname === "/members";
  // treat both the blogs listing and blog detail routes as blog pages
  const isBlogsPage =
    location.pathname === "/blogs" || location.pathname.startsWith("/blog/");
  const isBlogsDetailPage = location.pathname === "/blog/:blogId";

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
    <footer
      className={`min-h-100 px-4 sm:px-6 py-12 sm:py-16 bg-tech-grid ${
        isMembersPage || isBlogsPage || isBlogsDetailPage ? "bg-black" : ""
      }`}
    >
      <section className="relative">
        <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2
    w-[1200px] h-[400px] bg-orange-500/40 blur-[150px]"
        />
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="font-semibold text-lg sm:text-xl">CONTACT US</h3>
            <p className="text-xs sm:text-sm py-4">
              Sir M. Visvesvaraya Institute of Technology, <br />
              International Airport Road, <br />
              Yelahanka, Bengaluru, Karnataka 562157
            </p>
            <p className="text-xs sm:text-sm">
              glug@smvit.edu <br />
              techhub@smvit.edu
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center">
            <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">
              &lt;CodeShack/&gt;
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 sm:mt-12">
          <div>
            <p className="text-xs sm:text-sm">
              © 2026 CodeShack. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <SocialButton
              href="https://x.com/_techhub"
              label="Twitter"
              bgColor="bg-sky-500"
            >
              <FaTwitter size={16} />
            </SocialButton>

            <SocialButton
              href="https://www.instagram.com/techhub_community/"
              label="Instagram"
              bgColor="bg-pink-500"
            >
              <FaInstagram size={16} />
            </SocialButton>

            <SocialButton
              href="https://www.linkedin.com/company/techhub-smvit/"
              label="LinkedIn"
              bgColor="bg-blue-600"
            >
              <FaLinkedinIn size={16} />
            </SocialButton>

            <SocialButton
              href="https://discord.com"
              label="Discord"
              bgColor="bg-indigo-500"
            >
              <FaDiscord size={16} />
            </SocialButton>

            <SocialButton
              href="https://wa.me/919999999999"
              label="WhatsApp"
              bgColor="bg-green-500"
            >
              <FaWhatsapp size={16} />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
};
