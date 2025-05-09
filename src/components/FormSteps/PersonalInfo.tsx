import React from 'react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// Schema for Step 1 validation using Zod
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  telephone: z.string().min(1, 'Telephone is required'),
  age: z.string().min(1, 'Age is required'),
  gender: z.enum(['Male', 'Female'], { message: 'Gender is required' }),
});

// Personal Info form step
const PersonalInfo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('firstName')}
            placeholder="First name"
            className="w-full p-2 border rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">
              {errors.firstName.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('lastName')}
            placeholder="Last name"
            className="w-full p-2 border rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">
              {errors.lastName.message as string}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('telephone')}
            type="tel"
            placeholder="Your Telephone"
            className="w-full p-2 border rounded"
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm">
              {errors.telephone.message as string}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('age')}
            type="number"
            placeholder="Age"
            className="w-full p-2 border rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">
              {errors.age.message as string}
            </p>
          )}
        </div>
        <div className="flex-1 flex space-x-4">
          <label className="flex items-center space-x-2">
            <input {...register('gender')} type="radio" value="Male" />
            <span>Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input {...register('gender')} type="radio" value="Female" />
            <span>Female</span>
          </label>
          {errors.gender && (
            <p className="text-red-500 text-sm">
              {errors.gender.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
