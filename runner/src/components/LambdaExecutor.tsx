import {
  Button,
  Box,
  FormControlLabel,
  Typography,
  Stack,
  Divider,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
  onFlipTestMode: () => void;
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
  onFlipTestMode,
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
      <FormControlLabel
        control={<Checkbox onChange={onFlipTestMode} />}
        label="Test Mode"
      />
      <Typography variant="body2">
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
              <b>{score.toLocaleString()}</b>
            </Typography>
            <Typography>
              <b>{baseScore.toLocaleString()}</b>
            </Typography>
            <Typography>
              <b>{diff.toLocaleString()}</b>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default LambdaExecutor;
