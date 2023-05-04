import { Button, Box, FormControlLabel, Switch } from "@mui/material";
// import { api } from "./api";

interface ControllerProps {
  onRunning: () => void;
  onUpdating: () => void;
  onFlipping: () => void;
}

function Controller({ onRunning, onUpdating, onFlipping }: ControllerProps) {
  return (
    <div className="controller" style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Button variant="contained" onClick={onRunning}>
          run
        </Button>
        <Button variant="outlined" onClick={onUpdating}>
          update basescore
        </Button>
        <FormControlLabel
          control={<Switch defaultChecked />}
          onChange={onFlipping}
          label="Flip Diff"
        />
      </Box>
    </div>
  );
}

export default Controller;
