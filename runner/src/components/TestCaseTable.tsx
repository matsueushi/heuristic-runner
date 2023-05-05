import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import { TestCase } from "./TestCase";
import TestCaseRow from "./TestCaseRow";

interface TestCaseTableProps {
  testCases: TestCase[];
  diffSign: number;
}

function TestCaseTable({ testCases, diffSign }: TestCaseTableProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="the test case table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Seed</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">BaseScore</TableCell>
              <TableCell align="right">Diff</TableCell>
              <TableCell align="right">Input</TableCell>
              <TableCell align="right">Output</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testCases.map((testCase) => (
              <TestCaseRow
                key={testCase.seed}
                testCase={testCase}
                diffSign={diffSign}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TestCaseTable;
