const fn = (input: unknown) => {};

// Unknown represents something you don't know what it is but you want to keep type checking it
// Anything is assignable to unknown!
// unknown types must be narrowed
// As opposed to any which doesn't get type checked
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});
