import { TableHead, TableRow, TableCell, Icon } from "@mui/material";

function TestCaseTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Seed</TableCell>
        <TableCell align="right">Score</TableCell>
        <TableCell align="right">BaseScore</TableCell>
        <TableCell align="right">Diff</TableCell>
        <TableCell align="right">
          Input <Icon />
        </TableCell>
        <TableCell align="right">
          Output <Icon />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TestCaseTableHead;
