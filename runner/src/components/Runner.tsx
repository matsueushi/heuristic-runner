import { useState } from "react";

import TestCaseTable from "./TestCaseTable";
import LambdaExecutor from "./LambdaExecutor";
import ScoreExplorer from "./ScoreExplorer";
import { TestCase, reflectRunResult, updateBaseScore } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";
import { Grid } from "@mui/material";

function calculateSum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

function Runner() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);
  const [diffSign, setDiffSign] = useState<number>(1.0);

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

  const score = calculateSum(testCases.map((x) => x.score));
  const baseScore = calculateSum(testCases.map((x) => x.baseScore));

  return (
    <Grid container spacing={2}>
      <Grid item m={2} xs={3}>
        <LambdaExecutor
          onRunning={handleRunClick}
          onUpdating={handleUpdateClick}
          onFlipping={handleFlipChange}
        />
      </Grid>
      <Grid item m={2}>
        <ScoreExplorer
          testCaseCount={testCases.length}
          score={score}
          baseScore={baseScore}
        />
      </Grid>

      <Grid item m={2} xs={12}>
        <TestCaseTable testCases={testCases} diffSign={diffSign} />
      </Grid>
    </Grid>
  );
}

export default Runner;
