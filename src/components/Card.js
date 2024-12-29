import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faCalendarAlt, faFile } from '@fortawesome/free-regular-svg-icons';
import "./Card.scss";

const Card = ({ project }) => {
  const formatTaskCount = (count) => (count < 10 ? `0${count}` : count);
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className={`card ${project.status.toLowerCase().replace(" ", "-")}`}>
      <div className="card-header">
        <p className="project-name">
          <FontAwesomeIcon icon={faFolder} className="folder-icon" />
          {project.name}
        </p>
        <p className="project-id">ID: P-{project.id}</p>
      </div>
      <div className="progress-bar-container">
        <span className="progress-start">{formatTaskCount(project.tasks.completed)}</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${project.progress}%` }}>
            <span className="progress-text">{project.progress}%</span>
          </div>
        </div>
        <span className="progress-end">{formatTaskCount(project.tasks.total)}</span>
      </div>
      <p className="date">
        <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
        {formatDate(project.startDate)} - {formatDate(project.endDate)}
      </p>
      <div className="details">
        <span className="members">
          {[...Array(3)].map((_, index) => (
            <img
              // src={project.memberImage}
              src="../images/profile.jpg"
              alt={`Member ${index + 1}`}
              key={index}
            />
          ))}
          {project.members > 3 && <span className="extra-members">+{project.members - 3}</span>}
        </span>
        <span className="files">
          <FontAwesomeIcon icon={faFile} className="file-icon" />
          {project.files} Files
        </span>
      </div>
    </div>
  );
};

export default Card;
