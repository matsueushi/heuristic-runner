import { Button, Box, FormControlLabel, Switch } from "@mui/material";
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
    <Box sx={{ p: 2, "& button": { p: 1, m: 1 } }}>
      <Button variant="contained" size="small" onClick={handleRunClick}>
        run
      </Button>
      Last update: {lastRun}
      <Button variant="outlined" size="small" onClick={onUpdating}>
        update basescore
      </Button>
      <FormControlLabel
        control={<Switch defaultChecked />}
        onChange={onFlipping}
        label="Maximize score"
      />
    </Box>
  );
}

export default LambdaExecutor;
