import { TableRow, TableCell } from "@mui/material";

import { formatLongText } from "./utility";
import ContentCopyIconButton from "./ContentCopyIconButton";
import { TestCase } from "./TestCase";

interface TestCaseRowProps {
  testCase: TestCase;
}

function TestCaseTableRow({ testCase }: TestCaseRowProps) {
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
      <TableCell align="right">{testCase.score - testCase.baseScore}</TableCell>
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
