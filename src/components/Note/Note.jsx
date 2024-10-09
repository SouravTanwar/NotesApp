import React from 'react';
import './Note.css';

function Note({ note }) {

  const createdDate = typeof note.createdAt === 'string' ? new Date(note.createdAt) : note.createdAt;

  const formattedDate = createdDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = createdDate.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).replace("am", "AM").replace("pm", "PM");

  return (
    <div className="note">
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">{formattedDate} </span>
        <span className="dot"></span>
        <span className="note-time"> {formattedTime}</span>
      </div>
    </div>
  );
}

export default Note;
