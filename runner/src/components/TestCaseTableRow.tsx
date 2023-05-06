import { TableRow, TableCell } from "@mui/material";

import ContentCopyIconButton from "./ContentCopyIconButton";
import { TestCase } from "./TestCase";

function formatLongText(text: string): string {
  const th = 15;
  if (text.length > th) {
    return text.substring(0, th) + "...";
  } else {
    return text;
  }
}

interface TestCaseRowProps {
  testCase: TestCase;
  diffSign: number;
}

function TestCaseTableRow({ testCase, diffSign }: TestCaseRowProps) {
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
        {formatLongText(testCase.input)}{" "}
        <ContentCopyIconButton text={testCase.input} />
      </TableCell>
      <TableCell align="right">
        {formatLongText(testCase.output)}{" "}
        <ContentCopyIconButton text={testCase.output} />
      </TableCell>
    </TableRow>
  );
}

export default TestCaseTableRow;
