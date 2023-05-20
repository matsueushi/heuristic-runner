import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  lastRun: string;
  onOpen: () => void;
}

function Header({ lastRun, onOpen }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div">
          Heuristic Runner
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          m={1}
          sx={{ flexGrow: 1 }}
        >
          {"(Last Run: " + lastRun + ")"}
        </Typography>
        <IconButton onClick={onOpen}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
