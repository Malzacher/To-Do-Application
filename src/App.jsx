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

  function handleAddProject({ title, description, dueDate }) {
    setProjectState((prevState) => {
      const newProject = {
        title,
        description,
        dueDate,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
    console.log(projectState);
  }

  let content;

  if (projectState.setProjectId === null) {
    content = (
      <AddProject
        onAddProject={handleAddProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectState.setProjectId === undefined) {
    content = <DefaultScreen onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projectData={projectState} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
