import {
  Button,
  Box,
  FormControlLabel,
  Switch,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
  onFlipping: () => void;
}

function LambdaExecutor({
  onRunning,
  onUpdating,
  onFlipping,
}: LambdaExecutorProps) {
  const [lastRun, setLastRun] = useState<string | undefined>(undefined);

  function handleRunClick() {
    onRunning();
    setLastRun(Date().toLocaleString());
  }

  return (
    <Box>
      <Box>
        <Stack direction="row">
          <Button variant="contained" size="small" onClick={handleRunClick}>
            run
          </Button>
          <Typography>Last update: {lastRun}</Typography>
        </Stack>
      </Box>
      <Box>
        <FormControlLabel
          control={<Switch defaultChecked />}
          onChange={onFlipping}
          label="Maximize score"
        />
        <Button variant="outlined" size="small" onClick={onUpdating}>
          update basescore
        </Button>
      </Box>
    </Box>
  );
}

export default LambdaExecutor;
