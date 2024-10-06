// src/components/NotesPanel.js
import React, { useState } from 'react';
import Note from './Note';
import './NotesPanel.css';

function NotesPanel({ topic, onAddNote }) {
  const [newNoteContent, setNewNoteContent] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNoteContent.trim() === '') {
      alert('Note content cannot be empty');
      return;
    }
    onAddNote(topic.id, newNoteContent);
    setNewNoteContent('');
  };

  if (!topic) {
    return (
      <div className="notes-panel">
        <div className='default'>
          <img src="../assets/background.png" alt="img"/>
          <h2>Pocket Notes</h2>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-panel">
      <div className="notes-header">
        <h2>{topic.name} Notes</h2>
      </div>
      <div className="notes-list">
        {topic.notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <form className="add-note-form" onSubmit={handleAddNote}>
        <textarea
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          placeholder="Write your note here..."
          required
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default NotesPanel;
