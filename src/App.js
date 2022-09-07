import React, { useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import AddSmile from "./components/Smiles/AddSmile";
import SmilesList from "./components/Smiles/SmilesList";
import SmileForm from "./components/Smiles/Smile/SmileForm";

function App() {
  const [addSmileModal, setAddSmileModal] = useState(false);

  const showSmileFormHandler = () => {
    setAddSmileModal(true);
  };

  const closeSmileFormHandler = () => {
    setAddSmileModal(false);
  };

  return (
    <>
      {addSmileModal && (
        <Modal onClose={closeSmileFormHandler}>
          <SmileForm onClose={closeSmileFormHandler} />
        </Modal>
      )}
      <Header />
      <main>
        <AddSmile onclick={showSmileFormHandler} />
        <SmilesList />
      </main>
    </>
  );
}

export default App;
