import { expect, it } from "vitest";

// You can declare properties that are instantiated upon the constructor call in line below without
// specifying the constructor method
class CanvasNode {
  readonly x: number = 0;
  readonly y: number = 0;
}

// class CanvasNode {
//   readonly x: number;
//   readonly y: number;
//   constructor(){
//     this.x = 0;
//     this.y = 0;
//   }
// }

it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;
});
