import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DefaultScreen from "./components/DefaultScreen";
import AddProject from "./components/AddProject";

function App() {
  const [projectState, setProjectState] = useState({
    setProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectId: undefined,
      };
    });
  }

  let content;

  if (projectState.setProjectId === null) {
    content = <AddProject onCancelProject={handleCancelProject}/>;
  } else if (projectState.setProjectId === undefined) {
    content = <DefaultScreen onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
