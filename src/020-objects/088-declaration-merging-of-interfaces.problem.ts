// Declaration merging merges the declarations of multiple of the same interfaces
// why does it allow this???
// type Logger = {
//   log(message: string, level: number): void;
// }

// type Logger = {
//   log(message: string): void;
// }
// type however does get an error

// you should therefore use types over interfaces whe you have a long file and you don't have many comlex intersections
interface Logger {
  log(message: string, /*level: number*/): void;
}

interface Logger {
  log(message: string): void;
}

const myLogger: Logger = {
  log: (message: string) => {
    console.log(message);
  },
};

myLogger.log(
  "My message",
  // @ts-expect-error Level is NOT needed
  123,
);
