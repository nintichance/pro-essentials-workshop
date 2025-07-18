interface UserPart {
  id: string;
  name: string;
  age: number;
};

interface UserPart2 {
  id: number;
  phone: string;
};

// You cannot extend without identical types since id in both are different types
// This ends up with never because its incompatible
// This is the pro of interface over intersections
interface User extends UserPart, UserPart2 {}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
