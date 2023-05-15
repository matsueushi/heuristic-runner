import { Box, Divider, Typography } from "@mui/material";

function SummaryTableIndex() {
  return (
    <Box>
      <Typography>Test Cases</Typography>
      <Divider />
      <Typography>Increased</Typography>
      <Typography>No change</Typography>
      <Typography>Decreased</Typography>
      <Divider />
      <Typography>Score</Typography>
      <Typography>BaseScore</Typography>
      <Typography>Diff</Typography>
    </Box>
  );
}

export default SummaryTableIndex;
