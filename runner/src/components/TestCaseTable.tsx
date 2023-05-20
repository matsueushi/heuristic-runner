import { useState } from "react";

import { useMemo, ChangeEvent } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

import { formatLongText } from "../services/utility";
import { TestCase, convertToTestCases } from "./TestCase";
import { Box, Button } from "@mui/material";

interface TestCaseTableProps {
  testCases: TestCase[];
  onLoading: (testCases: TestCase[]) => void;
}

function TestCaseTable({ testCases, onLoading }: TestCaseTableProps) {
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

  const columns = useMemo<MRT_ColumnDef<TestCase>[]>(
    () => [
      {
        accessorKey: "seed",
        header: "Seed",
      },
      {
        accessorKey: "score",
        header: "Score",
        Cell: ({ cell }) => {
          return formatLongText((cell.getValue() as number).toLocaleString());
        },
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "baseScore",
        header: "BaseScore",
        Cell: ({ cell }) => {
          return formatLongText((cell.getValue() as number).toLocaleString());
        },
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorFn: (row) => row.score - row.baseScore,
        header: "Diff",
        Cell: ({ cell }) => {
          return formatLongText((cell.getValue() as number).toLocaleString());
        },
        muiTableHeadCellProps: {
          align: "right",
        },
        muiTableBodyCellProps: {
          align: "right",
        },
      },
      {
        accessorFn: (row) => row.input,
        enableClickToCopy: true,
        header: "Input",
        Cell: ({ cell }) => {
          return formatLongText(cell.getValue() as string);
        },
      },
      {
        accessorFn: (row) => row.output,
        enableClickToCopy: true,
        header: "Output",
        Cell: ({ cell }) => {
          return formatLongText(cell.getValue() as string);
        },
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={testCases}
      renderTopToolbarCustomActions={() => (
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
      )}
    />
  );
}

export default TestCaseTable;
