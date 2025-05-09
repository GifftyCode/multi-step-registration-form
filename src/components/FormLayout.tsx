import React, { type ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import SocialIcons from "./SocialIcons";
import { FaInfoCircle } from "react-icons/fa";

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <header className="bg-white px-6 py-4 flex justify-between items-center">
        <div className="logo">
          <img
            src="logo.png"
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>
        <SocialIcons />
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="max-w-5xl w-full relative flex flex-col md:flex-row">
          <div className="bg-blue-900 rounded-lg p-6 md:p-8 text-white shadow-lg mb-6 md:mb-0 md:absolute md:-left-16 md:top-0 w-full md:w-72">
            <div className="flex justify-center mb-4 md:mb-12">
              <img
                src="hero.png"
                alt=""
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold mb-2">Registration</h1>
            <p className="text-xs md:text-sm opacity-80">
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius.
            </p>
            <div className="hidden md:block absolute bottom-4 right-4">
              <FaInfoCircle size={15} />
            </div>
          </div>

          <div className="w-full md:w-4/5 md:ml-64 mt-4 md:mt-0">
            <ProgressBar />
            <div className="bg-white rounded-lg rounded-tl-none shadow-lg p-6 md:p-8 border-t-0">
              {children}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-4 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between max-w-8xl mx-auto px-4 text-center md:text-left">
          <div>&copy; 2023 Mastenia</div>
          <div className="flex mt-2 md:mt-0 justify-center md:justify-start">
            <a href="#" className="hover:text-primary mr-4">
              Purchase Template
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary ml-4">
              Contacts
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormLayout;
