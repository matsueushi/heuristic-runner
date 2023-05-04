import { useState } from "react";

import { TableRow, TableCell } from "@mui/material";

import { TestCase } from "./TestCase";

interface TestCaseRowProps {
  testCase: TestCase;
}

function TestCaseRow({ testCase }: TestCaseRowProps) {
  const [sign, setSign] = useState<number>(1.0);

  return (
    <TableRow
      key={testCase.seed}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {testCase.seed}
      </TableCell>
      <TableCell align="right">{testCase.score}</TableCell>
      <TableCell align="right">{testCase.baseScore}</TableCell>
      <TableCell align="right">
        {sign * (testCase.score - testCase.baseScore)}
      </TableCell>
      <TableCell align="right">{testCase.input}</TableCell>
      <TableCell align="right">{testCase.output}</TableCell>
    </TableRow>
  );
}

export default TestCaseRow;
