import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">MyShop</h3>
          <p className="text-sm text-gray-400">
            Your destination for the best products online.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5 text-xl">
            <a
              href="#"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} MyShop. All Rights Reserved.
      </div>
    </footer>
  );
}
