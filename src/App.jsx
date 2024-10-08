import { useState } from 'react'
import CreateTopicModal from './components/CreateTopicModal';
import NotesPanel from './components/NotesPanel';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: 'Work',
      color: '#FF6347',
      initials: 'W',
      notes: [
        { id: 1, content: 'Discuss project timelines...', createdAt: new Date() },
        { id: 2, content: 'Finish report and call client...', createdAt: new Date() },
      ],
    },
    {
      id: 2,
      name: 'Personal',
      color: '#87CEEB',
      initials: 'P',
      notes: [
        { id: 3, content: 'Buy eggs, milk, and bread...', createdAt: new Date() },
      ],
    },
  ]);

  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="app-container">
      <Sidebar
        topics={topics}
        selectedTopicId={selectedTopicId}
        onSelectTopic={selectTopic}
        onAddTopic={toggleModal}
      />
      <NotesPanel
        topic={selectedTopic}
        onAddNote={addNote}
      />
      {isModalOpen && (
        <CreateTopicModal
          onClose={toggleModal}
          onAddTopic={addTopic}
        />
      )}
    </div>
  );
}

export default App
