import { Button } from "@mui/material";
import { api } from "./api";

function invoke() {
  console.log(api.post("test", { n: 1 }));
}

function Invoker() {
  return (
    <div className="axios">
      <Button variant="outlined" onClick={() => invoke()}>
        invoke
      </Button>
    </div>
  );
}

export default Invoker;
