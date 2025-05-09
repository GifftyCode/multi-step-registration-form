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
    <div className="w-full flex justify-between mb-8">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`flex flex-col items-center ${
            currentStep === step.number ? "text-primary" : "text-gray-500"
          }`}
        >
          <div className="text-sm font-medium">{step.label}</div>
          <div className="text-xs">{step.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
