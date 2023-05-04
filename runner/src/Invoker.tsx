import { Button, Box } from "@mui/material";
// import { api } from "./api";

function invoke() {
  // console.log(api.post("test", { n: 1 }));
  console.log("invoked");
}

function Invoker() {
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
      </Box>
    </div>
  );
}

export default Invoker;
