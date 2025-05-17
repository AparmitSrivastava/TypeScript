// An index signature allows you to define the shape of an object when the property names (keys) are not known in advance, but you do know the type of the keys and the type of the values.

type MyType = {
  [key: string]: string;
};
// This means:
// "This object can have any number of properties with string keys, and the values must all be strings."

type ErrorBag = {
  [field: string]: string;
};

const errors: ErrorBag = {
  email: "Invalid email",
  username: "Too short",
  password: "Must include a symbol"
};

// Use Case: Great for form validation or dynamic error messages.

// All keys must be strings ,All values must be strings

const invalid: ErrorBag = {
//   age: 30 //  Error: number is not assignable to string
};