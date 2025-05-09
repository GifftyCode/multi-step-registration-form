import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telephone: Yup.string().required("Phone number is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  gender: Yup.string().required("Please select a gender"),
});

const PersonalInfo: React.FC = () => {
  const { formData, updateFormData, nextStep } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    updateFormData(values);
    nextStep();
  };

  return (
    <Formik
      initialValues={{
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        telephone: formData.telephone,
        age: formData.age,
        gender: formData.gender,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className={`form-input ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className={`form-input ${
                  errors.lastName && touched.lastName ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`form-input ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Telephone */}
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Telephone
              </label>
              <Field
                type="tel"
                id="telephone"
                name="telephone"
                className={`form-input ${
                  errors.telephone && touched.telephone ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="telephone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <Field
                type="number"
                id="age"
                name="age"
                className={`form-input ${
                  errors.age && touched.age ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Gender */}
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </span>
              <div className="flex items-center space-x-6 mt-2">
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="mr-2"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="mr-2"
                  />
                  <span>Female</span>
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Next</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfo;
