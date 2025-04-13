// we'll learn about some of the utility types in TS
// These are used everywhere — in form validation, API types, component props, etc.

// 1. Partial<T>
// Makes all properties optional.

type User = {
    name:string,
    age:number,
    email:string;
}
const updateUser = (id: string, data: Partial<User>) => {
    // You can send only some fields to update
  }; 
updateUser("123", { name: "NewName" }); // totally fine



// 2. Required<T>
// Makes all properties required, even optional ones.

type Config = {
    apiKey?: string;
    baseUrl?: string;
  };
  
  const connect = (config: Required<Config>) => {
    // You are guaranteed to get everything
  };
  
  connect({ apiKey: "abc", baseUrl: "xyz" }); //must pass all
  