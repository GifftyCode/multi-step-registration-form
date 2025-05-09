import React, { type ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import SocialIcons from "./SocialIcons";
import { FaInfoCircle } from "react-icons/fa";

interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with logo and social icons */}
      <header className="bg-white px-6 py-4 flex justify-between items-center">
        <div className="logo">
          <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H40V20C40 31.0457 31.0457 40 20 40H0V0Z"
              fill="#0F2C59"
            />
            <path
              d="M15 15H55V35C55 37.7614 52.7614 40 50 40H15V15Z"
              fill="#1D4ED8"
            />
            <path
              d="M25 0H60V20C60 22.7614 57.7614 25 55 25H25V0Z"
              fill="#62CDFF"
            />
          </svg>
        </div>
        <SocialIcons />
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-row">
          {/* Left panel with title and description */}
          <div className="w-1/3 bg-primary rounded-l-lg p-8 text-white">
            <div className="mb-4">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  rx="5"
                  stroke="white"
                  strokeWidth="3"
                />
                <rect x="20" y="20" width="60" height="10" fill="white" />
                <rect x="20" y="35" width="60" height="5" fill="white" />
                <rect x="20" y="45" width="60" height="5" fill="white" />
                <rect x="20" y="55" width="30" height="5" fill="white" />
                <circle cx="65" cy="65" r="15" stroke="white" strokeWidth="3" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4">Registration</h1>
            <p className="text-sm opacity-80">
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius.
            </p>
            <div className="absolute bottom-4 right-4">
              <FaInfoCircle size={24} />
            </div>
          </div>

          {/* Right panel with form content */}
          <div className="w-2/3 bg-white rounded-r-lg p-8">
            <ProgressBar />
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        <div className="flex justify-between max-w-4xl mx-auto px-4">
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
