import React from 'react';
import './Sidebar.css';

function Sidebar({ topics, selectedTopicId, onSelectTopic, onAddTopic, show }) {
  

  return (
    <div className={`sidebar ${show}`}>
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
              {topic.initials}
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
