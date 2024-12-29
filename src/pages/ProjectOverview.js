import React, { useState } from "react";
import AllTasks from "./AllTasks";
import AllProjects from "./AllProjects";
import Button from "../components/Button";
import "../styles/ProjectOverview.scss";

const ProjectOverview = () => {
  const [view, setView] = useState("projects");

  return (
    <div className="project-overview">
      <div className="header">
        <h1>Project</h1>
        <Button icon="fas fa-plus" active={'active'} label="Projects" onClick={() => {}} />
      </div>
      <div className="projects-section">
        <AllProjects />
      </div>
      <div className="tasks-section">
        <AllTasks />
      </div>
    </div>
  );
};

export default ProjectOverview;
