// Try uncommenting this!
// import "@total-typescript/ts-reset";

const users = ["matt", "sofia", "waqas"] as const;

// the following methods don't work on readonly arrays
// this is becayse "bryan" does exist in the array
// use his tool to makes the array the type of string
users.includes("bryan");

users.indexOf("bryan");
