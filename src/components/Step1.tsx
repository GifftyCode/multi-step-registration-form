// src/components/Step1.tsx

import React from 'react';
import type { FormData, FormErrors } from '../types/FormTypes';

interface Step1Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  errors: FormErrors;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, errors }) => {
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
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            type="tel"
            name="telephone"
            placeholder="Your Telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm">{errors.telephone}</p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div className="flex-1 flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <span>Female</span>
          </label>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
