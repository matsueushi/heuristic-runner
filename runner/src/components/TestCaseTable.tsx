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
