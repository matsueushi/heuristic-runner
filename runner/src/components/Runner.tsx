import { useState } from "react";

import TestCaseTable from "./TestCaseTable";
import Controller from "./Controller";

import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

function Runner() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);

  return (
    <>
      <Controller />
      <TestCaseTable testCases={testCases} />
    </>
  );
}

export default Runner;
