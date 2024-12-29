import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProjectOverview from "./pages/ProjectOverview";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content">
          <div className="content-scroll">
            <ProjectOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
