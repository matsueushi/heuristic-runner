import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onUpdating: () => void;
  onDownload: () => void;
}

function LambdaExecutor({
  onRunning,
  onUpdating,
  onDownload,
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
      <Button variant="outlined" size="small">
        load
      </Button>
      <Button variant="outlined" size="small" onClick={onDownload}>
        download
      </Button>
      <Typography>
        Last update: <b>{lastRun}</b>
      </Typography>
    </Box>
  );
}

export default LambdaExecutor;
