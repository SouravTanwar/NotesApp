// src/components/CreateTopicModal.js
import React, { useState } from 'react';
import './CreateTopicModal.css';

function CreateTopicModal({ onClose, onAddTopic }) {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ["#FF6A6A", "#6A5ACD", "#FFB6C1", "#4682B4", "#32CD32", "#FFD700"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Topic name cannot be empty');
      return;
    }
    if (selectedColor.trim() === '') {
      alert('Choose a color');
      return;
    }
    onAddTopic(name, selectedColor);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Group Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter topic name"
              required
            />
          </div>
          <div className="form-group">
            <label>Choose Color:</label>
            <div className="color-picker">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{
                    backgroundColor: color,
                    border:
                      selectedColor === color ? "3px solid black" : "none",
                  }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="modal-actions">
            <button type="submit">Add Topic</button>
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTopicModal;
