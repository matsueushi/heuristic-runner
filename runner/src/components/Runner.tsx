import { useState } from "react";

import { api } from "../api";

import TestCaseTable from "./TestCaseTable";
import Controller from "./Controller";
import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

async function reflectRunResult(testCase: TestCase): Promise<TestCase> {
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

function updateBaseScore(testCase: TestCase): TestCase {
  return new TestCase({ ...testCase, baseScore: testCase.score });
}

function Runner() {
  const [diffSign, setDiffSign] = useState<number>(1.0);
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);

  function handleRunClick() {
    Promise.all(testCases.map(reflectRunResult)).then((result) =>
      setTestCases(result)
    );
  }

  function handleUpdateClick() {
    const updatedTestCases = testCases.map(updateBaseScore);
    setTestCases(updatedTestCases);
  }

  function handleFlipChange() {
    setDiffSign(-diffSign);
  }

  return (
    <>
      <Controller
        onRunning={handleRunClick}
        onUpdating={handleUpdateClick}
        onFlipping={handleFlipChange}
      />
      <TestCaseTable testCases={testCases} diffSign={diffSign} />
    </>
  );
}

export default Runner;
