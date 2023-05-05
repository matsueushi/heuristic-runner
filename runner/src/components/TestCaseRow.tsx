import { TableRow, TableCell } from "@mui/material";

import ContentCopyIconButton from "./ContentCopyIconButton";
import { TestCase } from "./TestCase";

interface TestCaseRowProps {
  testCase: TestCase;
  diffSign: number;
}

function TestCaseRow({ testCase, diffSign }: TestCaseRowProps) {
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
        {diffSign * (testCase.score - testCase.baseScore)}
      </TableCell>
      <TableCell align="right">
        {testCase.input} <ContentCopyIconButton text={testCase.input} />
      </TableCell>
      <TableCell align="right">
        {testCase.output} <ContentCopyIconButton text={testCase.input} />
      </TableCell>
    </TableRow>
  );
}

export default TestCaseRow;
