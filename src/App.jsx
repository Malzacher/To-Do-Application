import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DefaultScreen from "./components/DefaultScreen";
import AddProject from "./components/AddProject";
import ProjectScreen from "./components/ProjectScreen";

let idVal = 0;

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
        id: idVal,
        title,
        description,
        dueDate,
        tasks: [],
      };
      idVal++;
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleProjectClick(projectID) {
    // You can add more functionality here later as needed
    setProjectState((prevState) => ({
      ...prevState,
      setProjectId: projectID,
    }));
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
  } else {
    const selectedProject = projectState.projects.find(
      (project) => project.id === projectState.setProjectId
    );
    content = (
      <ProjectScreen
        project={selectedProject}
        onRemoveProject={manageRemoveProject}
        onAddTask={manageAddTask}
      />
    );
  }

  function manageRemoveProject(project) {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((task) => task.id != project.id),
    }));
    projectState.setProjectId = undefined;
  }

  function manageAddTask(taskName) {
    setProjectState((prevState) => {
      const updatedState = {
        ...prevState,
        tasks: prevState.tasks ? [...prevState.tasks, taskName] : [taskName],
      };
      console.log("Updated tasks array:", updatedState.tasks); // Log the updated tasks array
      return updatedState;
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onProjectClick={handleProjectClick}
        projectData={projectState}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
