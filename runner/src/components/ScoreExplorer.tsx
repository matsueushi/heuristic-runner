import {
  Button,
  Box,
  FormControlLabel,
  Switch,
  Typography,
  Paper,
} from "@mui/material";

interface ScoreExplorerProps {
  onUpdating: () => void;
  onFlipping: () => void;
}

function ScoreExplorer({ onUpdating, onFlipping }: ScoreExplorerProps) {
  return (
    <Box>
      <Button variant="outlined" size="small" onClick={onUpdating}>
        update basescore
      </Button>
      <FormControlLabel
        control={<Switch defaultChecked />}
        onChange={onFlipping}
        label="Maximize score"
        labelPlacement="start"
      />

      <Paper>
        <Box p={2}>
          <Typography>aaa</Typography>
          <Typography>aaa</Typography>
          <Typography>aaa</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ScoreExplorer;
