import React, { useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import AddSmile from "./components/Smiles/AddSmile";
import SmilesList from "./components/Smiles/SmilesList";
import SmileForm from "./components/Smiles/Smile/SmileForm";
import SmileDelete from "./components/Smiles/Smile/SmileDelete";

function App() {
  const [addSmileModal, setAddSmileModal] = useState(false);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);

  const showSmileFormHandler = () => {
    setAddSmileModal(true);
  };

  const closeSmileFormHandler = () => {
    setAddSmileModal(false);
  };

  const showDeleteConfirmHandler = () => {
    setDeleteConfirmModal(true);
  };
  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmModal(false);
  };

  return (
    <>
      {addSmileModal && (
        <Modal onClose={closeSmileFormHandler}>
          <SmileForm onClose={closeSmileFormHandler} />
        </Modal>
      )}
      {deleteConfirmModal && (
        <Modal onClose={closeDeleteConfirmHandler}>
          <SmileDelete onClose={closeDeleteConfirmHandler} />
        </Modal>
      )}
      <Header />
      <main>
        <AddSmile onclick={showSmileFormHandler} />
        <SmilesList onDelete={showDeleteConfirmHandler} />
      </main>
    </>
  );
}

export default App;
