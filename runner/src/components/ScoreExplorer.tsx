import { Box, Button, Typography, Divider, Stack } from "@mui/material";

interface ScoreExplorerProps {
  testCaseCount: number;
  increased: number;
  noChange: number;
  decreased: number;
  score: number;
  baseScore: number;
  diff: number;
  onUpdating: () => void;
}

function ScoreExplorer({
  testCaseCount,
  increased,
  noChange,
  decreased,
  score,
  baseScore,
  diff,
  onUpdating,
}: ScoreExplorerProps) {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
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
        <Box>
          <Typography>{testCaseCount}</Typography>
          <Divider />
          <Typography>
            <b>{increased}</b>
          </Typography>
          <Typography>
            <b>{noChange}</b>
          </Typography>
          <Typography>
            <b>{decreased}</b>
          </Typography>
          <Divider />
          <Typography>
            <b>{score}</b>
          </Typography>
          <Typography>
            <b>{baseScore}</b>
          </Typography>
          <Typography>
            <b>{diff}</b>
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        size="small"
        sx={{ m: 1 }}
        onClick={onUpdating}
      >
        Update base
      </Button>
    </Box>
  );
}

export default ScoreExplorer;
