import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { MOCK_TESTCASES } from "./MockTestCase";

const test_cases = MOCK_TESTCASES;

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Seed</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">OriginalScore</TableCell>
            <TableCell align="right">Input</TableCell>
            <TableCell align="right">Output</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {test_cases.map((row) => (
            <TableRow
              key={row.seed}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.seed}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.originalScore}</TableCell>
              <TableCell align="right">{row.input}</TableCell>
              <TableCell align="right">{row.output}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
