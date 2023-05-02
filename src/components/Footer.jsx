import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-shrink-0">
          <img className="w-44" src="https://html.design/demo/famms/images/logo.png" alt="" />
          <p className="text-black font-bold text-lg mt-4">
            ADDRESS: <span className="text-gray-500 font-normal text-base">28 White tower, Street Name New York City, USA</span>
          </p>
          <p className="text-black font-bold text-lg mt-4">
            TELEPHONE: <span className="text-gray-500 font-normal text-base">+91 987 654 3210</span>
          </p>
          <p className="text-black font-bold text-lg mt-4">
            EMAIL: <span className="text-gray-500 font-normal text-base">yourmain@gmail.com</span>
          </p>
        </div>
        <div className="mt-8 mx-44 sm:mt-0">
          <div className="flex flex-col gap-6 sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-sm">
              <p className="text-gray-500 font-bold">MENU</p>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Testimonial</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="text-gray-500 font-bold">ACCOUNT</p>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="hover:text-white">Account</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Checkout</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Login</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Register</a>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="text-gray-500 font-bold">Shopping Widget</p>
              <p className="text-gray-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
