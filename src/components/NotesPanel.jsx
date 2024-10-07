import React, { useState } from 'react';
import Note from './Note';
import './NotesPanel.css';
import backgroundImg from '../assets/background.png';

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
          <img src={backgroundImg} alt="Background Image" />
          <h2 className='default-heading'>Pocket Notes</h2>
          <p className='default-content'>Send and receive messages without keeping your phone online.</p>
          <p className='default-content'>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className='footer'> 
        <span class="material-symbols-outlined">lock</span>
        <span>end to end encrypted</span>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-panel">
      <div className="notes-header">
        <h2>{topic.name}</h2>
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault(); 
              handleAddNote(e); 
            }
          }}
          placeholder="Enter your text here..."
          required
        ></textarea>
        <span 
          type="submit"
          style={{color: newNoteContent ? "#001F8B" : "#ABABAB"}}
          className="material-symbols-outlined submit"
        >
          send
        </span>
      </form>
    </div>
  );
}

export default NotesPanel;
