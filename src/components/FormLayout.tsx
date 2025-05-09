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
            className="absolute top-0 left-0 w-16 h-16 object-contain"
          />
        </div>
        <SocialIcons />
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="max-w-5xl w-full relative">
          <div className="absolute bg-primary -left-16 top-0 w-72 bg-blue-900 rounded-lg p-8 text-white shadow-lg">
            <div className="flex justify-center mb-12">
              <div className="bg-blue-700 rounded-full p-4">
                <img
                  src="hero.png"
                  alt=""
                  className="absolute top-0 left-0 w-32 h-32 object-contain"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-4">Registration</h1>
            <p className="text-sm opacity-80">
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius.
            </p>
            <div className="absolute bottom-4 right-4">
              <FaInfoCircle size={15} />
            </div>
          </div>

          <div className="w-4/5 ml-64">
            <ProgressBar />

            <div className="bg-white rounded-lg rounded-tl-none shadow-lg p-8 border-t-0">
              {children}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-4 text-sm text-gray-500">
        <div className="flex justify-between max-w-8xl mx-auto px-4">
          <div>&copy; 2023 Mastenia</div>
          <div className="flex">
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
