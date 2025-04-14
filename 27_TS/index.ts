// 3. Pick<T, K>
// Pick specific keys from a type.

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
  type PublicUser = Pick<User, "id" | "name">;
  
  const user: PublicUser = {
    id: "1",
    name: "Alice"
  };
//   Great for exposing safe fields in APIs or props.


// 4. Omit<T, K>
// Opposite of Pick — remove some keys.

type CreateUserPayload = Omit<User, "id">;

const newUser: CreateUserPayload = {
  name: "Bob",
  email: "bob@example.com",
  password: "secret"
};


// 5. Record<K, T>
// Creates an object with a known set of keys and the same value type.

type Theme = "light" | "dark" | "blue";

const themeColors: Record<Theme, string> = {
  light: "#fff",
  dark: "#000",
  blue: "#00f"
};

// Super useful when you have static sets (like modes, themes, roles).
