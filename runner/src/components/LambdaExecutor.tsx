import {
  Button,
  Box,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
  onFilpDiffSign: () => void;
}

function LambdaExecutor({
  onRunning,
  onUpdating,
  onFilpDiffSign,
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
      <Button variant="outlined" size="small" onClick={onUpdating}>
        update basescore
      </Button>
      <Box>
        <FormControlLabel
          control={<Switch defaultChecked />}
          onChange={onFilpDiffSign}
          label="Maximize score"
        />
      </Box>
      <Typography>
        Last update: <b>{lastRun}</b>
      </Typography>
    </Box>
  );
}

export default LambdaExecutor;
