import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

import { formatLongText } from "../services/utility";
import { TestCase } from "./TestCase";
import FileIOBox from "./FileIOBox";

interface TestCaseTableProps {
  testCases: TestCase[];
  onLoading: (testCases: TestCase[]) => void;
}

function TestCaseTable({ testCases, onLoading }: TestCaseTableProps) {
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
          return formatLongText(cell.getValue<number>().toLocaleString());
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
          return formatLongText(cell.getValue<number>().toLocaleString());
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
          return formatLongText(cell.getValue<number>().toLocaleString());
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
          return formatLongText(cell.getValue<string>());
        },
      },
      {
        accessorFn: (row) => row.output,
        enableClickToCopy: true,
        header: "Output",
        Cell: ({ cell }) => {
          return formatLongText(cell.getValue<string>());
        },
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
    />
  );
}

export default TestCaseTable;
