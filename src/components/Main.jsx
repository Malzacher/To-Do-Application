import React from "react";
import DefaultScreen from "./DefaultScreen";
import AddProject from "./AddProject";

export default function Main({ currentScreen }) {
  function renderScreen() {
    if (currentScreen === "default") {
      return <DefaultScreen />;
    } else if (currentScreen === "addProject") {
      return <AddProject />;
    } else {
      return <DefaultScreen />;
    }
  }

  return (
    <div className="mt-24 text-center w-2/3">
      {renderScreen()}
    </div>
  );
}