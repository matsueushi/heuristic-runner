import { Box, Table, TableContainer, TableBody, Paper } from "@mui/material";

import { TestCase } from "./TestCase";
import TestCaseTableRow from "./TestCaseTableRow";
import TestCaseTableHead from "./TestCaseTableHead";

interface TestCaseTableProps {
  testCases: TestCase[];
}

function TestCaseTable({ testCases }: TestCaseTableProps) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="the test case table"
        >
          <TestCaseTableHead />
          <TableBody>
            {testCases.map((testCase) => (
              <TestCaseTableRow key={testCase.seed} testCase={testCase} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TestCaseTable;
