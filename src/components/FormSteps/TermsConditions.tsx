import React from 'react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

// Schema for Step 4 validation using Zod
export const termsSchema = z.object({
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, 'You must accept the terms and conditions'),
});

// Terms & Conditions form step
const TermsConditions: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Terms and Conditions</h3>
      <p>
        Please read the following terms carefully before submitting your
        information.
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Accuracy of Information:</strong> You confirm that all
          information provided in this form is true, complete, and accurate to
          the best of your knowledge.
        </li>
        <li>
          <strong>Use of Information:</strong> The details you submit will be
          used solely for the purpose stated in accordance with our [Privacy
          Policy].
        </li>
        <li>
          <strong>Consent:</strong> By submitting this form, you consent to us
          storing and processing your information as described above.
        </li>
      </ol>
      <label className="flex items-center space-x-2">
        <input {...register('termsAccepted')} type="checkbox" />
        <span>Please accept term and conditions?</span>
      </label>
      {errors.termsAccepted && (
        <p className="text-red-500 text-sm">
          {errors.termsAccepted.message as string}
        </p>
      )}
    </div>
  );
};

export default TermsConditions;
