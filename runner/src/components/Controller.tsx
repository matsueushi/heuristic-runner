import { Button, Box, FormControlLabel, Switch } from "@mui/material";
// import { api } from "./api";

function handleRunClick() {
  // console.log(api.post("test", { n: 1 }));
  console.log("run");
}

function handleUpdateClick() {
  console.log("update");
}

function handleFlipChange() {
  console.log("flip");
}

function Controller() {
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
        <Button variant="contained" onClick={() => handleRunClick()}>
          run
        </Button>
        <Button variant="outlined" onClick={() => handleUpdateClick()}>
          update basescore
        </Button>
        <FormControlLabel
          control={<Switch defaultChecked />}
          onChange={handleFlipChange}
          label="Flip Diff"
        />
      </Box>
    </div>
  );
}

export default Controller;
