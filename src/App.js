import React, { useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import AddSmile from "./components/Smiles/AddSmile";
import SmilesList from "./components/Smiles/SmilesList";
import SmileForm from "./components/Smiles/Smile/SmileForm";

function App() {
  const [addSmileModal, setAddSmileModal] = useState(false);

  const showSmileFormHandler = (props) => {
    console.log("ouvert!");
    setAddSmileModal(true);
  };

  const closeSmileFormHandler = (props) => {
    console.log("fermé!");
    setAddSmileModal(false);
  };

  return (
    <>
      {addSmileModal && (
        <Modal onClose={closeSmileFormHandler}>
          <SmileForm />
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
