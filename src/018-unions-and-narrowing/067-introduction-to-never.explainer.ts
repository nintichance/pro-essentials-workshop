// This function returns never, because it never returns!
const getNever = () => {
  throw new Error("This function never returns");
};

// ---------------------------------------------
// if unknown is the top type in TS
// and you can assign anything to it
// never is the botton type in TS
// represents something that can never happen
// you can assign never to anything

const fn = (input: never) => {};

// Nothing is assignable to never!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

// Except for never itself!

fn(getNever());

// ---------------------------------------------

// But we can assign never to anything!

const str: string = getNever();
const num: number = getNever();
const bool: boolean = getNever();
const arr: string[] = getNever();
