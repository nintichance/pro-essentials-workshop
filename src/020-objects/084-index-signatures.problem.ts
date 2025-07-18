// to add a dynamic key, use an index signature
// const scores = {};

// scores.math = 95;
// scores.english = 90;
// scores.science = 85;

// using a type
// type Scores = {
//     [subject: string]: number;
// }
// type Scores = {
//     [key: string]: number;
// }
// to add a dynamic key, use an index signature

// Using an interface
// or you can use an interface
interface Scores {
    [subject: string]: number;
}
const scores: Scores = {}

scores.math = 95;
scores.english = 90;
scores.science = 85;

// or you can use the helper "Recrod"

const scoresWithRecord: Record<string, number> = {};

scoresWithRecord.math = 95;
scoresWithRecord.english = 90;
scoresWithRecord.science = 85;
