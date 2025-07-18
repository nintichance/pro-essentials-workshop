import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Shape = Circle | Square

type Square = {
  kind: 'square';
  sideLength: number;
}

type Circle = {
  kind: 'circle';
  radius: number;
}

// discriminated union is one thing that's in common between two types
// Circle and Square are a discriminated union of Shape as they both have the kind property
function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}

it("Should calculate the area of a circle", () => {
  const result = calculateArea({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});

it("Should calculate the area of a square", () => {
  const result = calculateArea({
    kind: "square",
    sideLength: 5,
  });

  expect(result).toBe(25);

  type test = Expect<Equal<typeof result, number>>;
});
