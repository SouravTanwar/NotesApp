import React, { useState } from 'react';
import './Note.css';

function Note({ note }) {

  const formattedDate = note.createdAt.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = note.createdAt.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).replace("am", "AM").replace("pm", "PM");

  return (
    <div className="note">
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">{formattedDate} </span>
        <span>&bull;</span>
        <span className="note-time"> {formattedTime}</span>
      </div>
    </div>
  );
}

export default Note;
