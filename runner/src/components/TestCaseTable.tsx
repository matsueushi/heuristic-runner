import { Box, Table, TableContainer, TableBody, Paper } from "@mui/material";

import { TestCase } from "./TestCase";
import TestCaseTableRow from "./TestCaseTableRow";
import TestCaseTableHead from "./TestCaseTableHead";

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
          <TestCaseTableHead />
          <TableBody>
            {testCases.map((testCase) => (
              <TestCaseTableRow
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
