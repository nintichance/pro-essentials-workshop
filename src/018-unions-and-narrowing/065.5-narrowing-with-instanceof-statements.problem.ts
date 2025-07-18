const somethingDangerous: () => Error | string = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  // How do we change this code to make it
  // not show a red squiggly?

  // instanceof operator checks if something is an instance of an Error constructor in this case
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    throw error;
  }
}
