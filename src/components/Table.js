import React from 'react';
import './Table.scss';

const Table = ({ data, type }) => {
  const formatTaskCount = (count) => count < 10 ? `0${count}` : count;

  const getStatusStyle = (status) => {
    const statusStyles = {
      'Not Started': { backgroundColor: '#808080', color: 'white' }, // Updated key
      'In Progress': { backgroundColor: '#4A90E2', color: 'white', color: 'white' }, // Updated key
      Completed: { backgroundColor: '#4CAF50', color: 'white' },
      Archived: { backgroundColor: 'darkgray', color: 'white' },
      "In Review": { backgroundColor: '#3B78A3', color: 'white' },
      "On Track": { backgroundColor: '#CAC000', color: 'white' },
      Delayed: { backgroundColor: '#F42E2E', color: 'white' },
      "In Revision": { backgroundColor: '#3E4B4F', color: 'white' },
    };
    return statusStyles[status] || {};
  };

  const renderTableHeader = () => {
    if (type === 'projects') {
      return (
        <tr>
          <th>ID</th>
          <th>Project Name <i className="fas fa-file"></i></th>
          <th>%</th>
          <th>Owner <i className="fas fa-user"></i></th>
          <th>Tasks <i className="fas fa-tasks"></i></th>
          <th>Status <i className="fas fa-info-circle"></i></th>
          <th>Start Date <i className="fas fa-calendar-alt"></i></th>
          <th>End Date <i className="fas fa-calendar-alt"></i></th>
        </tr>
      );
    } else if (type === 'tasks') {
      return (
        <tr>
          <th>ID</th>
          <th>Task Name <i className="fas fa-bell"></i></th>
          <th>Associated Team</th>
          <th>Owner <i className="fas fa-user"></i></th>
          <th>Tasks <i className="fas fa-tasks"></i></th>
          <th>Status <i className="fas fa-info-circle"></i></th>
          <th>Start Date <i className="fas fa-calendar-alt"></i></th>
          <th>End Date <i className="fas fa-calendar-alt"></i></th>
        </tr>
      );
    }
  };

  return (
    <table className="task-table">
      <thead>
        {renderTableHeader()}
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.progress}%</td>
            <td>
              <div className="owner">
                <img src={item.ownerImage} alt="Owner" />
                <span>Techyon</span>
              </div>
            </td>
            <td>
              <div className="progress-bar-container">
                <span className="progress-start">{formatTaskCount(item.tasks.completed)}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${item.progress}%` }}>
                    <span className="progress-text">{item.progress}%</span>
                  </div>
                </div>
                <span className="progress-end">{formatTaskCount(item.tasks.total)}</span>
              </div>
            </td>
            <td className="status-cell" style={getStatusStyle(item.status)}>
              <span className="status">
                {item.status}
              </span>
            </td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;