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
  onUpdate: (baseUrl: string, resouce: string, testMode: boolean) => void;
}

function SettingsDialog({
  open,
  baseUrl,
  resource,
  testMode,
  onClose,
  onUpdate,
}: SettingsDialogProps) {
  const [newBaseUrl, setNewBaseUrl] = useState<string>(baseUrl);
  const [newResource, setNewResource] = useState<string>(resource);
  const [newTestMode, setNewTestMode] = useState<boolean>(testMode);

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="base"
            label="Base URL"
            fullWidth
            variant="standard"
            defaultValue={baseUrl}
            onChange={(event) => setNewBaseUrl(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="resource"
            label="Resource"
            fullWidth
            variant="standard"
            defaultValue={resource}
            onChange={(event) => setNewResource(event.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={newTestMode}
                onChange={(event) => setNewTestMode(event.target.checked)}
              />
            }
            label="Test Mode"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => onUpdate(newBaseUrl, newResource, newTestMode)}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SettingsDialog;
