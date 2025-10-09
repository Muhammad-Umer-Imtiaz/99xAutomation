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
    <div className="px-28 py-5 bg-[#8D27FF] text-white">
      {/* First Section */}
      <div className="flex justify-between py-8 border-b-2 border-white">
        <Image src="/Logo.png" alt="Logo Image" width={100} height={70} />
        <div className="space-x-6 flex">
          <input
            type="text"
            placeholder="Email Address"
            className="px-6 py-2 w-80 rounded-full outline-none shadow-lg bg-white text-black shadow-black/50 hover:shadow-black/90 "
          />
          <button className=" inline px-8 py-2 text-xl rounded-full shadow-lg bg-white text-black  shadow-black/50 hover:shadow-black/90 transition">
            Subscribe
          </button>
        </div>
      </div>
      {/* Middle Section */}
      <div className="flex justify-between items-start py-10 text-sm">
        {/* Left side – Links (80%) */}
        <ul className="w-4/5 grid grid-rows-7 grid-flow-col gap-y-6 gap-x-6 border-r border-white font-bold">
          <li>Usefull Links</li>
          <li>Home</li>
          <li>Features</li>
          <li>FAQS</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>Companies</li>
          <li>Why Choose us</li>
          <li>Ai Tools Cover</li>
          <li>Nuvora Ai</li>
          <li>Ai Tool Radar</li>
          <li>Find Ton</li>
          <li>Munsit Ai</li>
          <li>Ai Tools Hub</li>
          <li>Industries</li>
          <li>E-Commerce</li>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Education</li>
          <li>Real Estate</li>
          <li>SaaS & Tech</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policys</li>
        </ul>

        {/* Right side – Social links (20%) */}
        <div className="w-1/5 flex flex-col gap-3 mt-4 items-start space-y-4 ml-10">
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
