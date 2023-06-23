import { useState, ChangeEvent } from "react";

import { Box, Button } from "@mui/material";

import { TestCase, convertToTestCases } from "./TestCase";

interface FileIOBoxProps {
  testCases: TestCase[];
  onLoading: (testCases: TestCase[]) => void;
}

function FileIOBox({ testCases, onLoading }: FileIOBoxProps) {
  const [file, setFile] = useState<File | undefined>(undefined);

  function handleFileSelection(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  function handleLoad() {
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
      .then(onLoading)
      // .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  function handleDownload() {
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
    <Box>
      <input type="file" id="input" onChange={handleFileSelection} />
      <Button
        variant="contained"
        size="small"
        onClick={handleLoad}
        disabled={file === undefined}
      >
        Load
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={handleDownload}
        disabled={testCases.length === 0}
      >
        Download
      </Button>
    </Box>
  );
}

export default FileIOBox;
