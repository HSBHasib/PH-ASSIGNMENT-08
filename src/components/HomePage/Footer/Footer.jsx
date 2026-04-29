import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-[#D1D8BE30] text-[#424845] border-t border-[#D1D8BE40] rounded-2xl">
      <div className="px-6 py-16 md:pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-3">
              Tiles Gallery
            </h2>
            <p className="text-sm leading-relaxed max-w-[80%]">
              Curating artisanal surfaces where organic textures meet modern
              architectural precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase tracking-[0.1em] mb-3">
              Collections
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Carrara Classic
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Azure Mosaic
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Desert Clay
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Nordic Slate
                </Link>
              </li>
            </ul>
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

          {/* Contact Us Section */}
          <div className="col-span-1">
            <h3 className="text-[16px] font-bold uppercase tracking-[0.1em] mb-3">
              Contact Us
            </h3>
            <div className="text-sm flex gap-6">
              <div className="flex items-start space-x-3">
                <Link href='https://www.facebook.com/'>
                  <FaFacebook size={24}/>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Link href='https://www.linkedin.com/'>
                  <ImLinkedin size={22}/>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Link href='https://x.com/'>
                  <BsTwitterX size={22}/>
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
