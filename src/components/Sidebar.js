import React from 'react';
import { FaBars, FaHome, FaFolder, FaTh, FaCode, FaSearch, FaChartBar, FaUsers, FaQuestionCircle, FaCommentDots } from 'react-icons/fa';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className={`sidebar closed`}>
      <button className="hamburger">
        <FaBars />
      </button>
      <ul>
        <li><FaHome /></li>
        <li><FaFolder /></li>
        <li><FaTh /></li>
        <li><FaCode /></li>
        <li><FaSearch /></li>
        <li><FaChartBar /></li>
        <li><FaUsers /></li>
        <hr className="separator" />
        <li><FaQuestionCircle /></li>
        <li><FaCommentDots /></li>
      </ul>
    </div>
  );
};

export default Sidebar;