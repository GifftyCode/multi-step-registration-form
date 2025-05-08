// Define the structure of the form data using TypeScript for type safety
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  age: number | string;
  gender: 'Male' | 'Female' | '';
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
