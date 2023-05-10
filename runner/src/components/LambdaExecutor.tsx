import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
}

function LambdaExecutor({ onRunning, onUpdating }: LambdaExecutorProps) {
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
    </Box>
  );
}

export default LambdaExecutor;
