import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";

const validationSchema = Yup.object({
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const TermsConditions: React.FC = () => {
  const { formData, updateFormData, prevStep } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    updateFormData(values);

    alert("Registration completed successfully!");
  };

  return (
    <Formik
      initialValues={{
        termsAccepted: formData.termsAccepted,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-700 mb-4">
            Please read the following terms carefully before submitting your
            information.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div>
              <h2 className="font-medium">1. Accuracy of Information</h2>
              <p className="text-sm">
                You confirm that all information provided in this form is true,
                complete, and accurate to the best of your knowledge.
              </p>
            </div>

            <div>
              <h2 className="font-medium">2. Use of Information</h2>
              <p className="text-sm">
                The details you submit will be used solely for the purpose
                stated and in accordance with our [Privacy Policy].
              </p>
            </div>

            <div>
              <h2 className="font-medium">3. Consent</h2>
              <p className="text-sm">
                By submitting this form, you consent to us storing and
                processing your information as described above.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start">
              <Field
                type="checkbox"
                name="termsAccepted"
                className={`mt-1 mr-2 ${
                  errors.termsAccepted && touched.termsAccepted
                    ? "border-red-500"
                    : ""
                }`}
              />
              <span className="text-sm">
                Please accept{" "}
                <a href="#" className="text-primary hover:underline">
                  term and conditions
                </a>
                ?
              </span>
            </label>
            <ErrorMessage
              name="termsAccepted"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="secondary" onClick={prevStep}>
              Previous
            </Button>
            <Button type="submit" variant="success">
              Finish!
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TermsConditions;
