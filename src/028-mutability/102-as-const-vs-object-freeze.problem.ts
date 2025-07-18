type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => {};

// Object.freeze doesn't recognize the type 'button' instead seeing that it is a string
// const buttonAttributes = Object.freeze({
//   cancel: {
//     type: "button",
//   },
//   confirm: {
//     type: "button",
//   },
// });

const buttonAttributes = {
  cancel: {
    type: "button",
  },
  confirm: {
    type: "button",
  },
} as const;
modifyButtons(buttonAttributes);
