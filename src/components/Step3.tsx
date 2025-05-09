// src/components/Step3.tsx

import React from 'react';
import type { FormData, FormErrors } from '../types/FormTypes';

interface Step3Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  errors: FormErrors;
}

const Step3: React.FC<Step3Props> = ({ formData, setFormData, errors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : null });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Please provide the following information for verification purposes.
      </h3>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="text"
            name="nin"
            placeholder="NIN"
            value={formData.nin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.nin && <p className="text-red-500 text-sm">{errors.nin}</p>}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="bvn"
            placeholder="BVN"
            value={formData.bvn}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.bvn && <p className="text-red-500 text-sm">{errors.bvn}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="block">
          Upload Front of ID (JPG, PNG, PDF — Max size: 5MB)
          <input
            type="file"
            name="frontId"
            accept=".jpg,.png,.pdf"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
        </label>
        {errors.frontId && (
          <p className="text-red-500 text-sm">{errors.frontId}</p>
        )}
        <p className="text-red-500 text-sm">
          * Make sure the uploaded image is clear and all text is readable
        </p>
      </div>
      <div className="space-y-2">
        <label className="block">
          Upload Back of ID (JPG, PNG, PDF — Max size: 5MB)
          <input
            type="file"
            name="backId"
            accept=".jpg,.png,.pdf"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
        </label>
        {errors.backId && (
          <p className="text-red-500 text-sm">{errors.backId}</p>
        )}
        <p className="text-red-500 text-sm">
          * Make sure the uploaded image is clear and all text is readable
        </p>
      </div>
    </div>
  );
};

export default Step3;
