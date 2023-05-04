import { Button, Box, FormControlLabel, Switch } from "@mui/material";
// import { api } from "./api";

function invoke() {
  // console.log(api.post("test", { n: 1 }));
  console.log("invoked");
}

function update() {
  console.log("update");
}

function Controllers() {
  return (
    <div className="lambda" style={{ width: "100%" }}>
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
        <Button variant="outlined" onClick={() => invoke()}>
          run
        </Button>
        <Button variant="outlined" onClick={() => update()}>
          update
        </Button>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Flip Score diff"
        />
      </Box>
    </div>
  );
}

export default Controllers;
