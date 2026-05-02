import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#D1D8BE30] text-[#424845] border-t border-[#D1D8BE40] rounded-2xl">
      <div className="px-6 py-16 md:pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-3">
              Tiles Gellary
            </h2>
            <p className="text-sm leading-relaxed max-w-[80%]">
              Curating artisanal surfaces where organic textures meet modern
              architectural precision.
            </p>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase tracking-[0.1em] mb-3">
              Information
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Showroom
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Socail Links */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase tracking-[0.1em] mb-3">
              Socail Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  href="https://www.facebook.com/"
                  className="hover:opacity-60 transition-opacity flex gap-2"
                >
                  <FaFacebook size={18} /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/"
                  className="hover:opacity-60 transition-opacity flex gap-2"
                >
                  <RiInstagramFill size={19} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/"
                  className="hover:opacity-60 transition-opacity flex gap-2 pl-0.5"
                >
                  <ImLinkedin size={17} />
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/"
                  className="hover:opacity-60 transition-opacity flex gap-2 pl-0.5"
                >
                  <BsTwitterX size={17} />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase tracking-[0.1em] mb-3">
              Contact Us
            </h3>
            <div className="text-sm flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <MdEmail size={20} />
                <p className="font-semibold text-xs hover:underline">
                  hasibhsb19@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-1">
                <MdCall size={20} />
                <p className="font-semibold text-xs hover:underline">
                  01616891871
                </p>
              </div>
              <div>
                <Link
                  className="flex items-center gap-1"
                  href="https://www.google.com/maps/search/tongi+station+road/@23.8935337,90.4020176,313m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <IoLocationSharp size={21} />
                  <p className="font-semibold text-xs hover:underline">
                    Tongi, Gazipur, Bangladesh.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-[#42484520] font-medium flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest">
            &copy; 2026 Tiles Gallery. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
