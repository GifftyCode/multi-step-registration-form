import { createContext, useState, type ReactNode } from "react";

export interface FormData {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  age: string;
  gender: string;

  // Step 2: Address
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  // Step 3: Verification
  nin: string;
  bvn: string;
  frontIdImage: File | null;
  backIdImage: File | null;

  // Step 4: Terms
  termsAccepted: boolean;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const initialFormData: FormData = {
  // Step 1: Personal Info
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  age: "",
  gender: "",

  // Step 2: Address
  street1: "",
  street2: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",

  // Step 3: Verification
  nin: "",
  bvn: "",
  frontIdImage: null,
  backIdImage: null,

  // Step 4: Terms
  termsAccepted: false,
};

export const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  updateFormData: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  nextStep: () => {},
  prevStep: () => {},
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
