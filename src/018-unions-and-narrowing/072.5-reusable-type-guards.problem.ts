import { Equal, Expect } from "@total-typescript/helpers";
import { describe, expect, it } from "vitest";
// when hovering it states value is string[]
// this is a type predicate
// TS is inferring that if this function is true, then valaue is an array of strings

const verifyArray = (value: unknown) => {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
};

const joinNames = (value: unknown) => {
  if (verifyArray(value)) {
    return value.join(" ");
  }

  throw new Error("Parsing error!");
};

const createSections = (value: unknown) => {
  if (verifyArray(value)) {
    return value.map((item) => `Section: ${item}`);
  }

  throw new Error("Parsing error!");
};

describe("joinNames", () => {
  it("Should handle an array of strings", () => {
    const result = joinNames(["John", "Doe"]);

    type test = Expect<Equal<typeof result, string>>;

    expect(result).toBe("John Doe");
  });

  it("Should error when anything else is passed in", () => {
    expect(() => joinNames("John")).toThrow("Parsing error!");
    expect(() => joinNames(123)).toThrow("Parsing error!");
  });
});

describe("createSections", () => {
  it("Should handle an array of strings", () => {
    const result = createSections(["John", "Doe"]);

    type test = Expect<Equal<typeof result, string[]>>;

    expect(result).toEqual(["Section: John", "Section: Doe"]);
  });

  it("Should error when anything else is passed in", () => {
    expect(() => createSections("John")).toThrow("Parsing error!");
    expect(() => createSections(123)).toThrow("Parsing error!");
  });
});
