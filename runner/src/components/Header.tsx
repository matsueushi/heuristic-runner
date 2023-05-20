import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  onOpen: () => void;
}

function Header({ onOpen }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Heuristic Runner
        </Typography>
        <IconButton onClick={onOpen}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
