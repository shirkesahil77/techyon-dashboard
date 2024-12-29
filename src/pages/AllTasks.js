import React, { useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Button from "../components/Button";
import allTasks from "../data/allTasks.json";
import "../styles/AllTasks.scss";

const AllTasks = () => {
  const [view, setView] = useState("grid");
  const tasksToShow = allTasks.slice(0, 12);

  const handleGridClick = () => setView("grid");
  const handleTableClick = () => setView("table");

  return (
    <div className="all-tasks">
      <div className="header">
        <h2>
          All Tasks <i className="fas fa-caret-down"></i>
        </h2>
        
        <div className="view-toggle">
          <Button
            icon="fas fa-list"
            onClick={handleGridClick}
            active={view === "grid"}
            isViewToggle
            height="40px"
            width="40px"
          />
          <Button
            icon="fas fa-table-cells"
            onClick={handleTableClick}
            active={view === "table"}
            isViewToggle
            height="40px"
            width="40px"
          />
          {view === "table"?(<Button
            icon="fas fa-filter"
            isViewToggle
            height="40px"
            width="40px"
            boxShadow="none"
          />): ('')}
          
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
        <div className="task-grid">
          {tasksToShow.map((task) => (
            <Card key={task.id} project={task} />
          ))}
          <div className="view-more">
            <a href="/all-tasks">View More</a>
          </div>
        </div>
      ) : (
        <Table data={tasksToShow} type="tasks" />
      )}
      </div>
      
    </div>
  );
};

export default AllTasks;
