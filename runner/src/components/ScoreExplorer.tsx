import { Box, Typography, Divider } from "@mui/material";

interface ScoreExplorerProps {
  testCaseCount: number;
  increased: number;
  noChange: number;
  decreased: number;
  score: number;
  baseScore: number;
  diff: number;
}

function ScoreExplorer({
  testCaseCount,
  increased,
  noChange,
  decreased,
  score,
  baseScore,
  diff,
}: ScoreExplorerProps) {
  return (
    <Box>
      <Typography>
        Test Cases:
        <b> {testCaseCount}</b>
      </Typography>
      <Divider />
      <Typography>
        Increased: {increased} / {testCaseCount}
      </Typography>
      <Typography>
        No change: {noChange} / {testCaseCount}
      </Typography>
      <Typography>
        Decreased: {decreased} / {testCaseCount}
      </Typography>
      <Divider />
      <Typography>
        Score:<b> {score}</b>
      </Typography>
      <Typography>
        BaseScore: <b> {baseScore}</b>
      </Typography>
      <Typography>
        Diff: <b> {diff}</b>
      </Typography>
    </Box>
  );
}

export default ScoreExplorer;
