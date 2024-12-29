import React, { useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Button from "../components/Button";
import allProjects from "../data/allProjects.json";
import "../styles/AllProjects.scss";

const AllProjects = () => {
  const [view, setView] = useState("grid");
  const projectsToShow = allProjects.slice(0, 12);

  const handleGridClick = () => setView("grid");
  const handleTableClick = () => setView("table");

  return (
    <div className="all-projects">
      <div className="header">
        <h2>
          All Projects <i className="fas fa-caret-down"></i>
        </h2>
        <div className="view-toggle">
          <Button
            icon="fas fa-list"
            onClick={handleGridClick}
            active={view === "grid"}
            isViewToggle
            height="40px"
            width="40px"
            style={{ background: "none" }}
          />
          <Button
            icon="fas fa-table-cells"
            onClick={handleTableClick}
            active={view === "table"}
            isViewToggle
            height="40px"
            width="40px"
            style={{ background: "none" }}
          />
          {view === "table" ? (
            <Button
              icon="fas fa-filter"
              isViewToggle
              height="40px"
              width="40px"
              boxShadow="none"
            />
          ) : (
            ""
          )}
          <Button
            icon="fas fa-ellipsis-v"
            isViewToggle
            height="40px"
            width="40px"
            boxShadow="none"
          />
        </div>
      </div>
      <div className="shadow"> 
      {view === "grid" ? (
        <div className="project-grid">
          {projectsToShow.map((project) => (
            <Card key={project.id} project={project} />
          ))}
          <div className="view-more">
            <a href="/all-projects">View More</a>
          </div>
        </div>
      ) : (
        <Table data={projectsToShow} type="projects" />
      )}
      </div>
      
    </div>
  );
};

export default AllProjects;
