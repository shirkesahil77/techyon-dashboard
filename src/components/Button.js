import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome CSS is imported
import '../styles/Button.scss';

const Button = ({ icon, label, onClick, active, height = "40px", width = "110px", boxShadow }) => {
  return (
    <button 
      className={`custom-button ${active ? 'active' : ''}`} 
      onClick={onClick} 
      style={{ 
        height, 
        width, 
        backgroundColor: active ? '' : 'white', 
        color: active ? '' : 'gray',
        boxShadow: boxShadow || "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      {icon && <i className={`${icon}`} style={{ fontSize: "1.5em" }}></i>}
      {label && <span>{label}</span>}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  boxShadow: PropTypes.string,
};

Button.defaultProps = {
  active: false,
  height: "40px",
  width: "40px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Button;
