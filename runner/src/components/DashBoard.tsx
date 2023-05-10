import { ChangeEvent, useState } from "react";
import { Box, Grid } from "@mui/material";

import { api } from "../services/api";
import { calculateSum } from "../services/utility";
import Graph from "./Graph";
import TestCaseTable from "./TestCaseTable";
import LambdaExecutor from "./LambdaExecutor";
import ScoreExplorer from "./ScoreExplorer";
import { TestCase } from "./TestCase";
import { MOCK_TESTCASES } from "./MockTestCase";

function DashBoard() {
  const [testCases, setTestCases] = useState<TestCase[]>(MOCK_TESTCASES);
  const [file, setFile] = useState<File>();

  function handleRunning() {
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

  function handleUpdating() {
    const updatedTestCases = testCases.map((testCase) => {
      return new TestCase({ ...testCase, baseScore: testCase.score });
    });
    setTestCases(updatedTestCases);
  }

  function handleFileChanging(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  function convertToTestCases(data: any[]): TestCase[] {
    const testCases: TestCase[] = data.map(convertToTestCase);
    return testCases;
  }

  function convertToTestCase(item: any): TestCase {
    return new TestCase(item);
  }

  function handleLoading() {
    if (!file) {
      return;
    }
    if (file.type != "application/json") {
      return;
    }
    file
      .text()
      .then(JSON.parse)
      .then(convertToTestCases)
      .then(setTestCases)
      // .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  function handleDownloading() {
    const data = JSON.stringify(testCases, null, " ");
    const fileType = "text/json";
    const blob = new Blob([data], { type: fileType });

    const a = document.createElement("a");
    a.download = "test_cases.json";
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
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
      <Grid item>
        <Box m={2}>
          <LambdaExecutor
            onRunning={handleRunning}
            onUpdating={handleUpdating}
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
          <TestCaseTable
            testCases={testCases}
            onLoading={handleLoading}
            onFileChanging={handleFileChanging}
            onDownloading={handleDownloading}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashBoard;
