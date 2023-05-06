import {
  Button,
  Box,
  FormControlLabel,
  Switch,
  Typography,
  Paper,
} from "@mui/material";

interface ScoreExplorerProps {
  testCaseCount: number;
  score: number;
  baseScore: number;
  onUpdating: () => void;
  onFlipping: () => void;
}

function ScoreExplorer({
  testCaseCount,
  score,
  baseScore,
  onUpdating,
  onFlipping,
}: ScoreExplorerProps) {
  return (
    <Box>
      <Box>
        <Button variant="outlined" size="small" onClick={onUpdating}>
          update basescore
        </Button>
      </Box>
      <Box>
        <FormControlLabel
          control={<Switch defaultChecked />}
          onChange={onFlipping}
          label="Maximize score"
        />
      </Box>
      <Paper>
        <Box p={2}>
          <Typography>
            Test Cases:
            <b> {testCaseCount}</b>
          </Typography>
          <Typography>
            Score:<b> {score}</b>
          </Typography>
          <Typography>
            BaseScore: <b> {baseScore}</b>
          </Typography>
          <Typography>Diff: ???</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ScoreExplorer;
