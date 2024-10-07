import React from 'react';
import './Sidebar.css';

function Sidebar({ topics, selectedTopicId, onSelectTopic, onAddTopic }) {
  
  const getInitials = (name) => {
    const words = name.split(' ');
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
};


  return (
    <div className="sidebar">
      <h2 className='heading'>Pocket Notes</h2>
      <div className="topics-list custom-scrollbar">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`topic-item ${topic.id === selectedTopicId ? 'active' : ''}`}
            onClick={() => onSelectTopic(topic.id)}
          >
            <div
              className="topic-initials"
              style={{ backgroundColor: topic.color }}
            >
              {getInitials(topic.name)}
            </div>
            <span className="topic-name">{topic.name}</span>
          </div>
        ))}
      </div>
      <button className="add-topic-button" onClick={onAddTopic}>
        +
      </button>
    </div>
  );
}

export default Sidebar;
