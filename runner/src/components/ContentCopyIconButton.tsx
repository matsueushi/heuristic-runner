import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

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
