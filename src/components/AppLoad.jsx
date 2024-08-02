//Metode 1
import { useState } from "react";
import NavbarEvent from "./NavbarEvent";

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

//Metode 2
// import React, { useState } from "react";
// import NavbarEvent from "./NavbarEvent";

// function AppLoad({ children }) {
//   const [currentSection, setCurrentSection] = useState("project");

//   const renderSection = () => {
//     const childrenArray = React.Children.toArray(children);

//     return childrenArray.map((child) => {
//       const isVisible = child.props.slot === `${currentSection}Slot`;
//       return (
//         <div key={child.props.slot} className={isVisible ? "block" : "hidden"}>
//           {child}
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       <NavbarEvent onSectionChange={setCurrentSection} />
//       {renderSection()}
//     </>
//   );
// }

// export default AppLoad;

//Metode 3
// import React, { useState, useEffect } from "react";
// import NavbarEvent from "./NavbarEvent";

// function AppLoad({ children }) {
//   const [currentSection, setCurrentSection] = useState("project");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null; // or a loading indicator
//   }

//   return (
//     <>
//       <NavbarEvent onSectionChange={setCurrentSection} />
//       {React.Children.map(children, (child) => {
//         const isVisible = child.props.slot === `${currentSection}Slot`;
//         return (
//           <div style={{ display: isVisible ? "block" : "none" }}>{child}</div>
//         );
//       })}
//     </>
//   );
// }

// export default AppLoad;
