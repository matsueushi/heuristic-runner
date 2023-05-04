import { TestCase } from "./TestCase";

export const MOCK_TESTCASES = [
  new TestCase({
    seed: 0,
    input: "3 4 3",
    output: "4 54 1 2",
    score: 50,
    originalScore: 100,
  }),
  new TestCase({
    seed: 1,
    input: "4 2 1",
    output: "a b c d",
    score: 234,
    originalScore: 10,
  }),
];
