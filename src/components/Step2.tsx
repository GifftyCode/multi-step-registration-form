// src/components/Step2.tsx

import React from 'react';
import type { FormData, FormErrors } from '../types/FormTypes';

interface Step2Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  errors: FormErrors;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData, errors }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="text"
            name="street1"
            placeholder="Street 1"
            value={formData.street1}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.street1 && (
            <p className="text-red-500 text-sm">{errors.street1}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="street2"
            placeholder="Street 2"
            value={formData.street2}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state}</p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="zip"
            placeholder="Zip code"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
        </div>
      </div>
    </div>
  );
};

export default Step2;
