//Metode 1
import { useState } from "react";
import NavbarEvent from "./layout/NavbarEvent";

function AppLoad({ projectSlot, blogSlot, aboutSlot }) {
  const [currentSection, setCurrentSection] = useState("project");

  const renderSection = () => {
    switch (currentSection) {
      case "project":
        return projectSlot;
      case "blog":
        return blogSlot;
      case "about":
        return aboutSlot;
      default:
        return projectSlot;
    }
  };

  return (
    <>
      <NavbarEvent onSectionChange={setCurrentSection} />
      {renderSection()}
    </>
  );
}

export default AppLoad;
