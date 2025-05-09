import React from 'react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

// Schema for Step 2 validation using Zod
export const addressInfoSchema = z.object({
  street1: z.string().min(1, 'Street 1 is required'),
  street2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  zip: z.string().min(1, 'Zip code is required'),
});

// Address Info form step
const AddressInfo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('street1')}
            placeholder="Street 1"
            className="w-full p-2 border rounded"
          />
          {errors.street1 && (
            <p className="text-red-500 text-sm">
              {errors.street1.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('street2')}
            placeholder="Street 2"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('city')}
            placeholder="City"
            className="w-full p-2 border rounded"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">
              {errors.city.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('state')}
            placeholder="State"
            className="w-full p-2 border rounded"
          />
          {errors.state && (
            <p className="text-red-500 text-sm">
              {errors.state.message as string}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <select
            {...register('country')}
            className="w-full p-2 border rounded"
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">
              {errors.country.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('zip')}
            placeholder="Zip code"
            className="w-full p-2 border rounded"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">
              {errors.zip.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
