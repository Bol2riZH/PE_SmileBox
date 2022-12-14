import React, { useState } from 'react';

import Modal from './components/UI/Modal';
import Header from './components/Layout/Header';
import AddSmile from './components/Smiles/AddSmile';
import SmilesList from './components/Smiles/SmilesList';
import SmileForm from './components/Smiles/Smile/SmileForm';
import SmileDelete from './components/Smiles/Smile/SmileDelete';

function App() {
  const [showAddSmileModal, setShowAddSmileModal] = useState(false);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const [smileList, setSmileList] = useState([]);

  /*////////////////////////////////////////////////*/
  /*TODO: CONSIDER REFACTORING THE OPEN/CLOSE MODAL*/
  /* Implement a REDUCER */
  /*////////////////////*/

  const showSmileFormHandler = () => {
    setShowAddSmileModal(true);
  };

  const closeSmileFormHandler = () => {
    setShowAddSmileModal(false);
  };

  const showDeleteConfirmHandler = () => {
    setDeleteConfirmModal(true);
  };
  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmModal(false);
  };

  const addNewSmileHandler = (smileEmoji, smileName, smileDescription) => {
    setSmileList(prevSmileList => {
      return [
        ...prevSmileList,
        {
          id: Math.random().toString(),
          key: Math.random().toString(),
          name: smileName,
          description: smileDescription,
          emoji: smileEmoji,
        },
      ];
    });
    setShowAddSmileModal(false);
  };

  const deleteSmileHandler = id => {
    console.log(id);
    setSmileList(prevSmileList => {
      return prevSmileList.filter(smile => smile.id !== id);
    });
    setDeleteConfirmModal(false);
  };

  return (
    <>
      {showAddSmileModal && (
        <Modal onClose={closeSmileFormHandler}>
          <SmileForm
            onClose={closeSmileFormHandler}
            onAddSmile={addNewSmileHandler}
          />
        </Modal>
      )}
      {deleteConfirmModal && (
        <Modal onClose={closeDeleteConfirmHandler}>
          <SmileDelete
            onClose={closeDeleteConfirmHandler}
            onDeleteSmile={deleteSmileHandler}
          />
        </Modal>
      )}
      <Header />
      <main>
        <AddSmile onAdd={showSmileFormHandler} />
        <SmilesList onDelete={showDeleteConfirmHandler} onSmiles={smileList} />
      </main>
    </>
  );
}

export default App;
