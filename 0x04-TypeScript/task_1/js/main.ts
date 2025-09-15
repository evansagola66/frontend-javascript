// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // can only be set during initialization
  readonly lastName: string;  // can only be set during initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined
  [key: string]: any;         // allow any other attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property not defined in interface but allowed
};

console.log(teacher3);
