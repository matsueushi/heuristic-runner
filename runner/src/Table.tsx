import { MOCK_TESTCASES } from "./MockTestCase";

function TestCaseTable() {
  return (
    <>
      <pre>{JSON.stringify(MOCK_TESTCASES, null, " ")}</pre>
    </>
  );
}

export default TestCaseTable;
