import { Extends, Expect } from "@total-typescript/helpers";

// union uses the | operator
// intersections use the && operator
// it can combine two separate types into ome

type User = {
  name: string;
  email: string;
} & Metadata;

type Metadata = {
  id: string;
  createdAt: Date;
}

type Product = {
  name: string;
  price: number;
} & Metadata;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
