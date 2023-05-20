import { useState } from "react";

import {
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  TextField,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";

interface SettingsDialogProps {
  open: boolean;
  baseUrl: string;
  resource: string;
  testMode: boolean;
  onClose: () => void;
  onUpdate: (testMode: boolean, baseUrl: string, resouce: string) => void;
}

function SettingsDialog({
  open,
  testMode,
  baseUrl,
  resource,
  onClose,
  onUpdate,
}: SettingsDialogProps) {
  const [newTestMode, setNewTestMode] = useState<boolean>(testMode);
  const [newBaseUrl, setNewBaseUrl] = useState<string>(baseUrl);
  const [newResource, setNewResource] = useState<string>(resource);

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={newTestMode}
                onChange={(event) => setNewTestMode(event.target.checked)}
              />
            }
            label="Test Mode"
          />
          <TextField
            autoFocus
            margin="dense"
            id="base"
            label="Base URL"
            fullWidth
            variant="standard"
            defaultValue={baseUrl}
            onChange={(event) => setNewBaseUrl(event.target.value)}
            disabled={newTestMode}
          />
          <TextField
            margin="dense"
            id="resource"
            label="Resource"
            fullWidth
            variant="standard"
            defaultValue={resource}
            onChange={(event) => setNewResource(event.target.value)}
            disabled={newTestMode}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => onUpdate(newTestMode, newBaseUrl, newResource)}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SettingsDialog;
