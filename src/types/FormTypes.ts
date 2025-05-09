export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  age: string;
  gender: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  nin: string;
  bvn: string;
  frontId: File | null;
  backId: File | null;
  termsAccepted: boolean;
}

// New type for error messages
export type FormErrors = {
  [K in keyof FormData]?: string; // Each field can have a string error message or be undefined
};
