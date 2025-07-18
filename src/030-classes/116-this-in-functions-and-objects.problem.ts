import { it, expect } from "vitest";

function add(this: {x:number, y:number}) {
  return this.x + this.y;
}

// arrow functions cannot have a this parameter
const setValues = (x: number, y: number) => {
// func setValues(this: {x:number, y:number}) => {
  this.x = x;
  this.y = y;
};


it("Should add the numbers together", () => {
  const calculator = {
    x: 0,
    y: 0,

    add,
    setValues,
  };

  calculator.setValues(1, 2);

  expect(calculator.add()).toEqual(3);
});
