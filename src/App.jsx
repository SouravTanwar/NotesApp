import { useState, useEffect } from 'react'
import { Sidebar, NotesPanel, CreateTopicModal } from './components';
import './App.css'

function App() {
  const [topics, setTopics] = useState([]);

  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotesPanel, setShowNotesPanel] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false); 

  useEffect(() => {
    const storedTopics = localStorage.getItem('notesAppTopics');
    if (storedTopics) {
      setTopics(JSON.parse(storedTopics));
    }
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem('notesAppTopics', JSON.stringify(topics));
    }
  }, [topics, isDataLoaded]);

  
  const addTopic = (initials, name, color) => {
    const newTopic = {
      id: Date.now(),
      name,
      color,
      initials,
      notes: [],
    };
    setTopics([...topics, newTopic]);
  };

  const selectTopic = (id) => {
    setSelectedTopicId(id);
    setShowNotesPanel(true)
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addNote = (topicId, content) => {
    const newNote = {
      id: Date.now(),
      content,
      createdAt: new Date(),
    };
    setTopics(
      topics.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              notes: [...topic.notes, newNote],
            }
          : topic
      )
    );
  };

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);

  return (
    <main className="app-container">
      <Sidebar
        topics={topics}
        selectedTopicId={selectedTopicId}
        onSelectTopic={selectTopic}
        onAddTopic={toggleModal}
        show={showNotesPanel ? "hide" : "show"}
      />
      <NotesPanel
        topic={selectedTopic}
        onAddNote={addNote}
        show={showNotesPanel ? "show" : "hide"}
        onBack={()=>setShowNotesPanel(false)}
      />
      {isModalOpen && (
        <CreateTopicModal
          onClose={toggleModal}
          onAddTopic={addTopic}
        />
      )}
    </main>
  );
}

export default App
