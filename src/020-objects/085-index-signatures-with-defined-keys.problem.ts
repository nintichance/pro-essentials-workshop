interface Scores {
  math: number;
  english: number;
  science: number;
  [subject: string]: number;
}


// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
  science: 91,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;

// you can extend a score thats required
interface RequiredScores {
  math: number;
  english: number;
  science: number;
}

interface ScoresTwo extends RequiredScores {
  [key: string]: number;
}