import { Button, Box, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface LambdaExecutorProps {
  onRunning: () => void;
  onLoading: () => void;
  onFileChanging: (e: ChangeEvent<HTMLInputElement>) => void;
  onDownloading: () => void;
}

function LambdaExecutor({
  onRunning,
  onLoading,
  onFileChanging,
  onDownloading,
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
      <Typography>
        Last update: <b>{lastRun}</b>
      </Typography>
      <input type="file" id="input" onChange={onFileChanging} />
      <Button variant="outlined" size="small" onClick={onLoading}>
        load
      </Button>
      <Button variant="outlined" size="small" onClick={onDownloading}>
        download
      </Button>
    </Box>
  );
}

export default LambdaExecutor;
