import axios, { AxiosInstance } from "axios";

import { ChangeEvent, useState } from "react";
import {
  Alert,
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

import Graph from "./Graph";
import TestCaseTable from "./TestCaseTable";
import { TestCase } from "./TestCase";
import SummaryTableIndex from "./SummaryTableIndex";
import SummaryTableSeries from "./SummaryTableSeries";

async function getUpdatedTestCase(
  instance: AxiosInstance,
  resource: string,
  testCase: TestCase
): Promise<TestCase> {
  const data = { input: testCase.input };
  const response = await instance.post(resource, data);
  return new TestCase({
    ...testCase,
    score: response.data.score,
    output: response.data.output,
  });
}

function DashBoard() {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [resource, setResource] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [file, setFile] = useState<File>();
  const [testMode, setTestMode] = useState<boolean>(false);
  const [lastRun, setLastRun] = useState<string | undefined>(undefined);

  function handleBaseUrlInput(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setBaseUrl(event.target.value);
  }

  function handleResourceInput(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setResource(event.target.value);
  }

  function handleRunning() {
    setErrorMessage(undefined);
    if (testMode) {
      setTestCases(
        testCases.map((testCase) => {
          return new TestCase({
            ...testCase,
            score: Math.round(Math.random() * 100),
          });
        })
      );
    } else {
      const instance = axios.create({ baseURL: baseUrl });
      Promise.all(
        testCases.map(async (testCase) =>
          getUpdatedTestCase(instance, resource, testCase)
        )
      )
        .then((result) => setTestCases(result))
        .catch((err) => setErrorMessage(err.message));
    }
    setLastRun(Date().toLocaleString());
  }

  function handleUpdating() {
    const updatedTestCases = testCases.map((testCase) => {
      return new TestCase({ ...testCase, baseScore: testCase.score });
    });
    setTestCases(updatedTestCases);
  }

  function handleTestMode() {
    setTestMode(!testMode);
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Box m={2}>
          <Box>
            <TextField
              label="BaseURL"
              id="baseurl"
              defaultValue=""
              size="small"
              sx={{ width: "40ch" }}
              onChange={handleBaseUrlInput}
            />
            <TextField
              label="Resource"
              id="resource"
              defaultValue=""
              size="small"
              sx={{ width: "15ch" }}
              onChange={handleResourceInput}
            />
          </Box>
          <Button variant="contained" size="small" onClick={handleRunning}>
            run
          </Button>
          <Button variant="contained" size="small" onClick={handleUpdating}>
            Update base
          </Button>
          <FormControlLabel
            control={<Checkbox onChange={handleTestMode} />}
            label="Test Mode"
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Typography variant="body2">
            Last update: <b>{lastRun}</b>
          </Typography>
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
