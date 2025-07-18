import { Equal, Expect } from "@total-typescript/helpers";

// first option to only get the name and email
// interface NameAndEmail {
//   name: string;
//   email: string;
// }
// interface User extends NameAndEmail {
//   id: string;
//   role: string;
// }

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// or we can use the pick helper which only works with objects
type PickedUser = Pick<User, "name" | "email">;

const fetchUser = async (): Promise<PickedUser> => {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
