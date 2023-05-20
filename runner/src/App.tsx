import { useState } from "react";

import SettingsDialog from "./components/SettingsDialog";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";

function App() {
  const [testMode, setTestMode] = useState<boolean>(false);
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [resource, setResource] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  function handleDialogOpen() {
    setDialogOpen(true);
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }

  function handleSettingsUpdate(
    testMode: boolean,
    baseUrl: string,
    resource: string
  ) {
    setTestMode(testMode);
    setBaseUrl(baseUrl);
    setResource(resource);
    setDialogOpen(false);
  }

  return (
    <div className="App">
      <SettingsDialog
        open={dialogOpen}
        testMode={testMode}
        baseUrl={baseUrl}
        resource={resource}
        onClose={handleDialogClose}
        onUpdate={handleSettingsUpdate}
      />
      <Header onOpen={handleDialogOpen} />
      <DashBoard testMode={testMode} baseUrl={baseUrl} resource={resource} />
    </div>
  );
}

export default App;
