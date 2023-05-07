export class TestCase {
  seed: number = 0;
  input: string = "";
  output: string = "";
  score: number = 0;
  baseScore: number = 0;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.seed) this.seed = initializer.seed;
    if (initializer.input) this.input = initializer.input;
    if (initializer.output) this.output = initializer.output;
    if (initializer.score) this.score = initializer.score;
    if (initializer.baseScore) this.baseScore = initializer.baseScore;
  }
}
