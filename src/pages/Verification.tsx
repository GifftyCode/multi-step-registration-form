import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";
import { FaCheckCircle } from "react-icons/fa";

const validationSchema = Yup.object({
  nin: Yup.string().required("NIN is required"),
  bvn: Yup.string().required("BVN is required"),
  frontIdImageUploaded: Yup.boolean().oneOf(
    [true],
    "Front ID image is required"
  ),
  backIdImageUploaded: Yup.boolean().oneOf([true], "Back ID image is required"),
});

const Verification: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();
  const [frontIdImageUploaded, setFrontIdImageUploaded] = useState(
    !!formData.frontIdImage
  );
  const [backIdImageUploaded, setBackIdImageUploaded] = useState(
    !!formData.backIdImage
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    updateFormData({
      nin: values.nin,
      bvn: values.bvn,
    });
    nextStep();
  };

  const handleFrontIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      updateFormData({ frontIdImage: file });
      setFrontIdImageUploaded(true);
    }
  };

  const handleBackIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      updateFormData({ backIdImage: file });
      setBackIdImageUploaded(true);
    }
  };

  return (
    <Formik
      initialValues={{
        nin: formData.nin,
        bvn: formData.bvn,
        frontIdImageUploaded: frontIdImageUploaded,
        backIdImageUploaded: backIdImageUploaded,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="space-y-6">
          <h2 className="text-lg font-medium mb-4">
            Please provide the following information for verification purposes.
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* NIN */}
            <div>
              <label
                htmlFor="nin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NIN
              </label>
              <Field
                type="text"
                id="nin"
                name="nin"
                className={`form-input ${
                  errors.nin && touched.nin ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="nin"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* BVN */}
            <div>
              <label
                htmlFor="bvn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                BVN
              </label>
              <Field
                type="text"
                id="bvn"
                name="bvn"
                className={`form-input ${
                  errors.bvn && touched.bvn ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="bvn"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Front ID Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Front of ID (JPG, PNG, PDF — Max size: 5MB)
            </label>
            <div
              className={`border-2 border-dashed ${
                errors.frontIdImageUploaded && touched.frontIdImageUploaded
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg p-6 text-center`}
            >
              {frontIdImageUploaded ? (
                <div className="flex items-center justify-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  <span>File uploaded successfully</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("frontIdImage")?.click()
                  }
                  className="text-primary hover:text-primary-hover"
                >
                  [Choose file]
                </button>
              )}
              <input
                type="file"
                id="frontIdImage"
                name="frontIdImage"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  handleFrontIdChange(e);
                  setFieldValue("frontIdImageUploaded", true);
                }}
              />
            </div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-red-500 mr-1">✓</span>
              <span>
                Make sure the uploaded image is clear and all text is readable
              </span>
            </div>
            <ErrorMessage
              name="frontIdImageUploaded"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Back ID Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Back of ID (JPG, PNG, PDF — Max size: 5MB)
            </label>
            <div
              className={`border-2 border-dashed ${
                errors.backIdImageUploaded && touched.backIdImageUploaded
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg p-6 text-center`}
            >
              {backIdImageUploaded ? (
                <div className="flex items-center justify-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  <span>File uploaded successfully</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("backIdImage")?.click()
                  }
                  className="text-primary hover:text-primary-hover"
                >
                  [Choose file]
                </button>
              )}
              <input
                type="file"
                id="backIdImage"
                name="backIdImage"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => {
                  handleBackIdChange(e);
                  setFieldValue("backIdImageUploaded", true);
                }}
              />
            </div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-red-500 mr-1">✓</span>
              <span>
                Make sure the uploaded image is clear and all text is readable
              </span>
            </div>
            <ErrorMessage
              name="backIdImageUploaded"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
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

export default Verification;
