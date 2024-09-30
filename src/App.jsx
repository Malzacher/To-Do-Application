import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [currentScreen, setCurrentScreen] = useState("default");
  const [currentProjects, setCurrentProjects] = useState([]);

  const handleAddProject = () => {
    setCurrentScreen("addProject");
  };

  const handleCancelProject = () => {
    setCurrentScreen("defaultScreen")
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} currentProjects={currentProjects} />
      <Main currentScreen={currentScreen} handleCancelProject={handleCancelProject}/>
    </main>
  );
}

export default App;