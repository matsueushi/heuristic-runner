import { TableRow, TableCell } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
        {testCase.input} <ContentCopyIcon fontSize="small" />
      </TableCell>
      <TableCell align="right">
        {testCase.output} <ContentCopyIcon fontSize="small" />
      </TableCell>
    </TableRow>
  );
}

export default TestCaseRow;
