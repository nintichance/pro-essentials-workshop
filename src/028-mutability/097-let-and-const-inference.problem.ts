// CODE

let type = "button";

// TESTS

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

// why does this error is button is assigned as the type
// because we passed in a variable, it infers it as a random string
// let can be mutated, so to fix this, we need to use const on line 3
const buttonAttributes: ButtonAttributes = {
  type,
};
