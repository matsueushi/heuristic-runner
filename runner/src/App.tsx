import { useState } from "react";

import SettingsDialog from "./components/SettingsDialog";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

function App() {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [resource, setResource] = useState<string>("");
  const [testMode, setTestMode] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  function handleDialogOpen() {
    setDialogOpen(true);
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }

  function handleSettingsUpdate(
    baseUrl: string,
    resource: string,
    testMode: boolean
  ) {
    setBaseUrl(baseUrl);
    setResource(resource);
    setTestMode(testMode);
    setDialogOpen(false);
  }

  return (
    <div className="App">
      <SettingsDialog
        open={dialogOpen}
        baseUrl={baseUrl}
        resource={resource}
        testMode={testMode}
        onClose={handleDialogClose}
        onUpdate={handleSettingsUpdate}
      />
      <Header onOpen={handleDialogOpen} />
      <DashBoard testMode={testMode} baseUrl={baseUrl} resource={resource} />
    </div>
  );
}

export default App;
