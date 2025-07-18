import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

// you can't really destructure with a discriminated union
// we don't know which keys it contains, so we can only
// destructure what is on all branches of the type shape
// so don't destructure until after you've narrowed within the body of the function
function calculateArea( shape: Shape) {
  if (shape.kind === "circle") {
    const { radius } = shape
    return Math.PI * radius * radius;
  } else {
    const { sideLength } = shape
    return sideLength * sideLength;
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
