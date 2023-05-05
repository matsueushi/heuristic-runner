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
    setTestCases(MOCK_TESTCASES);
  }

  function handleUpdateClick() {
    console.log("update");
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
