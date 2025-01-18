"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      {/* Header Section */}
      <div className="flex flex-col bg-[#FAFAFA] text-gray-700 py-6 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Content Wrapper */}
        <div className="flex flex-wrap justify-between items-start space-y-6 md:space-y-0 md:flex-row">
          {/* Social Icons Section */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-6 md:space-x-16">
            <div>
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    User Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    iOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row ">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2  border border-gray-300  w-1/2 md:w-full rounded-t-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 w-1/3 md:w-full  rounded-b-md hover:bg-blue-600"
              >
                Subscribe
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-400 flex flex-row md:flex-col">
          Made With Love By Finland &bull;<span> All Rights Reserved </span>
        </div>
      </div>

      {/* Mobile Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
