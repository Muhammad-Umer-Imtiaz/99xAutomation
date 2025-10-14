import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" lg:px-28 md:px-16 px-8 py-5 bg-[#8D27FF] text-white">
      {/* First Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-between py-8 border-b-2 border-white">
        <Image src="/Logo.png" alt="Logo Image" width={100} height={70} />
        <div className="md:space-x-6 space-x-1 flex">
          <input
            type="text"
            placeholder="Email Address"
            className="px-6 py-2 lg:w-80 md:w-60 w-48 rounded-full outline-none shadow-lg bg-white text-black shadow-black/50 hover:shadow-black/90 "
          />
          <button className=" inline lg:px-8 px-4 py-2 sm:text-xl text-base rounded-full shadow-lg bg-white text-black  shadow-black/50 hover:shadow-black/90 transition">
            Subscribe
          </button>
        </div>
      </div>
      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between items-start py-10 text-sm">
        {/* Left side – Links (80%) */}
        <div className="hidden md:flex w-full pr-4 md:w-9/12 justify-between flex-wrap gap-8 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-1 text-white font-medium">
          <ul className="space-y-2">
            <li className="text-lg font-bold mb-3">Useful Links</li>
            <li>Home</li>
            <li>Features</li>
            <li>FAQs</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-bold mb-3">Companies</li>
            <li>Why Choose Us</li>
            <li>AI Tools Cover</li>
            <li>Nuvora AI</li>
            <li>AI Tool Radar</li>
            <li>Find Ton</li>
            <li>Munsit AI</li>
            <li>AI Tools Hub</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-bold mb-3">Industries</li>
            <li>E-Commerce</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Education</li>
            <li>Real Estate</li>
            <li>SaaS & Tech</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-lg font-bold mb-3">Legal</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right side – Social links (20%) */}
        <div className="md:w-1/5 w-full flex flex-col gap-3 mt-4 items-start md:space-y-4 space-y-2 md:ml-10">
          <h3 className="font-semibold text-xl">Follow Us On</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <Twitter />
            </a>
            <a href="#" target="_blank">
              <Youtube />
            </a>
            <a href="#" target="_blank">
              <Facebook />
            </a>
          </div>
          <div className="space-y-4 text-sm ">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 " />
              <span>(+92) 3435306291</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>contact@mehditechnologies.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 " />
              <span>G-11 Markaz, Islamabad</span>
            </div>
          </div>
        </div>
      </div>
      {/* Last Section */}
      <p className="text-center pt-3 text-base border-t-2 border-white">
        © 2025 99X. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
