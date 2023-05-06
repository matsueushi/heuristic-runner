import { api } from "../api";

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

export async function reflectRunResult(testCase: TestCase): Promise<TestCase> {
  // 暫定的
  if (testCase.seed === 0) {
    const data = { input: testCase.input };
    const response = await api.post("solve", data);
    return new TestCase({
      ...testCase,
      score: response.data.score,
      output: response.data.output,
    });
  } else {
    return testCase;
  }
}

export function updateBaseScore(testCase: TestCase): TestCase {
  return new TestCase({ ...testCase, baseScore: testCase.score });
}
