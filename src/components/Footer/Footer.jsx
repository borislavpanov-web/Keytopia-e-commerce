import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-black py-5 font-play text-center">
      <hr className="border border-black my-4" />
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/3">
          <p className="text-sm">Developed By</p>
          <a
            href="https://github.com/borislavpanov-web/"
            className="text-black-300 hover:text-blue-500 transition duration-500"
          >
            Borislav Panov
          </a>
        </div>
        <div className="w-full md:w-1/3 mt-4">
          <ul className="flex justify-center items-center list-none">
            <li className="inline-block mr-6">
              <a
                href=""
                className="text-black-300 hover:text-blue-500 transition duration-500"
              >
                Privacy Policy
              </a>
            </li>
            <li className="inline-block mr-6">
              <a
                href=""
                className="text-black-300 hover:text-blue-500 transition duration-500"
              >
                Contact Us
              </a>
            </li>
            <li className="inline-block">
              <a
                href=""
                className="text-black-300 hover:text-blue-500 transition duration-500"
              >
                T&C
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
