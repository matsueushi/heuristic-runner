import { useState } from "react";

import TestCaseTable from "./TestCaseTable";
import Controller from "./Controller";

import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

function Runner() {
  const [diffSign, setDiffSign] = useState<number>(1.0);
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);

  function handleRunClick() {
    // console.log(api.post("test", { n: 1 }));
    console.log("run");
    setTestCases(MOCK_TESTCASES);
  }

  function handleUpdateClick() {
    const updatedTestCases = testCases.map((c) => {
      return new TestCase({ ...c, baseScore: c.score });
    });
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
