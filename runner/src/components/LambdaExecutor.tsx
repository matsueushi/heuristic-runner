import { Button, Box, Typography, Stack, Divider } from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
  testCaseCount: number;
  increased: number;
  noChange: number;
  decreased: number;
  score: number;
  baseScore: number;
  diff: number;
}

function LambdaExecutor({
  onRunning,
  onUpdating,
  testCaseCount,
  increased,
  noChange,
  decreased,
  score,
  baseScore,
  diff,
}: LambdaExecutorProps) {
  const [lastRun, setLastRun] = useState<string | undefined>(undefined);

  function handleRunClick() {
    onRunning();
    setLastRun(Date().toLocaleString());
  }

  return (
    <Box>
      <Button variant="contained" size="small" onClick={handleRunClick}>
        run
      </Button>
      <Button variant="contained" size="small" onClick={onUpdating}>
        Update base
      </Button>
      <Typography>
        Last update: <b>{lastRun}</b>
      </Typography>
      <Box m={1}>
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
      </Box>
    </Box>
  );
}

export default LambdaExecutor;
