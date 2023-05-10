import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

import { formatLongText } from "../services/utility";
import { TestCase } from "./TestCase";

interface TestCaseTableProps {
  testCases: TestCase[];
}

function TestCaseTable({ testCases }: TestCaseTableProps) {
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

  return <MaterialReactTable columns={columns} data={testCases} />;
}

export default TestCaseTable;
