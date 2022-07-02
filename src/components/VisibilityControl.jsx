import React from "react";

const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete it?')) {
      cleanTasks()
    }
  };

  return (
    <div className="d-flex justify-content-between text-center bg-secondary text-white p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Show Tasks Done</label>
      </div>
      <button
      className="btn btn-danger btn-sm"
        onClick={handleDelete}
      >
        Clear
      </button>
    </div>
  );
};

export default VisibilityControl;
