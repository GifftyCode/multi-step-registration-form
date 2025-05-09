import React from 'react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const verificationSchema = z.object({
  nin: z.string().min(1, 'NIN is required'),
  bvn: z.string().min(1, 'BVN is required'),
  frontId: z
    .any()
    .refine((file) => file instanceof File, 'Front ID is required'),
  backId: z.any().refine((file) => file instanceof File, 'Back ID is required'),
});

// Verification form step
const Verification: React.FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        Please provide the following information for verification purposes.
      </h3>
      <div className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register('nin')}
            placeholder="NIN"
            className="w-full p-2 border rounded"
          />
          {errors.nin && (
            <p className="text-red-500 text-sm">
              {errors.nin.message as string}
            </p>
          )}
        </div>
        <div className="flex-1">
          <input
            {...register('bvn')}
            placeholder="BVN"
            className="w-full p-2 border rounded"
          />
          {errors.bvn && (
            <p className="text-red-500 text-sm">
              {errors.bvn.message as string}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label className="block">
          Upload Front of ID (JPG, PNG, PDF — Max size: 5MB)
          <input
            type="file"
            accept=".jpg,.png,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue('frontId', file, { shouldValidate: true });
            }}
            className="w-full p-2 border rounded"
          />
        </label>
        {errors.frontId && (
          <p className="text-red-500 text-sm">
            {errors.frontId.message as string}
          </p>
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
            accept=".jpg,.png,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue('backId', file, { shouldValidate: true });
            }}
            className="w-full p-2 border rounded"
          />
        </label>
        {errors.backId && (
          <p className="text-red-500 text-sm">
            {errors.backId.message as string}
          </p>
        )}
        <p className="text-red-500 text-sm">
          * Make sure the uploaded image is clear and all text is readable
        </p>
      </div>
    </div>
  );
};

export default Verification;
