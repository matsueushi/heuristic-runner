import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

import { formatLongText } from "../services/utility";
import { TestCase } from "./TestCase";
import FileIOBox from "./FileIOBox";
import { Box, IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

interface TestCaseTableProps {
  testCases: TestCase[];
  onLoading: (testCases: TestCase[]) => void;
  onSingleUpdating: (id: string) => void;
}

function TestCaseTable({
  testCases,
  onLoading,
  onSingleUpdating,
}: TestCaseTableProps) {
  const columns = useMemo<MRT_ColumnDef<TestCase>[]>(
    () => [
      {
        accessorKey: "seed",
        header: "Seed",
        size: 20,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {formatLongText(cell.getValue<number>().toLocaleString())}
          </Box>
        ),
        muiTableHeadCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "score",
        header: "Score",
        size: 120,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {formatLongText(cell.getValue<number>().toLocaleString())}
          </Box>
        ),
        muiTableHeadCellProps: {
          align: "right",
        },
      },
      {
        accessorKey: "baseScore",
        header: "BaseScore",
        size: 120,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {formatLongText(cell.getValue<number>().toLocaleString())}
          </Box>
        ),
        muiTableHeadCellProps: {
          align: "right",
        },
      },
      {
        accessorFn: (row) => row.score - row.baseScore,
        header: "Diff",
        size: 120,
        Cell: ({ cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<number>() < 0
                  ? theme.palette.info.dark
                  : cell.getValue<number>() === 0
                  ? theme.palette.success.dark
                  : theme.palette.warning.dark,
              display: "flex",
              justifyContent: "flex-end",
              borderRadius: "0.2rem",
              p: "0.2rem",
            })}
          >
            {formatLongText(cell.getValue<number>().toLocaleString())}
          </Box>
        ),
        muiTableHeadCellProps: {
          align: "right",
        },
      },
      {
        accessorFn: (row) => row.input,
        enableClickToCopy: true,
        header: "Input",
        size: 120,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {formatLongText(cell.getValue<string>())}
          </Box>
        ),
      },
      {
        accessorFn: (row) => row.output,
        enableClickToCopy: true,
        header: "Output",
        size: 120,
        Cell: ({ cell }) => (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {formatLongText(cell.getValue<string>())}
          </Box>
        ),
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={testCases}
      initialState={{ density: "compact" }}
      renderTopToolbarCustomActions={() => (
        <FileIOBox testCases={testCases} onLoading={onLoading} />
      )}
      enableRowActions
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex" }}>
          <IconButton
            onClick={() => {
              onSingleUpdating(row.id);
            }}
          >
            <PlayArrow />
          </IconButton>
        </Box>
      )}
    />
  );
}

export default TestCaseTable;
