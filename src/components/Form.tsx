// src/components/Form.tsx

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import type { FormData, FormErrors } from '../types/FormTypes';

const Form: React.FC = () => {
  // State to track the current step (1 to 4)
  const [currentStep, setCurrentStep] = useState(1);

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    age: '',
    gender: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    nin: '',
    bvn: '',
    frontId: null,
    backId: null,
    termsAccepted: false,
  });

  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Simple validation function for each step
  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.telephone) newErrors.telephone = 'Telephone is required';
      if (!formData.age) newErrors.age = 'Age is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    } else if (currentStep === 2) {
      if (!formData.street1) newErrors.street1 = 'Street 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.country) newErrors.country = 'Country is required';
      if (!formData.zip) newErrors.zip = 'Zip code is required';
    } else if (currentStep === 3) {
      if (!formData.nin) newErrors.nin = 'NIN is required';
      if (!formData.bvn) newErrors.bvn = 'BVN is required';
      if (!formData.frontId) newErrors.frontId = 'Front ID is required';
      if (!formData.backId) newErrors.backId = 'Back ID is required';
    } else if (currentStep === 4) {
      if (!formData.termsAccepted)
        newErrors.termsAccepted = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle moving to the next step
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
      setErrors({}); // Clear errors when moving to the next step
    }
  };

  // Handle moving to the previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({}); // Clear errors when moving back
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateStep()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Form Content */}
      <div className="flex-1 flex flex-col justify-center p-6">
        {/* Step Indicators */}
        <div className="flex justify-around mb-6 text-sm">
          <div
            className={`text-center ${currentStep === 1 ? 'text-blue-800 font-bold' : 'text-gray-500'}`}
          >
            Step 1<br />
            PERSONAL INFO
          </div>
          <div
            className={`text-center ${currentStep === 2 ? 'text-blue-800 font-bold' : 'text-gray-500'}`}
          >
            Step 2<br />
            ADDRESS
          </div>
          <div
            className={`text-center ${currentStep === 3 ? 'text-blue-800 font-bold' : 'text-gray-500'}`}
          >
            Step 3<br />
            VERIFICATION
          </div>
          <div
            className={`text-center ${currentStep === 4 ? 'text-blue-800 font-bold' : 'text-gray-500'}`}
          >
            Step 4<br />
            TERMS & CONDITIONS
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
          {currentStep === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 4 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            {currentStep > 1 && (
              <button
                onClick={prevStep} // Fixed the typo
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                PREVIOUS
              </button>
            )}
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
              >
                NEXT
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
              >
                FINISH!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
