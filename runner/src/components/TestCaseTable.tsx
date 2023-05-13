import { useMemo, ChangeEvent } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

import { formatLongText } from "../services/utility";
import { TestCase } from "./TestCase";
import { Box, Button } from "@mui/material";

interface TestCaseTableProps {
  testCases: TestCase[];
  onLoading: () => void;
  onFileChanging: (e: ChangeEvent<HTMLInputElement>) => void;
  onDownloading: () => void;
}

function TestCaseTable({
  testCases,
  onLoading,
  onFileChanging,
  onDownloading,
}: TestCaseTableProps) {
  const columns = useMemo<MRT_ColumnDef<TestCase>[]>(
    () => [
      {
        accessorKey: "seed",
        header: "Seed",
      },
      {
        accessorKey: "score",
        header: "Score",
      },
      {
        accessorKey: "baseScore",
        header: "BaseScore",
      },
      {
        accessorFn: (row) => row.score - row.baseScore,
        header: "Diff",
      },
      {
        accessorFn: (row) => formatLongText(row.input),
        enableClickToCopy: true,
        header: "Input",
      },
      {
        accessorFn: (row) => formatLongText(row.output),
        enableClickToCopy: true,
        header: "Output",
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
          <input type="file" id="input" onChange={onFileChanging} />
          <Button variant="contained" size="small" onClick={onLoading}>
            load
          </Button>
          <Button variant="contained" size="small" onClick={onDownloading}>
            download
          </Button>
        </Box>
      )}
    />
  );
}

export default TestCaseTable;
