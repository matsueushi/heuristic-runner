import { Box, Typography, Paper, Divider } from "@mui/material";

interface ScoreExplorerProps {
  testCaseCount: number;
  score: number;
  baseScore: number;
}

function ScoreExplorer({
  testCaseCount,
  score,
  baseScore,
}: ScoreExplorerProps) {
  return (
    <Box>
      <Typography>
        Test Cases:
        <b> {testCaseCount}</b>
      </Typography>
      <Typography>Improvement: ??? / {testCaseCount}</Typography>
      <Typography>No change ??? / {testCaseCount}</Typography>
      <Typography>Deterioration: ??? / {testCaseCount}</Typography>
      <Divider></Divider>
      <Typography>
        Score:<b> {score}</b>
      </Typography>
      <Typography>
        BaseScore: <b> {baseScore}</b>
      </Typography>
      <Typography>Diff: ???</Typography>
    </Box>
  );
}

export default ScoreExplorer;
