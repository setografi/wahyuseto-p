import { useState } from "react";
import NavbarEvent from "../components/NavbarEvent";

function AppLoad({ projectSlot, skillSlot, aboutSlot }) {
  const [currentSection, setCurrentSection] = useState("project");

  const renderSection = () => {
    switch (currentSection) {
      case "project":
        return projectSlot;
      case "skill":
        return skillSlot;
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
