import React from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Layout/Header";
import AddSmile from "./components/Smiles/AddSmile";
import SmilesList from "./components/Smiles/SmilesList";
import SmileForm from "./components/Smiles/Smile/SmileForm";

function App() {
  return (
    <>
      <Modal>
        <SmileForm />
      </Modal>
      <Header />
      <AddSmile />
      <main>
        <SmilesList />
      </main>
    </>
  );
}

export default App;
