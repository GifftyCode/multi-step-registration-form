import React from "react";
import FormLayout from "./components/FormLayout";
import PersonalInfo from "./pages/PersonalInfo";
import Address from "./pages/Address";
import Verification from "./pages/Verification";
import TermsConditions from "./pages/TermsConditions";
import { FormProvider } from "./context/FormContext";
import { useForm } from "./hooks/useForm";

const FormContent: React.FC = () => {
  const { currentStep } = useForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Address />;
      case 3:
        return <Verification />;
      case 4:
        return <TermsConditions />;
      default:
        return <PersonalInfo />;
    }
  };

  return <>{renderStep()}</>;
};

const App: React.FC = () => {
  return (
    <FormProvider>
      <FormLayout>
        <FormContent />
      </FormLayout>
    </FormProvider>
  );
};

export default App;
