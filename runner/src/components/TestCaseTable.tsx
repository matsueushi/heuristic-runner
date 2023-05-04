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

import TestCaseRow from "./TestCaseRow";
import { MOCK_TESTCASES } from "./MockTestCase";

export default function TestCaseTable() {
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
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
            {MOCK_TESTCASES.map((testCase) => (
              <TestCaseRow testCase={testCase} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
