import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";

const validationSchema = Yup.object({
  street1: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string().required("Zip code is required"),
});

const Address: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    updateFormData(values);
    nextStep();
  };

  return (
    <Formik
      initialValues={{
        street1: formData.street1,
        street2: formData.street2,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipCode: formData.zipCode,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          {/* Street 1 */}
          <div>
            <label
              htmlFor="street1"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              street 1
            </label>
            <Field
              type="text"
              id="street1"
              name="street1"
              className={`form-input ${
                errors.street1 && touched.street1 ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="street1"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Street 2 */}
          <div>
            <label
              htmlFor="street2"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              street 2
            </label>
            <Field
              type="text"
              id="street2"
              name="street2"
              className="form-input"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                className={`form-input ${
                  errors.city && touched.city ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <Field
                type="text"
                id="state"
                name="state"
                className={`form-input ${
                  errors.state && touched.state ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Select your country
              </label>
              <Field
                as="select"
                id="country"
                name="country"
                className={`form-input ${
                  errors.country && touched.country ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zip code
              </label>
              <Field
                type="text"
                id="zipCode"
                name="zipCode"
                className={`form-input ${
                  errors.zipCode && touched.zipCode ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="zipCode"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="secondary" onClick={prevStep}>
              Previous
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Address;
