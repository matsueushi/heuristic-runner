import { Button, Box, FormControlLabel, Switch } from "@mui/material";

interface ScoreExplorerProps {
  onUpdating: () => void;
  onFlipping: () => void;
}

function ScoreExplorer({ onUpdating, onFlipping }: ScoreExplorerProps) {
  return (
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
  );
}

export default ScoreExplorer;
