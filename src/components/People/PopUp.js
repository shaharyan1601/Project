import React from "react";
import ReactDOM from "react-dom";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <button className="popup-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Popup;