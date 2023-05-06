import { TestCase } from "./TestCase";

export const MOCK_TESTCASES = [
  new TestCase({
    seed: 0,
    input: "2",
    output: "",
    score: 50,
    baseScore: 100,
  }),
  new TestCase({
    seed: 1,
    input: "4",
    output: "",
    score: 234,
    baseScore: 10,
  }),
  new TestCase({
    seed: 2,
    input: "3",
    output: "",
    score: 2,
    baseScore: 2,
  }),
];
