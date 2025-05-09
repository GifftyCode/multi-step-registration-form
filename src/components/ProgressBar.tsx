import React from "react";
import { useForm } from "../hooks/useForm";

interface StepInfo {
  number: number;
  label: string;
  description: string;
}

const steps: StepInfo[] = [
  { number: 1, label: "Step 1", description: "Personal Info" },
  { number: 2, label: "Step 2", description: "Address" },
  { number: 3, label: "Step 3", description: "Verification" },
  { number: 4, label: "Step 4", description: "Terms & Conditions" },
];

const ProgressBar: React.FC = () => {
  const { currentStep } = useForm();

  return (
    <div className="flex mb-0 mt-4">
      {steps.map((step) => {
        const isActive = currentStep === step.number;

        return (
          <div
            key={step.number}
            className={`flex-2 text-center py-3 px-4 border border-gray-200 ${
              isActive
                ? "bg-white border-b-0 rounded-t-md"
                : "bg-[rgb(85, 149, 223)]"
            }`}
          >
            <div
              className={`font-medium ${
                isActive ? "text-black" : "text-gray-500"
              }`}
            >
              {step.label}
            </div>
            <div
              className={`text-sm ${
                isActive ? "text-gray-700" : "text-gray-400"
              }`}
            >
              {step.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
