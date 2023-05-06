import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
}

function LambdaExecutor({ onRunning }: LambdaExecutorProps) {
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
      <Typography>
        Last update: <b>{lastRun}</b>
      </Typography>
    </Box>
  );
}

export default LambdaExecutor;
