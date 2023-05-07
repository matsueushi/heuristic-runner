import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { copyToClipboard } from "./utility";

interface ContentCopyIconButtonProps {
  text: string;
}

function ContentCopyIconButton({ text }: ContentCopyIconButtonProps) {
  return (
    <Tooltip title="Copy">
      <IconButton onClick={() => copyToClipboard(text)}>
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default ContentCopyIconButton;
