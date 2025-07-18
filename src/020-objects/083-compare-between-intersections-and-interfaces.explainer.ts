// https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections
// when do you used types and interfaces?
// think about the difference b/t insections (&) and interface extends
// typescript knows that with an interface, you can cache the classes extendd from it and everywhere its used, it references that cache
// intersections are more complicated, so use interface extends wherever you can
// but with type props for a react component, it doesn't matter to use interfaces
