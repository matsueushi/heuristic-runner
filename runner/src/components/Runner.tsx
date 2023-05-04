import { useState } from "react";

import TestCaseTable from "./TestCaseTable";
import Controller from "./Controller";

import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

function Runner() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);

  function handleRunClick() {
    // console.log(api.post("test", { n: 1 }));
    console.log("run");
  }

  function handleUpdateClick() {
    console.log("update");
  }

  function handleFlipChange() {
    console.log("flip");
  }

  return (
    <>
      <Controller
        onRunning={handleRunClick}
        onUpdating={handleUpdateClick}
        onFlipping={handleFlipChange}
      />
      <TestCaseTable testCases={testCases} />
    </>
  );
}

export default Runner;
