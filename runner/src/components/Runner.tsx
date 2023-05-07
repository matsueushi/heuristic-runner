import { useState } from "react";

import { api } from "../api";
import { calculateSum } from "./utility";
import TestCaseTable from "./TestCaseTable";
import LambdaExecutor from "./LambdaExecutor";
import ScoreExplorer from "./ScoreExplorer";
import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";
import { Grid } from "@mui/material";

function Runner() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);
  const [diffSign, setDiffSign] = useState<number>(1.0);

  function handleRunClick() {
    Promise.all(
      testCases.map(async (testCase) => {
        // 暫定
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
      })
    ).then((result) => setTestCases(result));
  }

  function handleUpdateClick() {
    const updatedTestCases = testCases.map((testCase) => {
      return new TestCase({ ...testCase, baseScore: testCase.score });
    });
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
