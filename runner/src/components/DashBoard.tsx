import axios, { AxiosInstance } from "axios";

import { useState } from "react";
import { Alert, Box, Grid, Button, Stack } from "@mui/material";

import Graph from "./Graph";
import TestCaseTable from "./TestCaseTable";
import { TestCase } from "./TestCase";
import SummaryTableIndex from "./SummaryTableIndex";
import SummaryTableSeries from "./SummaryTableSeries";

function createAxiomInstance(baseUrl: string): AxiosInstance {
  return axios.create({ baseURL: baseUrl });
}

async function getUpdatedTestCase(
  testMode: boolean,
  instance: AxiosInstance,
  resource: string,
  testCase: TestCase,
  id?: string
): Promise<TestCase> {
  if (typeof id === "string" && testCase.seed.toString() !== id) {
    return testCase;
  }

  if (testMode) {
    return new TestCase({
      ...testCase,
      score: Math.round(Math.random() * 100),
    });
  } else {
    const data = { input: testCase.input };
    const response = await instance.post(resource, data);
    return new TestCase({
      ...testCase,
      score: response.data.score,
      output: response.data.output,
    });
  }
}

interface DashBoardProps {
  testMode: boolean;
  baseUrl: string;
  resource: string;
  onLastRunUpdate: (lastRun: string) => void;
}

function DashBoard({
  testMode,
  baseUrl,
  resource,
  onLastRunUpdate,
}: DashBoardProps) {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [testCases, setTestCases] = useState<TestCase[]>([]);

  function handleRunning() {
    setErrorMessage(undefined);
    const instance = createAxiomInstance(baseUrl);
    Promise.all(
      testCases.map(async (testCase) =>
        getUpdatedTestCase(testMode, instance, resource, testCase)
      )
    )
      .then((result) => setTestCases(result))
      .catch((err) => setErrorMessage(err.message));

    onLastRunUpdate(Date().toLocaleString());
  }

  function handleUpdating() {
    const updatedTestCases = testCases.map((testCase) => {
      return new TestCase({ ...testCase, baseScore: testCase.score });
    });
    setTestCases(updatedTestCases);
  }

  function handleSingleUpdating(id: string) {
    setErrorMessage(undefined);
    const instance = createAxiomInstance(baseUrl);
    Promise.all(
      testCases.map(async (testCase) =>
        getUpdatedTestCase(testMode, instance, resource, testCase, id)
      )
    )
      .then((result) => setTestCases(result))
      .catch((err) => setErrorMessage(err.message));

    onLastRunUpdate(Date().toLocaleString());
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Box m={2}>
          <Button
            variant="contained"
            size="small"
            onClick={handleRunning}
            disabled={testCases.length === 0}
          >
            run
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={handleUpdating}
            disabled={testCases.length === 0}
          >
            Update base
          </Button>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Box m={1}>
            <Stack direction="row" spacing={2}>
              <SummaryTableIndex />
              <SummaryTableSeries testCases={testCases} />
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box m={2}>
          <Graph testCases={testCases} />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box m={2}>
          <TestCaseTable
            testCases={testCases}
            onLoading={setTestCases}
            onSingleUpdating={handleSingleUpdating}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashBoard;
