import { useState } from "react";
import { Box, Grid } from "@mui/material";

import { api } from "../api";
import { calculateSum } from "./utility";
import Graph from "./Graph";
import TestCaseTable from "./TestCaseTable";
import LambdaExecutor from "./LambdaExecutor";
import ScoreExplorer from "./ScoreExplorer";
import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

function DashBoard() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);

  function handleRunClick() {
    Promise.all(
      testCases.map(async (testCase) => {
        // 暫定
        if (testCase.seed === 1) {
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

  const increased = testCases.filter((x) => x.score > x.baseScore).length;
  const noChange = testCases.filter((x) => x.score === x.baseScore).length;
  const decreased = testCases.filter((x) => x.score < x.baseScore).length;
  const seeds = testCases.map((x) => x.seed);
  const scores = testCases.map((x) => x.score);
  const score = calculateSum(scores);
  const baseScores = testCases.map((x) => x.baseScore);
  const baseScore = calculateSum(baseScores);
  const diff = calculateSum(testCases.map((x) => x.score - x.baseScore));

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box m={2}>
          <LambdaExecutor
            onRunning={handleRunClick}
            onUpdating={handleUpdateClick}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box m={2}>
          <ScoreExplorer
            testCaseCount={testCases.length}
            increased={increased}
            noChange={noChange}
            decreased={decreased}
            score={score}
            baseScore={baseScore}
            diff={diff}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box m={2}>
          <Graph seeds={seeds} scores={scores} baseScores={baseScores} />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box m={2}>
          <TestCaseTable testCases={testCases} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashBoard;
