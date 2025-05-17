import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Click on the button to open the modal</h1>
        <button className="open-modal-button" onClick={openModal}>
          Open General Configuration
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;