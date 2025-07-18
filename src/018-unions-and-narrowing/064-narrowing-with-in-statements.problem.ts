import { expect, it } from "vitest";

// APIResponse is a union between two different objects
type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?
  // To check if a particular key is on an object, use the statement 'KEY' in OBJECT
  // Narrowing is when you determine which type is the value from a particular variable with a union type
  // For an object with two different union types, you can narrow the value by checking if the key exists
  if ('data' in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

it("Should handle a response with data", () => {
  const response = {
    data: {
      id: "123",
    },
  };

  expect(handleResponse(response)).toBe("123");
});

it("Should handle a response with an error", () => {
  const response = {
    error: "Something went wrong",
  };

  expect(() => handleResponse(response)).toThrow("Something went wrong");
});
